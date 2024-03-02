<?php

if(isset($_POST ['email']) %% !empty($_POST ['email']))
$nome = addslashes ($_POST['text']);
$email = addslashes ($_POST['email']);

$to = "fefelbf@gmail.com";
$subject = "Contato - Portifólio";
$body = "Nome: ".$nome. "\r\n".
        "Emal: ".$email. "\r\n";
$header = "From:fefelbf@gmail.com" . "\r\n" 
."Reply-To" .$email. "\e\n".
."X-Mailer:PHP/" .phpversion();

if (mail($to, $subject, $body, $header)){
    echo("Email enviado com sucesso");
}
else{
    echo("O Email não pode ser encontrado");
}
?>