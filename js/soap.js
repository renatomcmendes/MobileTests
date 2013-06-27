var soapTest = (function () {

    var soapMessage = '';
    //var soapUrl = 'futureview.no-ip.biz:8080/AddServiceServer/services/OperatorClass';
    var soapUrl = 'http://futureview.no-ip.biz:8080/AddServiceServer/services/OperatorClass';


    /////////////////////////////////////////////////////////////////////
    // Criação da mensagem xml a enviar
    /////////////////////////////////////////////////////////////////////
    var createMessage = function () {

        soapMessage = //'<?xml version="1.0" encoding="utf-8"?>' +
                      '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:def="http://DefaultNamespace">' +
                      '<soapenv:Header/>' +
                      '<soapenv:Body>' +
                      '<def:add>' +
                      '<def:str>teste</def:str>' +
                      '</def:add>' +
                      '</soapenv:Body>' +
                      '</soapenv:Envelope>';
    
    };


    /////////////////////////////////////////////////////////////////////
    // Envio da Mensagem
    /////////////////////////////////////////////////////////////////////
    var sendMessage = function () {


        utils.showLoading(true);

        createMessage();

        $.ajax({
            type: 'POST',
            url: soapUrl,
            data: soapMessage,
            contentType: "text/xml; charset=UTF-8",
            dataType: 'text',
            cache: false,
            headers: {
                SOAPAction: ''
            },
            //async: false,
            success: function (dados, estado, jqXhr) {

                var result = document.getElementById("soapResult");
                result.innerHTML = jqXhr.responseText;
                utils.showLoading(false);
            },
            error: function (jqXhr, estado, erro) {
                alert(jqXhr.status);
                utils.showLoading(false);
            }
        });
    };

    return {
        sendMessage: sendMessage,
        createMessage: createMessage
    };

})();

/*var soapTest = (function () {

    var soapMessage = '';
    var soapUrl = 'http://www.webservicex.net/globalweather.asmx';


    /////////////////////////////////////////////////////////////////////
    // Criação da mensagem xml a enviar
    /////////////////////////////////////////////////////////////////////
    var createMessage = function () {

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
    };


    /////////////////////////////////////////////////////////////////////
    // Envio da Mensagem
    /////////////////////////////////////////////////////////////////////
    var sendMessage = function () {


        utils.showLoading(true);

        createMessage();

        $.ajax({
            type: 'POST',
            url: soapUrl,
            data: soapMessage,
            contentType: "text/xml; charset=UTF-8",
            dataType: "xml",
            cache: false,
            //async: false,
            success: function (dados, estado, jqXhr) {

                var result = document.getElementById("soapResult");
                result.innerHTML = jqXhr.responseText;
                utils.showLoading(false);
            },
            error: function (jqXhr, estado, erro) {
                alert(jqXhr.status);
                utils.showLoading(false);
            }
        });
    };

    return {
        sendMessage: sendMessage,
        createMessage: createMessage
    };

})();*/


var soapSap = (function () {

    var soapMessage = '';
    var soapUrl = 'http://10.0.0.52:8000/sap/bc/soap/rfc/BAPI_PO_GETITEMSREL?sap-client=300';
    var soapAction = 'http://www.sap.com/BAPI_PO_GETITEMSREL';


    /////////////////////////////////////////////////////////////////////
    // Criação da mensagem xml a enviar
    /////////////////////////////////////////////////////////////////////
    var createMessage = function () {

        soapMessage = '<?xml version="1.0" encoding="utf-8"?>' +
                        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" ' +
                        'xmlns:urn="urn:sap-com:document:sap:rfc:functions">' +
                        '<soapenv:Header/>' +
                        '<soapenv:Body>' +
                        '<urn:BAPI_PO_GETITEMSREL>' +
                        '<ITEMS_FOR_RELEASE>X</ITEMS_FOR_RELEASE>' +
                        '<REL_CODE>L2</REL_CODE>' +
                        '<REL_GROUP>A1</REL_GROUP>' +
                        '<PO_HEADERS><item></item></PO_HEADERS>' +
                        '<PO_ITEMS><item></item></PO_ITEMS>' +
                        '</urn:BAPI_PO_GETITEMSREL>' +
                        '</soapenv:Body>' +
                        '</soapenv:Envelope>';

    };


    /////////////////////////////////////////////////////////////////////
    // Envio da Mensagem
    /////////////////////////////////////////////////////////////////////
    var sendMessage = function () {

        utils.showLoading(true);

        createMessage();

        $.ajax({
            type: 'POST',
            url: soapUrl,
            data: soapMessage,
            contentType: "text/xml; charset=UTF-8",
            dataType: "xml",
            username: "futureview",
            password: "fvmistica",
            processData: false,
            cache: false,
            //async: false,
            success: function (dados, estado, jqXhr) {

                var result = document.getElementById("soapResult");
                result.innerText = jqXhr.responseText;
                utils.showLoading(false);
            },
            error: function (jqXhr, estado, erro) {
                utils.parseHttpError(jqXhr.status);
                //alert(jqXhr.status);
                utils.showLoading(false);
            }
        });
    };

    return {
        sendMessage: sendMessage,
        createMessage: createMessage
    };

})();
