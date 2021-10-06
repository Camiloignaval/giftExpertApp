import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Addcategory = ({ setCategories }) => {
    const [inputValue, SetInputValue] = useState('')

    const inputChange = (e) => {
        SetInputValue(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            SetInputValue('')
        }

    }
    return (
        <form onSubmit={submit}>
            <input
                type='text'
                value={inputValue}
                onChange={inputChange} />
        </form>


    )
}

Addcategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

// export default Addcategory
