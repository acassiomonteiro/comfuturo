import { CheckCircle} from "lucide-react";
import Bg5 from "../img/10min.svg";
import Bg6 from "../img/analise-completa.svg";
import Bg7 from "../img/image-10.svg";

export function Informação2 () {
    return (
        <div>
            <h1 className="text-center font-semibold text-3xl mt-32 sm:text-4xl lg:text-5xl">Responda a um questionário de <span className="text-violet-500"><br />10 minutos e veja na hora os seguintes resultados:</span></h1>

        <div className="container mx-auto lg:-ml-auto xl:-ml-auto">
            <div className="grid grid-rows-4 grid-flow-col gap-1">
                <div className="row-span-2 ... ">
                <h2 className="relative font-bold left-20 mt-8 text-base sm:text-xl lg:left-56 text-black max-w-xl">PROFISSÕES QUE MAIS COMBINAM COM VOCÊ</h2>
                <p className="relative font-medium mx-4 mt-8 left-16 text-sm sm:text-lg lg:left-52 lg:max-w-md">
                    A partir da experiência do Com Futuro em ajudar os estudantes a se prepararem para o ENEM e encontrarem a tão sonhada universidade, nossa equipe fez um longo estudo para identificar quais cursos e profissões combinam mais com cada perfil de pessoa.
                </p>

                <h2 className="relative font-bold left-20 mt-8 text-base sm:text-xl text-violet-500 max-w-sm lg:left-56">O RAIO-X do Com Futuro não é um simples teste vocacional.</h2>
                <p className="relative font-medium mx-4 mt-8 left-16 text-sm sm:text-lg lg:left-52 lg:max-w-md">
                    O seu grande diferencial é possibilitar que, primeiro, a pessoa se conheça melhor, seus pontos fortes, pontos de melhorias, seus medos e como se relaciona com outras pessoas, para depois sugerir as profissões que mais combinam.
                </p>

                <h2 className="relative font-bold left-20 mt-8 text-base sm:text-xl text-violet-500 lg:left-56">Nessa etapa você vai descobrir:</h2>

                <p className="flex items-center gap-3 text font-semibold ml-56 my-2 text-base sm:text-lg"><CheckCircle className="text-violet-500"/>Quais são as profissões mais indicadas para o seu perfil</p>
                <p className="flex items-center gap-3 text font-semibold ml-56 my-2 text-base sm:text-lg"><CheckCircle className="text-violet-500"/>Qual o salário médio de cada uma dessas profissões</p>
                </div>
                <div className="col-span-2 ..."></div>
                <div className="row-span-2 col-span-2 ..."><img src={Bg5} className="ml-auto scale-0 xl:scale-75" alt="" /></div>
            </div>
        </div>

        {/*Segunda parte da informação*/}

    <div className="container mx-auto ml-auto sm:ml-auto -ml-14">
            <div className="grid grid-rows-3 grid-flow-col gap -mt-80">
                <div className="row-span-3 ...">
                <img src={Bg6} className="ml-36 scale-0 xl:scale-75 -mt-96" alt="" />
                </div>
                <div className="col-span-2 ... sm:-mt-96 -mt-80 sm:-ml-96">
                <h2 className="relative font-bold text-base  sm:text-xl lg:left-56 text-black -ml-36 sm:ml-4">UMA ANÁLISE COMPLETA DO SEU PERFIL</h2>
                <p className="relative font-medium max-w-sm text-base sm:text-lg -ml-36 mt-8 sm:ml-60">
                    A partir de uma conceituada metodologia, chamada DISC, utilizada por empresas no processo de contratação de seus funcionários, você entenderá melhor a seu respeito, seus pontos fortes e quais áreas precisam ser aprimoradas para que você alcance sucesso na sua vida pessoal e profissional.
                </p>
                </div>
                <div className="relative row-span-2 col-span-2 .. -ml-36 sm:-mt-10">
                <h2 className="relative font-bold left-90 -mt-36 text-violet-500 text-xl">Nessa etapa você vai descobrir:</h2>

                <p className="flex items-center gap-3 text-lg font-semibold left-90 mt-4"><CheckCircle className="text-violet-500"/>Qual é o seu estilo comportamental <br/>e o que isso significa de forma prática</p>
                <p className="flex items-center gap-3 text-lg font-semibold left-90 mt-4"><CheckCircle className="text-violet-500"/>Quais são seus pontos fortes a serem<br/>
                    potencializados e pontos fracos a<br/>
                    serem minimizados ou melhorados</p>
                <p className="flex items-center gap-3 text-lg font-semibold left-90 mt-4"><CheckCircle className="text-violet-500"/>Suas principais motivações e seus medos</p>
                </div>
            </div>
    </div>

    {/*terceira parte da informação*/}

    <div className="container mx-auto">
        <div className="grid grid-rows-3 grid-flow-col gap-0">
            <div className="row-span-3 mb-10 sm:mb-32">
            <img src={Bg7} className="mx-auto scale-0 sm:ml-60 sm:mt-44 lg:scale-90 lg:left-70 lg:relative" alt="" />
            </div>
            <div className="mt-4 sm:mt-28">
            <h2 className="font-bold text-2xl sm:text-4xl text-justify sm:text-left mr-28 sm:ml-40 mt-10 sm:mt-16">
                É importante lembrar
            </h2>
            </div>
            <p className="relative text-base mr-10 sm:text-xl text-justify sm:text-justify sm:ml-40 sm:mr-24 -my-16 -ml-12 sm:ml- sm:my-0">
            O resultado apresentado no teste vocacional da com futuro não é definitivo e não deve ser a única base para escolher sua carreira. Utilize-o para descobrir novas possibilidades ou para reforçar suas ideias, mas sempre priorize seus gostos, vontades e aspirações na hora de definir sua profissão!<br/>
            Apesar de ter sido desenvolvido com apoio de uma equipe de psicólogos, o teste não pode ser comercializado e não passou por avaliação do Conselho Federal de Psicologia. Não é um teste para uso de avaliação psicológica e sim um teste online criado com método de associação de padrão de respostas.
            </p>
        </div>
    </div>


     {/*quarta parte da informação*/}

     <div className="flex flex-col ... bg-violet-600 w-12/12 h-[30rem] left-0 -top-6">
        <div className="relative text-center text-white text-xl sm:text-3xl font-semibold top-20">O Teste Vocacional da Com Futuro te ajudará<br/>a ter uma vida mais feliz!</div>
        <div className="relative text-center text-white text-base sm:text-xl font-normal top-28 mx-20">Não existe nada pior do que a frustração de trabalhar em algo que não ama,<br/> nós vamos te ajudar a descobrir exatamente o que combina com você. Agora<br/> queremos ajudar você a escolher a profissão certa e ter uma vida mais feliz.</div>
        <div className="flex justify-center my-16">
        <a href="#" title="" className="inline-flex items-center px-20 py-4 mt-8 font-semibold text-base sm:text-xl text-white transition-all duration-200 bg-violet-950 rounded-xl lg:mt-32 hover:bg-white hover:text-black focus:bg-black " role="button">
        Fazer o teste agora!
        </a>
        </div>
    </div>

</div>
    )
}