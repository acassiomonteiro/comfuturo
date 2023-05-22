import Bg1 from "../img/model_bg1.png";

function Home() { 
  return (
    <div class="bg-white">
    <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p class="text-base font-semibold tracking-wider text-purple-600 uppercase">Venha descobrir qual carreira combina com você!</p>
                    <h1 class="mt-4 text-4x1 font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">Qual carreira dá<br/> match comigo?</h1>
                    
                    <div className="flex -space-x-2 overflow-hidden mt-14">
                        <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        />
                        <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        />
                        <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                        />
                        <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        />
                    </div>

                    <div class="ml-32">
                    <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Junte-se a mais de 1000 estudantes e<br/> descubra qual carreira combina com você!.</p>
                    </div>

                    <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-lg lg:mt-16 hover:bg-purple-900 focus:bg-purple-900" role="button">
                        Teste agora!

                    </a>

                    <p class="mt-5 text-gray-600">Already joined us? <a href="#" title="" class="text-black transition-all duration-200 hover:underline">Log in</a></p>
                </div>

                    <img class="bg-auto" src={Bg1} alt="" />

            </div>
        </div>
    </section>
</div>

  )
}

export default Home
