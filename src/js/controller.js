var artistControllers = angular.module("artistControllers",[]);

artistControllers.controller("MyController",function($scope ,$http){

		$http.get('js/data.json').success(function(data){

                $scope.type_web = data;
                $scope.disable = data.static_web.base_features;
                $scope.disable_d = data.dynamic_web.base_features;
				$scope.artists = data.static_web.features;
				$scope.len = $scope.artists.length;
				$scope.len_s = $scope.disable.length;
				$scope.len_d = $scope.disable_d.length;


				$scope.tprice = 0;
				$scope.count = 0;  

				$scope.array = [true,true,true,true];
			
				$scope.detect = function(i){
					if($scope.array[i]){
						$scope.tprice = $scope.tprice + $scope.artists[i].price;
						$scope.array[i] = false;
					}
					else{
						$scope.tprice = $scope.tprice - $scope.artists[i].price;
						$scope.array[i] = true;
					}
				}

				$scope.on1 = false;
				$scope.on2 = true;

				$scope.base_price_s = 0;
				$scope.i=0;
				while($scope.i<$scope.len_s){
						$scope.base_price_s = $scope.base_price_s + $scope.disable[$scope.i].price;
				          $scope.i++;
				}
				$scope.base_price_d = 0;
				$scope.i=0;
				while($scope.i<$scope.len_d){
						$scope.base_price_d = $scope.base_price_d + $scope.disable_d[$scope.i].price;
				          $scope.i++;
				}

				$scope.show1 = function(){
					$scope.on2 = false;
					$scope.on1 = true;
					$scope.tprice = $scope.tprice + $scope.base_price_s;
				}

				$scope.show2 = function(){
					$scope.on2 = false;
					$scope.on1 = true;
					$scope.tprice = $scope.tprice + $scope.base_price_d;
				}

  
		});  		
});