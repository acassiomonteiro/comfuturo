import { Footer } from "../components/footer.jsx";
function Sobre() {
	return (
		<section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-10">
				<div className="grid items-center grid-cols-1 md:grid-cols-2 mt-24">
					<div>
						<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey, Você Sabe quem somos? </h2>
						<p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Não existe nada pior do que a frustração de trabalhar em algo que não ama, por isso nós vamos te ajudar a descobrir exatamente o que combina com você. Agora queremos ajudar você a escolher a profissão certa e ter uma vida mais feliz.</p>

						<p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Acreditamos na democratização desse processo, tornando-o acessível a todos, e colocamos à disposição dos nossos clientes uma abordagem personalizada e eficiente, baseada em anos de experiência e conhecimento especializado.</p>

						<p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Nosso compromisso é ajudar os jovens a tomar decisões educacionais informadas e significativas, que estejam alinhadas com suas paixões, talentos e habilidades únicas. Reconhecemos que a escolha de um curso superior é um momento crucial na vida de cada pessoa, e é por isso que nos dedicamos a fornecer um serviço completo e confiável.</p>

					</div>

					<div className="relative">
						<img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
					</div>
				</div>

				<div className="grid items-center mt-8 mb-60 ">

					<p className="mt-3 text-xl text-justify leading-relaxed text-gray-600 md:mt-8">Por meio de nossos testes vocacionais, aplicados por profissionais experientes, avaliamos as aptidões e interesses individuais, identificando as áreas de maior afinidade e potencial. Com base nessas informações, oferecemos orientação personalizada, apresentando opções de cursos superiores que estejam alinhadas com as características únicas de cada cliente.</p>

					<p className=" mt-3 text-xl text-justify leading-relaxed text-gray-600 md:mt-8">Nossa abordagem vai além de simplesmente fornecer uma lista de cursos recomendados. Também auxiliamos os jovens a entenderem o mercado de trabalho, as tendências profissionais e as possibilidades de carreira em cada área de interesse. Dessa forma, capacitamos nossos clientes a tomar decisões bem embasadas, com uma visão clara das oportunidades futuras.</p>

					<p className="g mt-3 text-xl text-justify leading-relaxed text-gray-600 md:mt-8">Acreditamos que cada indivíduo tem talentos únicos a serem explorados, e nosso objetivo é ajudar a desvendar essas habilidades e direcioná-las para uma trajetória acadêmica e profissional de sucesso. Nossa equipe dedicada e qualificada está pronta para acompanhar cada etapa do processo, garantindo o melhor suporte e orientação aos nossos clientes.</p>

					<p className=" mt-3 text-xl text-justify leading-relaxed text-gray-600 md:mt-8" >Se você é um jovem em busca de orientação profissional, conte conosco para lhe fornecer as ferramentas e o conhecimento necessário para fazer escolhas significativas e assertivas em relação ao seu futuro acadêmico e profissional. Junte-se a nós e descubra o seu verdadeiro potencial!</p>

					<p className="mt-4 text-xl text-gray-600 md:mt-8">
						<span className="relative inline-block">
							<span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
							<span className="relative"> Está pronto para o teste? </span>
						</span>
						<br className="block sm:hidden" />Faço agora <a href="#" title="" className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Teste vocacional</a>
					</p>

				</div>


			</div>

			<Footer/>

		</section>

	);
}

export default Sobre;