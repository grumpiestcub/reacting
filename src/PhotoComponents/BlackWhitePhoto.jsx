import blackWhite1 from '/src/assets/b&w-images/bw1.jpg'
import blackWhite2 from '/src/assets/b&w-images/bw2.jpg'
import blackWhite3 from '/src/assets/b&w-images/bw3.jpg'
import blackWhite4 from '/src/assets/b&w-images/bw4.jpg'


function BWPhotos() {
    const bwImages = [blackWhite1, blackWhite2, blackWhite3, blackWhite4]
     return (
        <>
        <div className='bw-photos'>
            {bwImages.map((img)=>  
                <img src={img} />
            )}
        </div>
        </>
     )
    }
    
    export default BWPhotos