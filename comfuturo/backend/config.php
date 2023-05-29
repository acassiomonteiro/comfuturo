<?php
$host = 'localhost';
$db_name = 'nome_do_banco_de_dados';
$username = 'usuario_do_banco_de_dados';
$password = 'senha_do_banco_de_dados';

try {
  $db = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die('Erro ao conectar com o banco de dados: ' . $e->getMessage());
}
?>
