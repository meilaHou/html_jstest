/**
 * Created by Administrator on 2016/5/31.
 */
addLoadEvent(changepage);


function  changepage() {
    var picdiv = document.getElementById("picdiv");
var alist = picdiv.getElementsByTagName("a");
    for(var i = 0;i<alist.length;i++){
        alist[i].setAttribute("onclick","refreshImg(this.href);return false;");
        alist[i].onclick = function () {
            //当没有找到展示元件时,执行href,确保连接可以用;
            return refreshImg(this.href);
        }
    }
  //  window.open("images/Chrysanthemum.jpg","新标签页面","width=320,height=640");
}
function refreshImg(src){
    var imgss = document.getElementById("pics");
    if(!imgss) return true;
    imgss.setAttribute("src",src);
    //imgs.src = src;
    refreshShuoming(src);
    return false;
}
function refreshShuoming(str){
    var shuoming = document.getElementById("shuoming");
    var creatp = document.createElement("p");
   //动态创建的节点添加文本
    var createtxtnode = document.createTextNode(str);
    creatp.appendChild(createtxtnode);
    shuoming.appendChild(creatp);
//获取文档中已经存在的,并修改文本的语句;
    //shuoming.childNodes[0].nodeValue = src;

}
//在某个元素的后面插入新元素;
function inertAfter(newElement,targetElement){
var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

