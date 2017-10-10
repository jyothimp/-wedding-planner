<?php
$id=$_REQUEST['id'];
include 'conn.php';
$sql="delete from registration1 where id=$id";
$results=mysqli_query($con,$sql);
if($results>0)
{
	echo "item deleted";
}
else
echo "cannot delete";
header("location:users.php")
?>