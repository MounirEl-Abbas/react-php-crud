<?php

require 'connect.php';
require 'cors.php';

//from param
$id = $_GET['id'];

$sql = "DELETE FROM `students` WHERE `id` = {$id} LIMIT 1";

if (mysqli_query($con, $sql)) {
    http_response_code(204);
} else {
    http_response_code(422);
}
