import React from "react";
import Logo from "../Logo";
import { RiMessageAi3Line, RiSearchAiLine } from "@remixicon/react";
const Navbar = () => {
	return (
		<div className='flex px-4 py-5 items-center justify-between bg-zinc-950/95'>
			{/* logo */}
			{/* search bar */}
			{/* ai chat bot */}
			{/* profile picture */}
			<Logo font_size={"text-[2rem]"} className={"text-white/90"} />
			<input
				type='text'
				placeholder='Search Like NEVER Before'
				className='w-1/3 rounded-3xl px-5 py-2 focus:outline-none bg-zinc-800 text-white text-[1.4rem] -ml-24'
			/>
			<div className='flex gap-3'>
				<div className='flex gap-5 items-center bg-zinc-800/90 px-4 py-1 rounded-3xl cursor-pointer'>
					<RiMessageAi3Line color='white' />
					<span className='text-white/90 ai-chat text-[1.2rem]'>
						AI Chat
					</span>
				</div>
				<div className='flex gap-5 items-center bg-zinc-800/90 px-1 pl-4 py-1 rounded-3xl cursor-pointer'>
					<span className='text-white/90 text-[1.2rem]'>Profile</span>
					<img
						src='https://img.freepik.com/premium-vector/man-empty-avatar-casual-business-style-vector-photo-placeholder-social-networks-resumes_885953-434.jpg?semt=ais_hybrid&w=740&q=80'
						alt=''
						className='h-10 rounded-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
