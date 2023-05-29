<?php
require_once('config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Verifique se o nome de usuário já existe no banco de dados
  $stmt = $db->prepare('SELECT id FROM users WHERE username = :username');
  $stmt->execute([':username' => $username]);

  if ($stmt->rowCount() > 0) {
    echo 'O nome de usuário já está em uso.';
  } else {
    // Insira o novo usuário no banco de dados
    $stmt = $db->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
    $stmt->execute([':username' => $username, ':password' => password_hash($password, PASSWORD_DEFAULT)]);

    echo 'Registro concluído com sucesso.';
  }
}
?>
