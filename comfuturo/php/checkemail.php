<?php
    // Define os cabeçalhos de permissão de acesso para permitir solicitações de qualquer origem (Access-Control-Allow-Origin),
    // com métodos GET e POST (Access-Control-Allow-Methods) e com o tipo de conteúdo especificado (Access-Control-Allow-Headers).
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Cria uma conexão com o banco de dados MySQL usando a classe mysqli.
    // O servidor está localizado em "localhost", o nome de usuário é "root", não há senha definida e o banco de dados é "user3".
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

        // Extrai o valor do email da matriz de dados decodificados.
        $email = $dData['email'];

        // Inicializa uma variável para armazenar o resultado da operação.
        $result = "";

        // Verifica se o valor do email não está vazio.
        if($email != ""){
            // Monta a consulta SQL para selecionar todos os registros da tabela "users" onde o valor da coluna "email" é igual ao valor do email fornecido.
            $sql = "SELECT * FROM users WHERE email='$email';";

            // Executa a consulta SQL usando a conexão com o banco de dados.
            $res = mysqli_query($conn, $sql);

            // Verifica se a consulta retornou algum resultado (ou seja, se o email já está cadastrado).
            if(mysqli_num_rows($res) != 0){
                $result = "O e-mail já está cadastrado!";
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
