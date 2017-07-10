angular.module('App', []).controller('AppCtrl', function($scope) {


	$scope.buy = [
	{name:'Apple' , price:'12', description:'An apple a day keeps the doctor away' , image:'image/apple.jpg',category:'fruit'},
	{name:'Banana' , price:'10', description:'Wanna Banana?' , image:'image/banana.jpg',category:'fruit'},
	{name:'Jackfruit' , price:'22', description:'An apple a day keeps the doctor away' , image:'image/jackfruit.jpg',category:'fruit'},
	{name:'Pineapple' , price:'10', description:'Taste the pineapple' , image:'image/pineapple.jpg',category:'fruit'},
	{name:'Mango' , price:'12', description:'Rasila Aam' , image:'image/mango.jpg',category:'fruit'}
	];

// $scope.sell = [];
$scope.cart = [];
$scope.items = null;
$scope.var = null;
$scope.quantity = [1,2,3,4,5];

$scope.itemPrice =0;
$scope.showAlert= false;
$scope.Checkout = false;
$scope.CheckCart =false;
$scope.SellAlert =false;

$scope.addToCart = function(prod){
$scope.var = prod;
$scope.showAlert= true;


$scope.cart.push ({
	name : $scope.var.name,
 	price : $scope.var.price,
 	image :  $scope.var.image,
 	category: $scope.var.category,
 	 
 }); 
$scope.Checkout = true;
$scope.CheckCart = true;
$scope.items = $scope.cart.length;
// $scope.totalPrice = $scope.var.price;											//not working

$scope.totalPrice = 0;
angular.forEach($scope.cart,function(value,index){

	console.log("value" + value.price);
	 $scope.itemPrice = value.price;
	 $scope.totalPrice = parseInt($scope.totalPrice) + parseInt($scope.itemPrice);
 console.log("total= "+$scope.totalPrice +"----item=  " + $scope.itemPrice);
	
});


 };



$scope.deleteCart = function(products){
var index= $scope.cart.indexOf(products);
$scope.cart.splice(index,1);
$scope.items = $scope.cart.length;
$scope.totalPrice = 0;
angular.forEach($scope.cart,function(value,index){

	console.log("value" + value.price);
	 $scope.itemPrice = value.price;
	 $scope.totalPrice = parseInt($scope.totalPrice) + parseInt($scope.itemPrice);
 console.log("total= "+$scope.totalPrice +"----item=  " + $scope.itemPrice);
	
});
};



$scope.sellfruit = function(sellt){													//not working
 //  $scope.form = sellt;
 // alert($scope.sellt.fruitname);
  // $scope.sell.push(sellt);						//adding form contents to array
$scope.buy.push({
name: $scope.sellt.fruitname,
price : $scope.sellt.price,
image :  'image/grape.jpg',
category: 'fruit',
description : $scope.sellt.desp
});

$scope.SellAlert= true;
};


$scope.sellVeg = function(sellV){
$scope.formV = sellV;
// alert($scope.formV.vegName);
// $scope.sell.push(sellV);
$scope.buy.push({
name: $scope.sellV.vegName,
price : $scope.sellV.price,
image :  'image/grape.jpg',
category: 'vegetable',
description : $scope.sellV.desp
});
$scope.SellAlert= true;
};





});