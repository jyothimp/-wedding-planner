<?php
	$con=mysqli_connect("localhost","root","","wp_db");
	if(session_status()==PHP_SESSION_NONE)
  {
    session_start();
  }
?>
