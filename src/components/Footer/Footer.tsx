import React from 'react'
import Love from "../../assets/love.png"
import ReactImg from "../../assets/react.png"
import Ts from "../../assets/typescript.png"

export default function Footer() {
    return (
        <div className="flex flex-1 bg-gray-900 font-fontVollkorn text-white justify-center text-xl py-3 items-center w-full mx-auto z-50">
            &lt;/&gt; with <img className="w-8 mb-1" src={Love} alt="Love" />,<img className="w-6 mb-1 animate-spin-slow" src={ReactImg} alt="React" /> &nbsp; and <img className="w-8 mb-1" src={Ts} alt="TS" /> by <a className="text-white underline hover:text-white" href="https://harshal09.vercel.app/" target="_blank" rel="noreferrer"> &nbsp; Harshal Raikwar</a>
        </div>
    )
}
