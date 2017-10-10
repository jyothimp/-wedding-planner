<?php
$id=$_POST["id"];
$fname=$_POST["fname"];
$lname=$_POST["lname"];
$address=$_POST["address"];
$gender=$_POST["gender"];
$contact=$_POST["contact"];
$email=$_POST["email"];
$city=$_POST["city"];
$pincode=$_POST["pincode"];
include 'db_connect.php';
$sql="update `wp_db`.`wp_registration` SET  `fname` = '$fname',`lname` = '$lname',`address` = '$address',`gender` = '$gender',`contact` = '$contact',`email` ='$email',`city` ='$city',`pincode` = '$pincode' WHERE id =$id";
$results=mysqli_query($con,$sql);
//echo $sql;
header("location:users.php");
?>
