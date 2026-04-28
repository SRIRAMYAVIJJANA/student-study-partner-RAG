import React from "react"
import "../../faculty/faculty.css"

export default function Toolbar({ onNewFolder, onUpload }) {
  return (
    <div className="toolbar-container">
      <div className="toolbar-left">
        <span className="toolbar-title">Documents</span>
      </div>

      <div className="toolbar-right">
        <button
          className="toolbar-btn secondary"
          onClick={onNewFolder}
        >
          + New Folder
        </button>

        <button
          className="toolbar-btn primary"
          onClick={onUpload}
        >
          ⬆ Upload PDF
        </button>
      </div>
    </div>
  )
}
