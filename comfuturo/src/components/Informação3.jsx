import Bg1 from "../img/student_boy.jpg";
import Bg2 from "../img/mockup.jpg";
import Bg3 from "../img/student.jpg";

export function Informação3 () {
    return (
        <div className="overflow-x-hidden">
            <div className="">
                <div className="flex justify-center py-32">
                    <h1 className="text-5xl font-bold" >Como a <span className="text-violet-500">ComFuturo</span> pode te ajudar</h1>
                </div>
                <div className="flex justify-center flex-col space-y-72">

                    <div className="flex justify-center items-center">
                        <div className="px-10">
                            <h1 className="text-black font-bold text-3xl py-4 max-w-md">Atividades <span className="text-violet-500">personalizadas</span> para seu sucesso</h1>
                            <p className="text-black text-xl max-w-md">Oferecemos atividades de aprendizado, projetadas para atender às suas necessidades exclusivas. Não importa em que estágio de aprendizado você esteja, nossas atividades o levarão ao próximo nível.</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={Bg1} alt="teste" className="scale-75"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center">
                                <img src={Bg2} alt="teste" className="scale-100"/>
                            </div>
                            <div className="px-10">
                                <h1 className="text-black font-bold text-3xl py-4 max-w-md">Conversa com a IA <span className="text-violet-500">- Seu Mentor Virtual</span></h1>
                                <p className="text-black text-xl max-w-md">Tenha suas perguntas respondidas instantaneamente, receba explicações detalhadas e orientações sob medida, 24 horas por dia, 7 dias por semana. Nossa IA está sempre à disposição para ajudá-lo.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center items-center">
                            <div className="px-10">
                                <h1 className="text-black font-bold text-3xl py-4 max-w-md">Acompanhe <span className="text-violet-500">Seu Progresso</span> com facilidade</h1>
                                <p className="text-black text-xl max-w-md">Mantenha o controle do seu progresso com nossa análise de desempenho. Saiba onde você brilha e quais áreas precisam de atenção. Esteja sempre um passo à frente na sua jornada educacional.</p>
                            </div>
                            <div className="flex justify-center">
                                <img src={Bg3} alt="teste" className="scale-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}