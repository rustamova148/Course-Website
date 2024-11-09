import './Section1.css'
import house from '../../assets/house.png'

function Section1() {
  return (
    <div className='section1'>
      <h1 className="sec1-header">
        Gələcəyini necə inşa etmək istəyirsən?
      </h1>
      <div className="sec1-fields">
        <div className="field">
          <div className="field-img">
            <img src={house} alt="house" />
          </div>
          <div className="field-text">
          <h2>Fullstack Kadr Yetişdirmə Proqramı</h2>
          <p>HTML, CSS, Tailwind, JS, React, NextJS, NodeJS, MongoDB, XML, API, Git, Deployment</p>
          </div>
        </div>
        <div className="field">
        <div className="field-img">
            <img src={house} alt="house" />
          </div>
          <div className="field-text">
          <h2>Digital Marketing Kadr Yetişdirmə Proqramı</h2>
          <p>Marketinqə giriş, Rəqəmsal marketinq, SMM, Kontent ilə işləmə, Google Ads və s.</p>
          </div>
        </div>
        <div className="field">
        <div className="field-img">
            <img src={house} alt="house" />
          </div>
          <div className="field-text">
            <h2>Data Science Kadr Yetişdirmə Proqramı</h2>
            <p>Data Science-a giriş, Python, SQL, Data analitika, Machine Learning, Süni intellekt</p>
          </div>
        </div>
        <div className="field">
        <div className="field-img">
            <img src={house} alt="house" />
          </div>
          <div className="field-text">
            <h2>IT Project Management kursu</h2>
            <p>Agile, Waterfall metodları, Project structures, Soft skills, Risk analysis və s.</p>
          </div>
        </div>
        <div className="field">
        <div className="field-img">
            <img src={house} alt="house" />
          </div>
          <div className="field-text">
            <h2>Product Owner kursu</h2>
          </div>
        </div>
        <div className="field">
        <div className="field-img">
            <img src={house} alt="house" />
          </div>
          <div className="field-text">
            <h2>IT Biznes Analitika kursları</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1