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
                ${dark ? "text-white" : "text-blue-800"}
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
                    <h2 className="text-4xl font-bold inline md:text-6xl">About</h2>
                </div>

                <p className="text-2xl">
                    Hi there! I am a junior web developer from Honolulu, Hawaii. Currently, I am a Technical Coach at Flatiron School where I work with and teach students about JavaScript, React, Ruby, and Python as well as the frameworks and libraries they're associated with. 
                </p>
                <br/>
                <p className="text-2xl">I thrive in situations where I am consistenly challenged and learning. I am able to hustle, keep a cool head, can adapt during intense situations, and manage multiple tasks at once. With these skills, I am a valuable asset who can manage tasks effectively, contribute creatively and do them well.
                </p>
            </div>
        </div>
    )



    // return (
    //     <div
    //         className={`
    //             h-[480px] w-screen text-4xl text-white
    //             ${!dark ?" bg-blue-900": null}
    //             lg:h-screen             
    //         `}
    //     >
    //         <div
    //             className="
    //                 h-1/2 w-screen
    //             "
    //         >
    //             <div
    //                 className="
    //                     h-1/3 w-full flex justify-center items-center mt-4 text-6xl font-bold
    //                 "
    //             >
    //                 <h2 className="text-4xl font-normal">ABOUT</h2>    
    //             </div>
    //             <div
    //                 className="
    //                     flex flex-row justify-center items-center ml-4 text-2xl text-gray-300
    //                 "
    //             >
    //                 <p>
    //                     Hi there! I am a junior web developer from Honolulu, Hawaii. Currently, I am a Technical Coach at Flatiron School where I work with and teach students about JavaScript, React, Ruby, and Python as well as the frameworks and libraries they're associated with. 
    //                 </p>
    //                 <br/>
    //                 {/* <p>
    //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ullam placeat at sunt tempora dolor dicta, voluptatibus optio sapiente. Voluptatibus quod harum fugit iste sint voluptas quisquam tenetur voluptate. Laudantium veniam fuga illum tempora sed consectetur architecto, tempore odit repellat facere placeat velit? Officiis unde hic porro ipsum, cupiditate voluptatem?  
    //                 </p> */}
    //             </div>
    //         </div>
    //     </div>
    // )
}