import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className=' card animate__animated animate__bounce animate__slow'>
            <img className='imgGif' src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
