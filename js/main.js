


var main = (function () {

    var isMobile = true;    // web app ou Phonegap app (Testes)

    onBodyLoad = function () {
        if (isMobile) {
            document.addEventListener("deviceready", init(), false);
        }
        else {
            init();
        }
    },

    init = function () {
        alert('device ready');
    };

    // Funções Publicas
    return {
        onBodyLoad: onBodyLoad
    };

})();

main.onBodyLoad();


