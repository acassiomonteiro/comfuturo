import Bg2 from "../img/Responda.svg";
import Bg3 from "../img/perfil.svg";
import Bg4 from "../img/profissão.svg";

export function Informação1 () {
    return (
    <div>

        
        <div className="relative w-full h-80 left-0 -top-6 bg-[#9874FF]">
            <h1 className="relative text-white font-bold text-4xl text-center">Conheça o passo a passo do teste vocacional:</h1>

            <div className="max-w-md mx-auto bg-violet-900 rounded-xl shadow-md overflow-hidden md:max-w-6xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src={Bg2} className="h-44 w-full object-cover md:h-full md:w-72 scale-75" alt="" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-white font-semibold text-3xl">Responda às perguntas</div>
                    <p className="mt-2 text-white font-normal text-xl ">Primeiro, responda às situações que o teste propõe de acordo com seu grau de interesse. A forma como você reage às atividades ajuda a moldar seu perfil.</p>
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
    </div>

</div>

        
    )
}