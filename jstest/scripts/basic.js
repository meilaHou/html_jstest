/**
 * Created by Administrator on 2016/8/22.
 */
//========== argument ============
/**//*
 * 演示arguments的用法,如何获取实参数和形数数
 */
function argTest(a,b,c,d){
    var numargs = arguments.length;     // 获取被传递参数的数值。
    var expargs = argTest.length;       // 获取期望参数的数值。
    alert("实参数目为:"+numargs)
    alert("形数数目为:"+expargs)

    alert(arguments[0])
    alert(argTest[0])          //undefined 没有这种用法
}
//argTest(1,2)
//argTest(1,2,3,4,5)

//--------------------------------------------
/**//*
 *  arguments不是数组(Array类)
 */

Array.prototype.selfvalue = 1;
function testAguments(){
    console.log("arguments.selfvalue="+arguments.selfvalue);
}
//alert("Array.sefvalue="+new Array().selfvalue);
//testAguments();
//===========call test===========
function Callobj(){
    this.value = "对象";
}
var value = "global对象";
function Fun1(){
    console.log(this.value);
}
//就像继承一样,将一个对象的方法和属性继承给另一个对象上;
//替换掉了前面函数中的this指向,但没有重复的方法属性等保留,
//window.Fun1(); //global 变量
//Fun1.call(window); //global 变量
//Fun1.call(document.getElementById('myText')); //input text
//Fun1.call(new Callobj()); //对象！
//-----------------------------------------------

var first_obj = {
    num:42
};
var second_obj = {
    num:24
};
function multiply(mult) {
    return this.num * mult;
}
//multiply.call(first_obj, 5); // returns 42 * 5
//multiply.call(second_obj, 5); // returns 24 * 5

//-----------------------------------------------

function Animal(){
    this.name = "Animal";
    this.showName = function(){
        alert(this.name);
    }
}
function Cat(){
    this.name = "Cat";
}
var animal = new Animal();
var cat = new Cat();
//通过call或apply方法，将原本属于Animal对象的showName()方法交给对象cat来使用了。
//animal.showName.call(cat,",");//输入结果为"Cat"
//animal.showName.apply(cat,[]);
//-------------------------------
function Animal(name){
    this.name = name;
    this.showName = function(){
        alert(this.name);
    }
}
function Cat(name){
    Animal.call(this, name);
}
//实现继承,也可以多重继承
var cat = new Cat("Black Cat");
//cat.showName();
//==========apply test ============

var func=new function(){this.a="func"}
var myfunc=function(x,y){
    var a="myfunc";
    console.log(this.a);
    console.log(x + y);
}
//myfunc.call(func,"var"," fun");// "func" "var fun"
//myfunc.apply(func,["var"," fun"]);// "func" "var fun"

//========caller test =========

function CallLevel(){
    if (CallLevel.caller == null)
        console.log("CallLevel was called from the top level.");
    else
    {
        console.log("CallLevel was called by another function:\n"+CallLevel.caller);
    }

}
function funCaller(){
    CallLevel();
}
//CallLevel();//函数被顶层level调用时,caller == null
//funCaller()//返回调用者的对象引用
//========callee test =========

//callee可以打印其本身
function calleeDemo() {
    console.log(arguments.callee);
}
//用于验证参数
function calleeLengthDemo(arg1, arg2) {
    if (arguments.length==arguments.callee.length) {
        console.log("验证形参和实参长度正确！");
        return;
    } else {
        console.log("实参长度：" +arguments.length);
        console.log("形参长度： " +arguments.callee.length);
    }
}
//递归计算
var sum = function(n){
    console.log(n);
    if (n <= 0){
        return 1;
    }else{
        return  n+arguments.callee(n - 1);
    }

}

//calleeDemo();//返回函数本身的引用
//sum(10);//10 9 8 ... 0;

//======= bind test ========

function T(c) {
    this.id = "Object";
    this.dom = document.getElementById("scroll");
}
T.prototype = {
    init: function() {
        //① 这个this属于dom本身,this.id 属于dom的变量onmouseover内部的调用,函数定义在dom函数体内;
        this.dom.onmouseover = function() {
            console.log("Over-->"+this.id);
        }
        //② 指定为T的this;
        this.dom.onmouseout = function() {
            console.log("Out -->"+this.id);//object
        } .bind(this)
    }
};
//(new T()).init();

function original(x){
    this.a=1;
    this.b =function(){return this.a + x}
}
original.func = function(){return this.a};
var obj={
    a:10
}
var  newObj = new (original.bind(obj,2)) //传入了一个实参2
console.log(newObj.a)  //输出 1, 说明返回的函数用作构造函数时obj(this的值)被忽略了
console.log(newObj.b()) //输出3 ，说明传入的实参2传入了原函数original
var newObj2 = original.func.bind(obj);
console.log(newObj2())  //输出 10,
console.log(newObj.func()) //报错,不是一个function, 因为这是类的静态变量
/*
*
*bind返回的是一个函数
* */
//-----------参数的传递  -----------
function f(a,b,c){
    console.log(a,b,c);
}
var f_Extend = f.bind(null,"extend_A");//相当于绑定了第一个参数
f("A","B","C")  //这里会输出--> A B C
f_Extend("A","B","C")  //这里会输出--> extend_A A B
f_Extend("B","C")  //这里会输出--> extend_A B C
f.call(null,"extend_A") //这里会输出--> extend_A undefined undefined
/*
* 参数绑定,用bind绑定参数后,相当于减少了形参数量,并把绑定的形参当做内部已经赋值的变量使用
*
* */
//==========prototype test=========
//prototype是一个对象，因此，你能够给它添加属性。你添加给prototype的属性将会成为使用这个构造函数创建的对象的通用属性。
//给prototype指定变量,相当于在其函数定义时添加的变量;实例化的对象都拥有这些变量;
//添加的是类的变量
function Fish(name, color)
{
    this.name=name;
    this.color=color;
}
Fish.prototype.livesIn="water";
Fish.prototype.price=20;
var fish1=new Fish("mackarel", "gray");
var fish2=new Fish("goldfish", "orange");
var fish3=new Fish("salmon", "white");

function fishtest(){
    for (var i=1; i<=3; i++)
    {
        var temp = ("fish"+i);
        var fish=window[temp];   // 我只是取得指向这条鱼的指针
        console.log(fish.name+","+fish.color+","+fish.livesIn+","+fish.price);
    }
}
fishtest();
/*
*
*
* "mackarel, gray, water, 20"
 "goldfish, orange, water, 20"
 "salmon, white water, 20"

 * */


/*
* 1.call 实现继承的特性
* 2.bind 指定调用层次
* 3.prototype 实现动态的定义类属性和方法
* 4. caller 返回调用某函数的调用函数引用 callee 返回自身引用
* 5. 字符串转变量或函数或对象
* 6  对象的概念,一切都是对象
* 7  函数的概念,函数指定了闭包
*       函数内部变量,在实例化后方可使用,作用域为public
*       函数的属性指定,作为类静态变量使用,作用域为public
*
*
* */