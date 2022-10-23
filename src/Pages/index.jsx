import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../Components/Card";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Dashboard(props) {
	const works = [
		{
			title: "London",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			imgSrc:
				"https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000",
		},
		{
			title: "Rome",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			imgSrc:
				"https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000",
		},
		{
			title: "Cluj Napoca",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			imgSrc:
				"https://images.unsplash.com/photo-1513342791620-b106dc487c94?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000",
		},
		{
			title: "Paris",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			imgSrc:
				"https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000",
		},
		{
			title: "Amsterdam",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			imgSrc:
				"https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000",
		},
		{
			title: "Barcelona",
			subtitle:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			imgSrc:
				"https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000",
		},
	];

	return (
		<>
			<Navbar />
			<Hero />
			<section className="container max-w-screen mx-auto py-14 px-6">
				<motion.div
					viewport={{ once: false }}
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ type: "just", duration: 1.2, delay: 0.95 }}
				>
					<div className="flex justify-center my-6">
						<p className="text-2xl font-bold">Featured Works</p>
					</div>
				</motion.div>
				<div className="flex my-12">
					<Card
						title="Greenland"
						subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna."
						imgSrc="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1500"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4 lg:gap-8">
					{works.map((item, i) => (
						<Card
							key={i}
							title={item.title}
							subtitle={item.subtitle}
							imgSrc={item.imgSrc}
							imgClassName="max-h-56"
						/>
					))}
				</div>
				<div className="flex justify-center my-12">
					<motion.div
						viewport={{ once: false }}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ type: "just", duration: 1, delay: 0.55 }}
					>
						<button className="bg-primary-100 text-white py-2 px-6 rounded-full transition duration-150 ease-out hover:ease-in">
							Show All Works
						</button>
					</motion.div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Dashboard;
