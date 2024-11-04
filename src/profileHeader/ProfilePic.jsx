import '/src/css/profilePicture.css'
import Kermit from '/src/assets/kermit.jpg'

function ProfilePicture() 
{
    return (
        <>
        <img 
        className="profile-picture" 
        src={Kermit} 
        alt="Kermit the frog, dressed as a samurai, ready to defend his honor!"
        />
        </>
    )
}

export default ProfilePicture