import emailjs from '@emailjs/browser'
import React, { useState, useEffect } from 'react'

interface form {
    [key: string]: string
}

export default function Contact() {
    const [emailSent, setEmailSent] = useState<null | boolean>(null)
    const [formDetails, setFormDetails] = useState<form>({
        "First Name": "",
        "Last Name": "",
        "Company Name": "",
        "Email": "",
        "Phone Number": "",
        "Details": ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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
                    <input name={label} type="text" value={formDetails[label]} className="w-full rounded-md p-2 text-xl text-blue-500 hover:scale-110 duration-200" placeholder={`${label}...`} onChange={handleChange}/>
                :
                    <input required name={label} type="text" value={formDetails[label]} className="w-full rounded-md p-2 text-xl text-blue-500 hover:scale-110 duration-200" placeholder={`${label}...`} onChange={handleChange}/>
                }
            </React.Fragment>
        )
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('firing')
        const serviceID = process.env.REACT_APP_SERVICE_ID
        const templateID = process.env.REACT_APP_TEMPLATE_ID
        

        if (serviceID && templateID) {
            emailjs.send(serviceID, templateID, formDetails)
            .then((res) => {
                setFormDetails({
                    "First Name": "",
                    "Last Name": "",
                    "Company Name": "",
                    "Email": "",
                    "Phone Number": "",
                    "Details": ""
                })

                setEmailSent(true)
            })
            .catch((error) => {
                console.error(error)
                setEmailSent(false)
            })

            setTimeout(() => {
                setEmailSent(null)
            }, 5000)
        }
    }

    useEffect(() => {
        if (process.env.REACT_APP_PUBLIC_KEY) emailjs.init(process.env.REACT_APP_PUBLIC_KEY)
    }, [])


    return (
        <div id="Contact" className="h-screen w-full p-4 bg-blue-950 text-white md:flex md:items-center md:justify-center">
            <div className="max-w-lg bg-blue-800 rounded-md p-4">
                <h2 className="md:text-5xl">Let's get in touch!</h2>
                <form className="h-5/6 p-4" onSubmit={handleSubmit}>
                    {fields}
                    <label className="text-lg">Have more to say?</label>
                    <textarea required name="Details" rows={4} className="w-full rounded-md h-1/4 p-2 text-lg text-blue-500 hover:scale-110 duration-200" placeholder="Details..." onChange={handleChange} value={formDetails["Details"]}></textarea>
                    <button disabled={emailSent === null ? false : true} className={`
                        ${emailSent === null ? "bg-blue-500" : emailSent === true ? "bg-green-500" : "bg-red-500"} 
                        text-2xl rounded-md mt-4 p-2 hover:scale-110 duration-200`} type="submit">
                    {emailSent === null ?  
                        "Submit"
                    :
                        emailSent === true ? "Success!" : "Something went wrong!"
                    }</button>
                </form>
            </div>
        </div>
    )
}