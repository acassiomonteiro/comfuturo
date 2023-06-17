import Logo from "../img/logobranca_comfuturo.svg";

export function Footer () {
    return (
      <footer className="w-12/12 h-48 bg-violet-600 flex flex-col justify-center items-center">
        <img src={Logo} alt="" className="p-5" />
        <p className="text-white">© 2023 comfuturo. Todos os direitos reservados.</p>
        
      </footer>
    )
}