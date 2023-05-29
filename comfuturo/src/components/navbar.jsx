import Logo from "../img/logo_comfuturo.svg";

function navbar() {
  return (
<header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
                <a href="/" title="comfuturo" class="flex">
                    <img class="w-auto h-8 lg:h-10" src={Logo} alt="logo" />
                </a>
            </div>

            <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="/" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-tolet-600 focus:text-violet-500"> Home </a>

                <a href="/cursos" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-violet-500 focus:text-violet-500"> Cursos </a>

                <a href="/sobre" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-violet-500 focus:text-violet-500"> Sobre </a>

                <a href="/login" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-violet-500 focus:text-violet-500"> Login </a>
            </div>

            <a href="/cadastro" title="cadastro" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-violet-500 border border-transparent rounded-md lg:inline-flex hover:bg-violet-500 focus:bg-violet-500" role="button"> Cadastra-se </a>
        </nav>

        <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
                <div class="flex flex-col px-6 -my-2 space-y-1">
                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-violet-500 focus:text-violet-500"> Home </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-violet-500 focus:text-violet-500"> Cursos </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-violet-500 focus:text-violet-500"> Sobre </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-violet-500 focus:text-violet-500"> Login </a>
                </div>
            </div>

            <div class="px-6 mt-6">
            <a href="/cadastro" title="cadastro" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-violet-500 border border-transparent rounded-md lg:inline-flex hover:bg-violet-500 focus:bg-violet-500" role="button"> Cadastra-se </a>
            </div>
        </nav>
    </div>
</header>

  )
}

export default navbar