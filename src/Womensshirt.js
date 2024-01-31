import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard';
import DataContext from './context/DataContext';

const Womensshirt = () => {
    const collectionName = "womensshirt";
    const storageName = "womens/womensshirt";
    const { setIsActiveHome, setIsActiveMens,
        setIsActiveWomens, setIsActiveKids } = useContext(DataContext);
    useEffect(
        () => {
            setIsActiveHome(false);
            setIsActiveMens(false);
            setIsActiveWomens(true);
            setIsActiveKids(false);
        }, [setIsActiveHome,setIsActiveMens,setIsActiveWomens,setIsActiveKids]
    )

    return (
        <div>
            <ProductCard collectionName={collectionName}
                storageName={storageName}
            />
        </div>
    )
}

export default Womensshirt
