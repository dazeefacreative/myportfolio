
import { Icon } from "@iconify/react"
import { useState, useEffect, useRef } from "react"

import { services } from "./ServiceCard";

const WebDesign = services[0].icon;
const WebDev = services[1].icon;
const GraphicsDesign = services[2].icon;

export default function Contact(){

    const [openOptions, setOpenOptions] = useState(false)
    const [loading, setLoading] = useState(false)
    const [noService, setNoService] = useState("")
    
    const [botControl, setBotControl] = useState("")
    const [selectedService, setSelectedService] = useState(null);
    const [clientName, setClientName] = useState("")
    const [clientPhone, setClientPhone] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientProject, setClientProject] = useState("")
    const [message, setMessage] = useState({error: "", success: ""})

    const clearField = () =>{
        setSelectedService("Pick a service")
        setClientName("")
        setClientPhone("")
        setClientEmail("")
        setClientProject("")
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage({error: "", success: ""})

    if(botControl.length > 1){
        setLoading(false);
        return;
    }

    if(!selectedService){
        setNoService("Please pick a service first.")
        setLoading(false)
        return
    }
    
    fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-portfolio-contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
            name: clientName,
            phone: clientPhone,
            email: clientEmail,
            project: clientProject,
            service: selectedService
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.message === "success"){
            clearField();
            setMessage({success: "Form submitted successfully!"})
        } else {
            setMessage({error: "Unable to reach the server. Please try again later."})
        }
    })
    .catch(error => {
        console.error("Error submitting form:", error);
        setMessage({error: "An error occurred while submitting the form."})
    })
    .finally(() => {
        setLoading(false)
    })
}

    const dropdownRef = useRef(null);

    useEffect(() => {
    const handleDocumentClick = (e) => {
        if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
        ) {
        setOpenOptions(false);
        }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
        document.removeEventListener("click", handleDocumentClick);
    };
    }, []);


    return(
        <section id="contact" className="bg-veryDark">
            <div className="w-full max-w-4xl mx-auto gap-y-10 gap-2 lg:gap-y-16 px-6 py-12">
                <h1 className="inline-block text-3xl lg:text-4xl mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Let's Get In Touch
                </h1>
                <div className="flex sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex flex-col items-start gap-2">
                        <a 
                        href="tel:+2347082816283"
                        className="group p-2 border border-gray-100 mb-4" >
                            <Icon icon="line-md:phone-call-filled" className="w-8 h-8 group-hover:hidden" />
                            <Icon icon="line-md:phone-call-filled-loop" className="hidden w-8 h-8 group-hover:block" />
                        </a>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <a 
                        href="mailto:hire@dazeefa.com?subject=New%20Project%20Request"
                        className="group p-2 border border-gray-100 mb-4" >
                            <Icon icon="line-md:email-alt-filled" className="w-8 h-8" />
                        </a>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <a 
                        href="https://maps.app.goo.gl/STd7muctp6vwyqe3A"
                        target="_blank"
                        className="group p-2 border border-gray-100 mb-4" >
                            <Icon icon="line-md:map-marker-multiple-alt-filled" className="w-8 h-8 group-hover:hidden" />
                            <Icon icon="line-md:map-marker-multiple-alt-filled-loop" className="hidden w-8 h-8 group-hover:block" />
                        </a>
                    </div>
                </div>
                <div className="w-full bg-gray-100 h-[0.5px] my-16"></div>
                <div className="w-full">
                    <span className="inline-block text-2xl font-bold mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Or fill out the form below</span>
                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="text" name="website" onChange={(e)=>setBotControl(e.target.value)} value={botControl} tabIndex={-1} className="hidden" />
                        <div className="flex flex-col gap-2">
                            <label className="text-sm after:content-['*'] after:text-red-500 after:ml-1">
                                Service purpose
                            </label>
                            <div ref={dropdownRef} className="relative">
                                <div 
                                required
                                onClick={()=>{setOpenOptions(!openOptions)}}
                                className={`text-sm bg-dark w-full p-4 pl-12 ${selectedService === null? "text-gray-400" : "text-gray-300 " }`}>{selectedService || "Select a service"}</div>
                                
                                {openOptions &&                                
                                <ui                                 
                                className={`absolute top-14 left-0 bg-gray-700 w-full text-sm text-gray-300 list-none z-10 py-1`} >
                                    <li 
                                    onClick={()=>{setSelectedService("Build my website (design + development)"); setOpenOptions(false)}}
                                    className="relative text-gray-300  hover:bg-secondary py-1 px-4"><WebDev className="inline-block mr-4 w-4 h-4 z-20"/>Build my website (design + development)</li>
                                    <li 
                                    onClick={()=>{setSelectedService("Web Design (UI/UX)"); setOpenOptions(false)}}
                                    className="relative text-gray-300  hover:bg-secondary py-1 px-4"><WebDesign className="inline-block mr-4 w-4 h-4 z-20"/>Web Design (UI/UX)</li>
                                    <li 
                                    onClick={()=>{setSelectedService("Web Development"); setOpenOptions(false)}}
                                    className="relative text-gray-300  hover:bg-secondary py-1 px-4"><WebDev className="inline-block mr-4 w-4 h-4 z-20"/>Web Development</li>
                                    <li 
                                    onClick={()=>{setSelectedService("Graphics Design"); setOpenOptions(false)}}
                                    className="relative text-gray-300  hover:bg-secondary py-1 px-4"><GraphicsDesign className="inline-block mr-4 w-4 h-4 z-20"/>Graphics Design</li>
                                </ui>
                                }
                                { !openOptions?
                                    <Icon 
                                        onClick={()=>{setOpenOptions(!openOptions)}}
                                        icon="material-symbols:keyboard-arrow-down" 
                                        className="absolute right-3 top-1/2 -translate-y-1/2" />
                                        :
                                    <Icon 
                                        onClick={()=>{setOpenOptions(!openOptions)}}
                                        icon="material-symbols:keyboard-arrow-up" 
                                        className="absolute right-3 top-1/2 -translate-y-1/2" />    

                                }
                                <Icon icon="mdi:art" className="absolute left-3 top-1/2 -translate-y-1/2 scale-10" />
                            </div>
                            {!selectedService && noService && <span
                             className="text-sm text-red-500">{noService}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm after:content-['*'] after:text-red-500 after:ml-1">
                                Full Names
                            </label>
                            <div className="relative">
                            <input 
                            type="text" 
                            name="name" 
                            onChange={(e)=>setClientName(e.target.value)} 
                            value={clientName} 
                            placeholder="Input your full names" 
                            required 
                            className="
                            text-sm bg-dark w-full text-gray-300 p-4 pl-12
                            [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_theme(colors.dark)]
                            [&:-webkit-autofill]:[-webkit-text-fill-color:white]

                            invalid:border-red-500 invalid:text-red-600
                            focus:border-primary focus:outline focus:outline-primary
                            focus:invalid:border-red-500 focus:invalid:outline-red-500
                            disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none
                            dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20
                            "                            />
                                <Icon icon="mdi:person" className="absolute left-3 top-1/2 -translate-y-1/2 scale-10" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm after:content-['*'] after:text-red-500 after:ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                            <input 
                            type="email" 
                            name="email" 
                            onChange={(e)=>setClientEmail(e.target.value)} 
                            value={clientEmail} placeholder="Input your email" 
                            required 
                            className="
                            text-sm bg-dark w-full text-gray-300 p-4 pl-12
                            [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_theme(colors.dark)]
                            [&:-webkit-autofill]:[-webkit-text-fill-color:white]

                            invalid:border-red-500 invalid:text-red-600
                            focus:border-primary focus:outline focus:outline-primary
                            focus:invalid:border-red-500 focus:invalid:outline-red-500
                            disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none
                            dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20
                            "                            />
                                <Icon icon="mdi:email" className="absolute left-3 top-1/2 -translate-y-1/2 scale-10" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm after:content-['*'] after:text-red-500 after:ml-1">
                                Telephone
                            </label>
                            <div className="relative">
                            <input 
                            type="tel" 
                            name="telephone" 
                            onChange={(e)=>setClientPhone(e.target.value)} 
                            value={clientPhone} 
                            placeholder="Input your telephone" 
                            required 
                            className="
                            text-sm bg-dark w-full text-gray-300 p-4 pl-12
                            [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_theme(colors.dark)]
                            [&:-webkit-autofill]:[-webkit-text-fill-color:white]

                            invalid:border-red-500 invalid:text-red-600
                            focus:border-primary focus:outline focus:outline-primary
                            focus:invalid:border-red-500 focus:invalid:outline-red-500
                            disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none
                            dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20
                            "

                            />
                                <Icon icon="mdi:phone" className="absolute left-3 top-1/2 -translate-y-1/2 scale-10" />
                            </div>
                        </div>

                        <div className="sm:col-span-2 flex flex-col gap-2">
                            <label className="text-sm">
                                Project Details
                            </label>
                            <div className="relative">

                            <textarea 
                            name="description" 
                            onChange={(e)=>setClientProject(e.target.value)} 
                            value={clientProject} 
                            placeholder="Please share a brief overview of your project before our meeting." 
                            rows={5} 
                            className="text-sm bg-dark w-full invalid:border-red-500 invalid:text-red-600 focus:border-primary focus:outline focus:outline-primary focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 text-gray-300 p-4 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                            />
                            </div>
                        </div>
                        <div>
                        {message.error && <span className="text-sm text-red-500">{message.error}</span>}
                        {message.success && <span className="text-sm text-green-500">{message.success}</span>}
                        </div>

                        <button type="submit" disabled={loading} className="w-full items-center text-veryDark font-bold justify-center tracking-tightest bg-gradient-to-r from-primary to-secondary p-2 disabled:cursor-not-allowed disabled:opacity-50 flex disabled:bg-gradient-to-r disabled:from-gray-500 disabled:text-white disabled:to-gray-700 hover:scale-105 transition-transform duration-300">
                            {loading ? "Submitting" : "Submit Form"}                                     
                            <Icon icon={loading ? "svg-spinners:90-ring" : "tabler:arrow-badge-right"} className="inline-block ml-2 w-5 h-5" />
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}