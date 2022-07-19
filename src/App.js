import React, { useState, useEffect } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Beranda from './pages/Beranda';
import Rekomendasi from './pages/Rekomendasi';
import { RekomendasiData } from "./pages/RekomendasiData";
import RakBukuSaya from './pages/RakBukuSaya';
import Koleksi from './pages/Koleksi';
import Tentang from './pages/Tentang';
import Login from './pages/Login';
import Register from "./pages/Register";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "./pages/Footer";
import Profile from "./pages/Profile";
import { rakContext } from "./context";


function App() {
  const user = localStorage.getItem("token");
  const [rak, setRak] = useState({})
  const [login, setLogin] = useState(true);
  useEffect(() => {
    if (window.location.pathname == '/' || window.location.pathname == '/register') setLogin(true);
    else setLogin(false)
  }, [login])

  const [register, setRegister] = useState(true);
  useEffect(() => {
    if (window.location.pathname == '/') setRegister(true);
    else setRegister(false)
  }, [register])



  return (
    <rakContext.Provider value={{ rak, setRak }}>
      <div>
        {/* <Topbar /> */}
        <Sidebar login={login}>
          <Routes>

            <Route exact path="/" element={<Login setLogin={setLogin} />} />
            <Route path="/register" element={<Register setRegister={setRegister} />} />
            {user == null ? (null) : (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/beranda" element={<>
                  <Beranda />
                  <Footer />
                </>} />
                <Route path="/rekomendasi" element={<Rekomendasi slides={RekomendasiData} />} />
                <Route path="/rakbukusaya" element={<RakBukuSaya />} />
                <Route path="/koleksi" element={<Koleksi />} />
                <Route path="/tentang" element={<>
                  <Tentang />
                  <Footer />
                </>} />
              </>)}
          </Routes>
        </Sidebar>
      </div>
    </rakContext.Provider>
  );
}

export default App;