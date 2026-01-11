// DESTINATION: /app/reset-password/page.jsx

'use client'

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function ResetPasswordPage() {
  const supabase = createClientComponentClient()
  
  // State management
  const [loading, setLoading] = useState(true)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })
  const [userEmail, setUserEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Password requirements state
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false
  })

  // Verify reset token on mount
  useEffect(() => {
    verifyResetToken()
  }, [])

  // Real-time password validation
  useEffect(() => {
    if (newPassword) {
      setRequirements({
        length: newPassword.length >= 8,
        uppercase: /[A-Z]/.test(newPassword),
        lowercase: /[a-z]/.test(newPassword),
        number: /[0-9]/.test(newPassword)
      })
    }
  }, [newPassword])

  async function verifyResetToken() {
    try {
      console.log('Current URL:', window.location.href)
      console.log('Hash:', window.location.hash)
      console.log('Search:', window.location.search)

      const urlParams = new URLSearchParams(window.location.search)
      const tokenHash = urlParams.get('token_hash')
      const type = urlParams.get('type')

      console.log('Token hash:', tokenHash)
      console.log('Type:', type)

      if (tokenHash && type === 'recovery') {
        console.log('Verifying recovery token...')
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: 'recovery'
        })

        console.log('Verify OTP result:', { data, error })

        if (error) {
          throw error
        }

        if (!data.session) {
          throw new Error('No session created from token verification')
        }

        console.log('Session established successfully via token verification')

        // Get the current user to display their email
        const { data: { user } } = await supabase.auth.getUser()

        if (user && user.email) {
          setUserEmail(user.email)
        }

        // Successfully verified - show the form
        setLoading(false)
        setMessage({ text: 'Please enter your new password below.', type: 'info' })
        return
      }

      // No valid token found - show error
      console.error('No valid reset token found in URL')
      setMessage({ text: 'Invalid or expired reset link. Please request a new password reset.', type: 'error' })
      setLoading(false)

    } catch (error) {
      console.error('Error verifying reset token:', error)
      const errorMsg = error.message || 'Unknown error'
      setMessage({ text: `Error verifying reset link: ${errorMsg}. Please request a new password reset.`, type: 'error' })
      setLoading(false)
    }
  }

  function validatePassword(password) {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setMessage({ text: '', type: '' })

    // Validate passwords match
    if (newPassword !== confirmPassword) {
      setMessage({ text: 'Passwords do not match. Please try again.', type: 'error' })
      return
    }

    // Validate password requirements
    if (!validatePassword(newPassword)) {
      setMessage({ text: 'Password does not meet all requirements.', type: 'error' })
      return
    }

    // Disable button and show loading
    setIsSubmitting(true)

    try {
      // Update the user's password
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (error) {
        throw error
      }

      // Success!
      setMessage({ text: 'Password reset successfully! Closing window...', type: 'success' })

      // Clear the form
      setNewPassword('')
      setConfirmPassword('')

      // Close the window and return to previous page after 2 seconds
      setTimeout(() => {
        // Try to close the window (works if opened by window.open)
        window.close()

        // If window.close() didn't work (security restriction),
        // the window is still open, so redirect back to the app
        setTimeout(() => {
          window.location.href = 'https://ai-chatworks.com'
        }, 100)
      }, 2000)

    } catch (error) {
      console.error('Error resetting password:', error)
      setMessage({ text: error.message || 'Failed to reset password. Please try again.', type: 'error' })
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx global>{`
        :root {
          /* Brand Guidelines Variables */
          --accent-primary: #8b5cf6;
          --accent-primary-hover: #7c3aed;
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
          --text-primary: #111827;
          --text-secondary: #374151;
          --border-color: #e5e7eb;
          --font-family-primary: 'Open Sans', sans-serif;

          /* Typography */
          --text-h2: 24px;
          --text-base: 15px;
          --text-label: 14px;
          --line-height-relaxed: 1.6;

          /* Spacing & UI */
          --space-2: 8px;
          --space-4: 16px;
          --space-6: 24px;
          --space-8: 32px;
          --radius-md: 8px;

          /* Utility Colors */
          --success-color: #10b981;
          --success-bg: #ecfdf5;
          --error-color: #ef4444;
          --error-bg: #fef2f2;
          --req-met: #10b981;
          --req-unmet: #9ca3af;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-family-primary);
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          line-height: var(--line-height-relaxed);
        }

        .reset-password-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .container {
          background: var(--bg-primary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          max-width: 440px;
          width: 100%;
          padding: 40px;
          animation: slideIn 0.4s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .logo h1 {
          color: var(--accent-primary);
          font-size: var(--text-h2);
          font-weight: 700;
          margin-bottom: var(--space-2);
        }

        .logo p {
          color: var(--text-secondary);
          font-size: var(--text-base);
        }

        .user-info {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e40af;
          padding: var(--space-4);
          border-radius: var(--radius-md);
          margin-bottom: var(--space-6);
          font-size: 14px;
          text-align: center;
        }

        .user-info.hidden {
          display: none;
        }

        .user-info strong {
          color: #1e3a8a;
        }

        .form-group {
          margin-bottom: var(--space-6);
        }

        label {
          display: block;
          color: var(--text-secondary);
          font-size: var(--text-label);
          font-weight: 600;
          margin-bottom: var(--space-2);
        }

        input[type="password"] {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: var(--text-base);
          font-family: var(--font-family-primary);
          color: var(--text-primary);
          transition: all 0.2s;
          background: var(--bg-primary);
        }

        input[type="password"]:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }

        .password-requirements {
          margin-top: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: 13px;
        }

        .password-requirements p {
          color: var(--text-secondary);
          margin-bottom: var(--space-2);
          font-weight: 600;
        }

        .requirement {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--req-unmet);
          margin-bottom: 4px;
          font-size: 13px;
          transition: color 0.2s;
        }

        .requirement.met {
          color: var(--req-met);
        }

        .requirement .icon {
          font-size: 14px;
          font-weight: bold;
        }

        .btn {
          width: 100%;
          padding: 12px 16px;
          background-color: var(--accent-primary);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: var(--text-base);
          font-family: var(--font-family-primary);
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s;
          margin-top: var(--space-2);
        }

        .btn:hover:not(:disabled) {
          background-color: var(--accent-primary-hover);
          transform: translateY(-1px);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background-color: var(--text-secondary);
        }

        .message {
          padding: var(--space-4);
          border-radius: var(--radius-md);
          margin-bottom: var(--space-6);
          font-size: var(--text-label);
          animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .message.success {
          background: var(--success-bg);
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .message.error {
          background: var(--error-bg);
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        .message.info {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }

        .back-link {
          text-align: center;
          margin-top: var(--space-6);
        }

        .back-link a {
          color: var(--accent-primary);
          text-decoration: none;
          font-size: var(--text-label);
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-link a:hover {
          color: var(--accent-primary-hover);
          text-decoration: underline;
        }

        .loading-screen {
          text-align: center;
        }

        .loading-spinner {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 4px solid var(--border-color);
          border-top-color: var(--accent-primary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loading-text {
          margin-top: var(--space-4);
          color: var(--text-secondary);
          font-size: var(--text-base);
        }

        .loading {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
          margin-right: 8px;
        }

        .hidden {
          display: none !important;
        }
      `}</style>

      <div className="reset-password-page">
        <div className="container">
          <div className="logo">
            <h1>AI ChatWorks</h1>
            <p>Reset Your Password</p>
          </div>

          {loading ? (
            <div className="loading-screen">
              <div className="loading-spinner"></div>
              <p className="loading-text">Verifying reset link...</p>
            </div>
          ) : (
            <div id="resetForm">
              {message.text && (
                <div className={`message ${message.type}`}>
                  {message.text}
                </div>
              )}

              {userEmail && (
                <div className="user-info">
                  Resetting password for: <strong>{userEmail}</strong>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new password"
                    autoComplete="new-password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                    autoComplete="new-password"
                    required
                  />
                </div>

                <div className="password-requirements">
                  <p>Password must contain:</p>
                  <div className={`requirement ${requirements.length ? 'met' : ''}`}>
                    <span className="icon">{requirements.length ? '✓' : '○'}</span>
                    <span>At least 8 characters</span>
                  </div>
                  <div className={`requirement ${requirements.uppercase ? 'met' : ''}`}>
                    <span className="icon">{requirements.uppercase ? '✓' : '○'}</span>
                    <span>One uppercase letter</span>
                  </div>
                  <div className={`requirement ${requirements.lowercase ? 'met' : ''}`}>
                    <span className="icon">{requirements.lowercase ? '✓' : '○'}</span>
                    <span>One lowercase letter</span>
                  </div>
                  <div className={`requirement ${requirements.number ? 'met' : ''}`}>
                    <span className="icon">{requirements.number ? '✓' : '○'}</span>
                    <span>One number</span>
                  </div>
                </div>

                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="loading"></span>
                      Resetting password...
                    </>
                  ) : (
                    'Reset Password'
                  )}
                </button>
              </form>

              <div className="back-link">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.close()
                    setTimeout(() => {
                      window.location.href = 'https://ai-chatworks.com'
                    }, 100)
                  }}
                >
                  Back to AI ChatWorks
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
