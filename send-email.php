<?php
/* ==========================================================================
   FORM CONTACT HANDLER — Faraysz Portfolio
   Mengirim email langsung tanpa database
   ========================================================================== */

// Hanya terima POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['success' => false, 'message' => 'Method not allowed']));
}

// KONFIGURASI — GANTI DENGAN EMAIL ANDA
$to_email = 'hello@faraysz.dev'; // <<< GANTI INI
$from_name = 'Faraysz Portfolio Contact Form';

// Ambil data dari form
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validasi sederhana
$errors = [];
if (empty($name)) $errors[] = 'Nama harus diisi';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email tidak valid';
}
if (empty($message)) $errors[] = 'Pesan harus diisi';

if (!empty($errors)) {
    http_response_code(400);
    die(json_encode(['success' => false, 'message' => implode(', ', $errors)]));
}

// Sanitasi input untuk mencegah header injection
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Buat email content
$email_subject = "Portfolio Contact: $subject - dari $name";
$email_body = "
Pesan Baru dari Portfolio Faraysz
=====================================

Nama: $name
Email: $email
Jenis Proyek: $subject

Pesan:
$message

=====================================
Dikirim pada: " . date('d F Y, H:i:s') . "
";

// Email headers
$headers = [
    'From' => "$from_name <noreply@yourdomain.com>",
    'Reply-To' => "$name <$email>",
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
];

$header_string = '';
foreach ($headers as $key => $value) {
    $header_string .= "$key: $value\r\n";
}

// Kirim email
if (mail($to_email, $email_subject, $email_body, $header_string)) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Pesan berhasil dikirim! Terima kasih sudah menghubungi.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.'
    ]);
}
?>
