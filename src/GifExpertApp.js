import React, { useState } from 'react'
import { Addcategory } from './componentes/Addcategory';
import { GigGrid } from './componentes/GigGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Dragon ball']);

    return (
        <>
            <h2 >GifExpertApp</h2>
            <Addcategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) =>
                        <GigGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
