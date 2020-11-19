$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true

            },
            phoneNumber:{
                required:true,
                number: true,
                minlength:10,
                maxlength:10
            }
        
        }
    })
})
