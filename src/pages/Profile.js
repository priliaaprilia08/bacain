// import React from "react";
// import {useState, useRef} from 'react';
// import './Profile.css';
// import {CameraOutline} from 'react-ionicons';
// import Avatar from "react-avatar-edit"

//     const Profile = () => {
//         const [picture, setPicture] = useState(null);
//         const [imgPreview, setImgPreview]= useState(null);
//         const [types,setTypes]= useState("");
//         const [data, setData]=useState({});
//         const [preview, setPreview]= useState(null);
//         const img = useRef()

//         const [form, setForm] = useState({
//             name: '',
//             email: '',
//             jenjang: 'SD/MI',
//             password: ''
//         });

//         const [error, setError] = useState({
//             name: ''
//         })
        
//         const onChange = (e) => {
//             const { value, name} = e.target; 

//             setForm((state) => ({
//               ...state,
//               [name]: value
//             }));
//         }

//         const showData = () => {
//             console.log('Form: ', form);
//         }

//         const onSubmit = (e) => {
//             e.preventDefault();

//             if (form.name.length < 5) {
//                 setError((state) => ({
//                     name: 'Too short'
//                 }));
//                 return;
//             }   else {
//                 setError((state) => ({
//                     ...state,
//                     name:''
//                 }));
//             };
            
//             showData();
        
//         }
        
//         const handleImageChange = (e) => {
//           setError(false);
//           const selected = e.target.files[0];
//           const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
//           if (selected && ALLOWED_TYPES.includes(selected.type)) {
//             setTypes(selected.type);
//             let reader = new FileReader();
//             reader.onloadend = () => {
//               setImgPreview(reader.result);
//               console.log(reader.result);
//             };
//             reader.readAsDataURL(selected);
//           } else {
//             setError(true);
//           }
//         };
//         const [src, setSrc] = useState(null);
      
//         const onClose = () => {
//           setPreview(null);
//         };
//         const onCrop = (view) => {
//           setPreview(view);
//         };
      
//         const onBeforeFileLoad = (elem) => {
//           if (elem.target.files[0].size > 716800) {
//             alert("File is too big!");
//             elem.target.value = "";
//           }
//         };
      
//         const onFileLoad = (view) => {
//           console.log(view);
//         };

//         return (
//             <div className="compp">
//                 <header className="judul">Profile Saya</header>
//                 <div className="data-left">
//                   <form className="form-group justify-content-center p-100 mx-5 col-sm-5 h-100px w-100px h6" onSubmit={onSubmit}>
//                       <div class="form-group">
//                       <label>
//                         Nama:
//                         <input  required minLength={5} onChange={onChange} name="name" value={form.name}/>
//                       </label>
//                       {!!error.name && (<div>
//                           <i>{error.name}</i>
//                           </div>
//                       )}
//                       <hr />
//                       </div>

//                       <div class="form-group">
//                       <label>
//                         Email:
//                         <input onChange={onChange} name="email" value={form.email}/>
//                       </label>
//                       <hr />
//                       </div>

//                       <div class="form-group">
//                       <label>
//                         Password:
//                         <input onChange={onChange} name="password" value={form.password}/>
//                       </label>
//                       <hr />
//                       </div>
                      
//                       <div class="form-group">
//                       <label>
//                         Jenjang:
//                         <select onChange={onChange} value={form.jenjang} name="jenjang">
//                           <option value="SD/MI">SD/MI</option>
//                           <option value="SMP/MTS">SMP/MTS</option>
//                           <option value="SMA/SMK/MAN">SMA/SMK/MAN</option>
//                         </select>
//                       </label>
//                       </div>
//                       <hr/>

//                       <div>
//                       <button type="submit" class="btn btn-primary">Save</button>
//                       </div>
//                   </form>

//                   <div className="data-right">
//                     <div className="flex justify-center items-center w-full h-screen bg-slate-50">
//                       <form className="flex flex-col w-[40w] h-auto bg-slate-100 rounded-lg shadow-xl items-center space-y-1 py-3">
//                         <div className="flex flex-col w-40 h-40 relative">
//                           <Avatar width={390} height={235} onCrop={onCrop} onClose={onClose} handleImageChange={handleImageChange } onFileLoad={onFileLoad} onChange={(e) => {
//                             console.log(e.target.value);
                            
//                           }}  />
//                           <div>
//                             {imgPreview && ( <button className="buttonhapus" onClick={() => setImgPreview(null)}>hapus foto</button>)}
//                           </div>
//                         </div>
//                       </form>
//                     </div> 
//                   </div>
//               </div>
//           </div>
//         );
//     }

