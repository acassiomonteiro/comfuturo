<?php
    // Define os cabeçalhos de permissão de acesso para permitir solicitações de qualquer origem (Access-Control-Allow-Origin), 
    // com métodos GET e POST (Access-Control-Allow-Methods) e com o tipo de conteúdo especificado (Access-Control-Allow-Headers).
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Cria uma conexão com o banco de dados MySQL usando a classe mysqli.
    // O servidor está localizado em "localhost", o nome de usuário é "root", não há senha definida e o banco de dados é "user".
    $conn = new mysqli("localhost", "root", "", "user3");

    // Verifica se ocorreu algum erro na conexão com o banco de dados.
    // Se houver um erro, exibe a mensagem de erro e interrompe a execução do código.
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{   
        // Obtém os dados enviados por meio da solicitação HTTP POST e decodifica-os de formato JSON para uma matriz associativa.
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);

        // Extrai os valores do usuário, email e senha da matriz de dados decodificados.
        $user = $dData['user'];
        $email = $dData['email'];
        $pass = $dData['pass'];

        // Inicializa uma variável para armazenar o resultado da operação.
        $result = "";

        // Verifica se os valores de usuário, email e senha não estão vazios.
        if($user != "" and $email != "" and $pass != ""){
            // Monta a consulta SQL para inserir os valores na tabela "users".
            // O status é definido como "offline".
            $sql = "INSERT INTO users(user, email, pass, status) VALUES('$user', '$email', '$pass', 'offline');";

            // Executa a consulta SQL usando a conexão com o banco de dados.
            $res = mysqli_query($conn, $sql);

            // Verifica se a consulta foi executada com sucesso.
            // Se sim, define a mensagem de resultado como "Você se registrou com sucesso!".
            // Caso contrário, a mensagem de resultado permanece vazia.
            if($res){
                $result = "You have registered successfully!";
            }
            else{
                $result = "";
            }
        }
        else{
            $result = "";
        }

        // Fecha a conexão com o banco de dados.
        $conn->close();

        // Cria uma matriz associativa contendo a mensagem de resultado.
        $response[] = array("result" => $result);

        // Converte a matriz associativa em formato JSON e envia como resposta.
        echo json_encode($response);
    }
?>