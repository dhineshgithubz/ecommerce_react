import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard';
import DataContext from './context/DataContext';

const Womenstshirt = () => {
    const collectionName = "womenstshirt";
    const storageName = "womens/womenstshirt";
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
            <ProductCard collectionName={collectionName} storageName={storageName}

            />
        </div>
    )
}

export default Womenstshirt
