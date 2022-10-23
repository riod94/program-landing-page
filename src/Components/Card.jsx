import React from "react";
import { motion } from "framer-motion";

function Card({
	title = "",
	subtitle = "",
	imgSrc = "",
	containerClassName,
	imgClassName,
}) {
	let i = Math.random(9);
	return (
		<motion.div
			viewport={{ once: false }}
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: "just", duration: 1.5, delay: i * .75 }}
		>
			<div className={`bg-white rounded-lg ${containerClassName}`}>
				<img
					alt={imgSrc}
					src={imgSrc}
					className={`rounded-t-lg h-auto max-h-96 w-full object-cover ${imgClassName}`}
				/>
				<h2 className="text-lg mt-2">{title}</h2>
				<p className="gallery-card-text1">{subtitle}</p>
			</div>
		</motion.div>
	);
}

export default Card;
