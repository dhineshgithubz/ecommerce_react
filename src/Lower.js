import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard';
import DataContext from './context/DataContext';

const Lower = () => {
    const collectionName = "lower";
    const storageName = "mens/lower";
    const { setIsActiveHome, setIsActiveMens, setIsActiveWomens, setIsActiveKids } = useContext(DataContext);

    useEffect(
        () => {
            setIsActiveHome(false);
            setIsActiveMens(true);
            setIsActiveWomens(false);
            setIsActiveKids(false);
        }, [setIsActiveHome,setIsActiveMens,setIsActiveWomens,setIsActiveKids]
    )
    return (
        <div>
            <ProductCard collectionName={collectionName} storageName={storageName} />
        </div>
    )
}

export default Lower
