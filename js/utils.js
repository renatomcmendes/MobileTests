var utils = (function () {

    var showLoading = function (arg) {

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

    var parseHttpError = function (p_statusError) {

        switch (p_statusError) {
            case 0: // Sem conecção
                alert('Impossivel ligar. Validar ligações.');
                break;
            case 401: //Credenciais Inválidas
                alert('Credenciais Inválidas. Validar Username e Password.');
                break;
            case 404: //Endereço Servidor
                alert('Impossivel ligar ao servidor. Validar ligações e endereço de servidor.');
                break;
            default: // Outros
                alert('Erro a tentar ligar: ' + p_statusError);
                break;
        };

        showLoading(false);

    };

    return {
        showLoading: showLoading,
        parseHttpError: parseHttpError
    };
})();