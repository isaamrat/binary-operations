import React from "react";
import {Link} from 'react-router-dom'

let Operationcard = (title, cardIcon, info, cardClass, pagelink) => {
    return (
        <Link to={'/'+pagelink} className=' md:w-1/3 w-full md:px-5 md:py-5 py-3'>
            <div className={cardClass}>
                <div className=' grid grid-rows-2'>
                    <div className=' flex flex-row place-items-center justify-between'>
                        <h1 className=' text-xl font-extrabold mr-4'>{title}</h1>
                        <img src={cardIcon} alt="" width={40} />
                    </div>
                    <div>
                        <p className=' font-bold'>{info}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Operationcard