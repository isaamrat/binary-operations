import React from "react";
import developerIcon from "../assets/developing_edited_cat_bg.png"



const AboutView = () => {

    return (
        <div className=' max-w-[1280px] flex items-center justify-between flex-wrap  mx-auto px-4 text-white m-9 mt-24'>
            <div className=' flex flex-col bg-[#2f2f2f]  rounded-3xl my-5 w-full'>
                <div className=' px-5 py-4'>
                    <h1 className=' text-2xl font-bold text-center'>About</h1>
                </div>
                <div className=' mb-1'>
                    <hr />
                </div>
                <div className=' lg:grid grid-cols-3 p-5 text-black'>
                    <div className="  w-full grid place-items-center">
                        <img src={developerIcon} width={420} className='  rounded-xl' />

                    </div>
                    <div className=" col-span-2 lg:pr-5">
                        <div className="w-full flex flex-col space-y-3  mt-5 lg:mt-0 md:items-center lg:items-start">
                            <h1 className=' text-2xl md:text-2xl font-bold w-full  text-white text-center'>  Binary Operations</h1>
                            <h1 className=' text-lg font-bold text-white text-justify'>  This tool was created to assist students with a variety of binary operations. Since a computer works in binary, it is crucial to comprehend how these operations are carried out behind the scenes.  </h1>
                            <h1 className=' text-lg font-bold text-white text-justify'>  This tool is developed by Md. Khaliduzzaman Khan Samrat, an student of Computer Science and Engineering Department of BRAC University. I got the idea of developing something like this while doing a course CSE340 named Computer Architecture. In this course there is part where it is tought how the computer deal with binary numbers and does various operations. I wanted to build a tool where students can understand those concepts in a interactive way.  </h1>
                            <h1 className=' text-lg font-bold text-[#ff5e00] text-justify'>  If you find any discrepency, let the developer know. You can get the deveoper contacts from the Contact tab on the top.</h1>
                        </div>
                        <div>
                            <h1 className=' text-lg font-bold text-white mt-5'>  Technology behind this tool:</h1>
                            <ul className="text-lg font-bold text-white list-disc pl-5 " >
                                <li>Vite JS</li>
                                <li>React JS</li>
                                <li>Java Script</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutView