import { ArrowDownCircle } from "lucide-react";
import Bg1 from "../img/banner.svg";
import { Details } from "../components/Details";
import { Footer } from "../components/Footer";
import { Informação1 } from "../components/informação1";
import { Informação2 } from "../components/Informação2";
import { Informação3 } from "../components/Informação3";
import { Pagamento } from "../components/Pagamento";
import { Forms } from "../components/Forms";

function Home() { 
  return (
    <div className="bg-white">
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 py-[125px]">
                <div>
                    
                    <h1 className="mt-4 text-4xl leading-loose font-bold text-black lg:mt-8 sm:text-6xl xl:text-6xl ">Transformando a <span className="text-violet-500">Educação</span> por meio da <span className="text-violet-500">Inteligência Artificial</span></h1>
                    
                    <div className="flex flex-nowrap">
                    

                    <div className="ml-1 mt-3 ">
                    <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl text-justify">A Comfuturo é uma plataforma de estudos pronta para revolucionar o aprendizado dos estudantes, tudo graças à IA. Aqui, você encontra aulas feitas sob medida, acesso a um mundo de conhecimento e muita diversão, tudo na palma da sua mão.</p>
                    </div>
                    </div>



                    <a href="" title="" className="inline-flex items-center px-16 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-violet-500 rounded-lg lg:mt-16 hover:bg-violet-700 focus:bg-violet-700" role="button">
                        Teste agora!
                    </a>
                 
                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-10 font-semibold text-black" role="button">
                    <ArrowDownCircle/> Saiba mais
                    </a>
                  
                </div>
                <img src={Bg1} className="scale-0 lg:scale-[2.1]" alt="" />
            </div>
        </div>
    </section>

    <Informação1 />

    <Informação2 />

    <Informação3 />

    <Pagamento />

    <Forms />

    {/*pergunta frequentes*/}

    <Details />

    <Footer />

    


</div>


  )
}

export default Home
