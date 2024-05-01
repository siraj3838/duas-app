
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { PiBooksDuotone } from "react-icons/pi";
import { BsBook } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

import { GoHomeFill } from "react-icons/go";
import { PiBooksFill } from "react-icons/pi";
import { BsBookFill } from "react-icons/bs";
import { IoBookmark } from "react-icons/io5";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    const navList = (
        <>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`${isHovered ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {isHovered ?
                        <div className="text-3xl ">
                            <GoHomeFill />
                        </div>
                        :
                        <p className="text-3xl">
                            <GoHome />
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    className={`${isHovered2 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {isHovered2 ?
                        <div className="text-3xl ">
                            <PiBooksFill />
                        </div>
                        :
                        <p className="text-3xl">
                            <PiBooksDuotone />
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                    className={`${isHovered3 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {isHovered3 ?
                        <div className="text-3xl ">
                            <BsBookFill />
                        </div>
                        :
                        <p className="text-3xl">
                            <BsBook></BsBook>
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                    className={`${isHovered4 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {isHovered4 ?
                        <div className="text-3xl ">
                            <IoBookmark />
                        </div>
                        :
                        <p className="text-3xl">
                            <IoBookmarkOutline></IoBookmarkOutline>
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                    className={`${isHovered5 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {isHovered5 ?
                        <div className="text-3xl ">
                            <AiFillAppstore />
                        </div>
                        :
                        <p className="text-3xl">
                            <AiOutlineAppstore></AiOutlineAppstore>
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                    className={`${isHovered6 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {isHovered6 ?
                        <div className="text-3xl ">
                            <BsFillSendFill />
                        </div>
                        :
                        <p className="text-3xl">
                            <FiSend></FiSend>
                        </p>
                    }
                </div>
            </Link>
        </>
    );
    const navListMobile = (
        <>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`${isHovered ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-3 cursor-pointer rounded-lg`}
                >
                    {isHovered ?
                        <div className="text-[20px] ">
                            <GoHomeFill />
                        </div>
                        :
                        <p className="text-[20px]">
                            <GoHome />
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    className={`${isHovered2 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-3 cursor-pointer rounded-lg`}
                >
                    {isHovered2 ?
                        <div className="text-[20px] ">
                            <PiBooksFill />
                        </div>
                        :
                        <p className="text-[20px]">
                            <PiBooksDuotone />
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                    className={`${isHovered3 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-3 cursor-pointer rounded-lg`}
                >
                    {isHovered3 ?
                        <div className="text-[20px] ">
                            <BsBookFill />
                        </div>
                        :
                        <p className="text-[20px]">
                            <BsBook></BsBook>
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                    className={`${isHovered4 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-3 cursor-pointer rounded-lg`}
                >
                    {isHovered4 ?
                        <div className="text-[20px] ">
                            <IoBookmark />
                        </div>
                        :
                        <p className="text-[20px]">
                            <IoBookmarkOutline></IoBookmarkOutline>
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                    className={`${isHovered5 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-3 cursor-pointer rounded-lg`}
                >
                    {isHovered5 ?
                        <div className="text-[20px] ">
                            <AiFillAppstore />
                        </div>
                        :
                        <p className="text-[20px]">
                            <AiOutlineAppstore></AiOutlineAppstore>
                        </p>
                    }
                </div>
            </Link>
            <Link href={"/"}>
                <div
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                    className={`${isHovered6 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-3 cursor-pointer rounded-lg`}
                >
                    {isHovered6 ?
                        <div className="text-[20px] ">
                            <BsFillSendFill />
                        </div>
                        :
                        <p className="text-[20px]">
                            <FiSend></FiSend>
                        </p>
                    }
                </div>
            </Link>
        </>
    );
    return (
        <div>
            {/* larger */}
            <div className="hidden xl:block">
                <div className="md:py-3 fixed top-36 w-full bg-white py-8 lg:max-w-[96px] mt-20">
                    <div className="flex flex-col gap-5 items-center">
                        {navList}
                    </div>
                </div>
            </div>
            {/* larger */}
            <div className="hidden lg:block xl:hidden">
                <div className="md:py-3 fixed z-50 bottom-0 w-full bg-white py-8 lg:max-w-full mt-20">
                    <div className="flex justify-between items-center px-3">
                        {navListMobile}
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="block lg:hidden">
                <div className="md:py-3 fixed z-50 bottom-0 w-full bg-white py-4 mt-20">
                    <div className="flex justify-between items-center px-3">
                        {navListMobile}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;