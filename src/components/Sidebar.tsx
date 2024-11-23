import React, {useEffect, useState} from "react"
import {
    // goBack,
    goTo,
    // popToTop,
    // Link,
    // Router,
    // getCurrent,
    // getComponentStack,
} from "react-chrome-extension-router"

import {AuthUser, cn} from "../../Downloads/chrome-extension-production/src/lib/utils"

import {
    SidebarBookmarkIcon,
    SidebarHomeIcon,
    SidebarHistoryIcon,
    SidebarStarIcon,
    SidebarExitIcon,
} from "../../Downloads/chrome-extension-production/src/lib/svg"

import SidebarTest from "../../Downloads/chrome-extension-production/src/SidebarTest"
import App from "../../Downloads/chrome-extension-production/src/App"
import {Avatar, AvatarImage} from "../../Downloads/chrome-extension-production/src/components/ui/avatar.tsx"

export default function Sidebar({page}: { page: SidebarButtonType }) {
    const [exitBtnHovered, setExitBtnHovered] = useState<boolean>(false)

    /*const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState<unknown>(null)


    useEffect(() => {
      if (localStorage.getItem("token")) {
        setIsLoggedIn(true)
        setUser(localStorage.getItem("user"))
      }
    }, [])*/

    const [user, setUser] = useState<AuthUser | null>(null)

    useEffect(() => {
        if (localStorage.getItem("user")) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, []);
    return (
        <>

            {!user ? (
                <div>Loading...</div>) : (

                // looks best in a full-height (or 100dvh) flex-row container
                <div className="h-full flex flex-col justify-between pt-8 pb-4 items-center">
                    <div className="flex flex-col items-center justify-center gap-9">

                        {user?.avatar?.url ? (
                            <>
                                <Avatar className={"w-10 h-10 mb-4"}>
                                    <AvatarImage
                                        className="w-full h-full"
                                        src="/assets/avatar.png"
                                        alt="Happly"
                                    />
                                </Avatar>
                            </>
                        ) : (
                            <Avatar className={"w-10 h-10 mb-4 bg-white"}>
                                <div
                                    className="w-full h-full inline-flex justify-center items-center text-[#424D59]">{`${user.avatar?.initial ?? "H"}`}</div>
                            </Avatar>
                        )}

                        <div className="buttons flex flex-col gap-4 items-center">
                            <SidebarButton
                                icon={<SidebarHomeIcon isOn={page === "home"}/>}
                                isOn={page === "home"}
                                onClick={() => {
                                    goTo(SidebarTest)
                                }}
                            />
                            <SidebarButton
                                icon={<SidebarBookmarkIcon isOn={page === "bookmarks"}/>}
                                isOn={page === "bookmarks"}
                                onClick={() => {
                                }}
                            />
                            <SidebarButton
                                icon={<SidebarHistoryIcon isOn={page === "history"}/>}
                                isOn={page === "history"}
                                onClick={() => {
                                }}
                            />
                            <SidebarButton
                                icon={<SidebarStarIcon isOn={page === "starred"}/>}
                                isOn={page === "starred"}
                                onClick={() => {
                                }}
                            />
                        </div>
                    </div>

                    <button
                        className="flex items-center justify-center h-11 w-11 bg-white rounded-[15px]"
                        onMouseEnter={() => setExitBtnHovered(true)}
                        onMouseLeave={() => setExitBtnHovered(false)}
                        onClick={() => {
                            goTo(App)
                        }}
                    >
                        <div
                            className={cn(
                                "flex items-center justify-center rounded-lg h-[30px] w-[30px]",
                                exitBtnHovered ? "bg-[#ffeeeb]" : ""
                            )}
                        >
                            <SidebarExitIcon isOn={exitBtnHovered}/>
                        </div>
                    </button>
                </div>
            )}
        </>
    )
}

function SidebarButton({
                           icon,
                           isOn,
                           onClick,
                       }: {
    icon: React.ReactNode
    isOn: boolean
    onClick: () => void
}) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <button
            className={cn("p-1.5 rounded-lg", isOn || isHovered ? "bg-secondaryColor text-secondaryColorText" : "")}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon}
        </button>
    )
}

export type SidebarButtonType = "home" | "bookmarks" | "history" | "starred"
