<?php
  include_once 'db_connect.php';
  $dist=$_POST['dist'];
  $query=mysqli_query($con,"SELECT * FROM wp_location WHERE district_id=$dist");
  while ($row=mysqli_fetch_array($query)) {
    echo "<option value='".$row['location_id']."'>".$row['location_name']."</option>";
  }
 ?>
