alert(Date());
function change(){
	document.getElementById('img').src='https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg';

}
function change1(){
	document.getElementById('one').innerHTML ='For example, a variable can be of the type String, which means that it will be used to store a string value. Based on the data type, specific operations can be carried out on the variable.';
}
function change2(){
	alert('Hello World');
}
function change3(){
	var select = document.getElementById('three');
	select.style.backgroundColor = 'skyblue';
	select.style.fontFamily = 'Arial';
	select.style.textAlign = "center";
}
function fToC(fahrenheit){
  var fTemp = fahrenheit;
  document.getElementById('four').innerHTML = (fTemp - 32) * 5 / 9;
}
function sum(){
   		var a = parseInt(prompt('please enter the first number:'));
    var b = parseInt(prompt('please enrer the second numver:'));
    document.getElementById('sum').innerHTML=a+b;
   	}
   	function change4(){
   		var a = prompt('please enter the first name:');
    var b = prompt('please enrer the second name:');
    document.getElementById('name').innerHTML = "Nice to meet you, " + a+b + "!"
   	}
