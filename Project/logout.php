<?php

	//session_start();
	
	//$_SESSION['lid'] = "";
	//$_SESSION['role'] = "";
	
	
	//echo "<script>document.location.href='index.php';</script>";
	
	//<?php
if(session_status()==PHP_SESSION_NONE)
{
  session_start();
}
if(session_destroy()) // Destroying All Sessions
{
header("location:index.php"); // Redirecting To Home Page
}
?>


//?>