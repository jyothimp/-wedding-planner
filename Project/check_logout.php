<?php
//insert to all inside pages which need to be logined
if(!isset($_SESSION['user'])){
  header('location:./');
}
else {
  $role=$_SESSION['user_role'];
  $page=basename($_SERVER['PHP_SELF']);
  if($role==1){
    if(!($page=="cart.php"||$page=="design-stage.php"||$page=="design-decor.php"||$page=="catservice.php"||$page=="get-a-quote.php"||$page=="stagedes.php"||$page=="halldes.php"||$page=="fooddes.php")){
      header('location:design-stage.php');
    }
  }
  else if($role==0)
  if(!($page!="cart.php"||$page!="admin.php"||$page!="stage.php"||$page!="hall.php"||$page!="catering.php"||$page!="editstage.php"||$page!="edithall.php"||$page!="editcatering.php")){
    header('location:admin.php');
}
}
?>
