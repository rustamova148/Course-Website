import { useParams } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
const { id } = useParams();
console.log(id);
  return (
    <div className='blog'>
        Blog {id}
    </div>
  )
}

export default Blog