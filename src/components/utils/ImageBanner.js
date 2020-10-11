import React from 'react'
import im1 from '../../images/social_media_1.svg'
import './ImageBanner.css'

function ImageBanner(props){
    return (
        <div>
            {<img src={props.imageUrl} alt={props.alt}/> }
            {console.log(props)}
            {/* <img src={require('../../images/social_media_1.svg')} alt="im2"/> */}
            <center><h2>{props.alt}</h2></center> 
        </div>
    )
}

export default ImageBanner;