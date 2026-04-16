import React from 'react'

const colorMap = {
	amber: "bg-amber-500 border-amber-500 hover:bg-amber-400",
	blue: "bg-blue-500 border-blue-500 hover:bg-blue-400",
	red: "bg-red-500 border-red-500 hover:bg-red-400",
	gray: "bg-gray-500 border-gray-500 hover:bg-gray-400",
	purple: "bg-purple-500 border-purple-500 hover:bg-purple-400",
	lime: "bg-lime-500 border-lime-500 hover:bg-lime-400",
	yellow: "bg-yellow-500 border-yellow-500 hover:bg-yellow-400",
	neutral: "bg-neutral-500 border-neutral-500 hover:bg-neutral-400",
	stone: "bg-stone-500 border-stone-500 hover:bg-stone-400",
	zinc: "bg-zinc-500 border-zinc-500 hover:bg-zinc-400",
};

const textMap = {
	white: "text-white",
	black: "text-black",
};


const ShoppingCard = ({card}) => {
  return (
		<div
			className={`w-[24vw] h-[65vh] rounded-2xl overflow-hidden border relative transition-all duration-300 hover:scale-[1.02] ${
				colorMap[card.color]
			}`}
		>
			{/* Image */}
			<div className='image absolute top-0 left-0 w-full h-full object-cover mask-[linear-gradient(to_bottom,black_40%,transparent)]'>
				<img
					src={card.imageUrl}
					alt={card.title}
					className='mask-[linear-gradient(to_bottom,black_70%,transparent)] w-full'
				/>
			</div>

			{/* Content */}
			<div
				className={`absolute bottom-0 left-0 w-full p-4 flex justify-between items-end ${
					textMap[card.textColor]
				}`}
			>
				{/* Text */}
				<div className='max-w-[70%]'>
					<h3 className='text-lg font-bold leading-tight'>{card.title}</h3>
					<p className='text-sm opacity-90 line-clamp-2'>
						{card.description}
					</p>
				</div>

				{/* Button */}
				<a
					href={card.link}
					target='_blank'
					rel='noopener noreferrer'
					className='px-3 py-2 rounded-lg text-xs font-medium bg-white text-black hover:bg-gray-200 transition duration-300'
				>
					Visit
				</a>
			</div>
		</div>
		// <div className='w-[24vw] h-[65vh] bg-gray-500 rounded-2xl overflow-hidden border border-amber-500 relative'>
		// 	<div className='image absolute top-0 left-0 w-full h-full object-cover mask-[linear-gradient(to_bottom,black_40%,transparent)]'>
		// 		<img
		// 			src='https://m.media-amazon.com/images/I/51MZ55vbGaL.jpg'
		// 			alt=''
		// 			className='mask-[linear-gradient(to_bottom,black_70%,transparent)] w-full'
		// 		/>
		// 	</div>
		// 	<div className='absolute bottom-0 left-0 w-full p-4 text-white flex justify-between items-center'>
		// 		<div>
		// 			<h3 className='text-xl font-bold'>Shopping Card</h3>
		// 			<p className='text-lg'>Description By AI</p>
		// 		</div>
		//     <div>
		//       <button className=' px-4 py-2 rounded-lg mt-4 hover:bg-amber-400 hover:text-white transition duration-300 capitalize text-sm bg-white text-black cursor-pointer'>go to link</button>
		//     </div>
		// 	</div>
		// </div>
  );
}

export default ShoppingCard
