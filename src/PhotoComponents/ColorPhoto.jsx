import color1 from '/src/assets/color-images/color1.jpg'
import color2 from '/src/assets/color-images/color2.jpg'
import color3 from '/src/assets/color-images/color3.jpg'
import color4 from '/src/assets/color-images/color4.jpg'




function ColorPhotos() {
const colorImages = [color1, color2, color3, color4]

 return (
    <>
    <div>
        {colorImages.map((img)=>  
            <img src={img} />
        )}
    </div>
    </>
 )
}

export default ColorPhotos