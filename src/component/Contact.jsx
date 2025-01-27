import React from 'react'

const Contact = () => {
    return (
        <div name='Contact' className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-b from-black to-gray-800">
          <div className="w-[80%] lg:w-full p-6 m-auto bg-inherit border-2 border-gray-400 rounded-md shadow-xl max-w-xl ">
            <h1 className="text-3xl font-semibold text-center uppercase text-white">
              Contact Form
            </h1>
            <form action="https://getform.io/f/d54d5487-2a90-4f20-92c0-f13b6e3572c7"  method="POST" className="mt-6">
              <div className="mb-2">
                <label>
                  <span className="text-white text-xl">Your name</span>
                  <input
                    type="text"
                    name="name"
                    className="
    
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                    placeholder="Omi Srivastava"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-white text-xl">Email address</span>
                  <input
                    name="email"
                    type="email"
                    className="
                block
                w-full
                mt-2 px-16 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                    placeholder="srivastaomi@gmail.com"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 text-xl">
                <label>
                  <span className="text-white">Message</span>
                  <textarea
                    name="message"
                    className="
                block
                w-full
                mt-2 px-16 py-8
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                    rows="5"
                  ></textarea>
                </label>
              </div>
    
              <div className=" flex items-center
              justify-center">
                <button
                  type="submit"
                  className="text-center
                h-10
                px-5
                text-indigo-100
                bg-indigo-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800
              "
                >
                  Contact Us
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      );
}

export default Contact