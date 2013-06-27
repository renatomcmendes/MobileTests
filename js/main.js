$(document).bind("pageinit", function () { alert("Evento: PageInit") });
document.addEventListener("deviceready", function () { alert("Evento: Device Ready") }, false);

var main = (function () {

    var isMobile = true;    // web app ou Phonegap app (Testes)

    onBodyLoad = function (p_arg) {
        if (isMobile) {
            document.addEventListener("deviceready", init(), false);
        }
        else {
            init();
        }
    },

    init = function () {

    },

    limparResultado = function () {
        $("#soapResult").empty();
    };

    // Funções Publicas
    return {
        onBodyLoad: onBodyLoad,
        limparResultado: limparResultado
    };

})();

main.onBodyLoad();


