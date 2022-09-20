import React, { useState } from "react";
import ButtonNavbar from "./ButtonNavbar";
const Navbar = () => {
    const [url, setUrl] = useState("/");
    const listMenu = [
        {
            name: "home",
            url: "/",
            subMenu: [
                {
                    name: "option1",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option2",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option3",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option4",
                    url: "/",
                    option:['1','2','3']
                },
            ],
        },
        {
            name: "Messages",
            url: "/messages",
            subMenu: [
                {
                    name: "option1",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option2",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option3",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option4",
                    url: "/",
                    option:['1','2','3']
                },
            ],
        },
        {
            name: "Notification",
            url: "/notification",
            subMenu: [
                {
                    name: "option1",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option2",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option3",
                    url: "/",
                    option:['1','2','3']
                },
            ],
        },
        {
            name: "Dashboard",
            url: "/dashboard",
            subMenu: [
                {
                    name: "option1",
                    url: "/",
                    option:['1','2','3']
                },
                {
                    name: "option2",
                    url: "/",
                    option:['1','2','3']
                },
            ],
        },
    ];
    return (
        <>
            <h1>{url}</h1>
            <ul
                style={{
                    display: "flex",
                    background: "yellow",
                    justifyContent: "space-around",
                }}
            >
                {listMenu.map((item, index) => {
                    return (
                        <ButtonNavbar
                            key={`item-menu-${index}`}
                            item={item}
                            actualUrl={url}
                            setUrl={setUrl}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default Navbar;
