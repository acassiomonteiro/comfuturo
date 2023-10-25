export function Forms () {
    return ( 
        <div className="flex justify-center w-full h-auto left-0 -top-6 bg-[#9874FF] overflow-x-hidden" id="cadastro-chat">
             <div className="flex items-center">
                <div className="flex justify-center flex-col">
                    <h2 className="text-white mb-4"><span className="text-5xl font-bold">A revolução <br></br>na aprendizagem chegou.</span></h2>
                    <p className="flex text-white font-normal text-xl">Assina já o plano da Comfuturo</p>
                </div>
                <div className="">
                <section class="py-10 sm:py-16 lg:py-24">
                    <div class="px-4 mx-10 max-w-7xl sm:px-6 lg:px-10">
        

                <div class="relative mt-8 md:mt-1">
                    <div class="">
                        <div class="px-4 py-6 sm:px-0 sm:py-1">
                            <form action="#" method="POST">
                                <div class="space-y-6">
                                    <div>
                                        <label for="" class="font-medium text-white text-xl"> Nome</label>
                                        <div class="text-white">
                                            

                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Digite seu primeiro nome"
                                                class="w-full py-4 pl-3 pr-80 text-white placeholder-white transition-all duration-200 bg-transparent border border-white rounded-3xl focus:outline-none focus:border-gray-200 caret-gray-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="font-medium text-white text-xl"> Sobrenome</label>
                                        <div class="text-white">
                                            

                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Digite seu primeiro sobrenome"
                                                class="w-full py-4 pl-3 pr-92 text-white placeholder-white transition-all duration-200 bg-transparent border border-white rounded-3xl focus:outline-none focus:border-gray-200 caret-gray-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="email" class="font-medium text-white text-xl"> Email</label>
                                        <div class="text-white">
                                            

                                            <input
                                                type="email"
                                                name="email-cadastro"
                                                id=""
                                                placeholder="exemplo@gmail.com"
                                                class="w-full py-4 pl-3 pr-80 text-white placeholder-white transition-all duration-200 bg-transparent border border-white rounded-3xl focus:outline-none focus:border-gray-200 caret-gray-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="font-medium text-white text-xl"> Telefone</label>
                                        <div class="text-white">
                                            

                                            <input
                                                type="text"
                                                name="telefone-cadastro"
                                                id=""
                                                placeholder="(98) 9 9999-9999"
                                                class="w-full py-4 pl-3 pr-80 text-white placeholder-white transition-all duration-200 bg-transparent border border-white rounded-3xl focus:outline-none focus:border-gray-200 caret-gray-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="momento_escolar" class="font-medium text-white text-xl"> Qual o seu momento escolar? </label>
                                        <div class="text-white">

                                            <select name="momento_escolar" id="momento_escolar" class="w-full py-4 pl-3 pr-80 text-white placeholder-white transition-all duration-200 bg-transparent border border-white rounded-3xl focus:outline-none focus:border-gray-200 caret-gray-200">
                                                <option value="ensino_fundamental" className="text-violet-500">Ensino Fundamental</option>
                                                <option value="ensino_medio" className="text-violet-500">Ensino Médio</option>
                                                <option value="graduacao" className="text-violet-500">Graduação</option>
                                                <option value="pos_graduacao" className="text-violet-500">Pós-Graduação</option>
                                                <option value="outro" className="text-violet-500">Outro</option>
                                            </select>

                                        </div>
                                    </div>

                                    



                                    <div>
                                        <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-black transition-all duration-200 bg-white border border-transparent rounded-3xl focus:outline-none hover:bg-gray-200 focus:bg-gray-200">
                                            Enviar
                                        </button>
                                    </div>

                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                    
                </div>

            </div>
        </div>
    )
}