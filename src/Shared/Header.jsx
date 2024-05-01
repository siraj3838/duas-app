
import navIcon from "../assets/navIcon.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Header = () => {

    const [openSearch, setOpenSearch] = useState(false);
    const [openSetting, setOpenSetting] = useState(false);
    const [rangeValue, setRangeValue] = useState(22);
    const [rangeValue2, setRangeValue2] = useState(17);
    const [isChecked, setIsChecked] = useState(true);
    const handleChange3 = () => {
        setIsChecked(!isChecked);
    };

    const handleChange = (event) => {
        setRangeValue(event.target.value);
    };
    const handleChange2 = (event) => {
        setRangeValue2(event.target.value);
    };

    return (
        <div className="relative">
            {/* large */}
            <div className="hidden xl:block">
                <div className="md:fixed md:z-10 md:top-0 md:left-0 md:right-0 flex items-center justify-between w-full md:h-16 h-20 px-4 bg-white my-2">
                    {/* First Content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-6">
                            <div>
                                <img className="w-11" src={navIcon} alt="" />

                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black">হাদিস সমূহ</h3>
                                <p className="text-sm text-[#404040]">হাদিস পড়ুন শিখুন এবং জানুন</p>
                            </div>
                        </div>
                    </div>
                    {/* Second Content */}
                    <div className="flex-1 flex items-center justify-end md:gap-4 lg:gap-20 2xl:gap-5">
                        <div>
                            <label className="relative bg-[#ECEEF0] rounded-lg">
                                <input
                                    type="text"
                                    className="border-[#DEE1E5] border-2 py-[10px] rounded-lg focus:outline-0 focus:text-black pl-10 pr-6 text-lg placeholder:font-[inherit]"
                                    placeholder="Search Hadith"
                                />
                                <div className="absolute top-0 left-4 text-[#646464] text-lg">
                                    <IoSearchOutline></IoSearchOutline>
                                </div>
                            </label>
                        </div>
                        <div className="bg-[#2B9E76] text-white px-5 py-3 cursor-pointer rounded-lg flex items-center gap-2 ml-12">
                            <p className="text-[17px] font-medium">সাপোর্ট করুন</p>
                            <p className="text-2xl">
                                <FaHandHoldingHeart></FaHandHoldingHeart>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="xl:hidden block">
                <div className="fixed z-10 top-0 left-0 right-0 flex items-center justify-between w-full px-4 bg-white h-16 border-b">
                    {/* First Content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-6">
                            <div>
                                <img className="w-9" src={navIcon} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#2B9E76]">আল হাদিস</h3>
                            </div>
                        </div>
                    </div>
                    {/* Second Content */}
                    <div className="flex items-center gap-4">
                        <button onClick={() => setOpenSearch(!openSearch)} className="bg-[#ECEEF0] dark:bg-[#383838] w-10 h-10 flex items-center justify-center rounded-lg search-input text-base"><FiSearch></FiSearch></button>
                        <button onClick={() => setOpenSetting(!openSetting)} className="w-10 h-10 bg-[#2B9E76] text-white text-2xl flex items-center justify-center rounded-lg"><IoIosSettings></IoIosSettings></button>
                    </div>
                </div>
            </div>
            {/* openSearch btn ui */}
            <div className={`${openSearch ? 'absolute top-[65px] duration-700 left-6' : 'absolute -top-[2050px] duration-1000 left-6'} z-50 w-full p-5 bg-white rounded-xl`}
                style={{ width: openSearch ? 'calc(100% - 35px)' : '100%' }}
            >
                <div>
                    <label className="bg-[#ECEEF0] rounded-lg">
                        <input
                            type="text"
                            className="rounded-xl pl-6 pr-36 py-5 text-black bg-gray-100 focus:outline-none focus:appearance-none w-full placeholder: placeholder:leading-4"
                            placeholder="Search Hadith"
                        />
                    </label>
                </div>
                <div>
                    <h4 className="mt-4 mb-2 text-[17px]">হাদিসের বই সিলেক্ট করুন</h4>
                    <select name="options" id="options" className="w-full h-12 border border-solid border-[#ECEEF0] rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer focus:outline-none">
                        <option value="option1">সকল বই</option>
                        <option value="option2">সহিহ বুখারী</option>
                        <option value="option3">সহিহ মুসলিম</option>
                        <option value="option4">সূনানে আন-নাসায়ী</option>
                        <option value="option5">সূনানে আবু দাঊদ</option>
                        <option value="option5">জামে' আত-তিরমিজি</option>
                        <option value="option5">সূনানে ইবনে মাজাহ</option>
                        <option value="option5">মুয়াত্তা ঈমাম মালিক</option>
                        <option value="option5">রিয়াদুস সলেহিন</option>
                        <option value="option5">বুলুগুল মারাম</option>
                        <option value="option5">আল লূ'লূ অয়াল মারজান</option>
                        <option value="option5">হাদিস সম্ভার</option>
                    </select>
                </div>
                <div>
                    <h4 className="mt-4 mb-2 text-[17px]">হাদিসের অধ্যায় সিলেক্ট করুন</h4>
                    <select name="options" id="options" className="w-full h-12 border border-solid border-[#ECEEF0] rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer focus:outline-none">
                        <option value="option1">সকল অধ্যায়</option>
                        <option value="option2">প্রথমে বই সিলেক্ট করুন</option>
                    </select>
                </div>

                <div className="flex items-center gap-5">
                    <input type="checkbox" className="checkbox checkbox-xs checkbox-success" />
                    <h4 className="mt-4 mb-2 text-[17px]">আংশিক মিল</h4>
                    <input type="checkbox" className="checkbox checkbox-xs checkbox-success" />
                    <h4 className="mt-4 mb-2 text-[17px]">হুবুহু মিল</h4>
                </div>
                <div className="flex justify-center gap-6">
                    <button onClick={() => setOpenSearch(!openSearch)} className="w-full py-3 rounded-md bg-[#e2e2e2] dark:bg-[#383838] md:w-full font-medium text-sm leading-5 dark:text-white">বাতিল</button>
                    <button className="w-full rounded-md md:w-full font-medium text-sm leading-5 text-white py-3 bg-[#2B9E76]">সার্চ করুন</button>
                </div>
            </div>
            {/* openSetting btn ui */}
            <div className={`${openSetting ? 'fixed duration-700 z-50 p-5 block' : 'hidden duration-1000 z-40 p-5'} bg-white rounded-xl`}
                style={{ width: openSetting ? '100%' : '100%' }}
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl">সেটিংস</h3>
                    <p className="text-2xl text-[#868585]" onClick={() => setOpenSetting(!openSetting)}><IoMdClose /></p>
                </div>
                    <div className="p-5 rounded-xl">
                        <div>
                            <h4 className="mt-4 mb-2 text-[17px]">আরবি ফন্ট সিলেক্ট করুন</h4>
                            <select name="options" id="options" className="w-full h-12 border border-solid border-[#ECEEF0] rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer focus:outline-none">
                                <option value="option1">KFGQ</option>
                                <option value="option2">Me Quran</option>
                                <option value="option3">Al Mushaf</option>
                                <option value="option4">Amiri</option>
                                <option value="option5">Arial</option>
                            </select>
                        </div>
                        <div>
                            <h4 className="text-[17px] font-medium pt-[18px] mb-[8px]">এরাবিক ফন্ট সাইজ</h4>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={rangeValue}
                                    onChange={handleChange}
                                    className="range range-xs range-success"
                                />
                                <p>{rangeValue}</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[17px] font-medium pt-[18px] mb-[8px]">অনুবাদ ফন্ট সাইজ</h4>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={rangeValue2}
                                    onChange={handleChange2}
                                    className="range range-xs range-success"
                                />
                                <p>{rangeValue2}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <h4 className="text-[17px]">নাইট মোড</h4>
                            <input
                                type="checkbox"
                                className="toggle"
                                checked={isChecked}
                                onChange={handleChange3}
                            />
                        </div>
                    </div>
                <div className="bg-[#34AB82] rounded-xl w-full p-5 text-white">
                    <h2 className="text-2xl font-medium">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h2>
                    <p className="text-base mt-[10px]">আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।</p>
                    <div className="flex justify-center">
                        <button className="text-[#389474] inline-block py-3 mt-5 bg-white rounded-lg text-base px-10 dark:text-white text-[1.05rem] hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] cursor-pointer">সাপোর্ট করুন</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
