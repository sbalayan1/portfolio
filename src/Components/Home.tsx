import React from 'react'
import {Link} from 'react-scroll'
import Links from './Links'

interface HomeProps {
    dark: boolean
    handleDark(): void
}
export default function Home({dark, handleDark}: HomeProps) {
    
    return (
        <div id="Home"className="max-w-screen-sm h-screen flex justify-center items-center">
            <div className="max-w-screen-lg flex items-center justify-center px-4 md:flex-row md:h-1/2 lg:h-full">
                <div className="flex flex-col justify-center h-full mt-8">
                    <h2 className='text-base font-bold md:text-base lg:text-2xl'>
                        Full Stack Software Engineer
                    </h2>
                    <p className='py-4 text-xs mr-2'>
                            I build applications using TypeScript, React, NextJS, TailwindCSS, Ruby on Rails, and Python.
                        </p>
                    <div className="my-2 text-base">
                        <button 
                            className={`border-2 rounded-lg p-2 hover:scale-110 hover:bg-white hover:text-gunmetal duration-200 cursor-pointer`}
                            type="button"
                        >
                            <Link 
                                activeClass="active"
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Portfolio
                            </Link>
                        </button>
                    </div>
                </div>


                <div className="flex flex-col items-center max-w-screen-sm">
                        <a className='' href="Resume_seanbalayan.pdf">
                            <img 
                                className='hover:scale-110 hover:blur-sm duration-200 cursor-pointer rounded-full
                                w-32
                                lg:w-44 
                                '
                                src={require("../Assets/1547704960267.jpg")} alt="my profile"
                            />
                        </a>
                        {/* <Links /> */}
                </div>
            </div>
        </div>
    )
}