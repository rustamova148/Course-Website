import './Section7.css'

const Section7 = () => {
  return (
    <div className='sec7'>
        <div className='s7part1'>
            <p>Müraciət et</p>
            <p>Akademiya və tədris proqramları haqqında daha ətraflı məlumat üçün qeydiyyatdan keçin, biz sizinlə əlaqə saxlayaq.</p>
        </div>
        <form className='s7form'>
        <input type="text" placeholder="Ad soyadınız" style={{fontSize: "15px"}} />
        <input type="tel" placeholder="(055) 000 00 00" style={{fontSize: "15px"}} />
        <select className="head-reg-select" style={{color: "gray", fontSize: "15px"}}>
              <option value="" disabled selected hidden>Tədrisi seçin</option>
              <option value="fullstack">Fullstack Proqramlaşdırma</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="product-owner">Product Owner</option>
              <option value="it-project-management">IT Project Management</option>
              <option value="it-biznes-analitika">IT Biznes Analitika</option>
        </select>
        <input type="submit" value="Sorğu göndər" />
        </form>
    </div>
  )
}

export default Section7