function toogleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("more info").removeClass("active")
    } else {
        $(target).html("Less info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideTooggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#onp_message")

    if(!$(email).val()) {
        alert("Email is required")
     } else if(!$(subject).val()) {
       alert("subject is required")
     } else if (!$(message). val()) {
        alert("message is required")
     } else {
        alert("Form submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
     }
} 