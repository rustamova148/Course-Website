import { useRef, useState } from "react";
import "./Navbar.css";
import menuicon from '../../assets/menu-icon.svg'
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar({isDarkMode, onToggle}) {
const navRef = useRef();

  function openMenu(){
    if(navRef.current.style.opacity == "0" && navRef.current.style.visibility == "hidden"){
      navRef.current.style.opacity = "1";
      navRef.current.style.visibility = "visible";
    }else{
      navRef.current.style.opacity = "0";
      navRef.current.style.visibility = "hidden";
    }
  }

const [openSubmenu, setOpenSubmenu] = useState(null);

const toggleSubmenu = (id) => {
  setOpenSubmenu(openSubmenu === id ? null : id);
}
  return (
    <nav>
      <abbr title="proqramlaşdırma kursu">
      <NavLink to='/' className='logolink' >
      <p className="logo">Coders</p>
      </NavLink>
      </abbr>
      <ul className="mainul">
        <li> 
            <a href="#" className="navlinkdrop">Akademiya</a> 
            <i className="fa-solid fa-angle-down down"></i>
            <div className="nav-dropdown1">
               <ul className="drop-inside">
                  <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                    Akademiya haqqında
                  </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Missiya və vizyon
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Vakansiyalar
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Sosial məsuliyyət
                    </a>
                  </li>
               </ul>
            </div>
        </li>
        <li>
            <a href="#" className="navlinkdrop">Kurslar</a> 
            <i className="fa-solid fa-angle-down down"></i>
            <div className="nav-dropdown2">
              <ul className="drop-inside">
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Fullstack Kadr Yetişdirmə Proqramı
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Digital Marketing Kadr Yetişdirmə Proqramı
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Data Science Kadr Yetişdirmə Proqramı
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Product Owner kursu
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  IT Project Management kursu
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  IT Biznes Analitika kursu
                  </a>
                </li>
              </ul>
            </div>
        </li>
        <li> 
            <a href="#" className="navlinkdrop karyemer">Karyera mərkəzi</a>
            <i className="fa-solid fa-angle-down down"></i>
            <div className="nav-dropdown3">
              <ul className="drop-inside">
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Mərkəz haqda
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Gələcək maaşını hesabla
                  </a>
                </li>
              </ul>
            </div>
        </li>
        <li>
            <a href="#" className="navlink"><abbr title="Korporativ">Korporativ</abbr></a>
        </li>
        <li>
            <a href="#" className="navlink"><abbr title="Əlaqə">Əlaqə</abbr></a>
        </li>
      </ul>
      <div className="nav-third-box">
        <div className="mode">
            {isDarkMode === "dark" ? <span>İşıqları <br /> yandır</span> 
            : <span>İşıqları <br /> söndür</span>}
          <div className="mode-btn-box">
            <input type="checkbox" id="navbar-switch-mode" 
            checked={isDarkMode === "dark"} onChange={onToggle}
            />
            <label htmlFor="navbar-switch-mode" className="mode-btn"></label>
          </div>
        </div>
        <div className="nav-socials">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <a className="nav-btn">Müraciət et</a>

      </div>
      <div className="burger-menu">
      <button className="menubar-btn" onClick={openMenu}>
      <i className="fa-solid fa-bars-staggered menu-bar"></i>
      </button>
      <div className="resp-menu" ref={navRef}>
      <ul className="mainul2">
        <li onClick={()=>toggleSubmenu(1)}> 
            <a href="#" className="navlinkdrop">Akademiya</a> 
            <i className="fa-solid fa-angle-down down"></i>
            <div className={`nav-dropdown21 ${openSubmenu === 1 ? 'show-nav-dropdown2' : ''}`}>
               <ul className="drop-inside">
                  <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                    Akademiya haqqında
                  </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Missiya və vizyon
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Vakansiyalar
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src={menuicon} alt="icon"/>
                      Sosial məsuliyyət
                    </a>
                  </li>
               </ul>
            </div>
        </li>
        <li onClick={()=>toggleSubmenu(2)}>
            <a href="#" className="navlinkdrop">Kurslar</a> 
            <i className="fa-solid fa-angle-down down"></i>
            <div className={`nav-dropdown22 ${openSubmenu === 2 ? 'show-nav-dropdown2' : ''}`}>
              <ul className="drop-inside">
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Fullstack Kadr Yetişdirmə Proqramı
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Digital Marketing Kadr Yetişdirmə Proqramı
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Data Science Kadr Yetişdirmə Proqramı
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Product Owner kursu
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  IT Project Management kursu
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  IT Biznes Analitika kursu
                  </a>
                </li>
              </ul>
            </div>
        </li>
        <li onClick={()=>toggleSubmenu(3)}> 
            <a href="#" className="navlinkdrop karyemer">Karyera mərkəzi</a>
            <i className="fa-solid fa-angle-down down"></i>
            <div className={`nav-dropdown23 ${openSubmenu === 3 ? 'show-nav-dropdown2' : ''}`}>
              <ul className="drop-inside">
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Mərkəz haqda
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src={menuicon} alt="icon"/>
                  Gələcək maaşını hesabla
                  </a>
                </li>
              </ul>
            </div>
        </li>
        <li>
            <a href="#" className="navlink"><abbr title="Korporativ">Korporativ</abbr></a>
        </li>
        <li>
            <a href="#" className="navlink"><abbr title="Əlaqə">Əlaqə</abbr></a>
        </li>
      </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
