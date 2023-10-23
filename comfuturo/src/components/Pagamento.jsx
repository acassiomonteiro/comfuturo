import Bg1 from "../img/icon-basic.svg";
import Bg2 from "../img/Check-icon.svg";
import Bg3 from "../img/Check-icon-2.svg";
import Bg4 from "../img/Featured-icon.svg";


export function Pagamento () {
    return ( 

        <section class="py-10 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Plano e Preços</h2>
        </div>

        <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
            <div class="bg-zinc-100 border-4 border-transparent rounded-xl">
                <div class="p-6 md:py-10 md:px-9">
                    <div class="px-4 py-2 rounded-full">
                        <img src={Bg1} alt="" className="ml-[105px]"/>
                        <h3 class="flex justify-center text-sm font-semibold text-violet-500">Plano Básico</h3>
                    </div>
                    <p class="mt-5 text-5xl font-bold text-black flex justify-center">Grátis</p>
                    <p class="mt-2 text-base text-gray-600 flex justify-center">No primeiro mês</p>

                    <ul class="flex flex-col mt-8 space-y-4">
                        <li class="inline-flex items-center space-x-2">
                            <img src={Bg2} alt="" />
                            <span class="text-base font-medium text-gray-500"> Três matérias </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg2} alt="" />
                            <span class="text-base font-medium text-gray-500"> Limete de 50 mensagem/dia </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg2} alt="" />
                            <span class="text-base font-medium text-gray-500"> Personalização do Conteúdo </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <img src={Bg3} alt="" />
                            <span class="text-base font-medium text-gray-400 line-through"> Conteúdos exclusivos </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg3} alt="" />
                            <span class="text-base font-medium text-gray-400 line-through"> Predição de nota do ENEM(em breve) </span>
                        </li>
                    </ul>

                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-violet-600 rounded-md hover:bg-gray-600 focus:bg-gray-600" role="button"> Quero o plano básico </a>

                </div>
            </div>

            <div class="bg-white border-4 border-blue-600 rounded-md">
                <div class="p-6 md:py-10 md:px-9">
                <div class="px-4 py-2 rounded-full">
                        <img src={Bg4} alt="" className="ml-[105px]"/>
                        <h3 class="flex justify-center text-sm font-semibold text-violet-500">Plano Premium</h3>
                    </div>
                    <p class="mt-5 text-5xl font-bold text-black flex justify-center">$49</p>
                    <p class="mt-2 text-base text-gray-600 flex justify-center">Per month</p>

                    <ul class="flex flex-col mt-8 space-y-4">
                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Unlimited Domain License </span>
                            <svg class="w-4 h-4 ml-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Full Celebration Library </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Design Files Included </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Premium Support </span>
                        </li>
                    </ul>

                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Get 14 Days Free Trial </a>

                    <p class="mt-5 text-sm text-gray-500">No Credit Card Required</p>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}