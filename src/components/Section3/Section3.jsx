import "./Section3.css";
import { Select } from "antd";
import { useEffect, useState } from "react";

const Section3 = () => {
  const [selectedField, setSelectedField] = useState('- - Sahəni seçin - -');
  const [selectedRadio1, setSelectedRadio1] = useState('coders');
  const [rangeValue1, setRangeValue1] = useState(0);
  const [selectedRadio2, setSelectedRadio2] = useState('weak');
  const [rangeValue2, setRangeValue2] = useState(0);

  const handleChange = (value) => {
    setSelectedField(value);
  };

  const handleChange2 = (e) => {
    setSelectedRadio1(e.target.value);
  }
  
  const handleChange3 = (e) => {
    setSelectedRadio2(e.target.value);
  }

  console.log(selectedField);
  console.log(selectedRadio1);
  console.log(rangeValue1);
  console.log(selectedRadio2);
  console.log(rangeValue2);

  useEffect(() => {

    let initialSalary = selectedField == 'Fullstack Proqramlaşdırma' ? 600 
    : selectedField == 'Backend Proqramlaşdırma (PHP, Java, Python, NodeJS)' ? 900
    : selectedField == 'Digital Marketing (SMM)' ? 700
    : selectedField == '- - Sahəni seçin - -';
    
    let salary = initialSalary;
    let percent = 0;
    let month = 0;

    if(selectedField === 'Fullstack Proqramlaşdırma'){
      document.getElementById('jobs').innerHTML = 'Frontend developer, Software developer, Software engineer, Mobile FrontEnd Developer, Web developer, UI/UX developer, IT project manager';
    }else if(selectedField === 'Backend Proqramlaşdırma (PHP, Java, Python, NodeJS)'){
      document.getElementById('jobs').innerHTML = 'Backend developer, Web developer, Full-stack developer, Software developer, Software engineer, CTO, IT director, IT project manager';
    }else if(selectedField === 'Digital Marketing (SMM)'){
      document.getElementById('jobs').innerHTML = 'Head of Marketing, Rəqəmsal marketinq mütəxəssisi, SMM mütəxəssisi, Marketinq direktoru, Sahibkar';
    }else{
      document.getElementById('jobs').innerHTML = '';
    }

    if(salary != 0 && selectedField != '- - Sahəni seçin - -' && rangeValue1 != 0){
      month = 1;
    }else{
      month = 0;
    }

    if(selectedRadio1 === 'coders'){
      if(rangeValue1 == 0 || selectedField == '- - Sahəni seçin - -'){
        salary = 0
      }
    }else if(selectedRadio1 === 'self'){
      if(rangeValue1 == 0 || selectedField == '- - Sahəni seçin - -'){
          salary = 0;
      }else{
          salary -= 200;
        } 
    }else if(selectedRadio1 === 'other'){
      if(rangeValue1 == 0 || selectedField == '- - Sahəni seçin - -'){
        salary = 0;
      }else{
        salary -= 150;
      }
    }

    if(rangeValue1 > 2){
      if(selectedField == '- - Sahəni seçin - -'){
        salary = 0;
      }else{
        salary += (Number(rangeValue1) - 2) * 10;
      }
    }

    if(selectedRadio2 === 'weak'){
      salary += 0;
    }else if(selectedRadio2 === 'medium'){
      if(rangeValue1 == 0 || selectedField == '- - Sahəni seçin - -'){
        salary = 0;
      }else{
        salary += 40;
      }
    }else if(selectedRadio2 === 'excellent'){
      if(rangeValue1 == 0 || selectedField == '- - Sahəni seçin - -'){
        salary = 0;
      }else{
        salary += 70;
      }
    }

    if(rangeValue2 > 0){
      salary *= Math.pow(1.4,rangeValue2);
      if(rangeValue1 == 0 || selectedField == '- - Sahəni seçin - -'){
        percent = 0;
      }else{
        percent += rangeValue2 * 20;
      }
    }
    

    document.getElementById('salary').innerHTML = Math.round(salary);
    document.getElementById('percent').innerHTML = percent;
    document.getElementById('month').innerHTML = month;

  }, [selectedField, selectedRadio1, selectedRadio2, rangeValue1, rangeValue2])
   
    
  return (
    <div className="sec3">
      <div className="calc">
        <div className="calc-part calc-part1">
          <p className = 'calc-headp' style={{ fontSize: "35px", fontWeight: "600", marginBottom: '14px' }}>
            Gələcək maaşını hesabla &#128526;
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
                <p className='wayp' style={{fontSize: '20px', fontWeight: '600', color: '#404040' }}>Necə öyrənəcəksən?</p>
                <div className = 'wayradio' style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option1" id="coders" value = "coders"
                  checked = {selectedRadio1 === "coders"} 
                  onChange={handleChange2}/> <label htmlFor="coders">Coders-də</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option1" id="self" value = "self" 
                  checked = {selectedRadio1 === "self"} 
                  onChange={handleChange2}/><label htmlFor="self">Özüm</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option1" id="other" value="other" 
                  checked = {selectedRadio1 === "other"} 
                  onChange={handleChange2}/><label htmlFor="other">Digər kurslarda</label>
                  </div>
                </div>
              </div>
              <div className='rgv1' style={{width: '100%', height: '80px', border: "1px solid #c9c9c9", padding: "10px", borderRadius: '7px'}}>
                  <span className='rgv1-span' style={{color: '#969696', fontSize: '14px', display: 'inline-block', marginBottom: '7px'}}>Gündə neçə saat məşğul olacaqsan?</span> <br />
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                  <span>{rangeValue1}</span>
                  <span>saat</span>
                  </div> <br />
                  <input type="range" min="0" max="12" value={rangeValue1} style={{width: '100%'}}
                  onChange={(e) => setRangeValue1(e.target.value)} />
              </div>
              <div className="language-skills" style={{display: 'flex', flexDirection: 'column', gap: '13px'}}>
                <p className='langp' style={{fontSize: '20px', fontWeight: '600', color: '#404040' }}>İngilis dili biliyin</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option2" id="weak" value="weak"
                  checked = {selectedRadio2 === "weak"} 
                  onChange={handleChange3}/> <label htmlFor="weak">Zəif</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option2" id="medium" value="medium"
                  checked = {selectedRadio2 === "medium"} 
                  onChange={handleChange3}/><label htmlFor="medium">Orta</label>
                  </div>
                  <div style={{display: 'flex', gap: '5px'}}>
                  <input type="radio" name = "option2" id="excellent" value="excellent"
                  checked = {selectedRadio2 === "excellent"} 
                  onChange={handleChange3}/><label htmlFor="excellent">Əla</label>
                  </div>
                </div>
              </div>
              <div className = 'rgv2' style={{width: '100%', height: '80px', border: "1px solid #c9c9c9", padding: "10px", borderRadius: '7px'}}>
                  <span className='rgv2-span' style={{color: '#969696', fontSize: '14px', display: 'inline-block', marginBottom: '7px'}}>Sahə üzrə iş təcrübən</span> <br />
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
          <p style={{ fontSize: "17px", fontWeight: "600", color: "#3b3b3b" }}
          className="salaryp">
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
            <span id='salary'></span>
            <i className="fa-solid fa-manat-sign manatsign"></i>
          </p>
          <hr />
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p style={{ color: "grey", fontSize: "14px" }} 
            className="invest">
              İnvestisiyanın geri dönüş müddəti
            </p>
            <p style={{ fontSize: "25px", fontWeight: "600", display: 'flex', gap: '3px' }}>
              <span id="month">0</span>
              <span>ay</span>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p style={{ color: "grey", fontSize: "14px" }}
            className="futurej">Gələcək vəzifən</p>
            <p id="jobs" style={{ fontSize: "23px", fontWeight: "600" }}></p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p style={{ color: "grey", fontSize: "14px" }}
            className="abroadof">
              Xarici şirkətlərdən iş təklifi alma ehtimalın
            </p>
            <p style={{ fontSize: "25px", display: "flex", fontWeight: "600" }}>
              <span id='percent'>0</span>
              <span>%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
