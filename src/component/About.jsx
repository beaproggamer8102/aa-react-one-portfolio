import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                
                    <div className= "pb-8">
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                        

                        </div>
                        <p className='text-xl mt-20'>I am a full-stack MERN (MongoDB, Express, React, Node.js) developer and DSA (Data Structures and Algorithms) coding enthusiast.</p>
                        <br />
                        <p className='text-xl'>As a MERN stack developer, I have extensive knowledge of both front-end and back-end development. I have expertise in creating responsive user interfaces using ReactJS, Redux, and Material UI. On the back-end, I have worked with Node.js and Express to build RESTful APIs and integrate them with MongoDB for data storage.</p>
                   <br/>
                   <p className='text-xl'>In addition to my MERN stack skills, I am also passionate about data structures and algorithms. I enjoy solving complex programming problems and enhancing my skills in this area. My proficiency in DSA helps me design efficient and optimized code for various applications.</p>
            </div>
        </div>
            )
}

            export default About