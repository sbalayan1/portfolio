import React from 'react'
import { SiJavascript, SiTypescript, SiReact, SiRubyonrails, SiPython, SiPostgresql, SiHtml5, SiCss3, SiFlask, SiDocker, SiLaravel, SiTailwindcss } from 'react-icons/si'

export default function Footer() {
    // const technologies = [<SiTypescript/>, <SiReact />, "and", <SiTailwindcss />].map((str, idx) => {
    //     return str
    // })
    return (
        <ul className="w-screen flex justify-center text-sm p-4">
            Built with <SiTypescript className='ml-1.5'/>, <SiReact className='ml-1.5'/>, and <SiTailwindcss className='ml-1.5'/>
        </ul>
    )
}