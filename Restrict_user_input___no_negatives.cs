 $('input').on('keypress', function (event) {
        if (event.keyCode < 48 || event.keyCode > 57)
            return false;
    });