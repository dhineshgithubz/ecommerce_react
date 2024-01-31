import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard';
import DataContext from './context/DataContext';

const Pant = () => {
    const collectionName = "pant";
    const storageName = "mens/pant";
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

export default Pant
