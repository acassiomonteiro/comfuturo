import { ArrowDown01Icon, ArrowDownCircle, CheckCircle, Instagram } from "lucide-react";
import Bg1 from "../img/banner.svg";
import Bg2 from "../img/Responda.svg";
import Bg3 from "../img/perfil.svg";
import Bg4 from "../img/profissão.svg";
import Bg5 from "../img/10min.svg";
import Bg6 from "../img/analise-completa.svg";
import Bg7 from "../img/image-10.svg";

function Home() { 
  return (
    <div className="bg-white">
    <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p class="text-base font-semibold tracking-wider text-purple-600 uppercase">Venha descobrir qual carreira combina com você!</p>
                    <h1 class="mt-4 text-4x1 font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">Qual carreira dá<br/> match comigo?</h1>
                    
                    <div className="flex flex-nowrap">
                    <div className="flex -space-x-4 overflow-hidden mt-14 w-1/2">
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

                    <div class="ml-32 w-2/1">
                    <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Junte-se a mais de 1000 estudantes e descubra qual carreira combina com você!.</p>
                    </div>
                    </div>



                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-lg lg:mt-16 hover:bg-purple-900 focus:bg-purple-900" role="button">
                        Teste agora!
                    </a>
                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black" role="button">
                        <ArrowDownCircle/> Saiba mais
                    </a>                   
                </div>
                <img src={Bg1} className="scale-150" alt="" />
            </div>
        </div>
    </section>
    <div className="relative w-full h-80 left-0 -top-6 bg-[#9874FF]">
        <h1 className="relative text-white font-bold text-4xl text-center">Conheça o passo a passo do teste vocacional:</h1>

        <div className="absolute p-10 bg-violet-900 text-white  w-4/6 h-4/6 top-20 left-72 rounded-2xl flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="col-span-1">
                    <img src={Bg2} className="scale-110" alt=""/>
                </div>
                <div className="col-span-1">
                    <div className="-ml-64">
                    <h2 className="font-semibold text-3xl">Responda às perguntas</h2>
                    <p className="font-normal text-xl mt-3">Primeiro, responda às situações que o teste propõe de acordo com seu grau de interesse. A forma como você reage às atividades ajuda a moldar seu perfil.</p>
                    </div>
                </div>
                </div>
            </div>
    </div>
    <div className="relative w-full h-80 left-0 -top-6 bg-[#9874FF]">
        <div className="absolute p-10 bg-violet-900 text-white  w-4/6 h-4/6 top-10 left-72 rounded-2xl flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="col-span-1">
                    <img src={Bg3} className="scale-100 ml-5 -mt-4" alt=""/>
                </div>
                <div className="col-span-1">
                    <div className="-ml-64">
                    <h2 className="font-semibold text-3xl">Direcione seu perfil</h2>
                    <p className="font-normal text-xl mt-3">Segundo, escolha as palavras que melhor representam quem você é. Vamos propor alguns conjuntos de palavras para você escolher aquelas que têm a sua pegada.</p>
                    </div>
                </div>
                </div>
            </div>
    </div>
    <div className="relative w-full h-80 left-0 -top-6 bg-[#9874FF]">
        <div className="relative p-10 bg-violet-900 text-white  w-4/6 h-4/6 top-2 left-72 rounded-2xl flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="col-span-1">
                    <img src={Bg4} className="scale-110 -mt-3" alt=""/>
                </div>
                <div className="col-span-1">
                    <div className="-ml-64">
                    <h2 className="font-semibold text-3xl">Descubra profissões</h2>
                    <p className="font-normal text-xl mt-3">Por fim, baixe as sugestões de carreiras que são a sua cara de acordo com seu perfil primário e secundário. Conheça ainda a base psicológica por trás do teste.</p>
                    </div>
                </div>
                </div>
            </div>
    </div>

    <div>
      <h2 className="text-center font-semibold text-4xl mt-32">Responda a um questionário de <span className="text-violet-500"><br />10 minutos e veja na hora os seguintes resultados:</span></h2>

      <div className="grid grid-rows-4 grid-flow-col gap-1">
        <div className="row-span-2 ...">
            <h2 className="relative font-bold left-96 mt-16">PROFISSÕES QUE MAIS COMBINAM COM VOCÊ</h2>
            <p className="relative font-medium max-w-sm ml-96 mt-8">
A partir da experiência do Com Futuro em ajudar os estudantes a se prepararem para o ENEM e encontrarem a tão sonhada universidade, nossa equipe fez um longo estudo para identificar quais cursos e profissões combinam mais com cada perfil de pessoa.</p>

            <h2 className="relative font-bold left-96 mt-8 text-violet-500 max-w-sm">O RAIO-X do Com Futuro não é um simples teste vocacional.</h2>
            <p className="relative font-medium max-w-sm ml-96 mt-8">
            O seu grande diferencial é possibilitar que, primeiro, a pessoa se conheça melhor, seus pontos fortes, pontos de melhorias, seus medos e como se relaciona com outras pessoas, para depois sugerir as profissões que mais combinam.</p>

        </div>

        <div className="col-span-2 ...">
            <h2 className="relative font-bold left-96 -mt-60 text-violet-500">Nessa etapa você vai descobrir:</h2>
        
        <p className="flex items-center gap-3 text font-semibold ml-96 mt-4"><CheckCircle/>Quais são as profissões mais indicadas para o seu perfil</p>
        <p className="flex items-center gap-3 text font-semibold ml-96 mt-4"><CheckCircle/>Qual o salário médio de cada uma dessas profissões</p>

        </div>
        <div className="row-span-2 col-span-2 ..."><img src={Bg5} className="ml-auto scale-75" alt="" /></div>
        </div>
    </div>

    <div className="grid grid-rows-3 grid-flow-col gap -mt-96">
        <div className="row-span-3 ...">
           <img src={Bg6} className="ml-56 scale-75 -mt-96" alt="" />
        </div>
        <div className="col-span-2 ... -mt-96 -ml-96">
            <h2 className="relative font-bold text-xl ml-80 mt-16">UMA ANÁLISE COMPLETA DO SEU PERFIL</h2>
            <p className="relative font-medium max-w-sm text-lg ml-80 mt-8">
A partir de uma conceituada metodologia, chamada DISC, utilizada por empresas no processo de contratação de seus funcionários, você entenderá melhor a seu respeito, seus pontos fortes e quais áreas precisam ser aprimoradas para que você alcance sucesso
na sua vida pessoal e profissional.</p>
        </div>
        <div className="row-span-2 col-span-2 .. -ml-16">
        <h2 className="relative font-bold text-lg left-90 -mt-24 text-violet-500">Nessa etapa você vai descobrir:</h2>
        
        <p className="flex items-center gap-3 text-lg font-semibold left-90 mt-4 "><CheckCircle className="text-violet-500"/>Qual é o seu estilo comportamental <br/>e o que isso significa de forma prática</p>
        <p className="flex items-center gap-3 text-lg font-semibold left-90 mt-4 "><CheckCircle className="text-violet-500"/>Quais são seus pontos fortes a serem<br/>
potencializados e pontos fracos a<br/>
serem minimizados ou melhorados</p>
        <p className="flex items-center gap-3 text-lg font-semibold left-90 mt-4"><CheckCircle className="text-violet-500"/>Suas principais motivações e seus medos</p>
        </div>
    </div>

    <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ...">
            <img src={Bg7} className="ml-80 mt-44 scale-100" alt="" />
        </div>
        <div className="col-span-2 ... mt-28">
        <h2 className="font-bold text-4xl left-96 mt-16 -ml-20">É importante lembrar</h2>
            <p className=" text-xl text-justify mt-10 -ml-20">O resultado apresentado no teste vocacional da<br/> com futuro não é definitivo e não deve ser a única<br/> base para escolher sua carreira. Utilize-o para<br/> descobrir novas possibilidades ou para reforçar<br/> suas ideias, mas sempre priorize seus gostos,<br/> vontades e aspirações na hora de definir sua<br/> profissão!<br/> Apesar de ter sido desenvolvido com apoio de<br/> uma equipe de psicólogos, o teste não pode ser<br/> comercializado e não passou por avaliação do<br/> Conselho Federal de Psicologia. Não é um teste<br/> para uso de avaliação psicológica e sim um teste<br/> online criado com método de associação de<br/> padrão de respostas.</p>
        </div>
       
    </div>

    <div className="flex flex-col ... bg-violet-500">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>

</div>


  )
}

export default Home
