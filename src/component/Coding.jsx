import React from 'react'
import  leetcode  from "../assets/portfolio/leetcode.png";
import  hackerrank  from "../assets/portfolio/hackerrank.png";
import  cg  from "../assets/portfolio/cg.png";
import  gfg  from "../assets/portfolio/gfg.png";
// import  crop  from "../assets/portfolio/crop.jpg";
// import  todolist  from "../assets/portfolio/todolist.jpg";


function Coding() {

    const coding =[
        {
            id: 1,
            src: hackerrank,
            href: 'https://www.hackerrank.com/nycankit',
            style: "shadow-green-500",


            
        },
        {
            id: 2,
           
            src: leetcode,
            href: 'https://leetcode.com/ankit_raj_230202/',
            style: "shadow-orange-500",

        },
        {
            id: 3,
            src: gfg,
            href: 'https://auth.geeksforgeeks.org/user/nycankit/',
            style: "shadow-green-500",


        },
        // {
        //     id: 4,
        //     src: cg,
        //     href: 'https://leetcode.com/ankit_raj_230202/',

        // },
        // {
        //     id: 5,
        //     src: crop
        // },
        // {
        //     id: 6,
        //     src: todolist
        // },
    ]

  return (
    <div name='coding' className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className="pb-8">
                <p className='text-4xl text-center font-bold inline border-b-4 border-gray-500'>Coding</p>
                </div>
                <p className="pb-8">Check out some of my work right here.</p>
            


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">

        
            {
                    coding.map(({id, src,href,style}) => {
                    
                      return  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                        <img src={src} alt="" className="rounded-md" />
                        <div className="flex items-center justify-center">
                            
                            <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Profile</a>
                        
                        </div>
                    </div>
})
                }

               
            </div>
        </div>
    </div>
  )
}

export default Coding;