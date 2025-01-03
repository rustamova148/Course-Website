import "./Section3.css";
import { Select } from "antd";
import { useState } from "react";

const Section3 = () => {
  const [rangeValue1, setRangeValue1] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="sec3">
      <div className="calc">
        <div className="calc-part calc-part1">
          <p style={{ fontSize: "40px", fontWeight: "600", marginBottom: '14px' }}>
            Gələcək maaşını hesabla
          </p>
          <div className="calc-inputs" style={{display: 'flex', flexDirection: 'column', gap: '20px'}} >
              <Select
                defaultValue="- - Sahəni seçin - -"
                style={{
                  width: '100%',
                  height: '60px',
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "- - Sahəni seçin - -",
                    label: "- - Sahəni seçin - -",
                  },
                  {
                    value: "Fullstack Proqramlaşdırma",
                    label: "Fullstack Proqramlaşdırma",
                  },
                  {
                    value: "Backend Proqramlaşdırma (PHP, Java, Python, NodeJS)",
                    label: "Backend Proqramlaşdırma (PHP, Java, Python, NodeJS)",
                  },
                  {
                    value: "Digital Marketing (SMM)",
                    label: "Digital Marketing (SMM)",
                  }
                ]}
              />
              <div className="way" style={{display: 'flex', flexDirection: 'column', gap: '13px'}}>
                <p style={{fontSize: '20px', fontWeight: '600', color: '#404040' }}>Necə öyrənəcəksən?</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option1" id="coders" /> <label htmlFor="coders">Coders-də</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option1" id="self" /><label htmlFor="self">Özüm</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option1" id="other" /><label htmlFor="other">Digər kurslarda</label>
                  </div>
                </div>
              </div>
              <div style={{width: '100%', height: '80px', border: "1px solid #c9c9c9", padding: "10px", borderRadius: '7px'}}>
                  <span style={{color: '#969696', fontSize: '14px', display: 'inline-block', marginBottom: '7px'}}>Gündə neçə saat məşğul olacaqsan?</span> <br />
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                  <span>{rangeValue1}</span>
                  <span>saat</span>
                  </div> <br />
                  <input type="range" min="0" max="12" value={rangeValue1} style={{width: '100%'}}
                  onChange={(e) => setRangeValue1(e.target.value)} />
              </div>
              <div className="language-skills" style={{display: 'flex', flexDirection: 'column', gap: '13px'}}>
                <p style={{fontSize: '20px', fontWeight: '600', color: '#404040' }}>İngilis dili biliyin</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option2" id="weak" /> <label htmlFor="weak">Zəif</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option2" id="medium" /><label htmlFor="medium">Orta</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option2" id="excellent" /><label htmlFor="excellent">Əla</label>
                  </div>
                </div>
              </div>
              <div style={{width: '100%', height: '80px', border: "1px solid #c9c9c9", padding: "10px", borderRadius: '7px'}}>
                  <span style={{color: '#969696', fontSize: '14px', display: 'inline-block', marginBottom: '7px'}}>Sahə üzrə iş təcrübən</span> <br />
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                  <span>{rangeValue2}</span>
                  <span>il</span>
                  </div> <br />
                  <input type="range" min="0" max="5" value={rangeValue2} style={{width: '100%'}}
                  onChange={(e) => setRangeValue2(e.target.value)} />
              </div>
          </div>
        </div>
        <div className="calc-part calc-part2">
          <p style={{ fontSize: "17px", fontWeight: "600", color: "#3b3b3b" }}>
            Ortalama maaşın &#x1F680;
          </p>
          <p
            style={{
              fontSize: "50px",
              fontWeight: "600",
              color: "#3b3b3b",
              display: "flex",
              gap: "7px",
            }}
          >
            <span>2000</span>
            <i className="fa-solid fa-manat-sign"></i>
          </p>
          <hr />
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p style={{ color: "grey", fontSize: "14px" }}>
              İnvestisiyanın geri dönüş müddəti
            </p>
            <p style={{ fontSize: "25px", fontWeight: "600" }}>1 ay</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p style={{ color: "grey", fontSize: "14px" }}>Gələcək vəzifən</p>
            <p style={{ fontSize: "23px", fontWeight: "600" }}>
              Backend developer, Web developer, Full-stack developer, Software
              developer, Software engineer, CTO, IT director, IT project manager
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p style={{ color: "grey", fontSize: "14px" }}>
              Xarici şirkətlərdən iş təklifi alma ehtimalın
            </p>
            <p style={{ fontSize: "25px", display: "flex", fontWeight: "600" }}>
              <span>0</span>
              <span>%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
