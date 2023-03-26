import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

const containerElement = document.getElementById('root')

if(containerElement) {
    const reactRoot = ReactDOM.createRoot(containerElement)

    reactRoot.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
} else {
    console.error('React root is missing from index.html')
}
