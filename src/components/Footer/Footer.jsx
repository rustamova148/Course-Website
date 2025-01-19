import './Footer.css' 
// eslint-disable-next-line react/prop-types
function Footer({isDarkMode, onToggle}) {
  return (
    <div className='footer'>
      <div className='fooparts1'>
      <p className="flogo">Coders</p>
      <div>
        <p style={{fontSize: '14px', color: 'gray'}}>Copyright © 2025 Coders Academy</p> 
        <p style={{fontSize: '14px', color: 'gray'}}>Proqramlaşdırma kursları</p>
      </div>
      </div>
      <div className='fooparts fooparts2'>
        <b><p style={{color: '#212529', fontSize: '15px'}}>Akademiya haqqında</p></b>
        <b><p style={{color: '#212529', fontSize: '15px'}}>Missiya və vizyon</p></b>
        <b><p style={{color: '#212529', fontSize: '15px'}}>Vakansiyalar</p></b>
        <b><p style={{color: '#212529', fontSize: '15px'}}>Sosial məsuliyyət</p></b>
        <b><p style={{color: '#212529', fontSize: '15px'}}>Korporativ əməkdaşlıq</p></b>
        <b><p style={{color: '#212529', fontSize: '15px'}}>Əlaqə</p></b>
      </div>
      <div className='fooparts fooparts3'>
        <p style={{color: '#585858', fontSize: '14px'}}>Fullstack Proqramlaşdırma</p>
        <p style={{color: '#585858', fontSize: '14px'}}>Digital Marketing</p>
        <p style={{color: '#585858', fontSize: '14px'}}>Data Science</p>
        <p style={{color: '#585858', fontSize: '14px'}}>Product Owner</p>
        <p style={{color: '#585858', fontSize: '14px'}}>IT Project Management</p>
        <p style={{color: '#585858', fontSize: '14px'}}>IT Biznes Analitika</p>
      </div>
      <div className='fooparts'>
        <div className='fsocials'>
          <div>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div>
            <i className="fa-brands fa-tiktok"></i>
          </div>
          <div>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <p style={{color: '#585858', fontSize: '15px'}}>Telefon: + (994) 70 256 96 00</p>
        <div className="mode">
            {isDarkMode ? <span>İşıqları <br /> yandır</span> 
            : <span>İşıqları <br /> söndür</span>}
          <div className="mode-btn-box">
            <input type="checkbox" id="footer-switch-mode" 
            checked={isDarkMode} onChange={onToggle}
            />
            <label htmlFor="footer-switch-mode" className="mode-btn"></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer