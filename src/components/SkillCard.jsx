import React, { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color'


const SkillCard = ({name,image}) => {
    //const { theme } = useTheme();
    const [bgColor, setBgColor] = useState("")
    useEffect(() => {
        new FastAverageColor().getColorAsync(image)
            .then(color => {
                const rgba = color.rgb.split(')')
                setBgColor(rgba[0] + ',0.07)')
            })
            .catch(e => {
                console.log(e);
            })
    }, [image])

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div title={name} style={{ backgroundColor: bgColor }}
                className={"h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center"}>
                <img alt="skill" width={100} height={100} className={`h-12 w-12 md:h-14 md:w-14 object-contain ${'theme' === 'dark' && (name === "GitHub" || name === "Vercel" || name === "NextJS" || name === "ExpressJS" ? 'invert' : 'invert-0')}`} src={image} />
            </div>
            <p className="text-sm md:text-base dark:text-white">{name}</p>
        </div>
    )
}

export default SkillCard