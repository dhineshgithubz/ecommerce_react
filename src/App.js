import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import { Routes, Route} from 'react-router-dom';
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'
import Signup from './Signup'
import React, { useState, useEffect} from 'react'
import Shirt from './Shirt'
import Hoodie from './Hoodie'
import Tshirt from './Tshirt'
import Pant from './Pant'
import Lower from './Lower'
import Womensshirt from './Womensshirt'
import Womenstshirt from './Womenstshirt'
import Saree from './Saree'
import Kidsshirt from './Kidsshirt'
import Kidstshirt from './Kidstshirt'
import Orderpage1 from "./Orderpage1";
import Loading from "./Loading";
import { DataProvider } from './context/DataContext';

function App() {
const [loading, setLoading] = useState(true)

 useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])


  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DataProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mens" element={<Mens />} ></Route>

          <Route path="/shirt" element={<Shirt />}></Route>
          <Route path="/hoodie" element={<Hoodie />}></Route>
          <Route path="/tshirt" element={<Tshirt />}></Route>
          <Route path="/pant" element={<Pant />}></Route>
          <Route path="/lower" element={<Lower />}></Route>

          <Route path="/womens" element={<Womens />}></Route>
          <Route path="/womensshirt" element={<Womensshirt />}></Route>
          <Route path="/womenstshirt" element={<Womenstshirt />}></Route>
          <Route path="/saree" element={<Saree />}></Route>

          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/kidsshirt" element={<Kidsshirt />}></Route>
          <Route path="/kidstshirt" element={<Kidstshirt />}></Route>
          <Route
            path="/orderpage"
            element={<Orderpage1 />}
          />
        </Routes>

        <Footer />
      </DataProvider>

    </div>

  );
}

export default App;
