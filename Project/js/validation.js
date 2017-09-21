$(document).ready(function() {
  $("#signup_form").on("submit", function(){
    var val_fullname= /^[A-Za-z.]{3,30}$/;
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    var val_phone= /^[0-9]{9,12}$/;
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    var val_address_line1= /^[^&]{10,300}$/;
    var val_password= /^[^&]{6,30}$/;
    $fullname = $('#signup-fullname').val();
    $username = $('#signup-username').val();
    $phone = $('#signup-phone').val();
    $email = $('#signup-email').val();
    $address_line1 = $('#signup-address_line1').val();
    $password = $('#signup-password').val();


    if(!val_fullname.test($fullname)){
      $("#signup-fullname").focus();
      alert("invalid fullname");
      return false;
    }
    else if(!val_username.test($username)){
      $("#signup-username").focus();
      alert("invalid username");
      return false;
    }
    else if(!val_phone.test($phone)){
      $("#signup-phone").focus();
      alert("invalid phone number");
      return false;
    }
    else if(!val_email.test($email)){
      $("#signup-email").focus();
      alert("invalid email");
      return false;
    }
    else if(!val_address_line1.test($address_line1)){
      $("#signup-address_line1").focus();
      alert("invalid address");
      return false;

  }
  else if(!val_password.test($password)){
    $("#signup-password"),focus();
    alert("invalid password");
    return false;
}
else {
  return true;
}
});


})
