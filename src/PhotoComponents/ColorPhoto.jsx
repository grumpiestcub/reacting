import color1 from '/src/assets/color-images/color1.jpg'
import color2 from '/src/assets/color-images/color2.jpg'
import color3 from '/src/assets/color-images/color3.jpg'
import color4 from '/src/assets/color-images/color4.jpg'

function ColorPhotos() {
    // or is this the issue?
    const colorImages = [
            img: {color1},
            img: {color2},
            img: {color3},
            img: {color4},
    ]
 return (
    <>
    <div>
        {/* is this the issue?  */}
     {colorImages}
    </div>
    </>
 )
}



export default ColorPhotos