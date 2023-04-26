import React, { useState } from 'react'

interface form {
    [key: string]: string
}

export default function Contact() {
    const [formDetails, setFormDetails] = useState<form>({
        "First Name": "",
        "Last Name": "",
        "Company Name": "",
        "Email": "",
        "Phone Number": "",
        "Details": ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(formDetails)
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }

    const fields = ["First Name", "Last Name", "Company Name", "Email", "Phone Number"].map(label => {
        return (
            <React.Fragment key={label}>
                <label className="text-lg">{label === "Company Name" ? label : `${label}*`}</label>
                {label === "Company Name" ? 
                    <input name={label} type="text" value={formDetails[label]} className="w-full rounded-md p-2 text-xl text-blue-500 hover:scale-110 duration-200" onChange={handleChange}/>
                :
                    <input required name={label} type="text" value={formDetails[label]} className="w-full rounded-md p-2 text-xl text-blue-500 hover:scale-110 duration-200" onChange={handleChange}/>
                }
            </React.Fragment>
        )
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('hello world')
    }


    return (
        <div id="Contact" className="h-screen w-full p-4 bg-blue-950 text-white md:flex md:items-center md:justify-center">
            <div className="max-w-lg bg-blue-800 rounded-md p-4">
                <h2 className="md:text-5xl">Let's get in touch!</h2>
                <form className="h-5/6 p-4" onSubmit={handleSubmit}>
                    {fields}
                    <label className="text-lg">Details</label>
                    <textarea required name="Details" className="w-full rounded-md h-1/4 p-2 text-lg text-blue-500 hover:scale-110 duration-200" onChange={handleChange}></textarea>
                    <button className="bg-blue-500 text-2xl rounded-md mt-4 p-2 hover:scale-110 duration-200" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}