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
        
        <div className="my-56 ">
        <div className="">
        <h1 className="font-bold text-5xl text-center">Perguntas frequentes</h1>

        <div className="flex justify-center ">
  <div className="font-normal divide-y text-center">
    <details className="mb-10">
      <summary className="font-bold text-xl mt-16 flex items-center" onClick={() => alternarExibicao(1)}>
        O que é um teste vocacional?
        {exibirConteudo[1] ? (
          <MinusCircle className="ml-auto text-violet-500" />
          ) : (
          <PlusCircle className="ml-auto text-violet-500" />
        )}
      </summary>
      <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
        Bateu aquela dúvida sobre qual carreira seguir e qual faculdade prestar? O teste vocacional é uma ferramenta que ajuda estudantes a descobrir suas aptidões e seu tipo de personalidade, avaliando habilidades, nível de percepção, raciocínio e memória. Fácil de ser realizado, o teste vocacional é amplamente utilizado por estudantes que não sabem qual carreira seguir ou têm dúvidas sobre o melhor curso de acordo com suas habilidades.
      </p>
    </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(2)}>
          Para que servem os testes vocacionais?
          {exibirConteudo[2] ? (
            <MinusCircle className="ml-96 text-violet-500" />
            ) : (
            <PlusCircle className="ml-96 text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
          A definir
        </p>
      </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(3)}>
          Como funcionam os testes vocacionais?
          {exibirConteudo[3] ? (
            <MinusCircle className="ml-auto text-violet-500" />
            ) : (
            <PlusCircle className="ml-auto text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
          A definir
        </p>
      </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(4)}>
          Como descobrir a sua profissão?
          {exibirConteudo[4] ? (
            <MinusCircle className="ml-auto text-violet-500" />
            ) : (
            <PlusCircle className="ml-auto text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
          A definir
        </p>
      </details>

      <details className="mb-10">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(5)}>
          Como saber a profissão que combina comigo?
          {exibirConteudo[5] ? (
            <MinusCircle className="ml-auto text-violet-500" />
            ) : (
            <PlusCircle className="ml-auto text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
          A definir
        </p>
      </details>

      <details className="">
        <summary className="font-bold text-xl flex items-center" onClick={() => alternarExibicao(6)}>
          Como saber qual o perfil profissional?        
          {exibirConteudo[6] ? (
            <MinusCircle className="ml-auto text-violet-500" />
            ) : (
            <PlusCircle className="ml-auto text-violet-500" />
          )}
        </summary>
        <p className='max-w-2xl ml-10 text-lg text-justify mt-4 mb-16'>
          A definir
        </p>
      </details>
  </div>
</div>

        </div>
        
    </div>
    )
}