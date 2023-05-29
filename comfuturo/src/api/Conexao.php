<?php

abstract class Conexao{

#conexão com o banco de dados
protected function conectaDB()
{
     try{
         $Con=new PDO("mysql:host=localhost;dbname=comfuturo","root","");
         return $Con;
     }catch (PDOException $Erro){
         return $Erro->getMessage();
     }
}
}

?>