import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx'
import './index.css'
// import LoginButton from './login.jsx';
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-dtg7myoocfr0rw1b.us.auth0.com"
    clientId="J0uhmuRPHaDbLQb1s1WTgz3LtJstIKHS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
