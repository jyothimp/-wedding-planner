<?php
//insert in all pages which have no need to login
if(isset($_SESSION['user'])){
  $role=$_SESSION['user_role'];
  if($role==1){
    header('location:userhome.php');
  }
  else {
    header('location:admin.php');
  }
}
?>
