import "./Section2.css";
import pk1 from '../../assets/proqramlasdirma-kursu-24saat.png'
import pk2 from '../../assets/proqramlasdirma-kursu-1.png'
import pk3 from '../../assets/proqramlasdirma-kursu-2.png'
import pk4 from '../../assets/proqramlasdirma-kursu-3.png'
import pk5 from '../../assets/proqramlasdirma-kursu-4.png'
import pk6 from '../../assets/proqramlasdirma-kursu-5.png'
import pk7 from '../../assets/proqramlasdirma-kursu-diploma1.png'

function Section2() {
  return (
    <div className="sec2">
      <h1 className="sec2-header">Niyə biz?</h1>
      <div className="sec2-box">
        <div className="sec2-part1">
          <div>
            <img src={pk1} />
            <h5>24 saat açıq mərkəz</h5>
          </div>
          <div>
            <img src={pk2} />
            <h5>Karyera mərkəzi</h5>
          </div>
          <div>
            <img src={pk3} />
            <h5>Hər gün praktiki məşğələ</h5>
          </div>
          <div>
            <img src={pk4} />
            <h5>Mentor dəstəyi</h5>
          </div>
        </div>
        <div className="sec2-part2">
          <div>
            <img src={pk5} />
            <h5>İnternshiplərə qəbul</h5>
          </div>
          <div>
            <img src={pk6} />
            <h5>Bootcamp sistemi</h5>
          </div>
          <div>
            <img src={pk7} />
            <h5>Dərəcəli diplom və sertifikat</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
