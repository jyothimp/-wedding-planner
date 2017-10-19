$(document).ready(function() {

  $("#signup_form").on("submit", function(){
    var val_fullname= /^[A-Za-z.\s]{3,30}$/;
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
      $("#signup-fullname").focusout();
      return false;
    }
    else if(!val_username.test($username)){
      $("#signup-username").focusout();
      return false;
    }
    else if(!val_phone.test($phone)){
      $("#signup-phone").focusout();
      return false;
    }
    else if(!val_email.test($email)){
      $("#signup-email").focusout();
      return false;
    }
    else if(!val_address_line1.test($address_line1)){
      $("#signup-address_line1").focusout();
      return false;
    }
    else if(!val_password.test($password)){
      $("#signup-password"),focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#signup-fullname").focusout(function() {
    var val_fullname= /^[A-Za-z.\s]{3,30}$/;
    $fullname = $(this).val();
    if(!val_fullname.test($fullname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#name_error').html("Invalid name");
      $('#name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#name_error').html("");
      $('#name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-username").focusout(function() {
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    $username = $(this).val();
    if(!val_username.test($username)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#username_error').html("Invalid Username");
      $('#username_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#username_error').html("");
      $('#username_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-phone").focusout(function() {
    var val_phone= /^[0-9]{9,12}$/;
    $phone = $(this).val();
    if(!val_phone.test($phone)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#phone_error').html("Invalid phone number");
      $('#phone_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#phone_error').html("");
      $('#phone_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-email").focusout(function() {
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    $email = $(this).val();
    if(!val_email.test($email)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#email_error').html("Invalid email");
      $('#email_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#email_error').html("");
      $('#email_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-address_line1").focusout(function() {
    var val_address_line1= /^[^&]{10,300}$/;
    $address_line1 = $(this).val();
    if(!val_address_line1.test($address_line1)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#address_error').html("Invalid address");
      $('#address_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#address_error').html("");
      $('#address_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-password").focusout(function() {
    var val_password= /^[^&]{6,30}$/;
    $password  = $(this).val();
    if(!val_password.test($password )){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#password_error').html("Invalid password");
      $('#password_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#password_error').html("");
      $('#password_error').removeClass('is-visible');
      return true;
    }
  });


  $("#signin_form").on("submit", function(){
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    var val_password= /^[^&]{6,30}$/;
    $username = $('#signin-username').val();
    $password = $('#signin-password').val();
    if(!val_username.test($username)){
      $("#signin-username").focusout();
      return false;
    }
    else if(!val_password.test($password)){
      $("#signin-password").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#signin-username").focusout(function() {
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    $username = $(this).val();
    if(!val_username.test($username)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#signin-username_error').html("Invalid Username");
      $('#signin-username_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#signin-username_error').html("");
      $('#signin-username_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signin-password").focusout(function() {
    var val_password= /^[^&]{6,30}$/;
    $password  = $(this).val();
    if(!val_password.test($password )){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#signin-password_error').html("Invalid password");
      $('#signin-password_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#signin-password_error').html("");
      $('#signin-password_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_add_form").on("submit", function(){
    var val_name= /^[A-Za-z0-9_.]{3,30}$/;
    var val_image=/\.(jpe?g|png|gif|bmp)$/i;
    var val_price= /^[0-9.]{1,30}$/;
    var val_description= /^[^\*]{5,300}$/;
    $name = $('#stage_name').val();
    $image = $('#stage_image').val();
    $price= $('#stage_price').val();
    $description = $('#stage_description').val();

    if(!val_name.test($name)){
      $("#stage_name").focusout();
      return false;
    }
    else if(!val_image.test($image)){
      $("#stage_image").focusout();
      return false;
    }
    else if(!val_price.test($price)){
      $("#stage_price").focusout();
      return false;
    }
    else if(!val_description.test($description)){
      $("#stage_description").focusout();
      return false;
    }
    else {
      return true;
    }
  });

  $("#stage_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#stage_image_error').html("");
      $('#stage_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#stage_image_error").html("Invalid image");
      $('#stage_image_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#stage_name").focusout(function() {
    var val_name=  /^[A-Za-z0-9_.]{3,30}$/;
    $name = $(this).val();
    if(!val_name.test($name)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_name_error').html("Invalid name");
      $('#stage_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_name_error').html("");
      $('#stage_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_price").focusout(function() {
    var val_price= /^[0-9.]{1,30}$/;
    $price = $(this).val();
    if(!val_price.test($price)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_price_error').html("Invalid price");
      $('#stage_price_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_price_error').html("");
      $('#stage_price_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_description").focusout(function() {
    var val_description= /^[^\*]{5,300}$/;
    $description = $(this).val();
    if(!val_description.test($description)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_description_error').html("Invalid description");
      $('#stage_description_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_description_error').html("");
      $('#stage_description_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_edit_form").on("submit", function(){
    var val_ename= /^[A-Za-z0-9_.]{3,30}$/;
    var val_edescription= /^[^\*]{5,300}$/;
    var val_eprice= /^[0-9.]{1,30}$/;
    var val_eimage=/\.(jpe?g|png|gif|bmp)$/i;
    $ename = $('#stage_editname').val();
    $edescription = $('#stage_editdescription').val();
    $eprice= $('#stage_editprice').val();
    $eimage = $('#stage_editimage').val();
    if(!val_ename.test($ename)){
      $("#stage_editname").focusout();
      return false;
    }
    else if(!val_edescription.test($edescription)){
      $("#stage_editdescription").focusout();
      return false;
    }
    else if(!val_eprice.test($eprice)){
      $("#stage_editprice").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#stage_editimage").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#stage_eimage_error').html("");
      $('#stage_eimage_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#stage_eimage_error").html("Invalid image");
      $('#stage_eimage_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#stage_editname").focusout(function() {
    var val_ename=  /^[A-Za-z0-9_.]{3,30}$/;
    $ename = $(this).val();
    if(!val_ename.test($ename)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_ename_error').html("Invalid name");
      $('#stage_ename_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_ename_error').html("");
      $('#stage_ename_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_editprice").focusout(function() {
    var val_eprice= /^[0-9.]{1,30}$/;
    $eprice = $(this).val();
    if(!val_eprice.test($eprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_eprice_error').html("Invalid price");
      $('#stage_eprice_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_eprice_error').html("");
      $('#stage_eprice_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_editdescription").focusout(function() {
    var val_edescription= /^[^\*]{5,300}$/;
    $edescription = $(this).val();
    if(!val_edescription.test($edescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_edescription_error').html("Invalid description");
      $('#stage_edescription_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_edescription_error').html("");
      $('#stage_edescription_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_add_form").on("submit", function(){
    var val_hname= /^[A-Za-z0-9_.]{3,30}$/;
    var val_hdescription= /^[^\*]{5,300}$/;
    var val_hprice= /^[0-9.]{1,30}$/;
    var val_himage=/\.(jpe?g|png|gif|bmp)$/i;
    $hname = $('#hall_name').val();
    $hdescription = $('#hall_description').val();
    $hprice= $('#hall_price').val();
    $himage = $('#hall_image').val();
    if(!val_hname.test($hname)){
      $("#hall_name").focusout();
      return false;
    }
    else if(!val_himage.test($himage)){
      $("#hall_image").focusout();
      return false;
    }
    else if(!val_hprice.test($hprice)){
      $("#hall_price").focusout();
      return false;
    }
    else if(!val_hdescription.test($hdescription)){
      $("#hall_description").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#hall_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#hall_image_error').html("");
      $('#hall_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#hall_image_error").html("Invalid image");
      $('#hall_image_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#hall_name").focusout(function() {
    var val_hname=  /^[A-Za-z0-9_.]{3,30}$/;
    $hname = $(this).val();
    if(!val_hname.test($hname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_name_error').html("Invalid name");
      $('#hall_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_name_error').html("");
      $('#hall_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_price").focusout(function() {
    var val_hprice= /^[0-9.]{1,30}$/;
    $hprice = $(this).val();
    if(!val_hprice.test($hprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_price_error').html("Invalid price");
      $('#hall_price_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_price_error').html("");
      $('#hall_price_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_description").focusout(function() {
    var val_hdescription= /^[^\*]{5,300}$/;
    $hdescription = $(this).val();
    if(!val_hdescription.test($hdescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_description_error').html("Invalid description");
      $('#hall_description_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_description_error').html("");
      $('#hall_description_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_edit_form").on("submit", function(){
    var val_hename= /^[A-Za-z0-9_.]{3,30}$/;
    var val_hedescription= /^[^\*]{5,300}$/;
    var val_heprice= /^[0-9.]{1,30}$/;
    var val_heimage=/\.(jpe?g|png|gif|bmp)$/i;
    $hename = $('#hall_editname').val();
    $hedescription = $('#hall_editdescription').val();
    $heprice= $('#hall_editprice').val();
    $heimage = $('#hall_editimage').val();
    if(!val_hename.test($hename)){
      $("#hall_editname").focusout();
      return false;
    }
    else if(!val_hedescription.test($hedescription)){
      $("#hall_editdescription").focusout();
      return false;
    }
    else if(!val_heprice.test($heprice)){
      $("#hall_editprice").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#hall_editimage").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#hall_eimage_error').html("");
      $('#hall_eimage_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#hall_eimage_error").html("Invalid image");
      $('#hall_eimage_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#hall_editname").focusout(function() {
    var val_hename=  /^[A-Za-z0-9_.]{3,30}$/;
    $hename = $(this).val();
    if(!val_hename.test($hename)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_ename_error').html("Invalid name");
      $('#hall_ename_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_ename_error').html("");
      $('#hall_ename_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_editprice").focusout(function() {
    var val_heprice= /^[0-9.]{1,30}$/;
    $heprice = $(this).val();
    if(!val_heprice.test($heprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_eprice_error').html("Invalid price");
      $('#hall_eprice_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_eprice_error').html("");
      $('#hall_eprice_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_editdescription").focusout(function() {
    var val_hedescription= /^[^\*]{5,300}$/;
    $hedescription = $(this).val();
    if(!val_hedescription.test($hedescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_edescription_error').html("Invalid description");
      $('#hall_edescription_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_edescription_error').html("");
      $('#hall_edescription_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_add_form").on("submit", function(){
    var val_fname= /^[A-Za-z0-9_.]{3,30}$/;
    var val_fdescription= /^[^\*]{5,300}$/;
    var val_fprice= /^[0-9.]{1,30}$/;
    var val_ftype= /^[0-9]{1,2}$/;
    var val_fimage=/\.(jpe?g|png|gif|bmp)$/i;
    $fname = $('#food_name').val();
    $fdescription = $('#food_description').val();
    $fprice= $('#food_price').val();
    $ftype= $('#food_type').val();
    $fimage = $('#food_image').val();
    if(!val_fname.test($fname)){
      $("#food_name").focusout();
      return false;
    }
    else if(!val_ftype.test($ftype)){
      $("#food_type").focusout();
      return false;
    }
    else if(!val_fimage.test($fimage)){
      $("#food_image").focusout();
      return false;
    }
    else if(!val_fprice.test($fprice)){
      $("#food_price").focusout();
      return false;
    }
    else if(!val_fdescription.test($fdescription)){
      $("#food_description").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#food_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#food_image_error').html("");
      $('#food_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#food_image_error").html("Invalid image");
      $('#food_image_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#food_name").focusout(function() {
    var val_fname=  /^[A-Za-z0-9_.]{3,30}$/;
    $fname = $(this).val();
    if(!val_fname.test($fname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_name_error').html("Invalid name");
      $('#food_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_name_error').html("");
      $('#food_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_price").focusout(function() {
    var val_fprice= /^[0-9.]{1,30}$/;
    $fprice = $(this).val();
    if(!val_fprice.test($fprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_price_error').html("Invalid price");
      $('#food_price_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_price_error').html("");
      $('#food_price_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_type").focusout(function() {
    var val_ftype= /^[1-9]{1,2}$/;
    $ftype = $(this).val();
    if(!val_ftype.test($ftype)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_type_error').html("Invalid type");
      $('#food_type_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_type_error').html("");
      $('#food_type_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_description").focusout(function() {
    var val_fdescription= /^[^\*]{5,300}$/;
    $fdescription = $(this).val();
    if(!val_fdescription.test($fdescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_description_error').html("Invalid description");
      $('#food_description_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_description_error').html("");
      $('#food_description_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_edit_form").on("submit", function(){
    var val_fename= /^[A-Za-z0-9_.]{3,30}$/;
    var val_fedescription= /^[^\*]{5,300}$/;
    var val_feprice= /^[0-9.]{1,30}$/;
    var val_feimage=/\.(jpe?g|png|gif|bmp)$/i;
    $fename = $('#food_editname').val();
    $fedescription = $('#food_editdescription').val();
    $feprice= $('#food_editprice').val();
    $feimage = $('#food_editimage').val();
    if(!val_fename.test($fename)){
      $("#food_editname").focusout();
      return false;
    }
    else if(!val_fedescription.test($fedescription)){
      $("#food_editdescription").focusout();
      return false;
    }
    else if(!val_feprice.test($feprice)){
      $("#food_editprice").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#food_editimage").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
        $('#food_eimage_error').html("");
        $('#food_eimage_error').removeClass('is-visible');
        return true;
        break;
      default:
        $("#food_eimage_error").html("Invalid image");
        $('#food_eimage_error').addClass('is-visible');
        return false;
      break;
    }
  });
  $("#food_editname").focusout(function() {
    var val_fename=  /^[A-Za-z0-9_.]{3,30}$/;
    $fename = $(this).val();
    if(!val_fename.test($fename)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_ename_error').html("Invalid name");
      $('#food_ename_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_ename_error').html("");
      $('#food_ename_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_editprice").focusout(function() {
    var val_feprice= /^[0-9.]{1,30}$/;
    $feprice = $(this).val();
    if(!val_feprice.test($feprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_eprice_error').html("Invalid price");
      $('#food_eprice_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_eprice_error').html("");
      $('#food_eprice_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_editdescription").focusout(function() {
    var val_fedescription= /^[^\*]{5,300}$/;
    $fedescription = $(this).val();
    if(!val_fedescription.test($fedescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_edescription_error').html("Invalid description");
      $('#food_edescription_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_edescription_error').html("");
      $('#food_edescription_error').removeClass('is-visible');
      return true;
    }
  });
})
