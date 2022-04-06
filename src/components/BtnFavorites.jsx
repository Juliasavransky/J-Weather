import React, { useState } from 'react'
import heart1 from '../img/SVG/heart.svg';
import heart2 from '../img/SVG/heart1.svg';

function BtnFavorites() {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div onClick={() => setIsFavorite(!isFavorite)}>
            {
                isFavorite
                    ? <img src={heart2} alt="delete"></img>
                    : <img src={heart1} alt="add"></img>
            }

        </div>
    )
}

export default BtnFavorites