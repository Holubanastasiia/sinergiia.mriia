<?php

$content = "";

foreach ($_POST as $key => $value) {
    if ($value) {
        $content .= "<b>$key</b>: <i>$value</i>" . PHP_EOL;
    }
}
if (trim($content)) {
    $content = "<b>Message from site:</b>\n" . $content;
    $apiToken = "6061862489:AAEZbiYRVwuqqPiF3jHC_AaYUkO_uavPYpM";
    $data = [
        'chat_id' => "@synergiiaMriiaMessage",
        'text' => $content,
        'parse_mode' => 'HTML'
    ];
    $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data));
}

