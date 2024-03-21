import React from "react";

export const Header = () => {
	return (
		<header className="flex justify-between shadow-md p-3 items-center">
			<div>
				<img className="h-9" src="/logo512.png" alt="logo" />
			</div>
			<div className="flex gap-2">
				<ul className="md:flex gap-8 hidden">
					<li className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer">
						Home
					</li>
					<li className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer">
						About
					</li>
					<li className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer">
						Projects
					</li>
					<li className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer">
						Experience
					</li>
					<li className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer">
						Contact
					</li>
				</ul>
				<button className="rounded-full h-7 w-7 md:hover:bg-gray-200 bg-gray-200 flex justify-center items-center">
					<span class="material-symbols-outlined text-2xl text-gray-600">dark_mode</span>
				</button>
                <button className="rounded-full h-7 w-7 hover:bg-gray-200 ">
					<span class="material-symbols-outlined text-2xl">segment</span>
				</button>
			</div>
		</header>
	);
};
