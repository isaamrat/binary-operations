import React from "react";
import { useState } from "react";
import Binaryfundamentals from '../functions/Binaryfundamentals'

const BMMVview = () => {

    const [multiplicand, setMultiplicand] = useState('')
    const [multiplier, setMultiplier] = useState('')
    const [architecture, setArchitecture] = useState(32)
    const [stepsArr, setStepsarr] = useState([])
    const [isMultiplied, setMultiplied] = useState(false)
    const [product, setProduct] = useState([1,'none'])
    const [mlprmlpd, setMlprmlpd] = useState([1, 1])
    const [binary32bit, setBinary32bit] = useState([0,0])
    // const[temp, setTemp] = useState(0)
    let binaryFunctions = new Binaryfundamentals()


    function multiplicationSteps(binMultiplicand, binMultiplier) {
        let product = ''
        // let totalLen = binMultiplicand.length + binMultiplier.length
        let steps = []
        let max = binMultiplicand.length
        if (binMultiplier.length > max) {
            for (let index = max; index < binMultiplier.length; index++) {
                binMultiplicand = '0' + binMultiplicand
            }
        }
        else {
            for (let index = max; index < binMultiplicand.length; index++) {
                binMultiplier = '0' + binMultiplier

            }
        }

        for (let index = 0; index < binMultiplicand.length; index++) {
            product = product + '0'
        }
        product += binMultiplier
        let iteration = binMultiplier.length
        let msbproduct = ''
        for (let index = 0; index < iteration; index++) {
            if (product[product.length - 1] == '1') {
                msbproduct = binaryFunctions.binaryAddition(binMultiplicand, product.substring(0, (product.length / 2)))
                product = msbproduct + product.substring((product.length / 2))
            }
            product = product.substring(0, product.length - 1)
            product = '0' + product
        }
        steps.push({ high: product.substring(0, (product.length / 2)), low: product.substring((product.length / 2)) })
        return steps
    }
    let multiply = (event) => {
        if (multiplicand == '' || multiplier == '') {
            alert('Please give value for multiplier and multiplicand')
        }
        else {
            let inputmultiplier = multiplier
            let inputmultiplicand = multiplicand
            setMlprmlpd([multiplicand, multiplier])
            setProduct([(multiplicand * multiplier),binaryFunctions.toBinary(multiplicand*multiplier)])
            if (multiplier[0] == '-' || multiplier[0] == '+') {
                inputmultiplier = multiplier.substring(1)
            }
            if (multiplicand[0] == '-' || multiplicand[0] == '+') {
                inputmultiplicand = multiplicand.substring(1)
            }
            setMultiplied(true)
            let binMultiplier = binaryFunctions.toBinary(inputmultiplier)
            let binMultiplicand = binaryFunctions.toBinary(inputmultiplicand)
            let binAddition = binaryFunctions.binaryAddition(binMultiplier, binMultiplicand)
            for (let index = binMultiplier.length; index < architecture; index++) {
                binMultiplier = '0' + binMultiplier
            }
            for (let index = binMultiplicand.length; index < architecture; index++) {
                binMultiplicand = '0' + binMultiplicand
            }
            setBinary32bit([binMultiplicand, binMultiplier])
            // setProduct(multiplicand * multiplier)
            let data = multiplicationSteps(binMultiplicand, binMultiplier)
            setStepsarr(data)
            // console.log(binAddition)
        }
    }

    let reset = (event) => {
        setMultiplied(false)
        setMultiplicand('')
        setMultiplier('')
    }
    return (
        <div className=' max-w-[1280px] flex items-center justify-between flex-wrap  mx-auto px-4 text-white m-9 mt-24'>
            <div className=' flex flex-col bg-[#2f2f2f]  rounded-3xl my-5 w-full'>
                <div className=' px-5 py-4'>

                    <h1 className=' text-2xl font-bold text-center'>Binary MIPS Multiplication</h1>
                </div>
                <div className=' mb-1'>
                    <hr />
                </div>
                <div className=" lg:grid grid-cols-3 p-5 rounded-lg">
                    <div>
                        <div className=" bg-[#3f3f3f]  rounded-3xl h-fit" >
                            <div className=" py-4  md:p-4 m-3  flex flex-col justify-center">
                                <h1 className=" text-center font-bold text-2xl">Input</h1>
                                <input className=" p-2 m-2 rounded-full bg-[#bebebe] placeholder-gray-500 placeholder:text-sm text-black" type="number" placeholder="Multiplicand" value={multiplicand} onChange={(event) => setMultiplicand(event.target.value)} />
                                <input className=" p-2 m-2 rounded-full bg-[#bebebe] placeholder-gray-500 placeholder:text-sm text-black" type="number" placeholder="Multiplier" value={multiplier} onChange={(event) => setMultiplier(event.target.value)} />
                                <div className=" p-2 m-2 rounded-full bg-[#00c0ff] text-center text-xl font-bold cursor-pointer hover:bg-[#0281ac] hover:text-white text-black" onClick={multiply}>Multiply</div>
                                <div className=" p-2 m-2 rounded-full bg-[#ff5e00] text-center text-xl font-bold cursor-pointer hover:bg-[#8d3503] hover:text-white text-black" onClick={() => reset()}>Reset</div>
                            </div>
                        </div>

                        <div className={!isMultiplied ? " hidden" : " bg-[#3f3f3f]  rounded-3xl h-fit"}>
                        <div className=" py-4  lg:p-4 m-3  flex flex-col justify-center">
                                <h1 className=" text-center font-bold text-xl">The product of {mlprmlpd[0]} & {mlprmlpd[1]} :</h1>
                                <h1 className= {product[1]=='none'?"hidden":" text-center font-bold text-2xl text-[#00c0ff] my-5 overflow-auto"} >({product[0]})<sub>10</sub></h1>
                                <h1 className={product[1]=='none'?"hidden":" text-center font-bold text-2xl text-[#00c0ff] overflow-auto"}>({product[1]})<sub>2</sub></h1>
                                <h1 className={product[1]!='none'?"hidden":" text-center font-bold text-2xl text-[#00c0ff]"}>{product[0]}</h1>
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
                                            <h1 className=" font-bold sm:text-xl mt-5">
                                                Registers Value:

                                            </h1>
                                            <h1 className=" p-2 font-bold text-sm sm:text-xl">
                                                rs  &#8592; {binary32bit[0]}
                                                <br />
                                                rt &#8592; {binary32bit[1]}
                                            </h1>
                                            <div className=" border border-white my-5 h-fit">
                                                <h1 className=" p-2 font-bold sm:text-xl">
                                                    Instruction:
                                                    <br />
                                                    <div className=' mb-2'>
                                                        <hr />
                                                    </div>
                                                    multu rs, rt
                                                </h1>
                                            </div>
                                            <h1 className=" my-3 font-bold sm:text-xl">
                                                Registers value after multiplication:
                                            </h1>

                                            <div>
                                                <table className=" w-full mb-5 ">
                                                    <thead className="  border-b-2 b rounded">
                                                        <tr >
                                                            <th className=" sm:p-3 text-sm sm:text-lg font-semibold border-2 tracking-wide text-left">HI</th>
                                                            <th className=" sm:p-3 text-sm sm:text-lg font-semibold border-2 tracking-wide text-left">LO</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            stepsArr.map((value, key) => {
                                                                return (
                                                                    <tr key={key}>
                                                                        <td className=" sm:p-3 text-sm sm:text-lg  border-2">{value.high}</td>
                                                                        <td className=" sm:p-3 text-sm sm:text-lg  border-2">{value.low}</td>
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

export default BMMVview