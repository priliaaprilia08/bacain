import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import data from './data';
import "./Sumber.css";
import { Link } from "react-router-dom";


const Search = () => {
    const [filter, setFilter] = useState('');
    const [datas, setDatas] = useState(data.cardData);
    const searchText = (event) => {
        setFilter(event.target.value);
        let filtered = Object.values(data.cardData);
        let filtered_filter = filtered.filter(data => data.title.toLowerCase().includes(event.target.value))
        setDatas(filtered_filter)
    }

    return (
        <section className="py-2 absolute">
            <div className="row">
                <div className="col-11 mx-5 mb-4 container-fluid">
                    <ul  class="navbar-nav ml-auto  mt-1 position-container">
                    {/* <li class="nav-item dropdown" className='top-profil'> */}
                    {/* <div> */}
                        <a  width="1em" height="1em" viewBox="0 0 16 16" class="nav-link sticky-bottom align-items-center">
                        <select className='button-left mx-5'>
                            <option value="SD/MI">SD/MI</option>
                            <option value="SMP/MTS">SMP/MTS</option>
                            <option selected value="Pelajar Tingkat">Pelajar Tingkat</option>
                            <option value="SMA/SMK/MAN">SMA/SMK/MAN</option>
                        </select>
                        <select className='button-right mx-3'>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="kelas">Kelas</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="VI">VI</option>
                            <option value="VII">VII</option>
                            <option value="VII">VIII</option>
                            <option value="VII">IX</option>
                            <option value="VII">X</option>
                            <option value="VII">XI</option>
                            <option value="VII">XII</option>
                        </select>
                        <label className="mx-5 text-center form-lable h5">
                            <input
                                type="text"
                                className="from-control"
                                value={filter}
                                placeholder="Search"
                                button="Kelas-dropdown"
                                style={{ textAlign: 'center' }}
                                onChange={e => searchText(e)}
                            />
                            
                        </label>
                        <Link to="/Profile">
                            <img  className="img mx-5" src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" class="rounded-circle"
                                height="40" alt="Avatar" loading="lazy"/>
                        </Link>
                        </a>
                    {/* </div> */}
                    {/* </li> */}
                    </ul>
                </div>
                
                {datas.map((item, index) => {
                    return (
                        
                        <div className="col-11 col-md-2 col-lg-2 mx-3 mb-5" key={index}>
                            <div className="card p-0 overflow-hidden shadow" style={{maxHeight:"93%",width:"120%" }}>
                                <img src={item.img} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-title">{item.title}</h6>
                                    <p>{item.desc}</p>
                                    <div className='button-wrap'>
                                        <a className='button p-2' href={item.Link} target="blank">Baca Buku</a>
                                    </div>
                                    <Link to="/RakBukuSaya">
                                        <div className="tambahkankerak">
                                             {/* <p className='text-primary' href={item.Link} target="/RakBukuSaya">TambahkeRak</p> */}
                                            <p href="#" class="text-primary margin-2">TambahkeRak</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Search;