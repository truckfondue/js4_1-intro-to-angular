var mainController = function($scope){
    console.log('Hello world!')
    $scope.printWord = function() {
    	alert('word')
    }
    $scope.myVar = true
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    }

    $scope.list = true
    $scope.toggle2 = function() {
        $scope.list = !$scope.list;
    }

    $scope.colorValue = ''
    $scope.pink = function () {
    	if ($scope.colorValue === '') {
    		$scope.colorValue = 'pink'
		}
		else {
    		$scope.colorValue = ''
		}
    	
    }

    $scope.bang = '!'
    $scope.excite = function(){
    	return $scope.bang += '!'
    }

    $scope.appleLink = true
    $scope.userConfirm = function(event) {
    	if (!confirm('proceed')) {
    		event.preventDefault()
    		$scope.appleLink = false

    	}
    	
    }

    $scope.lightbox = true
    $scope.heroButton = function() {
    	$scope.lightbox = !$scope.lightbox
    }
}



angular.module('app', [])
    .controller('mainController', ['$scope', mainController])
