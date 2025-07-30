<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$pdo = new PDO('sqlite:ticketing.sqlite');

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email'], $data['password'])) {
    echo json_encode(['error' => 'Champs manquants']);
    http_response_code(400);
    exit;
}

$email = $data['email'];
$password = $data['password'];

$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && $user['password'] === $password) {
    echo json_encode([
        'success' => true,
        'user_id' => $user['id'],
        'email' => $user['email']
    ]);
} else {
    echo json_encode(['error' => 'Identifiants invalides']);
    http_response_code(401);
}
