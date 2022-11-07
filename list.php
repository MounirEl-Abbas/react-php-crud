<?php

require 'connect.php';
require 'cors.php';
error_reporting(E_ERROR);

$students = [];
$sql = "SELECT * FROM students";

if ($result = mysqli_query($con, $sql)) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $students[$cr]['id'] = $row['id'];
        $students[$cr]['firstName'] = $row['firstName'];
        $students[$cr]['lastName'] = $row['lastName'];
        $students[$cr]['email'] = $row['email'];
        $cr++;
    }
    // print_r($students);

    //convert array into JSON
    echo json_encode($students);
} else {
    http_response_code(404);
}
