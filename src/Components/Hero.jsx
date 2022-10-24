import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Hero(props) {
	const parallax = useRef();
	const data = [
		{
			title: "lorem ipsum",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a pharetra lorem. Vivamus non quam nulla. Nam rhoncus purus quis consectetur rutrum. Fusce blandit at massa in porta.",
			image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		},
		{
			title: "lorem ipsum",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a pharetra lorem. Vivamus non quam nulla. Nam rhoncus purus quis consectetur rutrum. Fusce blandit at massa in porta.",
			image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		},
		{
			title: "lorem ipsum",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a pharetra lorem. Vivamus non quam nulla. Nam rhoncus purus quis consectetur rutrum. Fusce blandit at massa in porta.",
			image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		},
		{
			title: "lorem ipsum",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a pharetra lorem. Vivamus non quam nulla. Nam rhoncus purus quis consectetur rutrum. Fusce blandit at massa in porta.",
			image: "https://images.unsplash.com/photo-1591484222677-eb91797e696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		},
		{
			title: "lorem ipsum",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a pharetra lorem. Vivamus non quam nulla. Nam rhoncus purus quis consectetur rutrum. Fusce blandit at massa in porta.",
			image: "https://images.unsplash.com/photo-1624640623067-9a2ad2473461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxwcm9qZWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
	];
	const [index, setIndex] = useState(0);
	const carouselInfiniteScroll = () => {
		let newIndex = index + 1;
		if (newIndex == data.length) {
			return setIndex(0);
		} else {
			return setIndex(newIndex);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => carouselInfiniteScroll(), 3000);

		return () => {
			clearInterval(interval);
		};
	});

	useEffect(() => {
		function scrollHandler() {
			const element = parallax.current;
			if (element) {
				let offset = window.pageYOffset;
				element.style.backgroundPositionY = offset * -0.055 + "rem";
				// element.children[index].style.bottom = offset * 0.1 + "rem";
				// if (offset < 75) {
				// 	element.children[index].style.bottom = "1rem";
				// }
			}
		}
		window.addEventListener("scroll", scrollHandler);
		// return the function to remove the handler
		// which will be run whn Hero is unmounted
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [index]);
	return (
		<div
			ref={parallax}
			{...props}
			className="carousel-container flex flex-col -mt-64 lg:-mt-20"
			style={{
				backgroundImage: `url(${data[index]?.image})`,
				transition: "0.9s ease-in-out",
			}}
		>
			{data.map((item, i) => (
				<div
					key={i}
					className="carousel-item absolute bottom-16 lg:bottom-4 px-4 lg:px-20"
					// style={{ transition: 'all 1.0s ease-in-out' }}
				>
					{i == index && (
						<motion.div
							viewport={{ once: false }}
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ type: "just", duration: 1, delay: i * 0.15 }}
						>
							<div className="flex flex-col z-10 lg:flex-row justify-around items-end w-full mb-12">
								<div className="flex flex-col lg:w-10/12">
									<p className="text-2xl">{item.title}</p>
									<p className="text-lg">{item.subtitle}</p>
								</div>
								<div className="flex lg:w-2/12 justify-end p-2">
									<button onClick={carouselInfiniteScroll}>
										{index + 1} / {data.length}
									</button>
								</div>
							</div>
						</motion.div>
					)}
				</div>
			))}
		</div>
	);
}

export default Hero;
