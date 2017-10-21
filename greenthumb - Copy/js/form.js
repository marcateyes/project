// JavaScript Document
<script>
//Declaring a variable and assigning value//
    var CheckForBlank = function (name) {
        var x = document.forms['contact_form'].elements[name].value;
        var temp = '';
        for(i=0;i<x.length;i++){
            temp = x.replace(/  /g,' ');
            x = temp;
        }
        if(temp == ' ' || temp == '  ') temp = '';
        document.forms['contact_form'].elements[name].value = temp;
        
        if(temp == '') {
            document.forms['contact_form'].elements[name].focus();
            
            document.getElementById('contact_form'+name).innerHTML = '<strong style="color:red;">You can not leave this field blank!<\/strong>';
        } else{
            document.getElementById('contact_form'+name).innerHTML = '';
        }
    }
//Utilizing Validate Function and accepts input and conditional statement and outputs message to page//
    var Validate = function () {
        if( (!(/^([a-z0-9])([\w\.\-\+])+([a-z0-9])\@((\w)([\w\-]?)+\.)+([a-z]{2,4})$/i.test(document.contact_form._email.value))) || document.contact_form._email.value == "" || document.contact_form._fname.value == "" || document.contact_form._lname.value == "" ||  document.contact_form._comments.value == "" ) {
            document.getElementById('error').innerHTML = '<strong style="color:red;">Please fill in the form correctly! Don\'t forget to provide a valid email address! <\/strong>';
            return false;
        }
    }
</script>