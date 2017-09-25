<?php
//insert to all inside pages which need to be logined
if(!isset($_SESSION['user'])){
  header('location:./');
}
?>
