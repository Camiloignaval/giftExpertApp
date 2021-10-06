import { useEffect, useState } from "react";
import { gif } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        gif(category)
            .then((imgs) => {
                setstate({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])



    return state
}
