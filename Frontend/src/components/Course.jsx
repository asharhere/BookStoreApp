import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'



function Course() {
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-20 text-center'>
            <h1 className='text-2xl md:text-4xl'>
            We're Delighted to have you <span className='text-pink-500'> here! :)</span> </h1>
            <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur dolore culpa laborum natus dolores porro necessitatibus fuga excepturi labore dolorum ea nobis accusamus dicta esse reprehenderit quidem amet assumenda veritatis laboriosam ad eaque, obcaecati hic dignissimos. Porro quis delectus officia repellat omnis facere voluptate quae rerum recusandae exercitationem commodi labore quam, explicabo aliquid velit?.</p>
           <Link to='/'>
            <button className='mt-5 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>back</button>
           </Link>
        </div>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-4'>
          {list.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default Course