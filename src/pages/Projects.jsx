import React, { useEffect, useState } from 'react'
import { data } from '../data'
import ProjectCard from '../components/ProjectCard'


const Projects = () => {
    const [projects, setProjects] = useState(data?.projects?.reverse())

    // const categories = ['All', ...Array.from(new Set(projects.map((s) => s.category)))]
    const categories = [...Array.from(new Set(projects.map((s) => s.category)))]

    // const [category, setCategory] = useState(categories[0] || "All")
    const [category, setCategory] = useState(categories[0])

    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [viewAll, setViewAll] = useState(false)

    const filterProjects = (cat) => {
        setViewAll(false)
        setCategory(cat)
        // cat === "All" ? setFilteredProjects(projects) :
        setFilteredProjects(projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()));
    }

    useEffect(() => {
        filterProjects(categories.includes('MERN Stack') ? "MERN Stack" : categories[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section id="projects" className="mx-4 md:mx-0 min-h-screen xl:py-20">
            <h2 className="text-4xl text-center dark:text-white">Projects</h2>

            <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
                {categories.map((c= "", i) => (
                    <span key={i} onClick={() => filterProjects(c)} className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-violet-600 text-white" : "hover:bg-gray-100 hover:dark:bg-grey-900 md:dark:text-white"} cursor-pointer transition-all`}>
                        {c}
                    </span>
                ))}
            </div>

            <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {filteredProjects.slice(0, viewAll ? filteredProjects.length : 6).map((p, i) => (
                    <ProjectCard key={i} data={p} />
                ))}
            </div>


            {filteredProjects.length > 6
                &&
                <div scrollTo='projects' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} ></div>
            }
        </section>
    )
}

export default Projects