import ProfilePicture from './ProfilePic.jsx'
import Username from './Username.jsx'
import About from './About.jsx'


function ProfileHeader() {

  return (
    <>
    <div className='profile-header'>
    <Username />
    <ProfilePicture />
    <About />
    </div>   
    </>
  )
}

export default ProfileHeader
