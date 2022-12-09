import React from "react";
import { useState } from "react";
import Binaryfundamentals from '../functions/Binaryfundamentals'

const Decieeefloatview = () => {

    const [stepsArr, setStepsarr] = useState([])
    const [isMultiplied, setMultiplied] = useState(false)

    //IEEE
    const [userGivenValue, setUserGivenValue] = useState('')
    const [normalizedBinary, setNormalizedBinary] = useState('0')
    const [realExponent, setRealExponent] = useState(0)
    const [givenBit, setGivenBit] = useState(32)
    const [signSymbol, setSignSymbol] = useState('')
    // const[temp, setTemp] = useState(0)
    let binaryFunctions = new Binaryfundamentals()

    //IEEE_functions
    function decimalFractionBinary(decimal, fraction) {
        let decimalFraction = ''
        let exponent = 0
        let decOnePointer = 0
        let decPointer = 0
        while (decOnePointer < decimal.length) {
            if (decimal[decOnePointer] == '1') {
                break
            }
            decOnePointer += 1
        }
        decimalFraction = decimal.substring(decOnePointer) + '.' + fraction
        if (decimalFraction[0] == '.') {
            while (decPointer < decimalFraction.length) {
                if (decimalFraction[decPointer] == '1') {
                    break
                }
                decPointer += 1
            }
            // console.log(decPointer)
            decimalFraction = decimalFraction.substring(decPointer, decPointer + 1) + '.' + decimalFraction.substring(decPointer + 1)
            exponent -= decPointer
            // console.log(decPointer)
        }
        else {
            while (decPointer < decimalFraction.length) {
                if (decimalFraction[decPointer] == '.') {
                    break
                }
                decPointer += 1
            }
            decimalFraction = decimalFraction[0] + '.' + decimalFraction.substring(1, decPointer) + decimalFraction.substring(decPointer + 1)
            exponent += decPointer - 1
            // console.log(decPointer)
        }
        if (givenBit == 32) {
            setNormalizedBinary(decimalFraction.substring(0, 26))
        }
        else {
            setNormalizedBinary(decimalFraction.substring(0, 55))
        }
        setRealExponent(exponent)
        // console.log(decimalFraction,exponent)
        return [decimalFraction, exponent]
    }
    function decToBinIEEE(decFrac, exp, bit) {
        let bias = 0
        let bitExpo = 8
        if (bit > 32) {
            bitExpo = 11
        }
        bias = (2 ** (bitExpo - 1)) - 1
        let biasExpo = bias + exp
        let biasExpoBin = binaryFunctions.toBinary(biasExpo)
        let fractionPart = ''
        if (bit == 32) {
            for (let i = biasExpoBin.length; i < 8; i++) {
                biasExpoBin = '0' + biasExpoBin
            }
            fractionPart = decFrac.substring(2, 25)
        }
        else if (bit == 64) {
            for (let i = biasExpoBin.length; i < 11; i++) {
                biasExpoBin = '0' + biasExpoBin
            }
            fractionPart = decFrac.substring(2, 54)
        }
        return ([biasExpoBin, fractionPart])
    }

    let convert = (event) => {
        if (userGivenValue == 0 || userGivenValue == '') {
            alert('Please give a valid value')
        }
        else {
            let givenValue = userGivenValue
            let signBit = '0'
            if (givenValue < 0) {
                signBit = '1'
                givenValue = givenValue * (-1)
                setSignSymbol('-')
            }
            let givenValueStr = givenValue.toString()
            let decPoint = false
            for (let i = 0; i < givenValueStr.length; i++) {
                if (givenValueStr[i] == '.') {
                    decPoint = true
                    break
                }
            }
            if (!decPoint) {
                givenValueStr += '.0'
            }
            let decIndex = givenValueStr.indexOf('.')
            let decBinary = binaryFunctions.toBinary(parseInt(givenValueStr.substring(0, decIndex)))
            // console.log(parseFloat(givenValueStr.substring(decIndex)),'***')
            let fracBinary = binaryFunctions.fractionBinary(parseFloat(givenValueStr.substring(decIndex)))
            let decFracExpo = decimalFractionBinary(decBinary, fracBinary)
            let expoFrac = decToBinIEEE(decFracExpo[0], decFracExpo[1], givenBit)
            setMultiplied(true)
            let steps = []
            steps.push({ sign: signBit, expo: expoFrac[0], frac: expoFrac[1] })
            setStepsarr(steps)
            // console.log(decFracExpo[0])
        }
    }


    

    let reset = (event) => {
        setMultiplied(false)
        setUserGivenValue('')
        setNormalizedBinary('0')
        setRealExponent(0)
        setGivenBit(32)
        setSignSymbol('')
    }
    let bitChange = (event)=>{
        setMultiplied(false)
        setNormalizedBinary('0')
        setRealExponent(0)
        setSignSymbol('')
    }
    return (
        <div className=' max-w-[1280px] flex items-center justify-between flex-wrap  mx-auto px-4 text-white m-9 mt-24'>
            <div className=' flex flex-col bg-[#2f2f2f]  rounded-3xl my-5 w-full'>
                <div className=' px-5 py-4'>

                    <h1 className=' text-2xl font-bold text-center'>Decimal to IEEE FLoating-Point Format</h1>
                </div>
                <div className=' mb-1'>
                    <hr />
                </div>
                <div className=" lg:grid grid-cols-3 p-5 rounded-lg">
                    <div>
                        <div className=" bg-[#3f3f3f]  rounded-3xl h-fit" >
                            <div className=" py-4  md:p-4 m-3  flex flex-col justify-center">
                                <h1 className=" text-center font-bold text-2xl">Input</h1>
                                <input className=" p-2 m-2 rounded-full bg-[#bebebe] placeholder-gray-500 placeholder:text-sm text-black" type="number" placeholder="Decimal" value={userGivenValue} onChange={(event) => setUserGivenValue(event.target.value)} />
                                <select className=" p-2 m-2 rounded-full bg-[#bebebe] placeholder-gray-500 placeholder:text-sm text-black" onChange={(event)=> {setGivenBit(event.target.value)
                                bitChange()
                                }}  name="cars" id="cars">
                                    <option  value="32">32 Bit</option>
                                    <option value="64">64 Bit</option>
                                </select>
                                <div className=" p-2 m-2 rounded-full bg-[#00c0ff] text-center text-xl font-bold cursor-pointer hover:bg-[#0281ac] hover:text-white text-black" onClick={convert}>Convert</div>
                                <div className=" p-2 m-2 rounded-full bg-[#ff5e00] text-center text-xl font-bold cursor-pointer hover:bg-[#8d3503] hover:text-white text-black" onClick={() => reset()}>Reset</div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-2">
                        <div className="  bg-[#3f3f3f] rounded-3xl lg:ml-5">
                            <div className="  lg:p-4 m-3 h-fit flex flex-col justify-center">
                                {!isMultiplied ? <h1 className=" p-5 md:text-2xl text-xl font-bold text-center">Steps will be shown here</h1> :
                                    <div className="h-fit rounded-md  overflow-auto  grid ">
                                        <h1 className=" text-center  my-3 font-bold sm:text-3xl" >Steps</h1>
                                        <div className=''>
                                            <hr />
                                        </div>
                                        <div className=" border border-white my-5 h-fit">
                                            <h1 className=" p-2 font-bold sm:text-xl">
                                                Normalized Form in Binary:
                                                <br />
                                                <div className=' mb-2'>
                                                    <hr />
                                                </div>
                                                {signSymbol + normalizedBinary}x2<sup>{realExponent}</sup>
                                            </h1>
                                        </div>
                                        <h1 className=" my-3 font-bold sm:text-xl">
                                            In {givenBit}bit IEEE Floating-Point
                                        </h1>

                                        <div>
                                            <table className=" w-full mb-5 ">
                                                <thead className="  border-b-2 b rounded">
                                                    <tr >
                                                        <th className=" sm:p-3 text-sm sm:text-lg font-semibold border-2 tracking-wide text-left">Sign Bit</th>
                                                        <th className=" sm:p-3 text-sm sm:text-lg font-semibold border-2 tracking-wide text-left">Exponent</th>
                                                        <th className=" sm:p-3 text-sm sm:text-lg font-semibold border-2 tracking-wide text-left">Fraction</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        stepsArr.map((value, key) => {
                                                            return (
                                                                <tr key={key}>
                                                                    <td className=" sm:p-3 text-sm sm:text-lg  border-2">{value.sign}</td>
                                                                    <td className=" sm:p-3 text-sm sm:text-lg  border-2">{value.expo}</td>
                                                                    <td className=" sm:p-3 text-sm sm:text-lg  border-2">{value.frac}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                }

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decieeefloatview