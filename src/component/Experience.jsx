import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactIcon from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/SQL.png";
import javascript from "../assets/javascript.png";
import  dsa  from "../assets/Data structure.png";
import  express  from "../assets/expressjs.png";
import  mongodb  from "../assets/icons8-mongodb-240.png";




const Experience = () => {

    const links=[
        {
            id:1,
            address:html,
            style:"shadow-orange-500",
            title:"HTML"
        },
        {
            id:2,
            address:css,
            style:"shadow-blue-500",
            title:"CSS"
        },
        {
            id:3,
            address:javascript,
            style:"shadow-yellow-500",
            title:"JavaScript"
        },
        {
            id:4,
            address:reactIcon,
            style:"shadow-blue-800",
            title:"ReactJS"
        },
        {
            id:5,
            address:dsa,
            style:"shadow-sky-500",
            title:"Data Structures"
        },
        {
            id:6,
            address:sql,
            style:"shadow-white-500",
            title:"SQL"
        },
        {
            id:7,
            address:github,
            style:"shadow-pink-500",
            title:"Github"
        },
        {
            id:8,
            address:tailwind,
            style:"shadow-gray-500",
            title:"Tailwind"
        },
        {
            id:9,
            address:node,
            style:"shadow-green-500",
            title:"NodeJS"
        },
        {
            id:10,
            address:express,
            style:"shadow-gray-500",
            title:"expressJS"
        },
        {
            id:11,
            address:mongodb,
            style:"shadow-green-800",
            title:"mongoDB"
        }
        
    ]

    return (
        <div
          name="Skills" 
          className="w-full px-6 py-28 sm:px-0 bg-gradient-to-b from-gray-800 to-black text-white "
        >
          <div className="w-11/12  flex flex-col justify-between sm:justify-start mx-auto">
            <div>
              <p className="font-bold inline border-b-2 border-gray-400 text-4xl">
                Skills
              </p>
              <p className="my-6">These are the technology i have worked with</p>
            </div>
            <div className="pb-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[3rem]" >
            {links.map(({id, address, style, title})=>{  
                 return (
                    <div key={id} id="cards_experience" className={`flex flex-col items-center shadow-md shadow-gray-600 rounded-lg ${style}` }>
                        <img id="experience" src={address} alt="Project" style={{"height":"8rem", "width":"50%"}} className='hover:scale-110 duration-500'/>
                        <div className="flex items-center justify-between ">
                            <p className=' hover:translate-x-10 duration-700 py-3'>{title}</p>
                        </div>
                    </div>
                );
            })}
          </div>
        </div>
        </div>
      );
}

export default Experience