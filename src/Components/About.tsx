import React from 'react'

interface AboutProps {
    dark: boolean
}

export default function About({dark}: AboutProps) {
    return (
        <div 
            id="About"
            className={`
                w-full h-screen border-t-2
                ${dark ? "text-white" : "text-blue-800"}
                //works for mobile. Needs to be optimized for small, med, and lg screens
            `}
        >
            <div 
                className="
                    max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full
                    md:justify-center
                "
            >
                <div 
                    className="
                        pb-8
                        md:mt-8
                        
                    "
                >
                    <h2
                        className="
                            text-4xl font-bold inline
                            md:text-6xl
                        "
                    >
                        About
                    </h2>
                </div>

                <p
                    className="
                        text-2xl
                    "
                >
                    Hi there! I am a junior web developer from Honolulu, Hawaii. Currently, I am a Technical Coach at Flatiron School where I work with and teach students about JavaScript, React, Ruby, and Python as well as the frameworks and libraries they're associated with. 
                </p>
                <br/>
                <p
                    className="
                        text-2xl
                    "
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit rem quia et repudiandae beatae sed officiis ipsum, tempora provident rerum veritatis id. Non possimus error nisi inventore rem delectus fugit. Harum voluptates minima minus at quaerat ut veritatis perspiciatis laborum sapiente nam iusto expedita totam, similique quisquam, doloribus magni dolore.
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