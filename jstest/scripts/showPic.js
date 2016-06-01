/**
 * Created by Administrator on 2016/5/31.
 */
addLoadEvent(changepage);
function addLoadEvent(func){
    var onload = window.onload;
    if(typeof window.onload !="function" ){
        window.onload = func;
    }else
    {
        window.onload = function () {
            onload();
            func();
        }
    }
}

function  changepage() {
    var picdiv = document.getElementById("picdiv");
var alist = picdiv.getElementsByTagName("a");
    for(var i = 0;i<alist.length;i++){
        alist[i].setAttribute("onclick","refreshImg(this.href);return false;");
    }
    refreshImg(document.getElementById("a1").getAttribute("href"));
  //  window.open("images/Chrysanthemum.jpg","新标签页面","width=320,height=640");
}
function refreshImg(src){
    var imgss = document.getElementById("pics");
    if(!imgss) return;
    imgss.setAttribute("src",src);
    //imgs.src = src;
    var shuoming = document.getElementById("shuoming");
    shuoming.childNodes[0].nodeValue = src;
}
