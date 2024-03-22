
import { useState } from "react"
import ExperienceCard from "../components/ExperienceCard"
import { data } from "../data"




const Experiences = () => {

    const [show, setShow] = useState("Experience")
    const [viewAll, setViewAll] = useState(false)

    const [experiences, setExperiences] = useState(data?.experiences.reverse())
    const [educations, setEducations] = useState(data?.educations.reverse())

    return (
        <section id="experience" className="min-h-screen">
            <h2 className="text-4xl text-center dark:text-white">Experience</h2>

            <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
                {['Experience', 'Education'].map((e, i) => (
                    <button key={i} onClick={() => setShow(e)} className={`py-2 px-4 rounded-md transition-colors ${show === e ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 hover:dark:bg-grey-900 text-black md:dark:text-white dark:text-whit'}`}>{e}</button>
                ))
                }
            </div>

            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
                <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                    <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

                    {viewAll ?
                        (show === "Experience" ? experiences : educations).map((e, i) => (
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                        :
                        (show === "Experience" ? experiences : educations).slice(0, 2).map((e, i) => (
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                    }

                </div>
            </div>

            

        </section>
    )
}

export default Experiences