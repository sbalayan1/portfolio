import React from 'react'
interface HomeProps {
    dark: boolean
    handleDark(): void
}
export default function Home({dark, handleDark}: HomeProps) {
    
    return (
        <div 
            className="
                h-screen w-full
            "
        >
            <div 
                className="
                    max-w-screen-lg h-full mx-auto flex flex-col items-center justify-center px-4
                    md:flex-row md:h-1/2
                    lg:h-full
                "
            >
                <div 
                    className="
                        flex flex-col justify-center h-2/5
                    "
                    >
                    <h2 
                        className={`
                            ${dark ? "text-white" : null}
                            text-4xl font-bold
                            sm:text-7xl
                        `
                        }
                    >
                        Full Stack Software Engineer
                    </h2>
                    <p 
                        className={`
                            ${dark ? "text-gray-400" : "text-gray-600"} 
                            py-4 
                            text-2xl
                            sm:text-4xl
                        `}>
                            I build applications using JavaScript, React, TailwindCSS, and Ruby on Rails.
                        </p>
                    <div 
                        className="
                            my-2 text-2xl
                            md:text-4xl
                        ">
                        <button 
                            
                                className={`
                                ${dark ? "bg-blue-950" : "bg-gradient-to-br from-blue-800 to-blue-400"}
                                ${dark ? "text-white" : "text-white"}
                                border-2 rounded-lg px-6 py-3
                                hover:scale-125 hover:bg-white hover:text-blue-950 duration-200 cursor-pointer 
                            `}
                        >
                            Portfolio
                        </button>
                    </div>
                </div>
                <div 
                    className="
                        my-2 w-screen flex items-center justify-center
                        md:w-full md:ml-4
                    "
                    >
                        <a
                            className=""
                            href="Resume_seanbalayan.pdf"
                        >
                            <img 
                                className={`
                                    w-full hover:scale-110 hover:blur-sm duration-200 cursor-pointer
                                    md:rounded-full
                                `}
                                src={require("../Assets/1547704960267.jpg")} alt="my profile"
                            />
                        </a>
                </div>
            </div>
        </div>
    )
}