import React from "react";
import githubIcon from "../assets/github-mark-white.png"
import gmailIcon from "../assets/gmail.png"
import facebookIcon from "../assets/facebook.png"
import ppIcon from "../assets/pp_bg.png"



const ContactView = () => {

    return (
        <div className=' max-w-[1280px] flex items-center justify-between flex-wrap  mx-auto px-4 text-white m-9 mt-24'>
            <div className=' flex flex-col bg-[#2f2f2f]  rounded-3xl my-5 w-full'>
                <div className=' px-5 py-4'>
                    <h1 className=' text-2xl font-bold text-center'>Contact</h1>
                </div>
                <div className=' mb-1'>
                    <hr />
                </div>
                <div className=' lg:grid grid-cols-2 p-5 text-black'>
                    <div className="  w-full grid place-items-center ">
                        <img src={ppIcon} width={250} className='  rounded-full' />

                    </div>
                    <div className="  w-full flex flex-col space-y-3  mt-5 lg:mt-0 md:items-center lg:items-start">
                        <h1 className=' text-xl md:text-xl font-bold text-white text-center'>  Md. Khaliduzzaman Khan Samrat</h1>
                        <div className=" flex flex-col space-y-3 md:w-1/2">
                            <a href="https://github.com/isaamrat" target="_blank" className=' bg-[#6d6c6c] hover:bg-[#000000] py-2 px-4 rounded-full font-bold text-white'>
                                <div className=" flex flex-row items-center justify-between">
                                    <h1>Github</h1>
                                    <img src={githubIcon} width={30} className='  rounded-xl' />
                                </div>
                            </a>
                            <a href="mailto:saamratkhan2050@gmail.com"  target="_blank" className=' bg-gradient-to-r bg-[#6d6c6c] hover:from-[#3878e5] hover:via-[#2b9d4a] hover:to-[#f2b605] py-2 px-4 rounded-full font-bold text-white'>
                            <div className=" flex flex-row items-center justify-between">
                                    <h1>Gmail</h1>
                                    <img src={gmailIcon} width={30} className='  rounded-xl' />
                                </div>
                            </a>
                            <a href="https://www.facebook.com/khalidkhan.samrat/" target="_blank" className=' bg-[#6d6c6c] hover:bg-[#1877f2] py-2 px-4 rounded-full font-bold text-white'>
                            <div className=" flex flex-row items-center justify-between">
                                    <h1>Facebook</h1>
                                    <img src={facebookIcon} width={30} className='  rounded-xl' />
                                </div>
                            </a>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ContactView