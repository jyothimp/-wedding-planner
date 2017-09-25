<?php
//insert in all pages which have no need to login
if(isset($_SESSION['user'])){
  header('location:get-a-quote.php');
}
?>