// export default Profile;

import React, { useState, useEffect } from "react";

import "./Profile.css";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import backrek from "../Img/backrek.png";
import Avatar from "react-avatar-edit";
// import ViewTypes from "scheduler-react/lib/ViewTypes";

const Profile = ({ setLoading }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState({});
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [types, setTypes] = useState("");
  const [preview, setPreview] = useState(null);
  const params = useParams();

  const saveData = async () => {
    let body = {
      name: data.name,
      umur: data.umur,
      jenjang: data.jenjang,
      institusi: data.institusi,
      foto: preview == null ? imgPreview : preview,
      type: types,
    };
    const response = await axios.patch(
      `https://bacain.herokuapp.com/api/profil/${params.id}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.reload();
    return response;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bacain.herokuapp.com/api/profil/${params.id}`
        );
        await setData(response.data.data);
        setImgPreview(response.data.data.foto);
        if (response.data.data.jenjang !== undefined)
          setText(response.data.data.jenjang);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      setTypes(selected.type);
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
        console.log(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };
  const [src, setSrc] = useState(null);

  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 716800) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onFileLoad = (view) => {
    console.log(view);
  };

  return (
    <div className="wrapper-profil">
      <div className="content-profil">
        <div className="content-inside-judul">
          {/* <div className="judul"> */}
            <h2 className="header">PROFILE SAYA</h2>
          {/* </div> */}
          {/* <div className="button-logout">
            <Link to={"/"}>
              <akeluar>Keluar</akeluar>
            </Link>
          </div> */}

          {error && <p className="errorMsg">file tidak disuport</p>}
          <div
            className="imgPreview"
            style={{
              background: imgPreview
                ? `url("${imgPreview}") no-repeat center/cover`
                : "#5463ff",
            }}
          >
            {!imgPreview && (
              <>
                {/* <p>masukan gambar</p> */}
                {/* <label
                  htmlFor="fileUpload"
                  className="customFileUpload"
                >
                  <img
                    src={user}
                    className="imageuser"
                    onChange={(e) =>
                      setData({ ...data, foto: e.target.value })
                    }
                  />
                </label> */}
                <Avatar
                  width={200}
                  height={150}
                  src={src}
                  onCrop={onCrop}
                  onClose={onClose}
                  onBeforeFileLoad={onBeforeFileLoad}
                  label="Masukan Gambar"
                  onFileLoad={onFileLoad}
                  className="imageuser"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setData({ ...data, foto: e.target.value });
                  }}
                />
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleImageChange}
                />
                {/* <span>(jpg, jpeg, png)</span> */}
              </>
            )}
          </div>
          {/* <div className="button-logout">
            <Link to={"/"}>
              <akeluar>Keluar</akeluar>
            </Link>
          </div>
          <button className="profile-logo-button" onClick={saveData}>
            Save
          </button> */}
          {imgPreview && (
            <button
              className="buttonhapus"
              onClick={() => setImgPreview(null)}
            >
              remove image
            </button>
          )}
          <div className="column-judul">
            <div className="column1">
              <a1>
                Nama :
                <input
                  className="margin"
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }
                />
              </a1>
              <div className="column1">
              <a2>
                Umur :
                <input
                  className="margin"
                  value={data.umur}
                  onChange={(e) =>
                    setData({ ...data, umur: e.target.value })
                  }
                />
              </a2>
              </div>
            </div>
            <div className="column1">
              <a3>
                Jenjang :
                <input
                  className="margin"
                  value={data.jenjang}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                />
              </a3></div>
              <div className="column1">
              <a4>
                Sekolah :
                <input
                  className="margin"
                  value={data.institusi}
                  onChange={(e) =>
                    setData({ ...data, nomor: e.target.value })
                  }
                />
              </a4>
            </div>
          <Link to="/">
            <button className="button-logout">Keluar</button>
          </Link>
          <button className="profile-logo-button" onClick={saveData}>
            Save
          </button>
          </div>
          {/* <div className="textfield">
            <TextField
              variant="filled"
              multiline
              className="field"
              value={data.cerita}
              placeholder={`ceritakan tentang diri kamu ${text.length}/256`}
              onChange={(e) => {
                setData({ ...data, cerita: e.target.value });
                setText(e.target.value);
              }}
              inputProps={{ maxLength: 256 }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;