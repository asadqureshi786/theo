export function loadSMTPjs() {
  return new Promise((resolve, reject) => {
    if (window.Email) {
      resolve(window.Email)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://smtpjs.com/v3/smtp.js'
    script.onload = () => resolve(window.Email)
    script.onerror = () => reject(new Error('Failed to load SMTPJS'))
    document.body.appendChild(script)
  })
}