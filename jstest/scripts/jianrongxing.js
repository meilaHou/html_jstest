/**
 * Created by Administrator on 2016/6/3.
 */
/*
* js兼容性检查
* */
function jianrongxing(){
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
}