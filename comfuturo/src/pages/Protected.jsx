import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    // Importa o hook 'useNavigate' do pacote 'react-router-dom' para lidar com navegação programática.
    const naviget = useNavigate();

    // Extrai a propriedade 'Component' do objeto 'props'.
    const { Component } = props;

    // Define um efeito que é executado após o componente ser montado.
    useEffect(() => {
        // Obtém o valor do item 'login' do armazenamento local.
        let login = localStorage.getItem("login");

        // Verifica se não há um valor de 'login' (usuário não autenticado).
        if (!login) {
            // Define uma mensagem de status de login no armazenamento local.
            localStorage.setItem("loginStatus", "Please login to view dashboard!");

            // Navega para a rota '/' substituindo a entrada no histórico de navegação.
            naviget("/", { replace: true });
        }
    }, []);

    // Renderiza o componente fornecido como propriedade.
    return (
        <Component />
    );
}


export default Protected