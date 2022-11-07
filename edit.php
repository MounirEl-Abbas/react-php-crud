<?php

require_once 'connect.php';
require_once 'cors.php';

//Get the posted data

$postData = file_get_contents("php://input");

print_r($postData);

if (isset($postData) && !empty($postData)) {

    //extract the data 
    $request = json_decode($postData);
    print_r($request);

    //Sanitize

    $id = $_GET['id'];
    $firstName = mysqli_real_escape_string($con, trim($request->firstName));
    $lastName = mysqli_real_escape_string($con, trim($request->lastName));
    $email = mysqli_real_escape_string($con, trim($request->email));

    //Update data
    $sql = "UPDATE `students` SET `firstName`='{$firstName}', `lastName`='{$lastName}', `email`='{$email}' WHERE `id` = {$id} LIMIT 1";


    if (mysqli_query($con, $sql)) {
        http_response_code(200);
    } else {
        http_response_code(422);
    }
}
