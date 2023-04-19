import React from 'react'
import { MdComputer } from 'react-icons/md'
import { FaGithub, FaVideo } from 'react-icons/fa'

export default function Portfolio() {
    const projectNames = ["Portfolio Tracker", "Pokemon Brawl", "NPI Providers Finder"]
    const appLinks = ["https://portfolio-tracker-x0om.onrender.com/", "", ""]
    
    const githubLinks = ["https://github.com/sbalayan1/portfolio_tracker", "https://github.com/sbalayan1/pokemon_brawl", "https://github.com/sbalayan1/betterrx_app_lrvl"]
    const demoLinks = ["https://www.loom.com/share/b51cf4868a1045c291b3a8815c490f4b", "https://www.loom.com/share/d5a1338edc5e44c9af19149239ee4b51", "https://www.loom.com/share/886cfc82eba849f88ac4f1eb3693b637"]
    const desc = ["Portfolio Tracker is an options trading tracker that allows users to track and analyze their options trading as well as view their overall portfolio performance over multiple timeframes.", "Just like old Pokemon Games, PokemonBrawl is a mock Pokemon Battle Application that allows users to catch Pokemon, build and customize teams, and battle other trainers!", "NPI Provider Finder is a full stack application that lets users search the NPI registry and view its results."]


    const projectLinks = projectNames.map((proj, idx) => {
        const obj = {
            name: proj,
            app: appLinks[idx],
            github: githubLinks[idx],
            demoLinks: demoLinks[idx],
            desc: desc[idx]
        }

        return obj
    })

    const projectsToDisplay = projectLinks.map((obj, idx) => {
        return (
            <li key={idx+1} className="mb-4">
                <h3 className="text-2xl">{obj.name}</h3>
                <div className="flex w-1/2 p-2 justify-around">
                    {obj.app !== "" ? <a className="hover:scale-110 duration-200" href={`${obj.app}`} target="_blank" rel="noreferrer"><MdComputer size={25}/></a> : null}
                    <a className="hover:scale-110 duration-200" href={`${obj.github}`} target="_blank" rel="noreferrer"><FaGithub size={25}/></a>
                    <a className="hover:scale-110 duration-200" href={`${obj.demoLinks}`} target="_blank" rel="noreferrer"><FaVideo/></a>
                </div>
                <p className="text-gray-600 text-xl">{obj.desc}</p>
            </li>
        )
    })

    return (
        <div id="Portfolio" className="h-5/6 w-full p-4">
            <h2 className="text-4xl font-bold">Portfolio</h2>
            <ul className="mt-2 text-2xl">
                {projectsToDisplay}
            </ul>
        </div>
    )
}