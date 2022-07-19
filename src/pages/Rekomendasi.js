
import { useState } from 'react';
import Slider from 'react-slick';
import './Rekomendasi.css';

// import icons
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';

// import images
import book1 from '../Img/book1.jpg';
import book2 from '../Img/book2.jpg';
import book3 from '../Img/book3.png';
import book4 from '../Img/book4.jpg';
import { Link } from "react-router-dom";



const images = [book1, book2, book3, book4];

function SampleNextArrow({onClick}) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

function Rekomendasi() {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-back">
        <h2 className='header'>Rekomendasi Buku App Bacain</h2>
          <div className="slider">
        
        <Slider {...settings}>
            {
              images.map((img, index)=>(
                <div className={index === slideIndex? 'slide slide-active': 
                'slide'} key={index}>
                  <Link to="/Koleksi">
                    <img src={img} alt="" />
                  </Link>
                </div>
              ))
            }
        </Slider>
        {/* <div className="sign-left">
          <img src={logod} alt="" />
       </div> */}
          </div>
     </div>
  );
}

export default Rekomendasi;