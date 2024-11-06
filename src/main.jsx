import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import ProfileHeader from './profileHeader/ProfileHeader.jsx'
import ColorPhotos from './PhotoComponents/ColorPhoto.jsx'
import BWPhotos from './PhotoComponents/BlackWhitePhoto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileHeader />
    <ColorPhotos />
    <BWPhotos />
  </StrictMode>,
)
