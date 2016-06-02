/**
 * Created by Administrator on 2016/6/1.
 */
function getHttpRquest(){
    if(typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function () {
            try{return new ActiveXObject("Msxml3.XMLHTTP")}catch (e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP")}catch (e){}
            try{return new ActiveXObject("Msxml.XMLHTTP")}catch (e){}
            return false

        }
        return new XMLHttpRequest();
    }

}
function createHttpRequest() {
    var httpRequest = null;
    //针对IE7,火狐,谷歌等其他浏览器
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
        //针对某些特定版本的mozillar浏览器的BUG进行修正
        /*
         如果来自服务器的响应没有 XML mime-type 头部，则一些版本的 Mozilla 浏览器不能正常运行。
         对于这种情况，httpRequest.overrideMimeType('text/xml'); 语句将覆盖发送给服务器的头部，强制 text/xml 作为 mime-type。
         */
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType("text/xml");
        }
        return httpRequest;
    }
    //针对IE5,IE6浏览器
    if (window.ActiveXObject) {
        try {                   httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (ex) {
                alert("创建XMLHTTPRequest对象失败!");
            }
        }
    }
    return httpRequest;
}
function sendRequest(){


}
function getNewContent() {
    var requests = createHttpRequest();
    if(!requests) {
        alert("浏览器不支持xmlhttprequest 对象");
        return;
    }
    requests.open("get","content.txt",true);
    requests.onreadystatechange = function () {
        requests.status//是请求的响应状态,200=响应成功
        if(requests.readyState  == 4){//执行到状态四时,整个已经完成
            var cratep = document.createElement("p");
            var texts = document.createTextNode(requests.responseText);
            cratep.appendChild(texts);
            document.body.appendChild(cratep);
        }
    }
    requests.send();
}
addLoadEvent(getNewContent);