/* onload追加处理 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(function (){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/375*50+'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth/375*50+'px';
    };
});

function toThousands(num) {
    var num = (num || 0).toString(), re = /\d{3}$/, result = '';
    while ( re.test(num) ) {
        result = RegExp.lastMatch + result;
        if (num !== RegExp.lastMatch) {
            result = ',' + result;
            num = RegExp.leftContext;
        } else {
            num = '';
            break;
        }
    }
    if (num) { result = num + result; }
    return result;
}