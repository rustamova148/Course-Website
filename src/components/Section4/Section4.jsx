import './Section4.css'
import BlogCard from '../BlogCard/BlogCard'
import { blogdata } from '../data'

const Section4 = () => {
  return (
    <div className='sec4'>
      <h2 className='blogh2'>Blog</h2>
        <div className="blogs">
            {blogdata.map((b,i)=> 
                (
                  <BlogCard key={i} title={b.title} id={b.id} img={b.img} kom={b.kom} />
                )  
            )}
        </div>
    </div>
  )
}

export default Section4