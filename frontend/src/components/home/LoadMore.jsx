import React from 'react'

const LoadMore = () => {
  return (
    <div>
      <button className="bg-zinc-950 text-white py-4 px-6 rounded-4xl hover:bg-zinc-800 transition duration-300 fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3 cursor-pointer">
       <span className='rounded-full border border-white w-10 h-10 flex justify-center items-center'>+</span>
        Add More
      </button>
    </div>
  )
}

export default LoadMore
