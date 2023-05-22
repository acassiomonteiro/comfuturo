<?php

include("Conexao.php");

class Usuario extends Usuario{

    #Exibição dos usuarios em um json
    public function exibeUsuario()
    {
        $BFetch=$this->conectaDB()->prepare("select * from usuarios");
        $BFetch->execute();

        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['id'],
                "nome"=>$Fetch['senha'],
                "email"=>$Fetch['senha'],
                "senha"=>$Fetch['senha']
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}

?>