import React, { useState } from 'react';
import {
    FaUser,
    FaBars,
    FaHome,
    FaRandom,
    FaBookReader,
    FaSave,
    FaInfo,
    FaLock,


} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import './Toolbar.css';
import { useNavigate } from 'react-router-dom';



const Sidebar = ({ children, login }) => {
    const history = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    // const [subnav, setSubnav] = useState(false);
    // const showSubnav = () => setSubnav(!subnav);
    const toggle = () => setIsOpen(!isOpen);
    

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        history("/");
        window.location.reload()
    }
    const menuItem = [
        {
            path: "/profile",
            name: "Profile",
            icon: <FaUser />
        },
        {
            path: "/beranda",
            name: "Beranda",
            icon: <FaHome />
        },
        {
            path: "/rekomendasi",
            name: "Rekomendasi",
            icon: <FaRandom />
        },
        {
            path: "/rakbukusaya",
            name: "RakBukuSaya",
            icon: <FaSave />
        },
        {
            path: "/koleksi",
            name: "Koleksi",
            icon: <FaBookReader />
        },
        {
            path: "/tentang",
            name: "Tentang",
            icon: <FaInfo />
        },
        {
            path: "/",
            name: "Logout",
            icon: <FaLock />,
            onclick: { handleLogout }
        }
    ]
    return (
        <>
            <div className="content">
                {login === true ? (<></>) : (
                    <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                        <div className="top_section">
                            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Bacain</h1>
                            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                <FaBars onClick={toggle} />
                            </div>

                        </div>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link" activeclassName="active" onClick={() => {
                                    if (item.name == "Logout") {
                                        localStorage.removeItem("token");
                                        localStorage.removeItem("id");
                                        history("/");
                                        window.location.reload();
                                    }
                                }}>
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                )}
                <main>{children}</main>
            </div>
        </>
    );
};

export default Sidebar;

