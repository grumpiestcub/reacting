import color1 from '/src/assets/color-images/color1.jpg'
import color2 from '/src/assets/color-images/color2.jpg'
import color3 from '/src/assets/color-images/color3.jpg'
import color4 from '/src/assets/color-images/color4.jpg'
import '/src/css/photos.css'

// want to make this a gallery of some sort that cycles through the images, 
// should be able to click on them and make them full screen,
// may need to do more than some css for this. 

function ColorPhotos() {
const colorImages = [color1, color2, color3, color4]
 return (
    <>
    <div className='color-photos'>
        {colorImages.map((img)=>  
            <img src={img} />
        )}
    </div>
    </>
 )
}

export default ColorPhotos