/**
 * Created by Administrator on 2016/6/4.
 */
function changeColorWithCss() {
    var tables = document.getElementsByTagName("tr");
    if(!tables){
        alert(document.getElementsByTagName("table"));
return;
    }
    for(var i = 0;i<tables.length;i++){
        var temptr = tables[i];
        if(temptr.nodeType==1){
            if(i%2==0){
                temptr.className = "firstTr";
            }else
            {
                temptr.className = "secondTr";
            }
        }
    }
}
addLoadEvent(changeColorWithCss);