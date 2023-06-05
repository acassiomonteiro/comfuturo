<?php
include '../src/db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $connection->query($sql);

if ($result->num_rows > 0) {
    echo "Login realizado com sucesso!";
} else {
    echo "Email ou senha inválidos.";
}

$connection->close();
