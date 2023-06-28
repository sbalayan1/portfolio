import React from 'react'

interface AboutProps {
    dark: boolean
}

export default function About({dark}: AboutProps) {
    return (
        <div id="About" className='w-screen flex flex-col items-center justifiy-center border-t text-base md:h-screen'>
            <div className='max-w-screen-sm p-4 mx-auto w-3/4 h-full md:text-base lg:text-2xl flex flex-col justify-center'>
                <div className='pb-4'>
                    <h2 className="font-bold inline">About</h2>
                </div>

                <p className='text-xs lg:text-sm'>
                        Hello there! I am a junior web developer based in Honolulu, Hawaii, and currently employed as a Technical Coach at Flatiron School. My role involves working with and teaching students about JavaScript, React, Ruby, and Python, along with the frameworks and libraries associated with them.
                </p>
                <br/>

                <p className='text-xs lg:text-sm'>
                    As a tech enthusiast and creative problem solver, I am always eager to take on new challenges. With a natural talent for logical thinking and a passion for innovation, I am a self-motivated learner who constantly strives to expand my knowledge and skills. My keen eye for detail and knack for devising elegant solutions to complex problems have proven to be valuable assets in my work as a developer and technical coach.
                </p>
                <br/>

                <p className='text-xs lg:text-sm'>
                    Whether I am coding, cooking, or dancing, I approach every endeavor with a can-do attitude and a commitment to excellence. I believe that the combination of technical expertise and a creative mindset are key to success in any field, and I am excited to continue growing and developing as a web developer.
                </p>
            </div>
        </div>
    )
}