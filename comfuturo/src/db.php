<?php

$host = $_ENV['DB_HOST'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbName = $_ENV['DB_NAME'];

$connection = new mysqli($host, $username, $password, $dbName);

if ($connection->connect_error) {
    die("Erro na conexão com o banco de dados: " . $connection->connect_error);
}
