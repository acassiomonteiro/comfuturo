import React from 'react'

function Chatai()

{
  return (
    <div>
       <div class=" bottom-0 right-0 mb-4 mr-4">
        <div className='flex justify-center py-14'>
            <h1 className='text-4xl font-bold'>Aprenda do <span className='text-violet-500'>seu</span> jeito!</h1>
        </div>
    </div>
    <div id="" class="flex bottom-16 right-4 w-96">
        <div class=" bg-white shadow-md rounded-lg max-w-lg w-full">
            <div class="p-4 border-b bg-violet-500 text-white rounded-t-lg flex justify-between items-center">
                <p class="text-lg font-semibold">Admin Bot</p>
                <button id="" class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                    X
                </button>
            </div>
            <div id="" class="p-4 h-80 overflow-y-auto">
              <div class="mb-2 text-right">
                <p class="bg-violet-500 text-white rounded-lg py-2 px-4 inline-block">hello</p>
              </div>
              <div class="mb-2">
                <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">This is a response from the chatbot.</p>
              </div>
              <div class="mb-2 text-right">
                <p class="bg-violet-500 text-white rounded-lg py-2 px-4 inline-block">this example of chat</p>
              </div>
              <div class="mb-2">
                <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">This is a response from the chatbot.</p>
              </div>
              <div class="mb-2 text-right">
                <p class="bg-violet-500 text-white rounded-lg py-2 px-4 inline-block">design with tailwind</p>
              </div>
              <div class="mb-2">
                <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">This is a response from the chatbot.</p>
              </div>
            </div>
            <div class="p-4 border-t flex">
                <input id="" type="text" placeholder="Type a message" class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-violet-500"/>
                <button id="    " class="bg-violet-500 text-white px-4 py-2 rounded-r-md hover:bg-violet-600 transition duration-300">Send</button>
            </div>
        </div>
    </div>
    
    </div>

  )
}

export default Chatai