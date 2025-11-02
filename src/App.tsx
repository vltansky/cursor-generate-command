import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [copied, setCopied] = useState(false)

  const generateLink = () => {
    const encodedName = encodeURIComponent(name)
    const encodedText = encodeURIComponent(content)
    return `https://cursor.com/link/command?name=${encodedName}&text=${encodedText}`
  }

  const link = generateLink()

  return (
    <div className="container">
      <h1>Cursor Command Generator</h1>
      <div className="form">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter command name"
          />
        </div>
        <div className="field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter command content"
            rows={8}
          />
        </div>
        <div className="field">
          <label htmlFor="link">Generated Link</label>
          <div className="link-container">
            <input
              id="link"
              type="text"
              value={link}
              readOnly
              className="link-input"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(link)
                setCopied(true)
                setTimeout(() => setCopied(false), 1000)
              }}
              className="copy-button"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
