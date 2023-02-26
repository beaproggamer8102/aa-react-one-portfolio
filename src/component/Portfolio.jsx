import React from 'react'
// import  arrayDestruct  from "../assets/portfolio/arrayDestruct.jpg";
// import  installNode  from "../assets/portfolio/installNode.jpg";
// import  navbar  from "../assets/portfolio/navbar.jpg";
// import  Eecommerce  from "../assets/portfolio/Eecommerce.jpg";
// import  crop  from "../assets/portfolio/crop.jpg";
// import  todolist  from "../assets/portfolio/todolist.jpg";

function Portfolio() {

    const portfolios =[
        {
            id: 1,
            // src: arrayDestruct
            text: 'Own Dictionary',
            href: 'https://github.com/ankitraj-1602/ownDictionary',
            href1: 'https://chrome.google.com/webstore/detail/owndictionary/alpbdpkoacaajodkaipbpeglfbbmhacl',


        },
        {
            id: 2,
            text: 'Mentor Finder',
            href: 'https://github.com/ankitraj-1602/Mentor-Finder',
            href1: 'https://mentorfinder.netlify.app',



        },
        {
            id: 3,
            text: 'Task Manager',
            href: 'https://github.com/ankitraj-1602/task-manager-API',
            href1: 'https://github.com/ankitraj-1602/ownDictionary',



            
        },
        {
            id: 4,
            text: 'Auth Backend',
            href: 'https://github.com/ankitraj-1602/Login-Signup-backend',
            href1: 'https://github.com/ankitraj-1602/ownDictionary',



        },
        {
            id: 5,
            text: 'React Notes',
            href: 'https://github.com/ankitraj-1602/reactNotes',
            href1: 'https://github.com/ankitraj-1602/ownDictionary',



        },
        {
            id: 6,
            text: 'React-To-do',
            href: 'https://github.com/ankitraj-1602/To_do_js',
            href1: 'https://github.com/ankitraj-1602/ownDictionary',



        },
        {
            id: 7,
            text: 'Tech Blog',
            href: 'https://github.com/ankitraj-1602/tech-blog-backend',
            href1: 'https://github.com/ankitraj-1602/ownDictionary',



        }, {
            id: 8,
            text: 'Expense Traker',
            href: 'https://github.com/ankitraj-1602/Expense-Tracker-',
            href1: 'https://github.com/ankitraj-1602/ownDictionary',



        },
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                </div>
                <p className="pb-8">Check out some of my work right here.</p>
            


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">

        
            {
                    portfolios.map(({id, text, href, href1}) => {
                    
                      return  <div key={id} className="shadow-md shadow-purple-600 rounded-lg">

                        <h1  className="rounded-md duration-200 hover:scale-125 p-5 text-center	 font-bold text-lg hover:text-purple-300 " >{text} </h1>
                        
                        <div className="flex items-center justify-center">
                            <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</a>
                            <a href={href1} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</a>
                        </div>
                    </div>
})
                }

               
            </div>
        </div>
    </div>
  )
}

export default Portfolio