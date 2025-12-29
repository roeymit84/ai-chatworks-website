'use client';

import { useState, useEffect, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Chart from 'chart.js/auto';
import './styles.css';

export default function AdminDashboard() {
  const supabase = createClientComponentClient();
  
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('overview');
  const [theme, setTheme] = useState('light');
  const [allMarketplaceData, setAllMarketplaceData] = useState([]);
  const [filteredMarketplaceData, setFilteredMarketplaceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [growthChart, setGrowthChart] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [categories, setCategories] = useState([]);
  
  // Session timeout management
  const sessionTimeoutRef = useRef(null);
  const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 minutes in milliseconds
  
  // Modal states
  const [showCreatePromptModal, setShowCreatePromptModal] = useState(false);
  const [showEditPromptModal, setShowEditPromptModal] = useState(false);
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [alertConfig, setAlertConfig] = useState({ title: '', message: '' });
  
  // Form states
  const [createForm, setCreateForm] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
    tier: 'starter',
    is_active: true
  });
  
  const [editForm, setEditForm] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
    tier: 'starter',
    is_active: true
  });
  
  const [newCategoryName, setNewCategoryName] = useState('');
  const [bulkUploadStatus, setBulkUploadStatus] = useState('');
  const [selectedPrompts, setSelectedPrompts] = useState(new Set());
  
  const ITEMS_PER_PAGE = 25;

  // Session timeout functions
  const startSessionTimeout = () => {
    clearSessionTimeout();
    sessionTimeoutRef.current = setTimeout(() => {
      handleSessionTimeout();
    }, SESSION_TIMEOUT);
  };

  const clearSessionTimeout = () => {
    if (sessionTimeoutRef.current) {
      clearTimeout(sessionTimeoutRef.current);
      sessionTimeoutRef.current = null;
    }
  };

  const resetSessionTimeout = () => {
    if (currentUser) {
      startSessionTimeout();
    }
  };

  const handleSessionTimeout = async () => {
    showAlert('Session Expired', 'Your session has expired due to inactivity. Please log in again.');
    await handleLogout();
  };

  // Activity listeners to reset timeout
  useEffect(() => {
    if (!currentUser) return;

    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
    
    const resetTimeout = () => resetSessionTimeout();
    
    events.forEach(event => {
      document.addEventListener(event, resetTimeout);
    });

    // Start initial timeout
    startSessionTimeout();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimeout);
      });
      clearSessionTimeout();
    };
  }, [currentUser]);

  // Check auth on mount - FORCE LOGIN
  useEffect(() => {
    checkAuth();
    
    // Load theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Set first category as default when categories load
  useEffect(() => {
    if (categories.length > 0 && !createForm.category) {
      setCreateForm(prev => ({ ...prev, category: categories[0].name }));
    }
  }, [categories]);

  async function checkAuth() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('role, email')
          .eq('id', user.id)
          .single();
          
        if (profile?.role === 'admin') {
          setCurrentUser({ ...user, email: profile.email });
          setIsLoading(false);
          loadDashboardData();
          return;
        }
      }
      
      // Force show login screen
      setCurrentUser(null);
      setIsLoading(false);
    } catch (error) {
      console.error('Auth check error:', error);
      setCurrentUser(null);
      setIsLoading(false);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError('');
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();
        
      if (profile?.role !== 'admin') {
        await supabase.auth.signOut();
        throw new Error('Access denied: Admin role required');
      }
      
      setCurrentUser(data.user);
      loadDashboardData();
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.message || 'Invalid credentials');
    }
  }

  async function handleLogout() {
    clearSessionTimeout();
    await supabase.auth.signOut();
    setCurrentUser(null);
  }

  function switchView(view) {
    setCurrentView(view);
    if (view === 'marketplace') {
      loadMarketplaceData();
    }
  }

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  function showAlert(title, message) {
    setAlertConfig({ title, message });
    setShowAlertModal(true);
  }

  // ============================================
  // DATA LOADING
  // ============================================

  async function loadDashboardData() {
    try {
      const [
        { data: totalUsers },
        { data: totalPrompts },
        { data: totalFolders },
        { data: encrypted },
        { data: weeklySignups },
        { data: monthlySignups },
        { data: proUsers },
        { data: freeUsers }
      ] = await Promise.all([
        supabase.rpc('get_total_users'),
        supabase.rpc('get_total_prompts'),
        supabase.rpc('get_total_folders'),
        supabase.rpc('get_encrypted_items_count'),
        supabase.rpc('get_weekly_signups'),
        supabase.rpc('get_monthly_signups'),
        supabase.rpc('get_pro_users_count'),
        supabase.rpc('get_free_users_count')
      ]);
      
      animateValue('statUsers', totalUsers || 0);
      animateValue('statPrompts', totalPrompts || 0);
      animateValue('statFolders', totalFolders || 0);
      animateValue('statEncrypted', encrypted || 0);
      animateValue('statWeeklySignups', weeklySignups || 0);
      animateValue('statMonthlySignups', monthlySignups || 0);
      animateValue('statProUsers', proUsers || 0);
      animateValue('statFreeUsers', freeUsers || 0);
      
      await loadMarketplaceStats();
      await initChart();
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  }

  async function loadMarketplaceStats() {
    try {
      const { data: prompts } = await supabase
        .from('marketplace_prompts')
        .select('tier, downloads_count, title, category, is_active');
        
      if (!prompts) return;
      
      const total = prompts.length;
      const pro = prompts.filter(p => p.tier === 'pro').length;
      const starter = prompts.filter(p => p.tier === 'starter').length;
      const inactive = prompts.filter(p => !p.is_active).length;
      
      const mpTotal = document.getElementById('mpTotalPrompts');
      const mpPro = document.getElementById('mpProPrompts');
      const mpStarter = document.getElementById('mpStarterPrompts');
      const mpInactive = document.getElementById('mpInactivePrompts');
      const badge = document.getElementById('marketplaceBadge');
      
      if (mpTotal) mpTotal.textContent = total;
      if (mpPro) mpPro.textContent = pro;
      if (mpStarter) mpStarter.textContent = starter;
      if (mpInactive) mpInactive.textContent = inactive;
      if (badge) badge.textContent = total;
      
      const topPrompts = prompts
        .sort((a, b) => (b.downloads_count || 0) - (a.downloads_count || 0))
        .slice(0, 5);
        
      const tbody = document.getElementById('topPromptsTable');
      if (tbody && topPrompts.length > 0) {
        tbody.innerHTML = topPrompts.map(p => `
          <tr>
            <td>
              <div class="table-prompt">
                <div>
                  <div class="table-name">${p.title || 'Untitled'}</div>
                </div>
              </div>
            </td>
            <td><span class="badge badge-category">${p.category || 'Uncategorized'}</span></td>
            <td class="text-mono">${(p.downloads_count || 0).toLocaleString()}</td>
            <td><span class="badge badge-${p.tier || 'starter'}">${(p.tier || 'starter').toUpperCase()}</span></td>
          </tr>
        `).join('');
      }
    } catch (error) {
      console.error('Error loading marketplace stats:', error);
    }
  }

  async function initChart() {
    try {
      const { data } = await supabase.rpc('get_user_growth_data');
      
      const ctx = document.getElementById('growthChart')?.getContext('2d');
      if (!ctx) return;
      
      if (growthChart) {
        growthChart.destroy();
      }
      
      const gradient = ctx.createLinearGradient(0, 0, 0, 260);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
      
      const labels = data && data.length > 0 
        ? data.map(row => new Date(row.signup_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
        : ['No data'];
      const chartData = data && data.length > 0 ? data.map(row => row.user_count) : [0];
      
      const newChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data: chartData,
            fill: true,
            backgroundColor: gradient,
            borderColor: '#8b5cf6',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#8b5cf6'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: true, grid: { display: false }, ticks: { color: '#9ca3af', font: { size: 10 } } },
            y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#9ca3af', font: { size: 11 } } }
          }
        }
      });
      
      setGrowthChart(newChart);
    } catch (error) {
      console.error('Error loading chart:', error);
    }
  }

  async function loadMarketplaceData() {
    try {
      const { data, error } = await supabase.rpc('admin_get_marketplace_prompts');
      
      if (error) throw error;
      
      setAllMarketplaceData(data || []);
      setFilteredMarketplaceData(data || []);
      setCurrentPage(1);
      await loadCategories();
    } catch (error) {
      console.error('Error loading marketplace:', error);
    }
  }

  async function loadCategories() {
    try {
      const { data } = await supabase.rpc('get_marketplace_categories');
      setCategories(data || []);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  }

  function applyFilters() {
    const search = document.getElementById('marketplaceSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const tierFilter = document.getElementById('tierFilter')?.value || '';
    
    let filtered = allMarketplaceData.filter(p => {
      const matchSearch = !search || (p.prompt_name || p.title || '').toLowerCase().includes(search);
      const matchCategory = !categoryFilter || p.category === categoryFilter;
      const matchTier = !tierFilter || p.tier === tierFilter;
      return matchSearch && matchCategory && matchTier;
    });
    
    setFilteredMarketplaceData(filtered);
    setCurrentPage(1);
  }

  function animateValue(id, target) {
    const el = document.getElementById(id);
    if (!el) return;
    
    const duration = 1000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ============================================
  // PROMPT MANAGEMENT
  // ============================================

  function openCreatePromptModal() {
    setCreateForm({
      title: '',
      category: categories[0]?.name || '',
      description: '',
      content: '',
      tier: 'starter',
      is_active: true
    });
    setShowCreatePromptModal(true);
  }

  async function handleCreatePrompt(e) {
    e.preventDefault();
    
    try {
      const validTiers = ['starter', 'pro', 'premium'];
      const tier = createForm.tier.toLowerCase();
      
      if (!validTiers.includes(tier)) {
        throw new Error(`Invalid tier value: ${tier}. Must be one of: ${validTiers.join(', ')}`);
      }
      
      const promptData = {
        title: createForm.title.trim(),
        category: createForm.category || 'Uncategorized',
        description: createForm.description?.trim() || '',
        content: createForm.content.trim(),
        tier: tier,
        is_active: Boolean(createForm.is_active),
        user_id: currentUser.id,
        downloads_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('marketplace_prompts')
        .insert(promptData)
        .select();
        
      if (error) throw error;
      
      showAlert('Success', 'Prompt created successfully!');
      setShowCreatePromptModal(false);
      await loadMarketplaceData();
    } catch (error) {
      console.error('Error creating prompt:', error);
      showAlert('Error', 'Failed to create prompt: ' + error.message);
    }
  }

  async function openEditPromptModal(promptId) {
    try {
      const { data } = await supabase
        .from('marketplace_prompts')
        .select('*')
        .eq('id', promptId)
        .single();
        
      if (data) {
        setEditingPrompt(data);
        setEditForm({
          title: data.title || '',
          category: data.category || '',
          description: data.description || '',
          content: data.content || '',
          tier: data.tier || 'starter',
          is_active: data.is_active !== undefined ? data.is_active : true
        });
        setShowEditPromptModal(true);
      }
    } catch (error) {
      console.error('Error loading prompt:', error);
      showAlert('Error', 'Failed to load prompt');
    }
  }

  async function handleUpdatePrompt(e) {
    e.preventDefault();
    
    try {
      const validTiers = ['starter', 'pro', 'premium'];
      const tier = editForm.tier.toLowerCase();
      
      if (!validTiers.includes(tier)) {
        throw new Error(`Invalid tier value: ${tier}. Must be one of: ${validTiers.join(', ')}`);
      }
      
      const updateData = {
        title: editForm.title.trim(),
        category: editForm.category || 'Uncategorized',
        description: editForm.description?.trim() || '',
        content: editForm.content.trim(),
        tier: tier,
        is_active: Boolean(editForm.is_active),
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('marketplace_prompts')
        .update(updateData)
        .eq('id', editingPrompt.id)
        .select();
        
      if (error) throw error;
      
      showAlert('Success', 'Prompt updated successfully!');
      setShowEditPromptModal(false);
      await loadMarketplaceData();
    } catch (error) {
      console.error('Error updating prompt:', error);
      showAlert('Error', 'Failed to update prompt: ' + error.message);
    }
  }

  function confirmDeletePrompt(promptId, promptName) {
    setDeleteTarget({ id: promptId, name: promptName });
    setShowDeleteModal(true);
  }

  async function handleDeletePrompt() {
    try {
      const { error } = await supabase.rpc('admin_delete_marketplace_prompt', { 
        prompt_id: deleteTarget.id 
      });
      
      if (error) throw error;
      
      showAlert('Success', 'Prompt deleted successfully!');
      setShowDeleteModal(false);
      setDeleteTarget(null);
      await loadMarketplaceData();
    } catch (error) {
      console.error('Error deleting prompt:', error);
      showAlert('Error', 'Failed to delete prompt: ' + error.message);
    }
  }

  async function handleBulkDelete() {
    if (selectedPrompts.size === 0) return;
    
    try {
      const deletePromises = Array.from(selectedPrompts).map(id =>
        supabase.rpc('admin_delete_marketplace_prompt', { prompt_id: id })
      );
      
      await Promise.all(deletePromises);
      
      showAlert('Success', `${selectedPrompts.size} prompt(s) deleted successfully!`);
      setSelectedPrompts(new Set());
      await loadMarketplaceData();
    } catch (error) {
      console.error('Error in bulk delete:', error);
      showAlert('Error', 'Failed to delete prompts');
    }
  }

  function togglePromptSelection(promptId) {
    const newSelected = new Set(selectedPrompts);
    if (newSelected.has(promptId)) {
      newSelected.delete(promptId);
    } else {
      newSelected.add(promptId);
    }
    setSelectedPrompts(newSelected);
  }

  function toggleSelectAll() {
    if (selectedPrompts.size === filteredMarketplaceData.length) {
      setSelectedPrompts(new Set());
    } else {
      setSelectedPrompts(new Set(filteredMarketplaceData.map(p => p.prompt_id || p.id)));
    }
  }

  // ============================================
  // CATEGORY MANAGEMENT
  // ============================================

  async function handleAddCategory() {
    if (!newCategoryName.trim()) {
      showAlert('Error', 'Please enter a category name');
      return;
    }
    
    try {
      const { error } = await supabase.rpc('add_marketplace_category', {
        category_name: newCategoryName.trim()
      });
      
      if (error) throw error;
      
      showAlert('Success', `Category "${newCategoryName}" added successfully!`);
      setNewCategoryName('');
      await loadCategories();
    } catch (error) {
      console.error('Error adding category:', error);
      showAlert('Error', error.message.includes('duplicate') 
        ? 'Category already exists' 
        : 'Failed to add category: ' + error.message
      );
    }
  }

  async function handleDeleteCategory(categoryName) {
    if (!confirm(`Delete category "${categoryName}"? Prompts will be moved to "Uncategorized".`)) {
      return;
    }
    
    try {
      const { error } = await supabase.rpc('delete_marketplace_category', {
        category_name: categoryName,
        move_to_category: 'Uncategorized'
      });
      
      if (error) throw error;
      
      showAlert('Success', 'Category deleted successfully!');
      await loadCategories();
      await loadMarketplaceData();
    } catch (error) {
      console.error('Error deleting category:', error);
      showAlert('Error', 'Failed to delete category: ' + error.message);
    }
  }

  // ============================================
  // BULK UPLOAD
  // ============================================

  async function handleBulkUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setBulkUploadStatus('Reading file...');
    
    try {
      const text = await file.text();
      const prompts = JSON.parse(text);
      
      if (!Array.isArray(prompts)) {
        throw new Error('JSON file must contain an array of prompts');
      }
      
      setBulkUploadStatus(`Uploading ${prompts.length} prompts...`);
      
      let successCount = 0;
      let errorCount = 0;
      const validTiers = ['starter', 'pro', 'premium'];
      
      for (const prompt of prompts) {
        try {
          if (!prompt.title || !prompt.content) {
            console.warn('Skipping prompt: missing title or content', prompt);
            errorCount++;
            continue;
          }
          
          const tier = (prompt.tier || 'starter').toLowerCase();
          if (!validTiers.includes(tier)) {
            console.warn(`Skipping prompt "${prompt.title}": invalid tier "${tier}"`, prompt);
            errorCount++;
            continue;
          }
          
          const promptData = {
            title: prompt.title.trim(),
            category: prompt.category || 'Uncategorized',
            description: prompt.description?.trim() || '',
            content: prompt.content.trim(),
            tier: tier,
            is_active: prompt.is_active !== undefined ? Boolean(prompt.is_active) : true,
            downloads_count: 0,
            tags: prompt.tags || [],
            user_id: currentUser.id,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          
          const { error } = await supabase
            .from('marketplace_prompts')
            .insert(promptData);
            
          if (error) {
            console.error(`Error inserting prompt "${prompt.title}":`, error);
            throw error;
          }
          successCount++;
        } catch (error) {
          console.error('Error inserting prompt:', error);
          errorCount++;
        }
      }
      
      setBulkUploadStatus(`✓ ${successCount} prompts uploaded, ${errorCount} failed`);
      
      if (successCount > 0) {
        await loadMarketplaceData();
      }
      
      setTimeout(() => {
        setShowBulkUploadModal(false);
        setBulkUploadStatus('');
      }, 2000);
    } catch (error) {
      console.error('Bulk upload error:', error);
      setBulkUploadStatus('Error: ' + error.message);
    }
  }

  // ============================================
  // RENDER HELPERS - SLIM TABLE VERSION
  // ============================================

  function renderMarketplaceTable() {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = filteredMarketplaceData.slice(startIndex, endIndex);
    
    if (paginatedData.length === 0) {
      return (
        <tr>
          <td colSpan="9" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px' }}>
            No prompts found
          </td>
        </tr>
      );
    }
    
    // Category color pool - 30 distinct colors
    const categoryColorPool = [
      '#f59e0b', // Orange
      '#3b82f6', // Blue
      '#8b5cf6', // Purple
      '#10b981', // Green
      '#ef4444', // Red
      '#06b6d4', // Cyan
      '#ec4899', // Pink
      '#6366f1', // Indigo
      '#f97316', // Deep Orange
      '#14b8a6', // Teal
      '#84cc16', // Lime
      '#a855f7', // Violet
      '#f43f5e', // Rose
      '#0ea5e9', // Sky Blue
      '#22c55e', // Light Green
      '#eab308', // Yellow
      '#d946ef', // Fuchsia
      '#fb923c', // Amber
      '#4ade80', // Emerald
      '#facc15', // Bright Yellow
      '#94a3b8', // Slate
      '#fb7185', // Light Rose
      '#38bdf8', // Light Sky
      '#a78bfa', // Light Purple
      '#34d399', // Mint
      '#fbbf24', // Gold
      '#c084fc', // Lavender
      '#60a5fa', // Bright Blue
      '#f472b6', // Hot Pink
      '#2dd4bf'  // Turquoise
    ];
    
    // Hash function to get consistent color for category
    const getCategoryColor = (category) => {
      let hash = 0;
      for (let i = 0; i < category.length; i++) {
        hash = category.charCodeAt(i) + ((hash << 5) - hash);
      }
      return categoryColorPool[Math.abs(hash) % categoryColorPool.length];
    };
    
    return paginatedData.map(p => {
      const promptId = p.prompt_id || p.id;
      const title = p.prompt_name || p.title || 'Untitled';
      const category = p.category || 'Uncategorized';
      const uploaderEmail = p.uploader_email || 'Unknown';
      const downloads = p.downloads || p.downloads_count || 0;
      const tier = p.tier || 'starter';
      const isActive = p.is_active !== undefined ? p.is_active : true;
      const createdAt = p.created_at 
        ? new Date(p.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) 
        : 'N/A';
      
      const categoryColor = getCategoryColor(category);
      
      return (
        <tr key={promptId} className="marketplace-row">
          <td className="marketplace-checkbox">
            <input 
              type="checkbox" 
              checked={selectedPrompts.has(promptId)}
              onChange={() => togglePromptSelection(promptId)}
            />
          </td>
          <td className="marketplace-title">{title}</td>
          <td className="marketplace-category">
            <span className="category-dot" style={{ backgroundColor: categoryColor }}></span>
            <span>{category}</span>
          </td>
          <td className="marketplace-uploader">{uploaderEmail}</td>
          <td className="marketplace-date">{createdAt}</td>
          <td className="marketplace-downloads">{downloads.toLocaleString()}</td>
          <td className="marketplace-tier">
            <span className={`tier-text tier-${tier}`}>
              {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </span>
          </td>
          <td className="marketplace-status">
            <span className={`status-text status-${isActive ? 'active' : 'inactive'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </td>
          <td className="marketplace-actions">
            <button 
              className="action-btn action-edit" 
              onClick={() => openEditPromptModal(promptId)} 
              title="Edit"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
              </svg>
            </button>
            <button 
              className="action-btn action-delete" 
              onClick={() => confirmDeletePrompt(promptId, title)} 
              title="Delete"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </td>
        </tr>
      );
    });
  }

  function renderPaginationControls() {
    const totalPages = Math.ceil(filteredMarketplaceData.length / ITEMS_PER_PAGE);
    
    if (totalPages <= 1) return null;
    
    const startItem = ((currentPage - 1) * ITEMS_PER_PAGE) + 1;
    const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredMarketplaceData.length);
    
    return (
      <div className="pagination-controls">
        <div className="pagination-info">
          Showing {startItem}-{endItem} of {filteredMarketplaceData.length} prompts
        </div>
        <div className="pagination-buttons">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map(i => (
            <button 
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`pagination-btn ${i === currentPage ? 'active' : ''}`}
            >
              {i}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // Show loading
  if (isLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-secondary)' }}>
        <div style={{ color: 'var(--text-primary)' }}>Loading...</div>
      </div>
    );
  }

  // Show login screen - FORCED
  if (!currentUser) {
    return (
      <div className="login-overlay">
        <div className="login-card">
          <div className="login-brand">
            <img src="/images/AI%20ChatWorks.svg" alt="AI ChatWorks" onError={(e) => e.target.style.display = 'none'} />
            <div className="login-brand-text">
              <h1>AI ChatWorks</h1>
              <span>Admin Dashboard</span>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="admin@example.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </button>
            {loginError && (
              <div className="error-message" style={{ display: 'flex' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {loginError}
              </div>
            )}
          </form>
          
          <div className="session-notice">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Sessions expire after 15 minutes of inactivity</span>
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard
  return (
    <>
      <div className="app-shell">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header-group">
            <div className="sidebar-logo">
              <img src="/images/AI%20ChatWorks.svg" alt="AI ChatWorks" onError={(e) => e.target.style.display = 'none'} />
              <div className="sidebar-brand-text">
                <h2>AI ChatWorks</h2>
                <span>Admin Dashboard</span>
              </div>
            </div>
          </div>

          <nav>
            <div className={`nav-link ${currentView === 'overview' ? 'active' : ''}`} onClick={() => switchView('overview')}>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Overview
            </div>
            <div className={`nav-link ${currentView === 'queries' ? 'active' : ''}`} onClick={() => switchView('queries')}>
              <svg className="icon" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 2.49866C14.5 3.60194 11.366 4.49731 7.5 4.49731C3.634 4.49731 0.5 3.60194 0.5 2.49866M14.5 2.49866C14.5 1.39538 11.366 0.5 7.5 0.5C3.634 0.5 0.5 1.39538 0.5 2.49866M14.5 2.49866V12.4922C14.5 13.5955 11.366 14.4908 7.5 14.4908C3.634 14.4908 0.5 13.5956 0.5 12.4923V2.49866M14.5 7.49536C14.5 8.59864 11.366 9.49414 7.5 9.49414C3.634 9.49414 0.5 8.59864 0.5 7.49536" stroke="currentColor" strokeLinecap="square" />
              </svg>
              DB Queries
            </div>
            <div className={`nav-link ${currentView === 'marketplace' ? 'active' : ''}`} onClick={() => switchView('marketplace')}>
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z" />
              </svg>
              Marketplace
              <span className="nav-badge" id="marketplaceBadge">0</span>
            </div>
            <div className={`nav-link ${currentView === 'settings' ? 'active' : ''}`} onClick={() => switchView('settings')}>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              Settings
            </div>
          </nav>

          <div className="user-profile-section">
            <div className="user-card">
              <div className="user-avatar">{currentUser?.email?.substring(0, 2).toUpperCase()}</div>
              <div className="user-info">
                <div className="user-name">{currentUser?.email?.split('@')[0]}</div>
                <div className="user-role">Super Admin</div>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* OVERVIEW VIEW */}
          <div className={`view-container ${currentView === 'overview' ? 'active' : ''}`}>
            <div className="page-header">
              <div className="header-row">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <h1>Dashboard Overview</h1>
                  </div>
                  <p>Real-time platform metrics</p>
                </div>
                <button className="btn btn-secondary" onClick={loadDashboardData}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="stats-grid">
              <div className="card stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-label">Total Users</div>
                  <div className="stat-value" id="statUsers">-</div>
                </div>
              </div>
              <div className="card stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-label">Total Prompts</div>
                  <div className="stat-value" id="statPrompts">-</div>
                </div>
              </div>
              <div className="card stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-label">Folders</div>
                  <div className="stat-value" id="statFolders">-</div>
                </div>
              </div>
              <div className="card stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-label">Encrypted</div>
                  <div className="stat-value" id="statEncrypted">-</div>
                </div>
              </div>
            </div>

            <div className="chart-grid">
              <div className="card">
                <div className="card-header">
                  <span className="card-title">User Growth (30 Days)</span>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas id="growthChart"></canvas>
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                <div className="card stat-card">
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-label">Weekly Signups</div>
                    <div className="stat-value" id="statWeeklySignups">-</div>
                  </div>
                </div>
                <div className="card stat-card">
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-label">Monthly Signups</div>
                    <div className="stat-value" id="statMonthlySignups">-</div>
                  </div>
                </div>
                <div className="card stat-card">
                  <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #fbbf24 100%)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-label">Pro Tier Users</div>
                    <div className="stat-value" id="statProUsers">-</div>
                  </div>
                </div>
                <div className="card stat-card">
                  <div className="stat-icon" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="stat-content">
                    <div className="stat-label">Free Tier Users</div>
                    <div className="stat-value" id="statFreeUsers">-</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '24px' }}>
              <div className="card-header">
                <span className="card-title">Marketplace Stats</span>
              </div>
              <div className="card-body" style={{ padding: '0' }}>
                <div className="stats-grid" style={{ marginBottom: '0', padding: '20px', gap: '16px' }}>
                  <div className="card stat-card" style={{ border: '1px solid var(--border-color)' }}>
                    <div className="stat-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-label">Total Prompts</div>
                      <div className="stat-value" id="mpTotalPrompts">-</div>
                    </div>
                  </div>
                  <div className="card stat-card" style={{ border: '1px solid var(--border-color)' }}>
                    <div className="stat-icon" style={{ background: 'var(--warning-bg)', color: 'var(--warning)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-label">Pro Prompts</div>
                      <div className="stat-value" id="mpProPrompts">-</div>
                    </div>
                  </div>
                  <div className="card stat-card" style={{ border: '1px solid var(--border-color)' }}>
                    <div className="stat-icon" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-label">Starter Prompts</div>
                      <div className="stat-value" id="mpStarterPrompts">-</div>
                    </div>
                  </div>
                  <div className="card stat-card" style={{ border: '1px solid var(--border-color)' }}>
                    <div className="stat-icon" style={{ background: 'var(--danger-bg)', color: 'var(--danger)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <div className="stat-label">Inactive Prompts</div>
                      <div className="stat-value" id="mpInactivePrompts">-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="card-title">Top Downloaded Prompts</span>
                <button className="btn btn-ghost" onClick={() => switchView('marketplace')}>View All →</button>
              </div>
              <div className="table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Prompt Name</th>
                      <th>Category</th>
                      <th>Downloads</th>
                      <th>Tier</th>
                    </tr>
                  </thead>
                  <tbody id="topPromptsTable">
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DB QUERIES VIEW */}
          <div className={`view-container ${currentView === 'queries' ? 'active' : ''}`}>
            <div className="page-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 2.49866C14.5 3.60194 11.366 4.49731 7.5 4.49731C3.634 4.49731 0.5 3.60194 0.5 2.49866M14.5 2.49866C14.5 1.39538 11.366 0.5 7.5 0.5C3.634 0.5 0.5 1.39538 0.5 2.49866M14.5 2.49866V12.4922C14.5 13.5955 11.366 14.4908 7.5 14.4908C3.634 14.4908 0.5 13.5956 0.5 12.4923V2.49866M14.5 7.49536C14.5 8.59864 11.366 9.49414 7.5 9.49414C3.634 9.49414 0.5 8.59864 0.5 7.49536" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                  <h1>Database Queries</h1>
                </div>
                <p>Run predefined queries on your database</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body" style={{ padding: '40px', textAlign: 'center' }}>
                <svg width="64" height="64" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 20px', opacity: 0.3 }}>
                  <path d="M14.5 2.49866C14.5 3.60194 11.366 4.49731 7.5 4.49731C3.634 4.49731 0.5 3.60194 0.5 2.49866M14.5 2.49866C14.5 1.39538 11.366 0.5 7.5 0.5C3.634 0.5 0.5 1.39538 0.5 2.49866M14.5 2.49866V12.4922C14.5 13.5955 11.366 14.4908 7.5 14.4908C3.634 14.4908 0.5 13.5956 0.5 12.4923V2.49866M14.5 7.49536C14.5 8.59864 11.366 9.49414 7.5 9.49414C3.634 9.49414 0.5 8.59864 0.5 7.49536" stroke="currentColor" strokeLinecap="square" />
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Query Console Coming Soon
                </h3>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '14px', maxWidth: '500px', margin: '0 auto' }}>
                  Run custom database queries, export results to CSV, and analyze your data with predefined query templates.
                </p>
              </div>
            </div>
          </div>

          {/* MARKETPLACE VIEW - SLIM TABLE VERSION */}
          <div className={`view-container ${currentView === 'marketplace' ? 'active' : ''}`}>
            <div className="page-header">
              <div className="header-row">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z" />
                    </svg>
                    <h1>Marketplace</h1>
                  </div>
                  <p>Manage your prompt library</p>
                </div>
                <div className="btn-group">
                  <button className="btn btn-secondary" onClick={() => setShowBulkUploadModal(true)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    Bulk Upload
                  </button>
                  <button className="btn btn-secondary" onClick={loadMarketplaceData}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                    </svg>
                  </button>
                  <button className="btn btn-accent" onClick={openCreatePromptModal}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    New Prompt
                  </button>
                  <button className="btn btn-secondary" onClick={() => setShowCategoriesModal(true)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Categories
                  </button>
                </div>
              </div>
            </div>

            <div className="card marketplace-toolbar-card">
              <div className="card-body">
                <div className="marketplace-toolbar">
                  <div className="search-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input 
                      type="text" 
                      className="search-input" 
                      placeholder="Search prompts..." 
                      id="marketplaceSearch"
                      onChange={applyFilters}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select 
                      className="filter-select" 
                      id="categoryFilter" 
                      onChange={applyFilters}
                    >
                      <option value="">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                    <select 
                      className="filter-select" 
                      id="tierFilter" 
                      onChange={applyFilters}
                    >
                      <option value="">All Tiers</option>
                      <option value="starter">Starter</option>
                      <option value="pro">Pro</option>
                      <option value="premium">Premium</option>
                    </select>
                    <button className="btn btn-ghost" onClick={() => {
                      document.getElementById('marketplaceSearch').value = '';
                      document.getElementById('categoryFilter').value = '';
                      document.getElementById('tierFilter').value = '';
                      setFilteredMarketplaceData(allMarketplaceData);
                      setCurrentPage(1);
                    }}>
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {selectedPrompts.size > 0 && (
              <div className="bulk-bar visible">
                <span>{selectedPrompts.size} prompt(s) selected</span>
                <button className="btn btn-danger" onClick={handleBulkDelete}>
                  Delete Selected
                </button>
              </div>
            )}

            <div className="card marketplace-table-card">
              <div className="table-wrapper">
                <table className="marketplace-table">
                  <thead>
                    <tr>
                      <th className="marketplace-checkbox">
                        <input 
                          type="checkbox" 
                          checked={selectedPrompts.size === filteredMarketplaceData.length && filteredMarketplaceData.length > 0}
                          onChange={toggleSelectAll}
                        />
                      </th>
                      <th className="marketplace-title">Name</th>
                      <th className="marketplace-category">Category</th>
                      <th className="marketplace-uploader">Created By</th>
                      <th className="marketplace-date">Date</th>
                      <th className="marketplace-downloads">Downloads</th>
                      <th className="marketplace-tier">Tier</th>
                      <th className="marketplace-status">Status</th>
                      <th className="marketplace-actions">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderMarketplaceTable()}
                  </tbody>
                </table>
              </div>
              {renderPaginationControls()}
            </div>
          </div>

          {/* SETTINGS VIEW */}
          <div className={`view-container ${currentView === 'settings' ? 'active' : ''}`}>
            <div className="page-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <h1>Settings</h1>
              </div>
              <p>Configure your dashboard preferences</p>
            </div>

            <div className="card">
              <div className="card-body">
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>Appearance</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--border-color)' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '2px' }}>Dark Mode</h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Switch between light and dark theme</p>
                    </div>
                    <div className={`toggle ${theme === 'dark' ? 'active' : ''}`} onClick={toggleTheme}></div>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>Account</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--border-color)' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '2px' }}>Email</h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{currentUser?.email}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '2px' }}>Role</h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Super Admin</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>About</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '2px' }}>Version</h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Admin Dashboard v2.0 - Production Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* MODALS */}
      
      {/* CREATE PROMPT MODAL */}
      {showCreatePromptModal && (
        <div className="modal-overlay" onClick={() => setShowCreatePromptModal(false)}>
          <div className="modal-content modal-wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Create New Prompt</h2>
              <button className="modal-close" onClick={() => setShowCreatePromptModal(false)}>×</button>
            </div>
            <form onSubmit={handleCreatePrompt}>
              <div className="modal-body">
                {/* Row 1: Prompt Name and Category */}
                <div className="form-row">
                  <div className="form-group">
                    <label>PROMPT NAME</label>
                    <input
                      type="text"
                      value={createForm.title}
                      onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
                      required
                      placeholder="Enter prompt name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>CATEGORY</label>
                    <select
                      className="custom-select"
                      value={createForm.category}
                      onChange={(e) => setCreateForm({...createForm, category: e.target.value})}
                      required
                    >
                      {categories.map(cat => (
                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 2: Tier and Status */}
                <div className="form-row">
                  <div className="form-group">
                    <label>TIER</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="create-tier"
                          value="starter"
                          checked={createForm.tier === 'starter'}
                          onChange={(e) => setCreateForm({...createForm, tier: e.target.value})}
                        />
                        <span>Standard</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="create-tier"
                          value="pro"
                          checked={createForm.tier === 'pro'}
                          onChange={(e) => setCreateForm({...createForm, tier: e.target.value})}
                        />
                        <span>Pro</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>STATUS</label>
                    <div className="toggle-wrapper">
                      <div 
                        className={`toggle-switch ${createForm.is_active ? 'active' : ''}`}
                        onClick={() => setCreateForm({...createForm, is_active: !createForm.is_active})}
                      >
                        <div className="toggle-slider"></div>
                      </div>
                      <span className="toggle-label">{createForm.is_active ? 'Active' : 'Inactive'}</span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="form-group">
                  <label>DESCRIPTION</label>
                  <textarea
                    className="textarea-description"
                    value={createForm.description}
                    onChange={(e) => setCreateForm({...createForm, description: e.target.value})}
                    placeholder="Brief description of the prompt"
                    rows="3"
                  />
                </div>
                
                {/* System Prompt with Character Count */}
                <div className="form-group">
                  <label>SYSTEM PROMPT</label>
                  <textarea
                    className="textarea-system-prompt"
                    value={createForm.content}
                    onChange={(e) => setCreateForm({...createForm, content: e.target.value})}
                    required
                    placeholder="Enter the system prompt content"
                    rows="10"
                  />
                  <div className="char-count">{createForm.content.length}/10000</div>
                </div>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-cancel" onClick={() => setShowCreatePromptModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Prompt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT PROMPT MODAL */}
      {showEditPromptModal && editingPrompt && (
        <div className="modal-overlay" onClick={() => setShowEditPromptModal(false)}>
          <div className="modal-content modal-wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Prompt</h2>
              <button className="modal-close" onClick={() => setShowEditPromptModal(false)}>×</button>
            </div>
            <form onSubmit={handleUpdatePrompt}>
              <div className="modal-body">
                {/* Row 1: Prompt Name and Category */}
                <div className="form-row">
                  <div className="form-group">
                    <label>PROMPT NAME</label>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                      required
                      placeholder="Enter prompt name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>CATEGORY</label>
                    <select
                      className="custom-select"
                      value={editForm.category}
                      onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                      required
                    >
                      {categories.map(cat => (
                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 2: Tier and Status */}
                <div className="form-row">
                  <div className="form-group">
                    <label>TIER</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="edit-tier"
                          value="starter"
                          checked={editForm.tier === 'starter'}
                          onChange={(e) => setEditForm({...editForm, tier: e.target.value})}
                        />
                        <span>Standard</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="edit-tier"
                          value="pro"
                          checked={editForm.tier === 'pro'}
                          onChange={(e) => setEditForm({...editForm, tier: e.target.value})}
                        />
                        <span>Pro</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>STATUS</label>
                    <div className="toggle-wrapper">
                      <div 
                        className={`toggle-switch ${editForm.is_active ? 'active' : ''}`}
                        onClick={() => setEditForm({...editForm, is_active: !editForm.is_active})}
                      >
                        <div className="toggle-slider"></div>
                      </div>
                      <span className="toggle-label">{editForm.is_active ? 'Active' : 'Inactive'}</span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="form-group">
                  <label>DESCRIPTION</label>
                  <textarea
                    className="textarea-description"
                    value={editForm.description}
                    onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                    placeholder="Brief description of the prompt"
                    rows="3"
                  />
                </div>
                
                {/* System Prompt with Character Count */}
                <div className="form-group">
                  <label>SYSTEM PROMPT</label>
                  <textarea
                    className="textarea-system-prompt"
                    value={editForm.content}
                    onChange={(e) => setEditForm({...editForm, content: e.target.value})}
                    required
                    placeholder="Enter the system prompt content"
                    rows="10"
                  />
                  <div className="char-count">{editForm.content.length}/10000</div>
                </div>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-cancel" onClick={() => setShowEditPromptModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update Prompt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {showDeleteModal && deleteTarget && (
        <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="modal-content modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Confirm Delete</h2>
              <button className="modal-close" onClick={() => setShowDeleteModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete "{deleteTarget.name}"?</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '8px' }}>
                This action cannot be undone.
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleDeletePrompt}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CATEGORIES MODAL */}
      {showCategoriesModal && (
        <div className="modal-overlay" onClick={() => setShowCategoriesModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Manage Categories</h2>
              <button className="modal-close" onClick={() => setShowCategoriesModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Add New Category</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Category name"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
                  />
                  <button className="btn btn-accent" onClick={handleAddCategory}>
                    Add
                  </button>
                </div>
              </div>
              
              <div style={{ marginTop: '24px' }}>
                <label style={{ marginBottom: '12px', display: 'block' }}>Existing Categories</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {categories.map(cat => (
                    <div key={cat.name} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '10px 12px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)'
                    }}>
                      <span style={{ fontWeight: '500' }}>{cat.name}</span>
                      <button 
                        className="btn btn-ghost" 
                        onClick={() => handleDeleteCategory(cat.name)}
                        style={{ padding: '4px 8px', fontSize: '12px', color: 'var(--danger)' }}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowCategoriesModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BULK UPLOAD MODAL */}
      {showBulkUploadModal && (
        <div className="modal-overlay" onClick={() => setShowBulkUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Bulk Upload Prompts</h2>
              <button className="modal-close" onClick={() => setShowBulkUploadModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
                Upload a JSON file containing an array of prompts. Each prompt should have:
              </p>
              <ul style={{ marginBottom: '20px', color: 'var(--text-tertiary)', fontSize: '13px', paddingLeft: '20px' }}>
                <li>title (required)</li>
                <li>content (required)</li>
                <li>category (optional)</li>
                <li>description (optional)</li>
                <li>tier (optional: starter, pro, or premium)</li>
                <li>is_active (optional: true or false)</li>
              </ul>
              
              <div className="form-group">
                <label>Select JSON File</label>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleBulkUpload}
                />
              </div>
              
              {bulkUploadStatus && (
                <div style={{ 
                  marginTop: '16px', 
                  padding: '12px', 
                  background: 'var(--bg-tertiary)', 
                  borderRadius: 'var(--radius-md)',
                  fontSize: '13px'
                }}>
                  {bulkUploadStatus}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => {
                setShowBulkUploadModal(false);
                setBulkUploadStatus('');
              }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ALERT MODAL */}
      {showAlertModal && (
        <div className="modal-overlay" onClick={() => setShowAlertModal(false)}>
          <div className="modal-content modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{alertConfig.title}</h2>
              <button className="modal-close" onClick={() => setShowAlertModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p>{alertConfig.message}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-accent" onClick={() => setShowAlertModal(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
