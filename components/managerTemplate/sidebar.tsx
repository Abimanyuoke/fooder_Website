"use client"

import { ReactNode, useState } from "react"
import Image from "next/image"
import MenuItem from "./menuItem"
import Logo from '../../public/image/restaurant.png'
import Profile from '../../public/image/profile.png'
import { AlertSuccess } from "../alert"


type MenuType = {
    id: string,
    icon: ReactNode
    path: string,
    label: string
}

type ManagerProp = {
    children: ReactNode,
    id: string,
    title: string,
    menuList: MenuType[]
}

const Sidebar = ({ children, id, title, menuList }: ManagerProp) => {

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertContent, setAlertContent] = useState<React.ReactNode | null>(null);
    const [timerWidth, setTimerWidth] = useState(100);

    const handleAlert = (content: React.ReactNode) => {
        setAlertContent(content);
        setIsAlertOpen(true);
        setTimerWidth(100);

        const duration = 2000; // Total duration for the alert in ms
        const interval = 100; // Interval to update the timer
        const decrement = (interval / duration) * 100; // Percentage to decrement

        const intervalId = setInterval(() => {
            setTimerWidth((prev) => {
                if (prev <= 0) {
                    clearInterval(intervalId);
                    setIsAlertOpen(false);
                    setAlertContent(null);
                    return 0;
                }
                return prev - decrement;
            });
        }, interval);
    };

    const [isShow, setIsShow] = useState(false)
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setisDropdownOpen(!isDropdownOpen)
    }


    return (
        <div className="w-full min-h-dvh">
            {/* header section */}
            <header className="flex justify-between items-center p-4 mb-0 bg-primary shadow-md">
                <div className="flex gap-2">
                    <button onClick={() => setIsShow(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                    <h1 className="font-bold text-xl text-black">
                        {title}
                    </h1>
                </div>


                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center space-x-2 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        <span className="font-bold">Logout</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
                            <a href="../manager/profil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            <a href="../manager/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => {
                                    handleAlert(<AlertSuccess title="Success">Berhasil Logout</AlertSuccess>)
                                }}>Logout</a>
                        </div>
                    )}
                </div>
            </header>
            {/* end header section */}

            {/* content section */}
            <div>
                {children}
            </div>
            {/* end content section */}

            {/* sidebar section */}
            <div className={`flex flex-col w-2/3 md:w-1/2 lg:w-1/4 h-full fixed top-0 right-full transition-transform z-50bg-white border-r border-primary ${isShow ? `translate-x-full` : ``}`}>

                {/* close button */}
                <div className="ml-auto p-2">
                    <button onClick={() => setIsShow(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
                {/* end close button */}

                {/* logo section */}
                <div className="mb-3 w-full flex justify-center">
                    <div className="flex items-center space-x-2">
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                        <h1 className="text-2xl font-bold text-orange-500">Fooder</h1>
                    </div>
                </div>
                {/* end logo section */}

                {/* user section */}
                <div className="w-full mt-10 mb-6 bg-primary text-black p-3 flex gap-2 items-center">
                    <Image src={Profile} alt="Profile" width={100} height={100} className="rounded-full" />
                    <div className="text-sm font-semibold">
                        abicoding...
                    </div>
                </div>
                {/* end user section */}

                {/* menu section */}
                <div className="w-full p-2 overflow-y-auto">
                    <div className="px-5">
                        {
                            menuList.map((menu, index) => (
                                <MenuItem icon={menu.icon} label={menu.label} path={menu.path} active={menu.id === id} key={`keyMenu${index}`} />
                            ))
                        }
                    </div>
                </div>
                {/* menu section */}

            </div>
            {/* end sidebar section */}

            {isAlertOpen && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-50">
                    <div className="p-4 rounded-md shadow-lg text-center max-w-sm w-full relative">
                        <div className="mb-4">{alertContent}</div>
                        <div className="max-w-sm w-full h-1 bg-gray-300 rounded overflow-hidden">
                            <div className="h-full bg-yellow-500 transition-all duration-100"
                                style={{ width: `${timerWidth}%` }}>

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Sidebar
