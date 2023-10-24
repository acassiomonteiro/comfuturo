import React from 'react'

import Bg1 from "../img/Images_ Avatars.svg";
import Bg2 from "../img/button-submit.svg";
import { Footer } from '../components/Footer';

function Chatai()

{
  return (
    <div>
       <div class=" bottom-0 right-0 mb-4 mr-4">
        <div className='flex justify-center py-14'>
            <h1 className='text-4xl font-bold'>Aprenda do <span className='text-violet-500'>seu</span> jeito!</h1>
        </div>
    </div>

    <div id="" class="flex justify-center pb-32">
        <div class=" bg-white rounded-lg max-w-5xl w-full">
            <div class="p-4 border-b bg-violet-500 text-white rounded-t-lg flex gap-4 items-center">
                <button id="" class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                    X
                </button>
                <img src={Bg1} alt="foto de perfil" />
                <p class="text-lg font-semibold">Comfuturo</p>
                02
                
            </div>
            <div id="" class="p-5 h-auto overflow-y-auto">
              <div class="mb-2 text-right">
                <p class="bg-violet-500 text-white py-2 px-4 inline-block rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">E ae, ComFuturo</p>
              </div>
              
              <div class="mb-2 text-right">
                <p class="bg-violet-500 text-white py-2 px-4 inline-block rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">Me diz o que foi a Era Vargas</p>
              </div>
              
              <div class="mb-2">
                <p class="bg-gray-100 text-gray-700 py-2 px-4 inline-block rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-xl">A Era Vargas refere-se a um período significativo na história do Brasil que abrange os anos em que Getúlio Vargas ocupou cargos de destaque no governo do país. A Era Vargas pode ser dividida em dois principais períodos:<br></br>

<br></br>1. Governo Provisório (1930-1934): A Era Vargas teve início em 1930, quando Getúlio Vargas liderou um movimento político-militar que resultou na queda do governo de Washington Luís. Após esse golpe, Vargas assumiu o cargo de Chefe do Governo Provisório, que mais tarde foi transformado em uma presidência de fato. Durante esse período, Getúlio Vargas implementou várias reformas, incluindo a promulgação de uma nova Constituição em 1934.
<br></br>2. Estado Novo (1937-1945): Em 1937, Vargas dissolveu o Congresso Nacional,
suspendeu a Constituição e instaurou o </p>
              </div>
              
            </div>
            <div class="relative p-4 border-t flex">
                <input id="" type="text" placeholder="Mensagem" class="w-full px-4 py-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-violet-500"/>
                <button id="    " class="absolute right-0 text-white px-6 py-1.5 rounded-r-md">
                  <img src={Bg2} alt="" />
                </button>
            </div>
        </div>
    </div>

    <Footer />

    </div>

    

  )
}

export default Chatai