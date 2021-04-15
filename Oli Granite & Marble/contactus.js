$(document).ready(function(){
    $('.submit').click(function (event){
        var name = $('.name').val()
        var phone = $('.phone_number').val()
        var email = $('.email').val()
        statusElm = $('.status')
        statusElm.empty()


        if(name.length > 1) {
            console.log('Name is valid')
        }
        else{
            document.getElementById("name_error").innerHTML="<h4>Name is invalid</h4>";
            event.preventDefault()

        }

        if(phone.length >= 10) {
            console.log('Phone number is valid')
        }
        else{
            document.getElementById("phone_error").innerHTML="<h4>Phone number is invalid</h4>";
            event.preventDefault()

        }

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            console.log('Email is valid')
        }
        else{
            document.getElementById("email_error").innerHTML="<h4>Email is invalid</h4>";
            event.preventDefault()

        }


    })
    
})