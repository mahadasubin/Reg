angular.module('wizardApp',[])
.controller('wizardControl',function($scope){
    //In real time thse scope variables must be recieved from the backend via an angular service which uses $http or $resources
    $scope.firstName="John";
    $scope.lastName="Doe";
    $scope.userName="jdoe";
    $scope.email="jogn.doe@gmail.com";
    $scope.account="standard";
    $scope.step2=false;
    $scope.step3=false;
    $scope.step4=false;
    $scope.items=[{interest:'option1',selected:false},{interest:'option2',selected:false},{interest:'option3',selected:false},{interest:'option4',selected:false},
        {interest:'option5',selected:false},{interest:'option6',selected:false},{interest:'option7',selected:false}];
    $scope.standard=function(){
        if($scope.accout=='plus'){$scope.account='light';return}
        $scope.account='standard';
        $scope.step3=true;
        $scope.step2=false;
    };
    //to count the number of interest selected by the user
    $scope.selectedCounter = 0;
    $scope.change = function (item) {
        if (item.selected) {
            $scope.selectedCounter++
        } else {
            $scope.selectedCounter--
        }
        if ($scope.selectedCounter >= 4) {
            if( $scope.account!='premium') {
                $scope.step4 = true;
                $scope.account = 'plus';
                if (!$scope.a_plus) alert("Account has been changed to PLUS");
                $scope.a_plus = true;
            }}
        else{ $scope.account='standard';
            if($scope.a_plus){alert("Account has been changed to STANDARD");}
        $scope.a_plus=false;
        }
    }
    $scope.submit=function(){
        var conf=confirm("You are going to submit the account with account type: "+ $scope.account);
        // according to the confirmation form the user the data will be sent to backend using $http.
    }

});