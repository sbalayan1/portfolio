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

    const fields = Object.keys(formDetails).map(label => {
        return (
            <div key={label} className="pb-4 text-white">
                <label className="mb-2">{`${label}*`}</label>
                <input required name={label} type="text" value={formDetails[label]} className="w-full rounded-md p-2 text-oxfordBlue" placeholder={`${label}...`} onChange={handleChange}/>
            </div >
        )
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const serviceID = process.env.REACT_APP_SERVICE_ID
        const templateID = process.env.REACT_APP_TEMPLATE_ID
        

        if (serviceID && templateID) {
            emailjs.send(serviceID, templateID, formDetails)
            .then((res) => {
                setFormDetails({
                    "First Name": "",
                    "Last Name": "",
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
        <div id="Contact" className="w-screen p-4 flex justify-center text-xs text-gunmetal border-t">
            <div className="max-w-screen-sm max-h-screen-md w-3/4 md:w-2/5 rounded-lg p-4">
                <h2 className="text-white">Let's get in touch!</h2>
                <form className="p-4" onSubmit={handleSubmit}>
                    {fields}
                    <label className="text-white ">Have more to say?</label>
                    <textarea required name="Details" rows={4} className="w-full rounded-md h-1/5 p-2 " placeholder="Details..." onChange={handleChange} value={formDetails["Details"]}></textarea>
                    <button disabled={emailSent === null ? false : true} className={`
                        ${emailSent === null ? "border" : emailSent === true ? "bg-green-500" : "bg-red-500"} 
                        rounded-md mt-4 p-2 hover:scale-110 duration-200 text-white`} type="submit">
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