import React, { useEffect, useState } from "react";


function Navbar(props) {
	const [toggle, setToggle] = useState(false);
	const [scrollDirection, setScrollDirection] = useState(null);
  const [containerClassName, setContainerClassName] = useState("bg-transparent text-white")

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? "down" : "up";
			if (
				direction !== scrollDirection &&
				(scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
			) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;

      if (scrollY < 750) {
        setContainerClassName("bg-transparent text-white")
      } else {
        setContainerClassName("bg-white text-gray-800")
      }
		};
		window.addEventListener("scroll", updateScrollDirection); // add event listener
		return () => {
			window.removeEventListener("scroll", updateScrollDirection); // clean up
		};
	}, [scrollDirection]);

	return (
		<header
			className={`z-50 sticky px-4 lg:px-8 ${
				scrollDirection === "down" ? "-top-24" : "top-0"
			} ${containerClassName}`}
		>
			<nav className="py-4">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<a href="/" className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="mr-3 h-6 sm:h-9"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap">
							Program
						</span>
					</a>
					<div className="flex items-center lg:hidden lg:order-2">
						<button
							data-collapse-toggle="mobile-menu-2"
							type="button"
							className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
							aria-controls="mobile-menu-2"
							aria-expanded="false"
							onClick={() => setToggle(!toggle)}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg>
							<svg
								className="hidden w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div
						className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
							toggle ? "block" : "hidden"
						} ${containerClassName}`}
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							<li>
								<a
									href="#"
									className="block uppercase py-2 pr-4 pl-3 rounded lg:hover:text-primary-700 lg:p-0"
									aria-current="page"
								>
									Works
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block uppercase py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block uppercase py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									News
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block uppercase py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
