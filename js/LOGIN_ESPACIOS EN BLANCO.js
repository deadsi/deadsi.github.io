$(document).ready(function () {
    $("#login").click(function () {
        let user = $("#user").val();
        let pass = $("#pass").val();
        if (user === '' || pass === '') {
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Por Favor Rellene Todos Los Campos!!!!!!");
        } 
    });
});