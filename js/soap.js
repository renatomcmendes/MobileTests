var soapTest = (function () {

    var soapMessage = '';
    var soapUrl = 'http://www.webservicex.net/globalweather.asmx';
    var soapAction = '';


    /////////////////////////////////////////////////////////////////////
    // Criação da mensagem xml a enviar
    /////////////////////////////////////////////////////////////////////
    createMessage = function () {

        soapMessage = '<?xml version="1.0" encoding="utf-8"?>' +
                   '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.webserviceX.NET">' +
                   '<soapenv:Header/>' +
                   '<soapenv:Body>' +
                   '<web:GetWeather>' +
                   '<web:CityName>Lisboa</web:CityName>' +
                   '<web:CountryName>Portugal</web:CountryName>' +
                   '</web:GetWeather>' +
                   '</soapenv:Body>' +
                   '</soapenv:Envelope>';

    },


    /////////////////////////////////////////////////////////////////////
    // Envio da Mensagem
    /////////////////////////////////////////////////////////////////////
    sendMessage = function () {

        createMessage();

        $.ajax({
            type: 'POST',
            url: soapUrl,
            data: soapMessage,
            contentType: "text/xml; charset=UTF-8",
            dataType: 'xml',
            //async: false,
            success: function (dados, estado, jqXhr) {

               var result = document.getElementById("soapResult");
               result.innerHTML = jqXhr.responseText;

            },
            error: function (jqXhr, estado, erro) {
                alert(jqXhr.status);
            }
        });
    };

    return {
        sendMessage: sendMessage,
        createMessage: createMessage
    };

})();
