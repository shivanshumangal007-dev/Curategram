import React from 'react'
import { motion } from 'motion/react';
const Logo = ({font_size , className}) => {
  return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: "easeIn" , type: "spring", stiffness: 300 }}
			className={`${font_size} ${className} font-bold text-black/90 logo tracking-widest`}
		>
			CurateGram
		</motion.div>
  );
}

export default Logo
