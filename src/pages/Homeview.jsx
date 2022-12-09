import React from "react";
import Operationcard from "../components/Operationcard";
import decIEEE from "../assets/binaryIEEE.png"
import optimizedIcon from "../assets/optimized_icon.png"
import longmultiplicationIcon from "../assets/long_multiplication_icon.png"
import mipscodeIcon from "../assets/mipscode_icon.png"



const Homeview = () => {
  
  return (
    <div className=' max-w-[1280px] flex items-center justify-between flex-wrap  mx-auto px-4 text-white m-9 mt-24'>
      <h1 className=' text-xl md:text-2xl font-bold md:w-full text-center'>This tool is developed to help students  to understand the concept of binary operations.</h1>
      <div className=' flex flex-col bg-[#2f2f2f]  rounded-3xl my-5 w-full'>
        <div className=' px-5 py-4'>
          <h1 className=' text-2xl font-bold text-center'>Operations</h1>
        </div>
        <div className=' mb-1'>
          <hr />
        </div>
        <div className=' flex flex-wrap md:flex-row px-5 text-black'>
          {Operationcard('Long Multiplication', longmultiplicationIcon, 'It requires multiplicand, multiplier and architecture(optional) and will generate all the steps of the operation.', ' bg-[#00c0ff] rounded-lg px-3 py-2 hover:scale-105 ease-in-out duration-200 ', 'longmultiplication')}
          {Operationcard('Optimized Multiplication', optimizedIcon, 'It requires multiplicand, multiplier and architecture(optional) and will generate all the steps of the operation.', ' bg-[#ff5e00] rounded-lg px-3 py-2 hover:scale-105 ease-in-out duration-200 ', 'optimizedmultiplier')}
          {Operationcard('MIPS Multiplication', mipscodeIcon, 'It requires multiplicand, multiplier to calculate the product and will generate the mips code.', ' bg-[#ffc0ff] rounded-lg px-3 py-2 hover:scale-105 ease-in-out duration-200 ','mipsmultiplication')}
          {Operationcard('Decimal to IEEE FLoating-Point Format', decIEEE, 'User can give a decimal value in the converter and it will generate Binary IEEE Floating-Point format.', ' bg-[#00c0ff] rounded-lg px-3 py-2 hover:scale-105 ease-in-out duration-200 ', 'decieeefloat')}
        </div>
      </div>
    </div>
  )
}

export default Homeview