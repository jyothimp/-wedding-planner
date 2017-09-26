<?php
//insert to all inside pages which need to be logined
if(!isset($_SESSION['user'])){
  header('location:./');
}
else {
  $role=$_SESSION['user_role'];
  $page=basename($_SERVER['PHP_SELF']);
  if($role==1 && $page!="design-stage.php"){
    header('location:design-stage.php');
  }
  else if($role==0 && $page!="admin.php"){
    header('location:admin.php');
  }
}
?>
