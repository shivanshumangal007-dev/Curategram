import React, { useState } from "react";
import { motion } from "motion/react";
const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<motion.div
			initial={{ scale: 0.95 }}
			animate={{ scale: 1 }}
			transition={{
				duration: 0.7,
				ease: "easeIn",
			}}
			className='w-2/6 flex flex-col gap-6 border border-black rounded-lg py-20 px-4'
		>
			<h1 className='uppercase font-[Geo] text-center font-bold'>
				login/register
			</h1>
			<input
				type='text'
				placeholder='username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className='border border-black rounded-lg p-2 focus:outline-none capitalize'
			/>
			<input
				type='password'
				placeholder='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className='border border-black rounded-lg p-2 focus:outline-none capitalize'
			/>
			<motion.button
				className='bg-black text-white rounded-lg py-2 transition duration-300 cursor-pointer border border-black'
			>
				Login / Register
			</motion.button>

			<motion.button
				type='button'
				className='flex items-center justify-center gap-3 rounded-lg border border-black/70 py-2 transition duration-300 hover:bg-zinc-100 cursor-pointer font-bold'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					className='h-7 w-7'
					fill='currentColor'
					aria-hidden='true'
				>
					<path d='M21.35 11.1h-9.17v2.98h5.26c-.46 2.45-2.56 3.64-5.25 3.64-3.15 0-5.73-2.58-5.73-5.73s2.58-5.73 5.73-5.73c1.39 0 2.65.49 3.63 1.3l2.21-2.21A8.68 8.68 0 0 0 12.19 3a8.99 8.99 0 0 0 0 17.98c4.5 0 8.62-3.25 8.62-8.99 0-.6-.08-1.2-.22-1.89h.76Z' />
				</svg>
				Continue with Google
			</motion.button>
		</motion.div>
	);
};

export default LoginForm;
