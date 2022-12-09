import { FaBeer, FaOptinMonster, FaBars, FaArrowDown, FaArrowUp, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi'
import { RiCloseFill} from 'react-icons/ri'
import { useState } from 'react';
import logo from '../assets/binary-logo.png'
import { Link } from 'react-router-dom'

let Navbar = () => {
    const [mobileNavbar, setMobileNavbar] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const changeNavbar = () => {
        setMobileNavbar(!mobileNavbar)
    }
    const changeDropDown = () => {
        setDropDown(!dropDown)
    }
    return (
        <div className=' bg-[#2f2f2f] rounded-b-lg fixed w-full top-0 ease-in-out'>
            <div className="  max-w-[1280px] flex items-center justify-between flex-wrap  mx-auto px-4 ease-in-out duration-1000">
                <Link to={'/'}><img src={logo} width={110} className=' hover:scale-110 ease-in-out duration-300 ' /></Link>
                <ul className=' md:flex flex-wrap hidden items-center'>
                    <li className=' p-1 text-white'>
                        <Link to={'/'} className=' hover:bg-[#3f3f3f] py-2 px-4 rounded-full font-bold'>Home</Link>

                    </li>
                    <li className=' p-1 text-white'>
                        <Link to={'/about'} className=' hover:bg-[#3f3f3f] py-2 px-4 rounded-full font-bold'>About</Link>

                    </li>
                    <li className=' p-1 text-white'>
                        <Link to={'/contact'} className=' hover:bg-[#3f3f3f] py-2 px-4 rounded-full font-bold'>Contact</Link>

                    </li>
                    <li className=' p-1 text-white'>

                        <button className=' bg-[#bebebe] text-black px-4 py-2 rounded-full hover:bg-[#dddbdb]' onClick={changeDropDown}>
                            <div className=' flex flex-row items-center justify-between w-32 font-bold'>
                                <h1>Operations</h1>
                                {dropDown ? <FaAngleUp /> : <FaAngleDown />}

                            </div>
                        </button>
                        <div className={dropDown ? ' bg-[#bebebe] flex flex-col rounded-2xl mt-1 text-black p-2 text-sm w-40 fixed' : 'hidden'} >
                            <Link to={'/longmultiplication'} className=' px-2 py-1 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeDropDown}>Long multiplication</Link>
                            <Link to={'/optimizedmultiplier'} className=' px-2 py-1 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeDropDown}>Optimized multiplication</Link>
                            <Link to={'/mipsmultiplication'} className=' px-2 py-1 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeDropDown}>MIPS multiplication</Link>
                            <Link to={'/decieeefloat'} className=' px-2 py-1 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeDropDown}>Decimal to IEEE FLoating-Point</Link>
                        </div>
                    </li>
                </ul>
                <div className=' md:hidden text-white hover:bg-[#00c0ff] rounded-2xl p-2'>
                    <div className=' ease-in-out duration-1000 ' onClick={changeNavbar}>
                        {mobileNavbar ? < RiCloseFill size={35} /> : <BiMenuAltRight size={35} />}
                    </div>
                </div>
                <ul className={mobileNavbar ? 'flex flex-wrap flex-col justify-center w-screen md:hidden m-1 ' : 'hidden'}>
                    <Link to={'/'} className='rounded-full' onClick={changeNavbar}>
                        <li className=' p-3  my-2 w-full bg-[#3f3f3f] rounded-full text-white hover:bg-[#333232]'>
                            <div className=' px-5 rounded-full font-bold w-3/4'>Home</div>

                        </li>
                    </Link>
                    <Link to={'/about'} className='rounded-full' onClick={changeNavbar}>
                        <li className=' p-3  my-2 w-full bg-[#3f3f3f] rounded-full text-white hover:bg-[#333232]'>
                            <div className=' px-5 rounded-full font-bold w-3/4'>About</div>

                        </li>
                    </Link>
                    <Link to={'/contact'} className='rounded-full' onClick={changeNavbar}>
                        <li className=' p-3  my-2 w-full bg-[#3f3f3f] rounded-full text-white hover:bg-[#333232]'>
                            <div className=' px-5 rounded-full font-bold w-3/4'>Contact</div>

                        </li>
                    </Link>
                    <li className=' p-3 my-2 w-full bg-[#bebebe] rounded-full text-white hover:bg-[#dddbdb] focus:bg-red-200' onClick={changeDropDown}>
                        <div className='  text-black px-5 rounded-full  w-full' >
                            <div className=' flex flex-row items-center justify-between font-bold'>
                                <h1>Operations</h1>
                                {dropDown ? <FaAngleUp /> : <FaAngleDown />}

                            </div>
                        </div>
                        <div className={dropDown ? ' bg-[#bebebe] flex flex-col rounded-2xl p-1 mt-4 text-black text-sm w-5/6 my-2  fixed ' : 'hidden'} >
                            <Link to={'/longmultiplication'} className=' px-4 py-3 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeNavbar}>Long multiplication</Link>
                            <Link to={'/optimizedmultiplier'} className=' px-4 py-3 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeNavbar}>Optimized multiplication</Link>
                            <Link to={'/mipsmultiplication'} className=' px-4 py-3 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeNavbar}>MIPS multiplication</Link>
                            <Link to={'/decieeefloat'} className=' px-4 py-3 rounded-full hover:bg-[#dddbdb] font-bold' onClick={changeNavbar}>Decimal to IEEE FLoating-Point Format</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar