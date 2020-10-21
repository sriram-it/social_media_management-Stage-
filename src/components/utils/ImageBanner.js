import React from 'react'
import './ImageBanner.css'

function ImageBanner(props){
    return (
        <div>
            {<img src={props.imageUrl} alt={props.alt}/> }
            <center><h2>{props.alt}</h2></center> 
        </div>
    )
}

export default ImageBanner;