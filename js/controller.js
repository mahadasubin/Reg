angular.module('register')
.controller('registerControl', function($scope) {
    $scope.user = {};
    $scope.checkpswd = function () {
        if ($scope.pswd1 === $scope.pswd2) {
            $scope.user.password = $scope.pswd1
        } else {
            alert("Enter matching password");
            $scope.pswd1 = '';
            $scope.pswd2 = '';
        }
    }
    $scope.submit = function () {
        if ($scope.isSubmit) {
            alert("Form Submitted Sucessfully");
            return;
        }
        $scope.isSubmit = true;

    }
    $scope.agecheck = function () {
        $scope.ageinvalid = false;
        var year = new Date().getFullYear();
        var minAge = 14;
        var maxAge = 150;
        var age = year - $scope.user.birthday.getFullYear();
        if (age < minAge || age > maxAge) {
            $scope.ageinvalid = true;
        }
    };
    $scope.clear = function () {
        var conf=confirm("Are you sure you want to clear the fields");
        if(conf) {
            $scope.user.email = '';
            $scope.pswd1 = '';
            $scope.pswd2 = '';
            $scope.user.firstname = '';
            $scope.user.lastname = '';
            $scope.user.birthday = '';
            $scope.isSubmit = false;
        }
    }
});