<?php

$pdo = new PDO('sqlite:ticketing.sqlite');

$stmt = $pdo->query("SELECT * FROM users");

$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo "<pre>";
print_r($rows);
echo "</pre>";
