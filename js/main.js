$(document).bind("pageinit", function () { 
    $('#btnSendSoap').click(function () { soapTest.sendMessage(); });
});


document.addEventListener("deviceready", function () { onDeviceReady(); }, false);


function onDeviceReady() {
    // Regista eventos relacionados com Phonegap
    document.addEventListener("resume", onAppResume, false);

};

function onAppResume() {
    alert("Resumo da Aplicação. Variaveis Limpas");
};


var main = (function () {

    var isMobile = true;    // web app ou Phonegap app (Testes)

    onBodyLoad = function (p_arg) {
        if (isMobile) {
            document.addEventListener("deviceready", init(), false);
        }
        else {
            init();
        }
    };

    var init = function () {

    }

    var limparResultado = function () {
        $("#soapResult").empty();
    };

    // Funções Publicas
    return {
        onBodyLoad: onBodyLoad,
        limparResultado: limparResultado
    };

})();

main.onBodyLoad();




