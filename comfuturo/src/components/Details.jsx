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
        
        <div className="my-32">
        <div className="text-center ">
        <h1 className="font-bold text-5xl p-16">Perguntas frequentes</h1>

        <div className="font-normal text-xl text-left ml-96">
        <details className="mb-10">
            <summary className="font-bold text-xl flex items-center " onClick={() => alternarExibicao(1)}>
                {exibirConteudo[1] ? (
                    <PlusCircle className="mr-2 text-violet-500" />
                    ) : (
                    <MinusCircle className="mr-2 text-violet-500" />
                )}
                O que é um teste vocacional?
            </summary>
            <p>Bateu aquela dúvida sobre qual carreira seguir e qual faculdade prestar? O teste vocacional é uma ferramenta que ajuda<br/> estudantes a descobrir suas aptidões e seu tipo de personalidade, avaliando habilidades, nível de percepção, raciocínio e<br/> memória.
            <br/>Fácil de ser realizado, o teste vocacional é amplamente utilizado por estudantes que não sabem qual carreira seguir ou têm<br/>dúvidas sobre o melhor curso de acordo com suas habilidades.</p>
        </details>

        <details className="mb-10">
            <summary className="font-bold text-xl flex items-center " onClick={() => alternarExibicao(2)}>
                    {exibirConteudo[2] ? (
                     <PlusCircle className="mr-2 text-violet-500" />
                     ) : (
                     <MinusCircle className="mr-2 text-violet-500" />
                 )}
                Para que servem os testes vocacionais?
            </summary>
        </details>
        
        <details className="mb-10">
            <summary className="font-bold text-xl flex items-center " onClick={() => alternarExibicao(3)}>
            {exibirConteudo[3] ? (
                     <PlusCircle className="mr-2 text-violet-500" />
                     ) : (
                     <MinusCircle className="mr-2 text-violet-500" />
                 )}
                Como funcionam os testes vocacionais?</summary>
        </details>

        <details className="mb-10">
            <summary className="font-bold text-xl flex items-center " onClick={() => alternarExibicao(4)}>
            {exibirConteudo[4] ? (
                     <PlusCircle className="mr-2 text-violet-500" />
                     ) : (
                     <MinusCircle className="mr-2 text-violet-500" />
                 )}
                Como descobrir a sua profissão?</summary>
        </details>

        <details className="mb-10">
            <summary className="font-bold text-xl flex items-center " onClick={() => alternarExibicao(5)}>
            {exibirConteudo[5] ? (
                     <PlusCircle className="mr-2 text-violet-500" />
                     ) : (
                     <MinusCircle className="mr-2 text-violet-500" />
                 )}
              Como saber a profissão que combina comigo?</summary>
        </details>
        
        <details className="">
            <summary className="font-bold text-xl flex items-center " onClick={() => alternarExibicao(6)}>
            {exibirConteudo[6] ? (
                     <PlusCircle className="mr-2 text-violet-500" />
                     ) : (
                     <MinusCircle className="mr-2 text-violet-500" />
                 )}
                Como saber qual o perfil profissional?</summary>

        </details>

        </div>
        </div>
        
    </div>
    )
}