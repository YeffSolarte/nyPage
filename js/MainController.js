(function(){
    'use strict';
    angular.module('nypage')
        .controller('MainController',MainController)
        .controller('imagesController',imagesController);

    MainController.$inject = ['$scope','$uibModal'];

    function MainController($scope,$uibModal){
        var vm = this;

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        vm.beautifulPhotos = [];
        vm.showImgage = showImgage;

        vm.imagesInSlide = [
            {
                image : 'img/fondo1.jpg',
                text : 'Nosotros'
            },
            {
                image : 'img/fondo2.jpg',
                text : 'Amor'
            },
            {
                image : 'img/fondo3.jpg',
                text : 'Futuro'
            }
        ];
        vm.templateModalImages =
            '<div>' +
            ''+
            ''+
            ''+
            '</div>';
        vm.textInImages = [
            ''
        ];

        activate();
        function activate(){
            var photos = 53;
            for (var x = 0; x < photos; x++){
                vm.beautifulPhotos[x] = {
                    img : 'img/photo ('+(x+1)+').jpg',
                    textImg : x
                };
            }
        }

        function showImgage(image)
        {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/imagesModal.html',
                controller: 'imagesController',
                size: 'lg',
                resolve: {
                    image: function () {
                        return image;
                    }
                }
            });
            modalInstance.result.then(function () {

            });
        }
    }


    imagesController.$inject = ['$scope','image'];

    function imagesController($scope,image){
        $scope.imageSelected = image;
        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
