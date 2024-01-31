import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard';
import DataContext from './context/DataContext';

const Kidstshirt = () => {
    const collectionName = "kidstshirt";
    const storageName = "kids/kidstshirt";
    const { setIsActiveHome, setIsActiveMens,
        setIsActiveWomens, setIsActiveKids } = useContext(DataContext);
    useEffect(
        () => {
            setIsActiveHome(false);
            setIsActiveMens(false);
            setIsActiveWomens(false);
            setIsActiveKids(true);
        }, [setIsActiveHome,setIsActiveMens,setIsActiveWomens,setIsActiveKids]
    )
    return (
        <div>
            <ProductCard collectionName={collectionName} storageName={storageName} />
        </div>
    )
}

export default Kidstshirt
