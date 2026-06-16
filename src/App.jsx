import { useState } from 'react'
import './App.css'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [emailText, setEmailText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleScan = async () => {
    if (!emailText.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailText })
      })

      if (!response.ok) throw new Error('Request failed')

      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setResult(data)
      }
    } catch (err) {
      setError('Could not connect to the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setEmailText('')
    setResult(null)
    setError(null)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🛡️ Phish Guard</h1>
          <p>AI-powered phishing email detection using Random Forest &amp; LSTM models</p>
        </header>

        <div className="card">
          <label htmlFor="emailText">Paste email content</label>
          <textarea
            id="emailText"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            placeholder="Paste the full email text here..."
            rows={10}
          />

          <div className="actions">
            <button onClick={handleScan} disabled={loading || !emailText.trim()}>
              {loading ? 'Scanning...' : 'Scan Email'}
            </button>
            <button className="secondary" onClick={handleClear} disabled={loading}>
              Clear
            </button>
          </div>
        </div>

        {error && (
          <div className="card error-card">
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className={`card result-card ${result.prediction === 'Phishing' ? 'danger' : 'safe'}`}>
            <div className="result-header">
              <span className="badge">{result.prediction}</span>
            </div>

            <div className="probability-bars">
              <div className="bar-row">
                <span>Phishing</span>
                <div className="bar-track">
                  <div
                    className="bar-fill phishing"
                    style={{ width: `${result.phishing_probability}%` }}
                  />
                </div>
                <span>{result.phishing_probability}%</span>
              </div>

              <div className="bar-row">
                <span>Safe</span>
                <div className="bar-track">
                  <div
                    className="bar-fill safe"
                    style={{ width: `${result.safe_probability}%` }}
                  />
                </div>
                <span>{result.safe_probability}%</span>
              </div>
            </div>

            <div className="reason">
              <strong>Analysis:</strong> {result.reason}
            </div>
          </div>
        )}
        <section className="showcase-section">
  <div className="showcase-text">
    <h2>AI-Powered Threat Detection</h2>
    <p>
      Built with React, Spring Boot, Flask, Random Forest, and LSTM models,
      Phish Guard analyzes suspicious emails and provides confidence scores
      for phishing detection.
    </p>
  </div>

  <img
    src="https://res.cloudinary.com/dlzb0kfc7/image/upload/q_auto/f_auto/v1781490671/Image_odxx86.webp"
    alt="Phish Guard"
    className="showcase-image"
  />
</section>

        <footer className="footer">
          <p>Built with React, Spring Boot, Flask, Random Forest &amp; LSTM</p>
        </footer>
      </div>
      
    </div>
  )
}

export default App