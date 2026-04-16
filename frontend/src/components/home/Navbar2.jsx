import React, { useState } from 'react'

const Navbar2 = () => {
    const items = [
        "clothing",
        "electronics",
        "home decor",
        "books",
    ]
    const [active, setActive] = useState("clothing")
  return (
    <div className='px-6 w-full  mt-5 flex items-center justify-start gap-2 overflow-x-auto'>
        {items.map((item, index) => (
            <span
                key={index}
                className={`text-black/90 text-[1.6rem] px-4 py-1 rounded-full mr-3 cursor-pointer capitalize border ${active === item ? 'border-black/30 bg-black text-white/90' : 'border-black/30'}`}
                onClick={() => setActive(item)}
            >
                {item}
            </span>
        ))}
    </div>
  )
}

export default Navbar2
