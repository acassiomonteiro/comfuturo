import { useNavigate } from 'react-router-dom';

function Dashboard(){
    const naviget = useNavigate();

function logoutSubmit(){
    // Limpa o valor do item 'login' no armazenamento local.
    localStorage.setItem("login", "");

    // Define uma mensagem de status de logout no armazenamento local.
    localStorage.setItem("loginStatus", "Desconectado com sucesso!");

    // Navega para a rota '/'.
    naviget("/");
}

return(

  
     
    <div className="form">
        <h3>Dashboard Page</h3>
        <p onClick={logoutSubmit}>Logout</p>
    </div>

);

}

export default Dashboard