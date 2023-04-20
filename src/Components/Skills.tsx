import React, { useState, useEffect, useCallback } from 'react'
import { SiJavascript, SiTypescript, SiReact, SiRubyonrails, SiPython, SiPostgresql, SiHtml5, SiCss3, SiFlask, SiDocker, SiLaravel } from 'react-icons/si'
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from 'react-icons/fa'

export default function Skills() {
    const [skillsIdx, setSkillsIdx] = useState(0)
    const [wipIdx, setWipIdx] = useState(0)
    const [pause, setPause] = useState(false)

    const skills = [
        <SiJavascript className="p-2 rounded-md text-yellow-500" size={100}/>, 
        <SiReact className="p-2 rounded-md bg-black text-blue-500" size={100}/>, 
        <SiRubyonrails className='p-2 rounded-md bg-red-600 text-white' size={100}/>, 
        <SiPython className="p-2 rounded-md bg-blue-500 text-yellow-500" size={100}/>, 
        <SiPostgresql className="p-2 rounded-md bg-blue-300" size={100}/>, 
        <SiHtml5 className="p-2 rounded-md bg-orange-400" size={100}/>, 
        <SiCss3 className="p-2 rounded-md "size={100}/> 
    ]
    
    const workInProgress = [
        <SiTypescript className="p-2 rounded-md text-blue-700" size={100}/>,
        <SiLaravel className="p-2 rounded-md text-red-500" size={100} />,
        <SiFlask className="p-2 rounded-md text-black" size={100}/>, 
        <SiDocker className="p-2 rounded-md text-blue-700" size={100}/>
    ]

    const skillNames = ["JavaScript", "React", "Ruby on Rails", "Python", "PostgreSQL", "HTML", "CSS"]
    const wipNames = ["TypeScript", "Flask", "Laravel", 'Docker']

    const navLeft = useCallback((section: string): void => {
        if (section === "Skills") {
            setSkillsIdx((skillsIdx) => skillsIdx === 0 ? skills.length - 1 : skillsIdx - 1 )
        } else {
            setWipIdx((wipIdx) => wipIdx === 0 ? workInProgress.length - 1 : wipIdx - 1 )
        }
    }, [skills.length, workInProgress.length])

    const navRight = useCallback((section: string): void => {
        if (section === "Skills") {
            setSkillsIdx((skillsIdx) => skillsIdx === skills.length - 1 ? 0 : skillsIdx + 1 )
        } else {
            setWipIdx((wipIdx) => wipIdx === workInProgress.length - 1 ? 0 : wipIdx + 1 )
        }
    }, [skills.length, workInProgress.length])

    const skillsToDisplay = skills.slice(skillsIdx, skillsIdx + 1).map((skill, idx) => {
        return (
            <div key={idx+1} className="flex items-center justify-center w-full h-full">
                <h3 className="text-xl mr-2">{skillNames[skillsIdx]}</h3>
                <p>{skill}</p>
            </div>
        )
    })
    const wipToDisplay = workInProgress.slice(wipIdx, wipIdx + 1).map((skill, idx) => {
        return (
            <div key={idx+1} className="flex items-center justify-center w-full h-full">
                <h3 className="text-2xl mr-2">{wipNames[wipIdx]}</h3>
                <p>{skill}</p>
            </div>
        )
    })

    const sectionsToDisplay = ["Skills", "WIP"].map(section => {
        return (
            <div key={section} className="h-1/2 w-5/6 mb-4 md:max-w-lg md:h-1/4">
                {section === 'Skills' ? 
                    <div className="flex justify-between mb-4">
                        <h2 className="text-4xl font-bold md:text-6xl">{section}</h2>
                        <button className="text-sm rounded-md bg-blue-900 text-white p-2 hover:scale-125 duration-200" onClick={() => setPause(!pause)}>{pause ? <FaPlay size={20}/> : <FaPause size={20} />}</button>
                    </div>
                :
                    <h2 className="text-4xl font-bold md:text-6xl">{section}</h2>
                }   
                <div className="h-full w-full flex justify-evenly items-center">
                    <div className="w-5/6 flex justify-evenly items-center">
                        <FaArrowLeft className="hover:scale-125 duration-200" size={30} onClick={() => {navLeft(section)}}/>
                        {section === "Skills" ? skillsToDisplay : wipToDisplay}
                        <FaArrowRight  className="hover:scale-125 duration-200" size={30} onClick={() => {navRight(section)}}/>
                    </div>
                </div>
            </div>
        )
    })

    useEffect(() => {
        if (pause) return

        const timer = setTimeout(() => {
            navRight('Skills')
            navRight('WIP')
        }, 1500)

        return () => {
            clearTimeout(timer)
        }
    }, [skillsIdx, wipIdx, pause, navRight, navLeft])

    return (
        <div id="Skills" className="w-full flex flex-col justify-center items-center p-4 border-t-2 md:h-screen">
            {sectionsToDisplay}
        </div>
    )
}