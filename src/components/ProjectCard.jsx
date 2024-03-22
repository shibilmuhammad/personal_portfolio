import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data } from "../data";
import { Link } from "react-scroll";

const cardVariants = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
};

const ProjectCard = ({ data }) => {
	const [ref, inView] = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<motion.div
			ref={ref}
			variants={cardVariants}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			className="flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-2  shadow-2xl">
			<div className="relative group rounded-lg bg-violet-50">
				<img
					alt={data?.name}
					width={1000}
					height={1000}
					className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
					src={data?.image}
				/>
				{(data?.links.visit.trim() ||
					data?.links.code.trim() ||
					data?.links.video.trim()) && (
					<div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
						{data?.links.visit.trim() && (
							<Link
								href={data?.links.visit}
								target="_blank"
								className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all px-3">
								<i class="bi bi-app-indicator"></i>
							</Link>
						)}
						{data?.links.code.trim() && (
							<Link
								href={data?.links.code}
								target="_blank"
								className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all px-3">
								<i class="bi bi-github"></i>
							</Link>
						)}
						{data?.links.video.trim() && (
							<Link
								href={data?.links.video}
								target="_blank"
								className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all px-3">
								<i class="bi bi-camera-video"></i>
							</Link>
						)}
					</div>
				)}
			</div>

			<div className="my-2 flex flex-col gap-3">
				<h3 className="text-xl font-medium dark:text-white">{data?.name}</h3>
				<p className="text-sm text-gray-400">
					{" "}
					<span className="font-medium">Tech Stack:</span> {data?.techstack}
				</p>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
