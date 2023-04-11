import React from 'react'

interface AboutProps {
    dark: boolean
}

export default function About() {
    return (
        <div
            className="
                h-[480px] w-full text-4xl border-t-2
                lg:h-screen             
            "
        >
            <div
                className="
                    h-1/2 w-screen
                "
            >
                <div
                    className="
                        h-1/3 w-full flex justify-center items-center mt-4 text-6xl font-bold
                    "
                >
                    <h2>About</h2>    
                </div>
                <div
                    className="
                        w-full flex flex-row justify-center items-center ml-4 text-3xl text-gray-600
                        sm:text-4xl
                    "
                >
                    <p>
                        Hi there! I am a junior web developer from Honolulu, Hawaii. Currently, I am a Technical Coach at Flatiron School where I work with and teach students about JavaScript, React, Ruby, and Python as well as the frameworks and libraries they're associated with. 
                    </p>
                </div>
            </div>
        </div>
    )
}