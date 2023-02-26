import React from 'react'
import  a  from "../assets/portfolio/a.jpeg";
import  b  from "../assets/portfolio/b.jpeg";
import  c  from "../assets/portfolio/c.jpeg";
import  d  from "../assets/portfolio/d.jpeg";
import  freecodecamp from "../assets/portfolio/freecodecamp.png";

function Certificate() {

    const certificate =[
        {
            id: 1,
            src: a,
            herf:"https://i.postimg.cc/JhRLNspf/a.jpg",
        },
        {
            id: 2,
            src: b,
            herf:"https://i.postimg.cc/W491tmsW/b.jpg",

        },
        {
            id: 3,
            src: c,
            herf:"https://postimg.cc/9Rbk4Lt7",

        },
        {
            id: 4,
            src: d,
            herf:"https://i.postimg.cc/fL9QZYy0/d.jpg",

        },
        {
            id: 5,
            src: freecodecamp,
            herf:"https://www.freecodecamp.org/certification/fcc3346fe71-b159-4240-beda-870f976d8455/javascript-algorithms-and-data-structures",

        },
      
    ]



  return (
    <div name='certificate' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Certificate</p>
            </div>
            <p className="pb-8">Certification done by me.</p>
        


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">

    
        {
                certificate.map(({id, src, herf}) => {
                
                  return  <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                    <img src={src} alt="" className="rounded-md" />
                    <div className="flex items-center justify-center">
                        <a href={herf} className="w-1/2 px-6 py-3 text-center m-4 duration-200 hover:scale-105">View</a>
                    </div>
                </div>
})
            }


            

           
        </div>
    </div>
</div>
  )
}

export default Certificate