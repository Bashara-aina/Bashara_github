(function validate() {
    ;
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('need-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(document).ready(function () {
    $("#namapeserta").on('input', function () {
        var expression = /[^a-zA-Z\s]/g;
        if ($(this).val().match(expression)) {
            $(this).val($(this).val().replace(expression, ""));
        }
    })
})

$(document).ready(function () {
    $("#nobatch").on('input', function () {
        var expression = /[^0-9a-zA-z]/g;
        if ($(this).val().match(expression)) {
            $(this).val($(this).val().replace(expression, ""));
        }
    })
})


$(document).ready(function () {
    $("#nik").on('input', function () {
        var expression = /[^0-9]/g;
        if ($(this).val().match(expression)) {
            $(this).val($(this).val().replace(expression, ""));
        }
    })
})