import Bg1 from "../img/icon-basic.svg";
import Bg2 from "../img/Check-icon.svg";
import Bg3 from "../img/Check-icon-2.svg";
import Bg4 from "../img/Featured-icon.svg";


export function Pagamento () {
    return ( 

        <section class="py-10 sm:py-16 lg:py-40 overflow-x-hidden">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Plano e Preços</h2>
        </div>

        <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
            <div class="bg-zinc-100 border-4 border-transparent rounded-xl">
                <div class="p-6 md:py-10 md:px-9">
                    <div class="px-4 py-2 rounded-full">
                        <img src={Bg1} alt="" className="ml-[105px]"/>
                        <h3 class="flex justify-center text-xl font-semibold text-violet-500 py-4">Plano Básico</h3>
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

                    <div className="mt-10">
                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-violet-600 rounded-md hover:bg-violet-800 focus:bg-violet-800" role="button"> Quero o plano básico </a>
                    </div>

                </div>
            </div>

            <div class="bg-zinc-100 border-4 border-transparent rounded-xl">
                <div class="p-6 md:py-10 md:px-9">
                <div class="px-4 py-2 rounded-full">
                        <img src={Bg4} alt="" className="ml-[105px]"/>
                        <h3 class="flex justify-center text-xl font-semibold text-violet-500 py-4">Plano Premium</h3>
                    </div>
                    <p class="mt-5 text-5xl font-bold text-black flex justify-center">R$29,90</p>
                    <p class="mt-2 text-base text-gray-600 flex justify-center">Por mês</p>

                    <ul class="flex flex-col mt-8 space-y-4">
                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg2} alt="" />
                            <span class="text-base font-medium text-gray-500"> Todas as matérias </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg2} alt="" />

                            <span class="text-base font-medium text-gray-500"> Interações ilimitadas </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg2} alt="" />

                            <span class="text-base font-medium text-gray-500"> Personalização do Conteúdo </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg2} alt="" />

                            <span class="text-base font-medium text-gray-500"> Conteúdos exclusivos </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                        <img src={Bg2} alt="" />

                            <span class="text-base font-medium text-gray-500"> Predição de nota do ENEM(em breve) </span>
                        </li>
                    </ul>

                    <div className="mt-10">
                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-violet-600 rounded-md hover:bg-violet-800 focus:bg-violet-800" role="button"> Quero o plano premium </a>
                    </div>


                </div>
            </div>
        </div>
    </div>
</section>

    )
}