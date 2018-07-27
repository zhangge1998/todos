var oUL = document.querySelector('#list');
var input = document.querySelector('input');
var left = document.querySelector('#left');
var oBtns = document.querySelectorAll('button');
var oAll = document.querySelector('#all');
var oActive = document.querySelector('#active');
var oCompleted = document.querySelector('#completed');
var oClear = document.querySelector('#clear');
var nbm = 0;
document.onkeydown=function(event){
    if(event.keyCode==13){ // enter 键
        if(input.value != ''){
            var lisLength = oUL.querySelectorAll('li').length;
            nbm++;
            if(lisLength > 0){
                left.style.display = 'inline-block';
                for(var i = 0; i < oBtns.length; i++){
                    oBtns[i].style.display = 'inline-block';
                }
            }
            var li = document.createElement('li');
            var des = document.createElement('button');
            des.className = 'destroy';
            var check = document.createElement('input');
            check.type = 'checkbox';
            check.className = 'fu';
            var text = document.createElement('span');
            text.innerHTML = input.value;
            li.appendChild(des);
            li.appendChild(check);
            li.appendChild(text);
            oUL.appendChild(li);
            left.innerHTML = nbm + ' items left';
            li.onmouseover = function() {
                des.style.display = 'block';
            };
            li.onmouseout = function() {
                des.style.display = '';
            };
            check.onclick = function() {
                if(check.checked){
                    nbm--;
                    left.innerHTML = nbm + ' items left';
                    text.className = 'choose';
                }
                else{
                    nbm++;
                    left.innerHTML = nbm + ' items left';
                    text.className = '';
                }
            };
            des.onclick = function () {
                var OLi = this.parentNode;
                var check = OLi.querySelector('input');
                oUL.removeChild(OLi);
                if( !check.checked ){
                    nbm--;
                }
                left.innerHTML = nbm + ' items left';
                var lisLength = oUL.querySelectorAll('li').length;
                if(lisLength == 0 ){
                    left.style.display = 'none';
                    for(var i = 0; i < oBtns.length; i++){
                        oBtns[i].style.display = 'none';
                    }
                }
            };
            input.value = '';
        }
    }
};
oAll.onclick = function() {
    var lis = oUL.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = 'block';
        oUL.appendChild(lis[i]);
    }

};
oActive.onclick = function() {
    var lis = oUL.querySelectorAll('li');
    for(var i = 0; i < lis.length; i++) {
        lis[i].style.display = 'block';
        var check = lis[i].querySelector('input');
        if(check.checked){
            lis[i].style.display = 'none';
        }
    }
};
oCompleted.onclick = function() {
    var lis = oUL.querySelectorAll('li');
    for(var i = 0; i < lis.length; i++) {
        lis[i].style.display = 'block';
        var check = lis[i].querySelector('input');
        if(!check.checked){
            lis[i].style.display = 'none';
        }
    }
};
oClear.onclick = function() {
    var lis = oUL.querySelectorAll('li');
    for(var i = 0; i < lis.length; i++) {
        var check = lis[i].querySelector('input');
        if(check.checked){
            oUL.removeChild(lis[i]);
        }
    }
    var newLis = oUL.querySelectorAll('li');
    if(newLis.length == 0){
        left.style.display = 'none';
        for(var i = 0; i < oBtns.length; i++){
            oBtns[i].style.display = 'none';
        }
    }
}