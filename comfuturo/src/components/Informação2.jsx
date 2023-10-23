import Bg1 from "../img/Character.svg";

export function Informação2 () {
    return (

        <div className="flex justify-center w-full h-auto left-0 -top-6 bg-[#9874FF] overflow-x-hidden">
            <div className="flex items-center">
                <div className="flex justify-center ">
                    <img src={Bg1} alt="teste" className="pb-20 pt-20"/>
                </div>
                <div className="">
                    <h1 className="text-white font-bold text-3xl py-4">Nossa missão</h1>
                    <p className="text-white text-xl max-w-md">Na vanguarda da revolução educacional, nossa missão é utilizar a inteligência artificial para tornar a educação eficaz e acessível a todos. Estamos comprometidos em ajudá-lo a desbloquear seu potencial máximo.</p>
                </div>

            </div>
        </div>
        
    )
}