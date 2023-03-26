import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const container = document.getElementById('root')

if(container) {
    const reactRoot = ReactDOM.createRoot(container)

    reactRoot.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
} else {
    console.error('React root is missing from index.html')
}
