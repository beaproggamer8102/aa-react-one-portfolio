import React from 'react'
import  html  from "../assets/html.png";
import  css  from "../assets/css.png";
import  github  from "../assets/github.png";
import  javascript  from "../assets/javascript.png";
import  react  from "../assets/react.png";
import  tailwind  from "../assets/tailwind.png";
import  node  from "../assets/node.png";
import  express from "../assets/express.png";
import  mongodb from "../assets/mongodb.png";
import  c from "../assets/c.png";
import  cpp from "../assets/cpp.png";
import  python from "../assets/python.png";



const Experiance = () => {

        const techs =[
            {
                id: 1,
                src: html,
                title: "Html",
                style: "shadow-orange-500"
            },
            {
                id: 2,
                src: css,
                title: "CSS",
                style: "shadow-blue-500"
            },
            {
                id: 3,
                src: javascript,
                title: "JavaScript",
                style: "shadow-yellow-500"
            },
            {
                id: 4,
                src: react,
                title: "Recat",
                style: "shadow-blue-600"
            },
            {
                id: 5,
                src: tailwind,
                title: "Tailwind",
                style: "shadow-sky-400"
            },
            {
                id: 6,
                src: node,
                title: "Node JS",
                style: "shadow-green-600"
            },
            {
                id: 7,
                src: express,
                title: "Express",
                style: "shadow-sky-100"
            },
            {
                id: 8,
                src: mongodb,
                title: "MondoDB",
                style: "shadow-green-400"
            },
            {
                id: 9,
                src: c,
                title: "C",
                style: "shadow-purple-500"
            },
            {
                id: 10,
                src: cpp,
                title: "C++",
                style: "shadow-blue-400"
            },
            {
                id: 11,
                src: python,
                title: "Python",
                style: "shadow-yellow-400"
            },
        ]


  return (
    <div name="experiance" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experiance</p>
            </div>
            <p className="py-6">These are the technologies I've worked with</p>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({id, src, title, style}) => {
                        
                     return   <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">{title}</p>
                </div>

                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experiance