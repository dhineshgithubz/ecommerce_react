import React, { useEffect, useContext } from 'react'
import ProductCard from './ProductCard';
import DataContext from './context/DataContext';

const Hoodie = () => {
    const collectionName = "hoodie";
    const storageName = "mens/hoodie";
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

export default Hoodie
