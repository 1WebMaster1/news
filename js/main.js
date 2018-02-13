var app = angular.module('myApp', []);

app.controller('myController', function(){
    var vm = this;
    vm.task = [
        {
        header: 'header1',
        aside: 'aside1',
        main: 'main1',
        },
        {
        header: 'header2',
        aside: 'aside2',
        main: 'main2',
        },
        {
        header: 'header3',
        aside: 'aside3',
        main: 'main3',
        }
    ]
    vm.btns = [
        {name: "Style1"},
        {name: "Style2"},
        {name: "Style3"},
    ];

    
    vm.addStyle = function(idx){
        vm.bgHead = vm.task[idx].header
        vm.bgBlock = vm.task[idx].aside
        vm.bgMainBlock = vm.task[idx].main
    }
})