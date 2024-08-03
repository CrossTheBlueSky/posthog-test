import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PostHogProvider} from 'posthog-js/react'
import posthog from 'posthog-js'

const options = {
  api_host: import.meta.env.REACT_APP_PUBLIC_POSTHOG_HOST,
}

posthog.capture('test event', { property: 'Installation Successful' })
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.REACT_APP_PUBLIC_POSTHOG_API_KEY}
      options={options}
      >
    <App />
    </PostHogProvider>
  </React.StrictMode>,
)
