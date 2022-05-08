// Write your form validation code here
$(function () {
  $("form[name='contact-form']").validate({
    rules: {
      fullname: "required",
      emailadress: {
        required: true,
        email: true,
        minlength: 1
      },
      phone: {
        required: true,
        minlength: 10
      },
      message: {
        required: true,
        minlength: 10
      },
      subject: {
        required: true,
        minlength: 2
      }
    },
    message: {
      fullname: "please enter your full name",
      emailadress: "please enter a valid email",
      phone: "please enter a valid phone number",
      message: {
        required: "please enter a brief message",
        minlenght: "needs to be 10 characters or more"
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});
