var utils = (function () {

    showLoading = function (arg) {

        var op = '';

        if (arg == true) {
            op = 'show';
        } else {
            op = 'hide';
        };

        $.mobile.loading(op, {
            text: 'Aguarde...',
            textVisible: true,
            theme: 'a',
            html: ""
        });

    };

    return {
        showLoading: showLoading
    };
})();