<?php
require_once('config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Verifique se o nome de usuário existe no banco de dados
  $stmt = $db->prepare('SELECT id, password FROM users WHERE username = :username');
  $stmt->execute([':username' => $username]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($user && password_verify($password, $user['password'])) {
    echo 'Login bem-sucedido.';
  } else {
    echo 'Nome de usuário ou senha inválidos.';
  }
}
?>
