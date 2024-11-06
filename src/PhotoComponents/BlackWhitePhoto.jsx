import blackWhite1 from '/src/assets/b&w-images/bw1.jpg'
import blackWhite2 from '/src/assets/b&w-images/bw2.jpg'
import blackWhite3 from '/src/assets/b&w-images/bw3.jpg'
import blackWhite4 from '/src/assets/b&w-images/bw4.jpg'
import blackWhite1Thumb from '/src/assets/b&w-images/bw1thumb.jpg'
import blackWhite2Thumb from '/src/assets/b&w-images/bw2thumb.jpg'
import blackWhite3Thumb from '/src/assets/b&w-images/bw3thumb.jpg'
import blackWhite4Thumb from '/src/assets/b&w-images/bw4thumb.jpg'


function BWPhotos() {
    const bwImages = [blackWhite1, blackWhite2, blackWhite3, blackWhite4]
    const bwThumbs = [blackWhite1Thumb, blackWhite2Thumb, blackWhite3Thumb, blackWhite4Thumb]
     return (
        <>
        <div className='bw-photos-thumb'>
            {bwThumbs.map((img)=>  
                <img src={img} />
            )}
        </div>
        <div className='bw-photos-full'>
        {bwImages.map((img)=>  
                <img src={img} />
            )}
        </div>
        </>
     )
    }
    
    export default BWPhotos