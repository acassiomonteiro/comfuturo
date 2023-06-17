import Bg2 from "../img/Responda.svg";
import Bg3 from "../img/perfil.svg";
import Bg4 from "../img/profissão.svg";

export function Informação1 () {
    return (
    <div>
        <div className="relative w-full h-auto left-0 -top-6 bg-[#9874FF]">
            <h1 className="text-white font-bold text-4xl text-center">Conheça o passo a passo do teste vocacional:</h1>

        <div className="max-w-md mx-auto bg-violet-900 rounded-xl shadow-md overflow-hidden md:max-w-6xl mt-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src={Bg2} className="h-44 w-full object-cover md:h-full md:w-72 scale-75" alt="" />
                </div>
                <div className="p-8 -ml-3">
                    <div className="tracking-wide text-white font-semibold text-3xl">Responda às perguntas</div>
                    <p className="mt-2 text-white font-normal text-xl max-w-2xl">Primeiro, responda às situações que o teste propõe de acordo com seu grau de interesse. A forma como você reage às atividades ajuda a moldar seu perfil.</p>
                </div>
            </div>
        </div>

        <div className="w-full h-auto left-0 top-3 bg-[#9874FF]">
                <div className="max-w-md mx-auto bg-violet-900 rounded-xl shadow-md overflow-hidden md:max-w-6xl mt-10">
                    <div className="md:flex">
                    <div className="md:shrink-0">
                        <img src={Bg3} className="h-44 w-full object-cover md:h-full md:w-56 scale-75 ml-12" alt="" />
                    </div>
                    <div className="p-8">
                        <div className="tracking-wide text-white font-semibold text-3xl">Direcione seu perfil</div>
                        <p className="mt-2 text-white font-normal text-xl max-w-2xl">Segundo, escolha as palavras que melhor representam quem você é. Vamos propor alguns conjuntos de palavras para você escolher aquelas que têm a sua pegada.</p>
                    </div>
                    </div>
                </div>
        </div>
        <div className="w-full h-80 left-0 top-3 bg-[#9874FF]">
                <div className="max-w-md mx-auto bg-violet-900 rounded-xl shadow-md overflow-hidden md:max-w-6xl mt-10">
                    <div className="md:flex">
                    <div className="md:shrink-0">
                        <img src={Bg4} className="h-44 w-full object-cover md:h-full md:w-64 scale-75 ml-4" alt="" />
                    </div>
                    <div className="p-8">
                        <div className="tracking-wide text-white font-semibold text-3xl">Descubra profissões</div>
                        <p className="mt-2 text-white font-normal text-xl max-w-2xl">Por fim, baixe as sugestões de carreiras que são a sua cara de acordo com seu perfil primário e secundário. Conheça ainda a base psicológica por trás do teste.</p>
                    </div>
                    </div>
                </div>
        </div>

        

                
            
            
            
    </div>
</div>        
    )
}