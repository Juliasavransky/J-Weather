import React from 'react'
import FavoritesCard from './FavoritesCard';

import { useSelector } from 'react-redux';

const Favorites = () => {
    const items = useSelector(state => state.favorites.items);


    return (
        <div className="card">
            {items.length === 0
                ? (<div>No Items Found</div>)
                : (items.map((item) => (
                    <FavoritesCard
                        key={item.id}
                        icon={item.icon}
                        temperature={item.temperature}
                        title={item.title}
                        countryName={item.countryName}
                        cityName={item.cityName}
                        id={item.id}
                    />
                )))}
        </div >

    )
}

export default Favorites
