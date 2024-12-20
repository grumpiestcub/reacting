import React, { useState } from 'react';
import blackWhite1 from '/src/assets/b&w-images/bw1.jpg'
import blackWhite2 from '/src/assets/b&w-images/bw2.jpg'
import blackWhite3 from '/src/assets/b&w-images/bw3.jpg'
import blackWhite4 from '/src/assets/b&w-images/bw4.jpg'
import blackWhite1Thumb from '/src/assets/b&w-images/bw1thumb.jpg'
import blackWhite2Thumb from '/src/assets/b&w-images/bw2thumb.jpg'
import blackWhite3Thumb from '/src/assets/b&w-images/bw3thumb.jpg'
import blackWhite4Thumb from '/src/assets/b&w-images/bw4thumb.jpg'

const bwImages = [blackWhite1, blackWhite2, blackWhite3, blackWhite4]
const bwThumbs = [blackWhite1Thumb, blackWhite2Thumb, blackWhite3Thumb, blackWhite4Thumb]

// want to go over this with christian and make sure i understand what's happening here. I think I do. 

function BWGallery() {
    //sets state to false for closed modal, when open this state is true
    const [isModalOpen, setModalOpen] = useState(false);
    //is this using another instance of useState? seems like it just stores/displays the img info
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = img => {
        setSelectedImage(img);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage('');
    }

 return (
    <div>
    <p>black & white</p>
    <div className='bw-photos-thumb'>
        {bwThumbs.map((img, index)=> (
            <img 
            key={index}
            src={img}
            alt={'Thumbnail ${index + 1}'}
            className="bw-thumbnail"
            onClick={() => openModal(bwImages[index])}
            />
        ))}
    </div>
    <div>
        {isModalOpen && (
            <div className='modal' onClick={closeModal}>
                <span className='close-button' onClick={closeModal}>x</span>
                <img className='modal-content' src={selectedImage} alt='Full Size' />
            </div>
        )}
    </div>
    </div>
 )
}
    
    export default BWGallery