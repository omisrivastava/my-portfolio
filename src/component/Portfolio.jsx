import React from "react";
import pocketnews from "../assets/portfolio/pocketnews.jpg";
import textPlay from "../assets/portfolio/text-play.jpg";
import project1 from "../assets/portfolio/project 1.jpeg";
import scintillation from "../assets/portfolio/Scintillation.jpeg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import EDC from "../assets/portfolio/EDC.jpeg";
import Food from "../assets/portfolio/Food.png";


const Portfolio = () => {


    const links=[
        {
            id:1,
            address:project1,
            name:"Tijori",
            repo:"https://github.com/priyanshu8346/Tijori"
        },
        {
            id:2,
            address:pocketnews,
            name:"PocketNews",
            repo:"https://github.com/priyanshu8346/PocketNews"
        },
        {
            id:3,
            address:textPlay,
            name:"Text-Play",
            repo:"https://github.com/priyanshu8346/text-play"
        },
        {
            id:4,
            address:reactWeather,
            name:"Weather App",
            repo:"https://github.com/priyanshu8346/weather-app"
        },
        {
            id:5,
            address:scintillation,
            name:"Scintillation",
            repo:"https://github.com/priyanshu8346/scintillation2023"
        },
        {
            id:6,
            address:EDC,
            name:"EDC",
            repo:"https://github.com/priyanshu8346/edc-1"
        },
        {
          id:7,
          address:Food,
          name:"Food-ordering-app",
          repo:"https://github.com/priyanshu8346/food-app"
      }
    ]
    
  return (
    <div
      name="Portfolio" id="portfolio"
      className=" w-full px-6 py-24 sm:px-0 bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="w-11/12  flex flex-col justify-between sm:justify-start mx-auto">
        <div>
          <p className="font-bold inline border-b-2 border-gray-400 text-4xl">
            Portfolio
          </p>
          <p className="my-6">Checkout some of my work here</p>
        </div>
        <div className="pb-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem]" >
        {links.map(({id, address,name,repo})=>{  
             return (
                <div key={id} id="cards_experience" className="shadow-md shadow-gray-600 rounded-lg" >
                    <img id="experience" src={address} alt="Project" style={{"height":"8rem", "width":"100%"}}/>
                    <div className="flex items-center justify-center ">
                    <a href={repo} target="_parent">
                        <button className="px-6 py-2 duration-300 hover:scale-105 text-lg">{name}</button>
                        </a>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
