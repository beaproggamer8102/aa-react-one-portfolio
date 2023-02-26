



import React from 'react';

const Contact = ({recipientEmail}) => {
  // const handleSubmitMail = (event, recipientEmail) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const message = event.target.message.value;
  //   const subject = `New message from ${name}`;
  //   const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`;
  

  //   window.location.href = mailtoLink;
  // };

  
    const handleSubmitMail = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;
      const subject = `New message from ${name}`;
      const mailtoLink = `mailto:nycankit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`;
      window.location.href = mailtoLink;
    };
  
    // rest of the code
  
  




  const handleSubmit = (event) => {
    event.preventDefault();
   
    const message = event.target.message.value;
    const text = `Hi ${'Ankit'}, ${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${+919668616234}?text=${encodedText}`;
    window.open(url, '_blank');
  };

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
        </div>
        <p className="py-6">Message me directly on whatsapp</p>
        <div className="flex">
          <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
            <textarea name="message" rows="2" placeholder='Enter your message' className="p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>

        </div>
        <p className="py-6 ">Message me directly on Mail</p>
        <div className="flex">

          <form onSubmit={handleSubmitMail} className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="email" name="email" placeholder="Enter Your email" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" rows="3.5" placeholder='Enter your message' className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>


          </form>
        </div>
      </div>
    </div>
  );

};

export default Contact;
