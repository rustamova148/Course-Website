import './Section6.css'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.png'
import p9 from '../../assets/p9.png'
import p10 from '../../assets/p10.png'
import p11 from '../../assets/p11.png'
import p12 from '../../assets/p12.png'

const Section6 = () => {
  return (
    <div className='sec6'>
        <h2 style={{fontSize: '30px'}}>Partnyorlarımız</h2>
        <div className="partnyor-cont">
             <div>
                <img src={p1} alt="p1" />
             </div>
             <div>
                <img className='p2img' src={p2} alt="p2" />
             </div>
             <div>
                <img src={p3} alt="p3" />
             </div>
             <div>
                <img src={p4} alt="p4" />
             </div>
             <div>
                <img src={p5} alt="p5" />
             </div>
             <div>
                <img src={p6} alt="p6" />
             </div>
             <div>
                <img className='p7img' src={p7} alt="p7" />
             </div>
             <div>
                <img className='p8img' src={p8} alt="p8" />
             </div>
             <div>
                <img src={p9} alt="p9" />
             </div>
             <div>
                <img src={p10} alt="p10" />
             </div>
             <div>
                <img src={p11} alt="p11" />
             </div>
             <div>
                <img src={p12} alt="p12" />
             </div>
        </div>
    </div>
  )
}

export default Section6