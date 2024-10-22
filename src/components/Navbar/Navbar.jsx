import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <abbr title="proqramlaşdırma kursu">
        <img src="/src/assets/logo-1.png" alt="logo" />
      </abbr>
      <ul>
        <li> 
            <a href="#" className="navlinkdrop">Akademiya</a> 
            <i className="fa-solid fa-angle-down"></i>
        </li>
        <li>
            <a href="#" className="navlinkdrop">Kurslar</a> 
            <i className="fa-solid fa-angle-down"></i>
        </li>
        <li> 
            <a href="#" className="navlinkdrop">Karyera mərkəzi</a>
            <i className="fa-solid fa-angle-down"></i>
        </li>
        <li>
        </li>
        <li>
        </li>
      </ul>
      <div className="nav-third-box">
        <div className="mode">
          <span>
            İşıqları <br /> söndür
          </span>
          <div className="mode-btn-box">
            <input type="checkbox" id="switch-mode" />
            <label htmlFor="switch-mode" className="mode-btn"></label>
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
    </nav>
  );
}

export default Navbar;
