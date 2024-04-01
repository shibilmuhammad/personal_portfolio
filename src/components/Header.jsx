import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, ScrollLink } from "react-scroll";
import { changeTheme } from "../utils/themeSlice";

export const Header = () => {
	const theme = useSelector((store) => store?.theme?.theme)
	const dispatch = useDispatch()
	const navs = ['home','about','skills','projects','experience']
	const [navCollapse,setNavCollapse] = useState(true)
	const changeMode = () => {
		if(theme === 'light'){
			dispatch(changeTheme('dark'))
			
		}else{
			dispatch(changeTheme('light'))
			
		}
		
	}
	return (
		<header className="flex md:px-28 bg-white dark:bg-black dark:bg-opacity-80 justify-between shadow-md p-3 items-center fixed backdrop-filter backdrop-blur-md  top-0 z-40 w-full">
			<div className="">
				<img className="h-9" src="/logo512.png" alt="logo" />
			</div>
			<div className="flex gap-3 md:gap-10">
				<div className="md:flex gap-10 hidden">
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer dark:text-white"
						to={"home"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Home
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer dark:text-white"
						to={"about"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						About
					</Link>
					
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer dark:text-white"
						to={"skills"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Skills
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer dark:text-white"
						to={"projects"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Projects
					</Link>
					<Link
						className="font-medium text-gray-600 hover:text-violet-700 cursor-pointer dark:text-white"
						to={"contact"}
						offset={-60}
						smooth={true}
						duration={500}
						isDynamic={true}>
						Contact
					</Link>
				</div>
				<button onClick={changeMode} className="rounded-full h-7 w-7 p-2 md:hover:bg-gray-200 bg-gray-200 flex justify-center items-center dark:bg-violet-600">
					<span  class={"material-symbols-outlined text-xl text-gray-600 dark:text-white hover:text-black"}>
						{theme === 'light' ? "dark_mode" : "light_mode"}
					</span>
				</button>
				<button onClick={() => setNavCollapse(false)} className="rounded-full h-7 w-7 hover:bg-gray-200 md:hidden dark:text-white">
					<span class="material-symbols-outlined text-2xl">segment</span>
				</button>
				<div className={`flex min-h-screen w-screen absolute md:hidden top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

                <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-grey-900/95 w-3/4">
                    
					<button onClick={() => setNavCollapse(true)} class="bi bi-x text-xl self-end my-2 rounded-full h-7 w-7 bg-gray-200 flex items-center justify-center hover:bg-violet-700 hover:text-white"></button>
                    {navs.map((e) => (
						
                        <Link
                            key={e}
                            className='hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer'
                            to={e}
                            offset={-60}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                            onClick={() => setNavCollapse(true)}
                        >
                            {e}
                        </Link>
                    ))}
                    <Link
                        to='contact'
                        offset={-60}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavCollapse(true)}
                        className='px-6 py-1.5 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-center'>
                        Contact
                    </Link>
                </div>
            </div>
			</div>
		</header>
	);
};
