import React from "react";
import Logo from "../components/Logo";
import LoginForm from "../components/login/LoginForm.jsx";
import { motion } from "motion/react";
const LoginPage = () => {
	return (
		<div className='flex items-center justify-center h-screen relative'>
			<Logo font_size={"text-[4rem]"} className='absolute top-10 left-10' />
			<LoginForm />
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.4,
					ease: "easeIn",
					type: "spring",
					stiffness: 300,
					delay: 0.5,
				}}
				className='font-bold text-black/90 font-[Boldonse] text-[4rem] absolute bottom-10 right-10 capitalize'
			>
				Where your links make sense
			</motion.div>
		</div>
	);
};

export default LoginPage;
