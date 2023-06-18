import { useState, useEffect } from 'react';

function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    
    useEffect(() => {
        setTimeout(function(){
            setMsg("");
        }, 15000);
    }, [msg]);
    
    const handleInputChange = (e, type) => {
        // Função chamada quando ocorre uma mudança nos campos de entrada (input)
        switch(type){
            // Define os estados (states) correspondentes com base no tipo de campo de entrada
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("Username has left blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === ""){
                    setError("Email has left blank!");
                }
                break;
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank!");
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if(e.target.value === ""){
                    setError("Confirm password has left blank!");
                }
                else if(e.target.value !== pass1){
                    setError("Confirm password does not match!")
                }
                break;
            default:
        }
    }
    
    function handleSubmit(){
        // Função chamada quando o formulário é enviado
        if(user !== "" && email !== "" && pass1 !== "" && pass2 !== ""){
            // Verifica se todos os campos foram preenchidos
            var url = "http://localhost:5173/register";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {
                user: user,
                email: email,
                pass: pass2
            }
            // Faz uma requisição POST para o servidor com os dados do usuário
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
            }).catch((err) =>{
                setError(err);
                console.log(err);
            });
            // Limpa os campos de entrada após o envio do formulário
            setUser("");
            setEmail("");
            setPass1("");
            setPass2("");
        }
        else{
            setError("All fields are required!");
        }
    }
    
    function checkUser(){
        // Função chamada para verificar se o nome de usuário já está em uso
        var url = "http://localhost:5173/checkuser";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            user: user
        }
        // Faz uma requisição POST para o servidor para verificar o nome de usuário
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) =>{
            setError(err);
            console.log(err);
        });
    }
    
    function checkEmail(){
        // Função chamada para verificar se o e-mail já está cadastrado
        var url = "http://localhost:5173/checkemail.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            email: email
        }
        // Faz uma requisição POST para o servidor para verificar o e-mail
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) =>{
            setError(err);
            console.log(err);
        });
    }
    
    function checkPassword(){
        // Função chamada para verificar a força da senha
        if(pass1.length < 8){
            setError("Password is less than 8 characters!")
        }
    }
    




  return (
    <section class="bg-white">

            <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 mt-0 ">
                <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                     <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl text-center ">Criar sua conta na ComFuturo.</h2>
                    <p class="mt-3 text-base text-gray-600 text-center">já tem uma conta? faça o <a href="/login" title="" class="font-medium text-violet-500 transition-all duration-200 hover:text-violet-800 hover:underline focus:text-violet-800">Login</a></p>

                    <form class="mt-12">
                        <div class="space-y-5">
                            <div>
                                
                                <p>
                                {
                                        msg !== "" ?
                                        <span className="success">{msg}</span> :
                                        <span className="error">{error}</span>
                                }
                                </p>



                                <label for="" class="text-base font-medium text-gray-900"> Nome completo </label>
                                <div class="mt-2.5">
                                    <input
                                        type="text"
                                        name="user"
                                        placeholder="Escreva o seu nome completo"
                                        value={user}
                                        onChange={(e) => handleInputChange(e, "user")}
                                        onBlur={checkUser}
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Endereço de email </label>
                                <div class="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Digite o seu e-email para começar"
                                        value={email}
                                        onChange={(e) => handleInputChange(e, "email")}
                                        onBlur={checkEmail}
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Senha </label>
                                <div class="mt-2.5">
                                    <input
                                        type="password"
                                        name="pass1"
                                        placeholder="Coloque sua senha"
                                        value={pass1}
                                        onChange={(e) => handleInputChange(e, "pass1")}
                                        onBlur={checkPassword}
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Confirme sua enha </label>
                                <div class="mt-2.5">
                                    <input
                                        type="password"
                                        name="pass2"
                                        placeholder="Repita sua senha"
                                        value={pass2}
                                        onChange={(e) => handleInputChange(e, "pass2")}
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div class="flex items-center">
                                <input type="checkbox" name="agree" id="agree" class="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded" />

                                <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                                 Eu concordo com <a href="#" title="" class="text-violet-600 hover:text-violet-800 hover:underline">Termos de Serviço</a> e <a href="/politica-de-privacidade" title="" class="text-violet-600 hover:text-violet-800 hover:underline">Política de Privacidade</a> <a>da ComFuturo</a>
                                </label>
                            </div>

                            <div>
                                <button
                                type="submit"
                                defaultValue="Submit"
                                className="button"
                                onClick={handleSubmit}
                                class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 
                                ">
                                Criar conta gratuita
                                </button>
                            </div>
                        </div>
                    </form>

                    <div class="mt-3 space-y-3">
                        <button
                            type="button"
                            class="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                        >
                            <div class="absolute inset-y-0 left-0 p-4">
                                <svg class="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                    ></path>
                                </svg>
                            </div>
                            Continuar com o Google
                        </button>

                        <button
                            type="button"
                            class="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                        >
                            <div class="absolute inset-y-0 left-0 p-4">
                                <svg class="w-6 h-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                </svg>
                            </div>
                            Continuar com o Facebook
                        </button>
                    </div>

                </div>
            </div>
</section>
  )
}

export default Register