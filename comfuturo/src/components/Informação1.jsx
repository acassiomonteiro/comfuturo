import Bg2 from "../img/Responda.svg";
import Bg3 from "../img/perfil.svg";
import Bg4 from "../img/profissão.svg";

export function Informação1 () {
    return (
    <div className="-mt-80 sm:-mt-96 lg:mt-10">
        <div className="relative w-full h-auto ">
            <h1 className="text-black font-bold text-3xl sm:text-3xl lg:text-4xl xl:text-5xl mt-0 text-center mb-10">Conheça o passo a passo do nosso teste vocacional:</h1>

        <div className="max-w-md mx-auto bg-violet-600 rounded-xl shadow-md overflow-hidden sm:max-w-2xl lg:max-w-6xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src={Bg2} className="w-full object-cover md:h-full md:w-48 sm:scale-75 scale-[0.8]" alt="" />
                </div>
                <div className="p-8">
                    <div className="tracking-wide text-white font-semibold text-xl sm:text-3xl">Responda às perguntas</div>
                    <p className="mt-2 text-white font-normal text-lg sm:text-xl max-w-2xl">Primeiro, responda às situações que o teste propõe de acordo com seu grau de interesse. A forma como você reage às atividades ajuda a moldar seu perfil.</p>
                </div>
            </div>
        </div>


        <div className="w-full h-auto left-0 top-3 ">
                <div className="max-w-md mx-auto bg-violet-600 rounded-xl shadow-md overflow-hidden sm:max-w-2xl lg:max-w-6xl my-10">
                    <div className="md:flex">
                    <div className="md:shrink-0">
                        <img src={Bg3} className="w-full object-cover md:h-full md:w-48 sm:scale-75 scale-[0.8]" alt="" />
                    </div>
                    <div className="p-8">
                        <div className="tracking-wide text-white font-semibold text-xl sm:text-3xl">Direcione seu perfil</div>
                        <p className="mt-2 text-white font-normal text-lg sm:text-xl max-w-2xl">Segundo, escolha as palavras que melhor representam quem você é. Vamos propor alguns conjuntos de palavras para você escolher aquelas que têm a sua pegada.</p>
                    </div>
                    </div>
                </div>
        </div>
        <div className="w-full h-auto left-0 top-3">
                <div className="max-w-md mx-auto bg-violet-600 rounded-xl shadow-md overflow-hidden sm:max-w-2xl lg:max-w-6xl mt-10">
                    <div className="md:flex">
                    <div className="md:shrink-0">
                        <img src={Bg4} className="w-full object-cover md:h-full md:w-48 sm:scale-75 scale-[0.8]" alt="" />
                    </div>
                    <div className="p-8">
                        <div className="tracking-wide text-white font-semibold text-xl sm:text-3xl">Descubra profissões</div>
                        <p className="mt-2 text-white font-normal text-lg sm:text-xl max-w-2xl">Por fim, baixe as sugestões de carreiras que são a sua cara de acordo com seu perfil primário e secundário. Conheça ainda a base psicológica por trás do teste.</p>
                    </div>
                    </div>
                </div>
        </div>
 
    </div>
</div>        
    )
}