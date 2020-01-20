import $ from 'jquery'

export const formInit = (el) => {
    $(el).on("submit", function (event) {
        let that = this
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError()
        } else {
            // everything looks good!
            event.preventDefault()
            let captchaCheck = $("#idk").val()
            if (captchaCheck.length < 1) {
                submitForm(that)
            }
        }
    })
}

function submitForm(divEl){
    // Initiate Variables With Form Content
    let name = $("#name").val()
    let phone = $("#phone").val()
    let email = $("#email").val()
    let message = $("#message").val()

    let dataString = "name=" + name + "&phone=" + phone + "&email=" + email + "&message=" + message

    $.ajax({
        type: "POST",
        url: "mail.php",
        data: dataString,
        beforeSend: function() {
            $(divEl).find('.form__wrapper').html('<div class="loader">Loading...</div>')
        },
        success : function(text){
            if (text == "success"){
                formSuccess(divEl);
            } else {
                formError(divEl);
                console.log('Error sending form')
            }
        }
    });
}

function formSuccess(divEl){
    $(divEl)[0].reset();
    submitMSG(divEl)
}

function formError(divEl){
    $(divEl).removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

let msgClasses

function submitMSG(divEl){
    $('.form__wrapper').html('<div class="done"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/> <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/> </svg><p class="success">Thanks for your message. We will contact you!</p></div>');
}
