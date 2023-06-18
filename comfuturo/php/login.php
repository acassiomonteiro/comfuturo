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

        // Extrai os valores do usuário e da senha da matriz de dados decodificados.
        $user = $dData['user'];
        $pass = $dData['pass'];

        // Inicializa uma variável para armazenar o resultado da operação.
        $result = "";

        // Verifica se os valores de usuário e senha não estão vazios.
        if($user != "" and $pass != ""){
            // Monta a consulta SQL para selecionar todos os registros da tabela "users" onde o valor da coluna "users" é igual ao valor do usuário fornecido.
            $sql = "SELECT * FROM users WHERE user='$user';";

            // Executa a consulta SQL usando a conexão com o banco de dados.
            $res = mysqli_query($conn, $sql);

            // Verifica se a consulta retornou algum resultado (ou seja, se o nome de usuário existe no banco de dados).
            if(mysqli_num_rows($res) != 0){
                // Extrai os dados do registro retornado.
                $row = mysqli_fetch_array($res);

                // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados.
                if($pass != $row['pass']){
                    $result = "Senha inválida!";
                }
                else{
                    $result = "Conectado com sucesso! Redirecionando...";
                }
            }
            else{
                $result = "Nome de usuário inválido!";
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
