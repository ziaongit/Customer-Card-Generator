(function (Main, undefined){
    console.log('Main JavaScript is loaded');
})(window.Main == window.Main || {});

(function (Controller, undefined){
    console.log('Controller JavaScript is loaded');
})(Main.Controller == Main.Controller || {});