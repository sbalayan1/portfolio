import React from 'react'
import { MdComputer } from 'react-icons/md'
import { FaGithub, FaVideo } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'

export default function Portfolio() {
    const projectNames = [
        "Gary the Discord Bot", 
        "Robinhood Web Clone", 
        "Portfolio Tracker", 
        "Pokemon Brawl", 
        "NPI Providers Finder"
    ]
    const appLinks = [
        "",
        "",
        "https://portfolio-tracker-x0om.onrender.com/", 
        "", 
        ""
    ]
    const imageLinks = [
        require('../Assets/discord_bot_1.png'), 
        require('../Assets/robinhood_web_1.png'), 
        require('../Assets/PortfolioTracker.png'), 
        require('../Assets/pokemon_brawl.png'), 
        require('../Assets/NPI Provider Finder.png')
    ]
    const githubLinks = [
        "https://github.com/sbalayan1/gary_the_discord_bot", 
        "https://github.com/sbalayan1/tradek.co-landing-page-p1", 
        "https://github.com/sbalayan1/portfolio_tracker", 
        "https://github.com/sbalayan1/pokemon_brawl", 
        "https://github.com/sbalayan1/betterrx_app_lrvl"]
    const demoLinks = [
        "https://github.com/sbalayan1/gary_the_discord_bot", 
        "https://github.com/sbalayan1/tradek.co-landing-page-p1",
        "https://www.loom.com/share/b51cf4868a1045c291b3a8815c490f4b", 
        "https://www.loom.com/share/d5a1338edc5e44c9af19149239ee4b51", 
        "https://www.loom.com/share/886cfc82eba849f88ac4f1eb3693b637"
    ]
    const desc = [
        "Gary is a Discord Chat Bot that integrates ChatGPT. It provides dynamic command handling, event listeners for command interactions, and execution of various commands based on user interactions.", 
        "The Robinhood Web Clone is a rebuild of Robinhood's Web Application used to build experience with NextJS.", 
        "Portfolio Tracker is an options trading tracker that allows users to track and analyze their options trading as well as view their overall portfolio performance over multiple timeframes.", 
        "Just like old Pokemon Games, PokemonBrawl is a mock Pokemon Battle Application that allows users to catch Pokemon, build and customize teams, and battle other trainers!", 
        "NPI Provider Finder is a full stack application that lets users search the NPI registry and view its results."
    ]
    
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

    const projectsToDisplay = projectLinks.map((obj, idx) => {
        return (
            <li key={idx+1} className="h-5/6 mt-4 p-2 md:mt-8 md:mb-12">
                <div className="h-2/5 w-full mb-10 flex items-center">
                    <a className="p-2 mx-10 hover:scale-110 duration-200" href={obj.app !== "" ? obj.app : obj.demo} target="_blank" rel="noreferrer">
                        <img className="h-5/6 w-5/6" src={obj.img} alt={obj.name}/>
                    </a>
                </div>
                <h3 className="text-lg">{obj.name}</h3>
                <div className="flex w-1/2 p-2 justify-around ">
                    {obj.app !== "" ? <a className="hover:scale-110 duration-200" href={`${obj.app}`} target="_blank" rel="noreferrer"><MdComputer size={25}/></a> : null}
                    <a className="hover:scale-110 duration-200" href={obj.github} target="_blank" rel="noreferrer"><FaGithub className="text-black"size={25}/></a>
                    <a className="hover:scale-110 duration-200" href={obj.demo} target="_blank" rel="noreferrer"><FaVideo className="text-gray-500"/></a>
                </div>
                <p className="text-gray-500">{obj.desc}</p>
            </li>
        )
    })


    return (
        <div id="Portfolio" className="w-full p-4 lg:mt-4 border-t">
            <div className="max-w-screen-lg mx-auto p-4">
                <h2 className="text-lg font-bold">Portfolio</h2>
                <ul className="h-full w-full text-base flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
                    {projectsToDisplay}
                </ul>
            </div>
        </div>
    )
}