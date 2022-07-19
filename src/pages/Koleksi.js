
import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';
import logod from '../Img/logod.png';
import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Koleksi.css';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Example';

function Koleksi() {
 
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
    <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <Search/>
      </div>
       {/* <div className="sign-left">
          <img src={logod} alt="" />
       </div> */}
    </>
  );
}

export default Koleksi;

