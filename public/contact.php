<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false]);
    exit;
}

$body = json_decode(file_get_contents("php://input"), true);

$name    = htmlspecialchars($body["name"]    ?? "Unknown");
$phone   = htmlspecialchars($body["phone"]   ?? "Not provided");
$email   = htmlspecialchars($body["email"]   ?? "Not provided");
$address = htmlspecialchars($body["address"] ?? "Not provided");
$service = htmlspecialchars($body["service"] ?? "Not specified");
$message = htmlspecialchars($body["message"] ?? "No message");
$source  = htmlspecialchars($body["source"]  ?? "lead-form");
$photos  = isset($body["photoUrls"]) && is_array($body["photoUrls"]) && count($body["photoUrls"])
    ? "\nPhotos:\n" . implode("\n", array_map("htmlspecialchars", $body["photoUrls"]))
    : "";

$subject = "New Roofing Lead — $name";
$text    = "Name: $name\nPhone: $phone\nEmail: $email\nAddress: $address\nService: $service\nMessage: $message\nSource: $source$photos";
$headers = "From: postmaster@oldetownroofing.com\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

mail("sluggersusa@gmail.com", $subject, $text, $headers);
$sent = mail("amiegarciaotr@yahoo.com", $subject, $text, $headers);

echo json_encode(["ok" => $sent]);
