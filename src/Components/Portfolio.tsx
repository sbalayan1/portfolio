import React, { useEffect, useState } from 'react'
import { MdComputer } from 'react-icons/md'
import { FaGithub, FaVideo, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Portfolio() {
    const [start, setStart] = useState(0)
    const projectNames = ["Portfolio Tracker", "Pokemon Brawl", "NPI Providers Finder"]
    const appLinks = ["https://portfolio-tracker-x0om.onrender.com/", "", ""]
    const imageLinks = [require('../Assets/PortfolioTracker.png'), require('../Assets/pokemon_brawl.png'), require('../Assets/NPI Provider Finder.png')]
    const githubLinks = ["https://github.com/sbalayan1/portfolio_tracker", "https://github.com/sbalayan1/pokemon_brawl", "https://github.com/sbalayan1/betterrx_app_lrvl"]
    const demoLinks = ["https://www.loom.com/share/b51cf4868a1045c291b3a8815c490f4b", "https://www.loom.com/share/d5a1338edc5e44c9af19149239ee4b51", "https://www.loom.com/share/886cfc82eba849f88ac4f1eb3693b637"]
    const desc = ["Portfolio Tracker is an options trading tracker that allows users to track and analyze their options trading as well as view their overall portfolio performance over multiple timeframes.", "Just like old Pokemon Games, PokemonBrawl is a mock Pokemon Battle Application that allows users to catch Pokemon, build and customize teams, and battle other trainers!", "NPI Provider Finder is a full stack application that lets users search the NPI registry and view its results."]

    const projectLinks = projectNames.map((proj, idx) => {
        const obj = {
            img: imageLinks[idx],
            name: proj,
            app: appLinks[idx],
            github: githubLinks[idx],
            demo: demoLinks[idx],
            desc: desc[idx]
        }

        return obj
    })

    const projects = projectLinks.map((obj, idx) => {
        return (
            <li key={idx+1} className="h-5/6 mt-4 p-2 md:mt-8 md:mb-12">
                <div className="h-2/5 w-full mb-10 flex items-center">
                    <FaArrowLeft  className="hover:scale-125 duration-200 md:hidden" size={100} onClick={() => console.log('helloworld')}/>
                    <a className="p-2 mx-10 border-4 shadow-black shadow-xl rounded-xl hover:scale-110 duration-200" href={obj.app !== "" ? obj.app : obj.demo} target="_blank" rel="noreferrer"><img className="h-full w-full rounded-md" src={obj.img} alt={obj.name}/></a>
                    <FaArrowRight className="hover:scale-125 duration-200 md:hidden" size={100} onClick={() => console.log('helloworld')}/>
                </div>
                <h3 className="text-2xl">{obj.name}</h3>
                <div className="flex w-1/2 p-2 justify-around md:w-1/4">
                    {obj.app !== "" ? <a className="hover:scale-110 duration-200" href={`${obj.app}`} target="_blank" rel="noreferrer"><MdComputer size={25}/></a> : null}
                    <a className="hover:scale-110 duration-200" href={obj.github} target="_blank" rel="noreferrer"><FaGithub className="text-black"size={25}/></a>
                    <a className="hover:scale-110 duration-200" href={obj.demo} target="_blank" rel="noreferrer"><FaVideo className="text-gray-500"/></a>
                </div>
                <p className="text-gray-500 text-xl">{obj.desc}</p>
            </li>
        )
    })

    const descriptions = [
        [
            "Introducing our cutting-edge options trading application, built with React, JavaScript, MaterialUI, Ruby on Rails, ReCharts, Render, AJAX, Git, HTML/CSS, and Render",
            "Our app boasts multi-timeframe charting and performance analysis features that improve win-loss ratios by up to 20% and reduce loss-percentage from -50% to -30%. With our app, traders can manage and archive their trades with ease, thanks to the incorporation of CRUD actions using HTTP requests and a Rails REST API.",
            "Our application also comes equipped with a date conversion algorithm that can convert Excel spreadsheet dates into Date instances, enabling traders to import and analyze their trading performance with ease and precision.",
            "Built to provide a user-friendly and efficient platform, our options trading application is the perfect tool for traders who want to streamline their trading processes and maximize their profits. Try it out now and see the difference for yourself!"
        ],
        [
            "Introducing our fun and exciting mock Pokemon Single Page Application, packed with features such as battle, catching, and team building functionality. Our application is deployed on Heroku and built using React, JavaScript, HTML/CSS, Heroku, Git, Ruby on Rails, AJAX, and PostgreSQL.",
            "Our battle feature allows users to engage in thrilling Pokemon battles, and this feature is made possible by using state and conditional rendering to display the effects of in-game actions. We have also designed a Rails REST API with MVC architecture that runs as a server between the Pokemon API and the client. This design ensures that our app is efficient and runs smoothly.", 
            "Our application incorporates persistent data storage, thanks to PostgreSQL, a powerful relational database management system. We have employed the ActiveRecord ORM to handle CRUD actions and ensure that users can easily manage their data. Additionally, we have utilized BCrypt to store encrypted user information, ensuring the security of our users' data.",
            "Our application also incorporates authentication using sessions and cookies to authenticate users. This feature ensures that our users' data and accounts are secure and protected.",
            "In summary, our mock Pokemon Single Page Application is a must-have for all Pokemon fans. With its exciting battle feature, user-friendly team building functionality, and secure authentication, our application is the perfect tool for users who want to enjoy the thrill of Pokemon battles. Try it out now and catch them all!"
        ],
        [
            "Description coming soon."
        ]
    ]

    // const projectDescriptions = 

    const webProjectsToDisplay = projectLinks.slice(start, start+1).map((obj, idx) => {
        return (
            <li key={idx+1} className="p-4 flex items-center">
                {/* <div className="w-1/6 ">
                    <FaArrowLeft className=" hover:scale-125 duration-300" size={100} onClick={() => console.log('helloworld')}/>
                </div> */}
                <div className="flex">
                    <div className="xl:w-3/5 p-4">
                        <a className="p-2 mx-10 shadow-black shadow-xl rounded-xl hover:scale-110 duration-200" href={obj.app !== "" ? obj.app : obj.demo} target="_blank" rel="noreferrer">
                            <img className="w-full rounded-md" src={obj.img} alt={obj.name}/>
                        </a>
                        <div className="flex w-1/2 p-2 justify-around md:w-1/4">
                            {obj.app !== "" ? <a className="hover:scale-110 duration-200" href={`${obj.app}`} target="_blank" rel="noreferrer"><MdComputer size={25}/></a> : null}
                            <a className="hover:scale-110 duration-200" href={obj.github} target="_blank" rel="noreferrer"><FaGithub className="text-black"size={25}/></a>
                            <a className="hover:scale-110 duration-200" href={obj.demo} target="_blank" rel="noreferrer"><FaVideo className="text-gray-500"/></a>
                        </div>
                        <p className="text-gray-500 text-xl">{obj.desc}</p>
                    </div>
                    <div className="hidden h-full w-2/5 text-xl p-10 rounded-lg bg-gray-400 text-white m-4 xl:inline">
                        {descriptions[start].map((val, idx) => {
                            return (
                                <React.Fragment key={idx+1}>
                                    <p>
                                        {val}
                                    </p>
                                    <br/>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                {/* <div className=" w-1/6">
                    <FaArrowRight className="hover:scale-125 duration-300" size={100} onClick={() => console.log('helloworld')}/>
                </div> */}
            </li>
        )
    })

    useEffect(() => {
        console.log('firing')
        setTimeout(() => {
            setStart( start === projectLinks.length-1 ? 0 : start + 1)
            // setStart((start) => start+1)

        }, 5000)

        // clearTimeout(timeout)
    }, [start, projectLinks.length])

    return (
        <div id="Portfolio" className="w-full p-4 lg:mt-4 border-t-2">
            <div id="mobile" className="w-full lg:hidden">
                <div className="max-w-screen-lg mx-auto p-4">
                    <h2 className="text-4xl font-bold md:text-6xl">Portfolio</h2>
                    <ul className="h-full w-full text-2xl flex flex-col">
                        {projects}
                    </ul>
                </div>
            </div>
            <div id="web" className="hidden lg:block lg:w-full">
                <h2 className="font-bold text-6xl">Portfolio</h2>
                <ul className="text-xl p-4">
                    {webProjectsToDisplay}
                </ul>
            </div>
        </div>
    )
}