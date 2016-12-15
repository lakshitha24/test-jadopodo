app.controller('productController', function ($scope,$stateParams) {
	var data=[{
		"productID": 0,
		"productname": "test",
		"productOwner": "SAM",
		"productOwerImg": "user1.png",
		"productImg": "p0.jpg",
		"productDes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		"comment": [{
			"commenterImg": "user2.png",
			"commente": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"commenterImg": "user3.png",
			"commente": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}]
		},
		{
		"productID": 1,
		"productname": "test",
		"productOwner": "Jhon",
		"productOwerImg": "user2.png",
		"productImg": "p1.jpg",
		"productDes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		"comment": [{
			"commenterImg": "user3.png",
			"commente": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"commenterImg": "user2.png",
			"commente": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}]
		}];

			$scope.product=data[$stateParams.productID];

});