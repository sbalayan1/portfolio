import React from 'react'

interface AboutProps {
    dark: boolean
}

export default function About({dark}: AboutProps) {
    return (
        <div 
            id="About"
            className={`
                h-5/6 w-screen border-t-2
                ${dark ? "text-white" : "text-gray-600"}
                lg:h-screen lg:flex lg:justify-center lg:items-center
                //works for mobile. Needs to be optimized for small, med, and lg screens
            `}
        >
            <div 
                className="
                    max-w-screen-lg p-4 mx-auto
                    md:justify-center
                "
            >
                <div className="pb-4">
                    <h2 className="text-4xl text-blue-800 font-bold inline md:text-6xl">About</h2>
                </div>

                {/* <p className="text-2xl">
                    As a Full Stack Developer based in Honolulu, Hawaii, I bring a passion for software engineering and a wealth of technical knowledge to the table. Currently, I serve as a Technical Coach at Flatiron School where I work with students to teach them the ins and outs of Full Stack Web Development, including JavaScript, React, Ruby, and Python, as well as their associated frameworks and libraries.

                    In my role, I have successfully closed over 800 Zendesk tickets with a 100% satisfaction rating, demonstrating my ability to guide students through assignments and clarify complex concepts. I have also contributed to the development of the school's curriculum by reviewing lessons and providing solutions.

                    My technical expertise has allowed me to contribute to the development of the school's curriculum and help student's become independent learners. 

                    Overall, my experience as a Technical Coach has honed my ability to communicate complex technical concepts to students of all levels and backgrounds while fostering a collaborative and inclusive learning environment.
                </p>
                <br/> */}

                <p className="text-lg lg:text-2xl">
                        Hello there! I am a junior web developer based in Honolulu, Hawaii, and currently employed as a Technical Coach at Flatiron School. My role involves working with and teaching students about JavaScript, React, Ruby, and Python, along with the frameworks and libraries associated with them.
                </p>
                <br/>

                <p className="text-lg lg:text-2xl">
                    As a tech enthusiast and creative problem solver, I am always eager to take on new challenges. With a natural talent for logical thinking and a passion for innovation, I am a self-motivated learner who constantly strives to expand my knowledge and skills. My keen eye for detail and knack for devising elegant solutions to complex problems have proven to be valuable assets in my work as a developer and technical coach.
                </p>
                <br/>

                <p className="text-lg lg:text-2xl">
                    Whether I am coding, cooking, or dancing, I approach every endeavor with a can-do attitude and a commitment to excellence. I believe that the combination of technical expertise and a creative mindset are key to success in any field, and I am excited to continue growing and developing as a web developer.
                </p>
            </div>
        </div>
    )
}