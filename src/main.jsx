import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import ProfileHeader from './profileHeader/ProfileHeader.jsx'
import ColorGallery from './PhotoComponents/ColorGallery.jsx'
import BWGallery from './PhotoComponents/BWGallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileHeader />
    <ColorGallery />
    <BWGallery />
  </StrictMode>,
)
