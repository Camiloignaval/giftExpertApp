import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GigGrid = ({ category }) => {

    const { data: imgs, loading } = useFetchGifs(category)

    return (
        <div className='grid-container'>
            <h3 className='titulos'>{category}</h3>
            {loading && <p>Loading</p>}
            {imgs.map((img) =>
                <GifGridItem
                    key={img.id}
                    {...img} />
            )}

        </div>
    )
}
