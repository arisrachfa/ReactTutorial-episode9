// libraries
import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// style
import './App.css';

// pages
import Navbar from './Navbar';
import Home from './Pages/Home';
import HomeBad from './Pages/Bad/HomeBad'
import ProfileBad from './Pages/Bad/ProfileBad'
import HomeGood from './Pages/Good/HomeGood';
import ProfileGood from './Pages/Good/ProfileGood';
import Contact from './Pages/Contact';

// grouping components yang memiliki state yang sama menggunakan func createContext
// AppContext nantinya akan digunakan untuk wraping nilai return func utama kita dan lalu diberikan value yang diinginkan
// sehingga ketika kita memanggilnya menggunakan route mempersingkat code kita dan tidak terlalu banyak props yang harus ditulis
// seperti contohnya route HomeBad dan ProfileBad terlalu panjang penulisannya dan terlalu banyak props yang membingungkan
export const AppContext = createContext();

function App() {
  // state
  const [usernameBad, setUsernameBad] = useState("Aris");
  const [usernameGood, setUsernameGood] = useState("Aris");

  return (
    <div className="App">
      <AppContext.Provider value={{usernameGood, setUsernameGood}}>
        <Router>
          <div className='navigation'>
            <Navbar />
          </div>

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/homeBad' element={<HomeBad usernameBad={usernameBad}/>}/>
            <Route path='/profileBad' element={<ProfileBad usernameBad={usernameBad} setUsernameBad={setUsernameBad}/>}/>
            <Route path='/homegood' element={<HomeGood/>}/>
            <Route path='/profilegood' element={<ProfileGood/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
      </AppContext.Provider>

    </div>
  );
}

export default App;
