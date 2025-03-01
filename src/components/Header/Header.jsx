import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

function Header() {

  return (
    <div className="header">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay = {{delay: 6000}}
      >
        <SwiperSlide>
          <div className="header-slide">
            <h1>Proqramlaşdırma kursları
            haqqında bildiklərini unut</h1>
            <p>İntensiv formada hər gün tədris + praktiki məşğələ ilə proqramlaşdırmanı rahat və qalıcı şəkildə öyrəndikdən sonra təcrübə proqramlarına birbaşa qəbul ol</p>
            <a href="#" className="header-more">Daha ətraflı</a>
          </div>
          <div className="header-img-box">
          <div className="header-image"></div>
          <div className="header-img-img">
          <img src={slider1} alt="slider1" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-slide">
            <h1>İş axtarışında artıq qaydaları sən yaz !</h1>
            <p>Seçim sənindir: Prestijli şirkətlərdə yüksək maaşla işləmək, yaxud freelancer olaraq öz evindən çıxmadan dünyaya xidmət satmaq...</p>
            <a href="#" className="header-more">Daha ətraflı</a>
          </div>
          <div className="header-img-box">
          <div className="header-image"></div>
          <div className="header-img-img">
          <img src={slider2} alt="slider2" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-slide">
            <h1>#GələcəyiYazanlar dəstəsinə qoşul</h1>
            <p>Gələcəyi Yazanlar olmaq üçün ilk addımı at, proqramlaşdırma öyrən, öz gələcəyini özün yaz !</p>
            <a href="#" className="header-more">Daha ətraflı</a>
          </div>
          <div className="header-img-box">
          <div className="header-image"></div>
          <div className="header-img-img">
          <img src={slider3} alt="slider3" />
          </div>
          </div>
        </SwiperSlide>
        <div className="header-registr">
          <h3>Qeydiyyatdan keç</h3>
          <form>
            <select className="head-reg-select" style={{color: "gray", fontSize: "15px"}}>
              <option value="" disabled selected hidden>Kursu seçin</option>
              <option value="fullstack">Fullstack Proqramlaşdırma</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="product-owner">Product Owner</option>
              <option value="it-project-management">IT Project Management</option>
              <option value="it-biznes-analitika">IT Biznes Analitika</option>
            </select>
            <div className="select-arrows">
            <i className="fa-solid fa-caret-up"></i>
            <i className="fa-solid fa-caret-down"></i>
            </div>
            <input type="text" placeholder="Ad soyadınız" style={{fontSize: "15px"}} />
            <input type="tel" placeholder="(055) 000 00 00" style={{fontSize: "15px"}} />
            <input type="email" placeholder="Email adresiniz" style={{fontSize: "15px"}} />
            <button style={{fontSize: "15px"}}>Göndər</button>
          </form>
        </div>
      </Swiper>
    </div>
  );
}

export default Header;
