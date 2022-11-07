<?php

require 'connect.php';
require 'cors.php';


$postData = file_get_contents("php://input");

if (isset($postData) && !empty($postData)) {
    $request = json_decode($postData);

    //Sanitize input
    $firstName = $request->firstName;
    $lastName = $request->lastName;
    $email = $request->email;


    //Store
    $sql = "INSERT INTO `students`(
        `firstName`,
        `lastName`,
        `email`
    ) VALUES (
    '{$firstName}',
    '{$lastName}',
    '{$email}')
    ";

    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
