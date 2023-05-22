import Linguistica from '../img/linguistica.svg'
import Matematica from '../img/logico-matematico.svg'
import Espacial from '../img/espacial.svg'
import Musical from '../img/musical.svg'
import Corporal from '../img/corporal-cinestesica.svg'
import Intrapessoal from '../img/intrapessoal.svg'

function Cursos() {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Conheça os cursos de graduação<br/> que você pode fazer!</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Você sabe quais são os principais cursos do ensino superior e o quando formados o que serão apitos a fazer? Conheça eles abaixo.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src={Linguistica} alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Linguística</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">refere-se à capacidade de comunicação oral, escrita e gestual.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src={Matematica} alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Lógico-Matemática</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Tem relação com o raciocínio lógico e a facilidade para solucionar problemas matemáticos.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src={Espacial} alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Espacial</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Destaca-se as habilidades estéticas, especialmente o poder de observar os detalhes e interpretar as situações e objetos ao redor.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src={Musical} alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Musical</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Intenso interesse pela música e a desenvoltura para lidar com notas, melodias e instrumentos musicais.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src={Corporal} alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Corporal-Cinestésica</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Está ligada ao conhecimento do corpo, ou seja, a habilidade motora para expressar ideias e sentimentos.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src={Intrapessoal} alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Intrapessoal</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Representa uma avaliação mais profunda sobre si mesmo, permitindo uma reflexão sobre o jeito de ser e quem é.</p>
                </div>
            </div>
        </div>

        <div class="mt-12 text-center">
            <a href="#" title="" class="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Saiba mais sobre qual é a sua inteligência. Preparamos um resumo que pode ajudar a identificá-la. </a>
        </div>
    </div>
</section>

  )
}

export default Cursos