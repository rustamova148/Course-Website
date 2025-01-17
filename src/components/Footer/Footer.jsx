import './Footer.css' 

function Footer() {
  return (
    <div className='footer'>
      <div className='fooparts fooparts1'>
      <p className="logo">Coders</p>
      <div>
        <p style={{fontSize: '14px', color: 'gray'}}>Copyright © 2025 Div Academy</p> 
        <p style={{fontSize: '14px', color: 'gray'}}>Proqramlaşdırma kursları</p>
      </div>
      </div>
      <div className='fooparts'>
        <p>Akademiya haqqında</p>
        <p>Missiya və vizyon</p>
        <p>Vakansiyalar</p>
        <p>Sosial məsuliyyət</p>
        <p>Korporativ əməkdaşlıq</p>
        <p>Əlaqə</p>
      </div>
      <div className='fooparts'>3</div>
      <div className='fooparts'>4</div>
    </div>
  )
}

export default Footer