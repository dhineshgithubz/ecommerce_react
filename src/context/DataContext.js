import { createContext, useState} from "react";
const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [product, setproduct] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);
    const [shakeCart, setShakeCart] = useState(false);
    const [user, setUser] = useState({ displayName: "", email: "", localId: "" });
    const [isActiveHome, setIsActiveHome] = useState(false);
    const [isActiveMens, setIsActiveMens] = useState(false);
    const [isActiveWomens, setIsActiveWomens] = useState(false);
    const [isActiveKids, setIsActiveKids] = useState(false);
    const [size, setSize] = useState(null);
    const [orderVisible, setorderVisible] = useState(false);

    return (
        < DataContext.Provider value={{

            isLoggedIn, setIsLoggedIn, product, setproduct, selectedCard, setSelectedCard,
            cart, setCart, shakeCart, setShakeCart, user, setUser,
            isActiveHome, setIsActiveHome, isActiveMens, setIsActiveMens,
            isActiveWomens, setIsActiveWomens, isActiveKids, setIsActiveKids, order, setOrder,
            size, setSize, orderVisible, setorderVisible


        }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataContext;