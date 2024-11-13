import React, { useState } from 'react';
import color1 from '/src/assets/color-images/color1.jpg'
import color2 from '/src/assets/color-images/color2.jpg'
import color3 from '/src/assets/color-images/color3.jpg'
import color4 from '/src/assets/color-images/color4.jpg'
import color1Thumb from '/src/assets/color-images/color1thumb.jpg'
import color2Thumb from '/src/assets/color-images/color2thumb.jpg'
import color3Thumb from '/src/assets/color-images/color3thumb.jpg'
import color4Thumb from '/src/assets/color-images/color4thumb.jpg'
import '/src/css/photos.css'

{/*
isModalOpen = controls viz of modal
selectedImage = stores the url of the selected full size
openModal = takes image url as param from colorImages, sets it as selectedImage, then opens
closeModal = hiding again and clearing selectedImage 
onClick calls openModal with the image clicked on from ColorImages
*/}

const colorThumbs = [color1Thumb, color2Thumb, color3Thumb, color4Thumb]
const colorImages = [color1, color2, color3, color4]

function ColorGallery() {
    const [isModalOpen, setModalOpen] = useState(false);
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
    <div className='color-photos-thumb'>
        {colorThumbs.map((img, index)=> (
            <img 
            key={index}
            src={img}
            alt={'Thumbnail ${index + 1}'}
            className="color-thumbnail"
            onClick={() => openModal(colorImages[index])}
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

export default ColorGallery