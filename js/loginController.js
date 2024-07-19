app.controller('SignIn_SignUpController', ['$scope', '$http','$location', function($scope, $http,$location,$rootScope) {
    $scope.submit = function() {
        if ($scope.frmSignUp.$invalid || $scope.SignUppassword !== $scope.SignUpRepassword) {
            alert('Vui lòng kiểm tra lại thông tin đăng ký.');
            return;
        } 
        var newUser = {
            id:  generateRandomId(),
            email: $scope.SignUpEmail,
            password: $scope.SignUppassword,
            role: 'customer' 
        };

        $http.post('http://localhost:3000/users', newUser)
            .then(function(response) {    
                console.log('Người dùng đã được thêm thành công:', response.data);
                $scope.SignUpEmail = '';
                $scope.SignUppassword = '';
                $scope.SignUpRepassword = '';

                alert('Người dùng đã được thêm thành công.');
            })
            .catch(function(error) {
                console.error('Lỗi khi thêm người dùng:', error);
                alert('Có lỗi xảy ra khi thêm người dùng. Vui lòng thử lại sau.');
            });
    };
    $scope.signIn = function() {
        var inputEmail = $scope.SignInEmail;
        var inputPassword = $scope.SignInPassword;
        var userFound = $scope.users.find(function(user) {
            return user.email === inputEmail && user.password === inputPassword;
        });

        if (userFound) {
         
            alert('Đăng nhập thành công!!');
            $location.url('/');
           
        } else {
            alert('Email hoặc mật khẩu không đúng. Vui lòng thử lại.');
        }
    };
    function generateRandomId() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}]);

    