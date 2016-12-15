app.controller('homeController', function ($scope,$state) {
	var data=[{
			productID:0,
			productname:"test",
			productOwner:"SAM",
			productOwerImg:"user1.png",
			productImg:"p0.jpg",
			productDes:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			},{
			productID:1,
			productname:"test2",
			productOwner:"John",
			productOwerImg:"user2.png",
			productImg:"p1.jpg",
			productDes:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
			},{
			productID:2,
			productname:"test3",
			productOwner:"John2",
			productOwerImg:"user3.jpg",
			productImg:"p2.jpg",
			productDes:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			}];
	$scope.products=data;	
	$scope.productView=function(id){
		$state.go('product',{productID:id});
	}	

});