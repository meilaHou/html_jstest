/**
 * Created by Administrator on 2016/6/3.
 */
/*
* 添加函数到onload中
* */
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
/*
* 查找包含某属性的所有元素
* */
function searchElementsByAttr(attr) {
    var arr = new Array();
    var elements = document.body.childNodes;
    for(var ele in elements){
        if(elements[ele].nodeType == 1)
        {
            var idstr = elements[ele].getAttribute(attr);
            if(idstr) arr.push(idstr);
        }
    }
    var createp = document.createElement("p");
    var createtext = document.createTextNode(arr.length);
    createp.appendChild(createtext);
    document.body.appendChild(createp);
}

/*
*返回当前元素节点的下一个元素节点
*node.nextElementSibling
* */
function getNextElement(node){
    if(node.nodeType == 1){
        return node
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
function onloadtestfunc(){
    searchElementsByAttr("id");
}
addLoadEvent(onloadtestfunc);



