// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from "lucide-react"


export function Details () {

    const [exibirConteudo, setExibirConteudo] = useState({});

    const alternarExibicao = (index) => {
      setExibirConteudo((prevState) => ({
        ...prevState,
        [index]: !prevState[index]
      }));
    };

    return (
        
        <div className="my-56 overflow-x-hidden">
        <div className="">
        <h1 className="font-bold  text-3xl sm:text-5xl text-center">Perguntas frequentes</h1>

        <div className="flex justify-center ">
  <div className="font-normal divide-y text-center">
    <details className="mb-10">
      <summary className="font-bold text-xl mt-16 flex items-center" onClick={() => alternarExibicao(1)}>
      O que é a IA de Aprendizado deste site?
        {exibirConteudo[1] ? (
          <MinusCircle className="ml-auto text-violet-500" />
          ) : (
          <PlusCircle className="ml-auto text-violet-500" />
        )}
      </summary>
      <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
      Nossa IA de Aprendizado é um assistente virtual alimentado por inteligência artificial que oferece suporte educacional personalizado. Ele pode responder a perguntas, explicar conceitos, sugerir recursos e fornecer orientações para ajudar os alunos a aprender de forma mais eficaz.
      </p>
    </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(2)}>
        A IA substitui tutores humanos?
          {exibirConteudo[2] ? (
            <MinusCircle className="ml-96 text-violet-500" />
            ) : (
            <PlusCircle className="ml-96 text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
        A IA pode oferecer suporte educacional valioso, mas também fornecemos a opção de agendar sessões de tutoria personalizada com tutores humanos. A escolha é sua.
        </p>
      </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(3)}>
        Quanto custa o acesso a esta plataforma?
          {exibirConteudo[3] ? (
            <MinusCircle className="ml-auto text-violet-500" />
            ) : (
            <PlusCircle className="ml-auto text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
        Oferecemos planos de preços variados, incluindo opções gratuitas e premium. Para obter detalhes específicos sobre preços, visite a página de planos e preços.
        </p>
      </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(4)}>
        É seguro usar a IA para aprendizado?
          {exibirConteudo[4] ? (
            <MinusCircle className="ml-auto text-violet-500" />
            ) : (
            <PlusCircle className="ml-auto text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
        Sim, a segurança e a privacidade dos usuários são nossas prioridades. Utilizamos tecnologias avançadas para proteger seus dados e garantir uma experiência segura.
        </p>
      </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(5)}>
        Como faço para começar?
          {exibirConteudo[5] ? (
            <MinusCircle className="ml-auto text-violet-500" />
            ) : (
            <PlusCircle className="ml-auto text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
        Comece criando uma conta gratuita e preenchendo seu perfil. Depois disso, você pode começar a interagir com a IA, acessar recursos educacionais e agendar tutorias, se desejar.
        </p>
      </details>

  </div>
</div>

        </div>
        
    </div>
    )
}