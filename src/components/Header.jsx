import React from "react";
import { Link } from "react-scroll";

export const Header = () => {
	return (
		<header className="flex justify-between shadow-md p-3 items-center fixed top-0 z-auto w-full">
			<div className="">
				<img className="h-9" src="/logo512.png" alt="logo" />
			</div>
			<div className="flex gap-10">
				<div className="md:flex gap-10 hidden">
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer"
						to={"home"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Home
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer"
						to={"about"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						About
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer"
						to={"home"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer"
						to={"skills"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Skills
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer"
						to={"projects"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Projects
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer"
						to={"contact"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Contact
					</Link>
				</div>
				<button className="rounded-full h-7 w-7 md:hover:bg-gray-200 bg-gray-200 flex justify-center items-center">
					<span class="material-symbols-outlined text-2xl text-gray-600">
						dark_mode
					</span>
				</button>
				<button className="rounded-full h-7 w-7 hover:bg-gray-200 md:hidden">
					<span class="material-symbols-outlined text-2xl">segment</span>
				</button>
			</div>
		</header>
	);
};
