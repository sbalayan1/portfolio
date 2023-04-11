import React from 'react'

interface AboutProps {
    dark: boolean
}

export default function About({dark}: AboutProps) {
    return (
        <div
            className={`
                h-[480px] w-screen text-4xl text-white
                ${!dark ?" bg-blue-900": null}
                lg:h-screen             
            `}
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
                    <h2 className="text-4xl font-normal">ABOUT</h2>    
                </div>
                <div
                    className="
                        w- flex flex-row justify-center items-center ml-4 text-2xl text-gray-300
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