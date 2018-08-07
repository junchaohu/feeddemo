/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
app
    .run([
        '$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            // $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {


            // });
        }
    ])
    .config(
        [
            '$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise("feed/factory");

                $stateProvider
                    .state('feed', {
                        abstract: true,
                        url: "/feed",
                        templateUrl: "views/common/content.html",
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                serie: true,
                                                files: [
                                                    'app/services/login/login.service.js',
                                                    'app/controllers/login/login.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.factory', {
                        url: "/factory",
                        templateUrl: "views/demo/factory.html",
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/factory.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.sub-factory', {
                        url: "/sub-factory",
                        templateUrl: "views/demo/sub_factory.html",
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/sub-factory.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.machine-shop', {
                        url: "/machine-shop",
                        templateUrl: "views/demo/machine_shop.html",
                        data: {
                            pageTitle: 'Machine Shop'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/machine-shop.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.product-line', {
                        url: "/product-line",
                        templateUrl: "views/demo/product_line.html",
                        data: {
                            pageTitle: 'Product Line'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/product-line.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.single-product', {
                        url: "/single-product",
                        templateUrl: "views/demo/single_product.html",
                        data: {
                            pageTitle: 'Product'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/single-product.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.key-device', {
                        url: "/key-device",
                        templateUrl: "views/demo/key_device.html",
                        data: {
                            pageTitle: 'Key Device'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/key-device.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.non-product-day', {
                        url: "/non-product-day",
                        templateUrl: "views/demo/non_product_day.html",
                        data: {
                            pageTitle: 'Non product day'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/non-product-day.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.device-status', {
                        url: "/device-status",
                        templateUrl: "views/demo/device_status.html",
                        data: {
                            pageTitle: 'Device Status'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/device-status.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.alarm', {
                        url: "/alarm",
                        templateUrl: "views/demo/alarm.html",
                        data: {
                            pageTitle: 'Alarm'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.checkbox', 'ui.select', 'daterangepicker', 'datatables']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                                [{
                                                    name: 'datatables.buttons',
                                                    serie: true,
                                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                                }, {
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/alarm.controller.js'
                                                    ]
                                                }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('feed.planning', {
                        url: "/planning",
                        templateUrl: "views/demo/planning.html",
                        data: {
                            pageTitle: 'planning'
                        },
                        resolve: {
                            loadPlugin: function($ocLazyLoad) {
                                return $ocLazyLoad.load([{
                                    serie: true,
                                    files: ['css/plugins/c3/c3.min.css', 'js/plugins/d3/d3.min.js', 'js/plugins/c3/c3.min.js']
                                }, {
                                    serie: true,
                                    name: 'gridshore.c3js.chart',
                                    files: ['js/plugins/c3/c3-angular.min.js']
                                }]);
                            }
                        }
                    })
                    .state('settings', {
                        abstract: true,
                        url: "/settings",
                        templateUrl: "views/common/content.html",
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                serie: true,
                                                files: [
                                                    'app/services/login/login.service.js',
                                                    'app/controllers/login/login.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('settings.structure', {
                        url: "/structure",
                        templateUrl: "views/settings/structure/structure.html", // "views/demo/set_factory.html",
                        data: {
                            pageTitle: 'structure',
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'ui.checkbox', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/structure/company.service.js',
                                                    'app/services/settings/structure/factory.service.js',
                                                    'app/services/settings/structure/shop.service.js',
                                                    'app/services/settings/structure/accessorialsystem.service.js',
                                                    'app/services/settings/structure/auxiliarysystem.service.js',
                                                    'app/services/settings/structure/line.service.js',
                                                    'app/services/settings/structure/factorytariffpair.service.js',
                                                    'app/services/settings/tariff/tariff.service.js',
                                                    'app/controllers/settings/structure/company.controller.js',
                                                    'app/controllers/settings/structure/factory.controller.js',
                                                    'app/controllers/settings/structure/shop.controller.js',
                                                    'app/controllers/settings/structure/accessorialsystem.controller.js',
                                                    'app/controllers/settings/structure/auxiliarysystem.controller.js',
                                                    'app/controllers/settings/structure/line.controller.js',
                                                    'app/controllers/settings/structure/factorytariffpair.controller.js',
                                                    'app/controllers/settings/structure/structure.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }

                    })
                    /**
                    .state('settings.factory', {
                        url: "/factory",
                        templateUrl: "views/demo/set_factory.html", // "views/demo/set_factory.html",
                        data: {
                            pageTitle: 'factory'
                        },
                        resolve: {
                            loadPlugin: function($ocLazyLoad) {
                                return $ocLazyLoad.load([{
                                    files: ['css/plugins/jsTree/style.min.css', 'js/plugins/jsTree/jstree.min.js']
                                }, {
                                    name: 'ngJsTree',
                                    files: ['js/plugins/jsTree/ngJsTree.min.js']
                                }]);
                            }
                        }
                    })**/
                    .state('settings.machine', {
                        url: "/machine",
                        templateUrl: "views/settings/machine/machine.html",
                        data: {
                            pageTitle: 'machine'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'ui.checkbox', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/structure/factory.service.js',
                                                    'app/services/settings/structure/shop.service.js',
                                                    'app/services/settings/structure/line.service.js',
                                                    'app/services/settings/machine/machine.service.js',
                                                    'app/controllers/settings/machine/machine.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('settings.meter', {
                        url: "/meter",
                        templateUrl: "views/settings/meter/meter.html", // "views/demo/set_factory.html",
                        data: {
                            pageTitle: 'meter',
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'ui.checkbox', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/meter/meter.service.js',
                                                    'app/services/settings/meter/master-meter.service.js',
                                                    'app/services/settings/meter/offline-meter.service.js',
                                                    'app/services/settings/meter/virtual-meter.service.js',
                                                    'app/controllers/settings/meter/meter.controller.js',
                                                    'app/controllers/settings/meter/master-meter.controller.js',
                                                    'app/controllers/settings/meter/offline-meter.controller.js',
                                                    'app/controllers/settings/meter/virtual-meter.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }

                    })
                    .state('settings.product', {
                        url: "/product",
                        templateUrl: "views/settings/product/product.html", // "views/demo/set_factory.html",
                        data: {
                            pageTitle: 'product',
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'ui.checkbox', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/product/product.service.js',
                                                    'app/services/settings/product/complex.service.js',
                                                    'app/services/settings/product/part.service.js',
                                                    'app/controllers/settings/product/parent.controller.js',
                                                    'app/controllers/settings/product/product.controller.js',
                                                    'app/controllers/settings/product/complex.controller.js',
                                                    'app/controllers/settings/product/part.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }

                    })
                    .state('settings.mailsms', {
                        url: "/mailsms",
                        templateUrl: "views/settings/mailsms/mailsms.html", // "views/demo/set_factory.html",
                        data: {
                            pageTitle: 'mailsms',
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/mailsms/mail.service.js',
                                                    'app/services/settings/mailsms/sms.service.js',
                                                    'app/controllers/settings/mailsms/mail.controller.js',
                                                    'app/controllers/settings/mailsms/sms.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }

                    })
                    .state('settings.data-source', {
                        url: "/data-source",
                        templateUrl: "views/demo/set_data_source.html",
                        data: {
                            pageTitle: 'Profile'
                        }
                    })
                    .state('settings.category', {
                        url: "/category",
                        templateUrl: "views/settings/category/category.html",
                        data: {
                            pageTitle: 'category'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'ui.checkbox', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/category/category.service.js',
                                                    'app/services/settings/category/utility.service.js',
                                                    'app/controllers/settings/category/category.controller.js',
                                                    'app/controllers/settings/category/utility.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('settings.benchmarking', {
                        url: "/benchmarking",
                        templateUrl: "views/demo/set_benchmarking.html",
                        data: {
                            pageTitle: 'Profile_2'
                        },
                        resolve: {
                            loadPlugin: function($ocLazyLoad) {
                                return $ocLazyLoad.load([{
                                    files: ['js/plugins/moment/moment.min.js']
                                }, {
                                    name: 'ui.checkbox',
                                    files: ['js/bootstrap/angular-bootstrap-checkbox.js']
                                }, {
                                    name: 'ui.select',
                                    files: ['js/plugins/ui-select/select.min.js', 'css/plugins/ui-select/select.min.css']
                                }, {
                                    //serie: true,
                                    files: ['js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                                }, {
                                    name: 'daterangepicker',
                                    files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                                }, {
                                    //serie: true,
                                    files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
                                }, {
                                    //serie: true,
                                    name: 'datatables',
                                    files: ['js/plugins/dataTables/angular-datatables.min.js']
                                }, {
                                    serie: true,
                                    name: 'datatables.buttons',
                                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                                }, {
                                    files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                                }, {
                                    //serie: true,
                                    files: ['app/controllers/factory.controller.js']
                                }]);

                            }
                        }
                    })
                    .state('settings.tariff', {
                        url: "/tariff",
                        templateUrl: "views/settings/tariff/tariff.html",
                        data: {
                            pageTitle: 'tariff'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                                            }, {
                                                name: 'ui.footable',
                                                files: ['js/plugins/footable/angular-footable.js']
                                            }, {
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/tariff/tariff.service.js',
                                                    'app/services/settings/tariff/tariff.const.js',
                                                    'app/services/settings/category/category.service.js',
                                                    'app/controllers/settings/tariff/tariff.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('settings.product-data', {
                        url: "/product-data",
                        templateUrl: "views/demo/set_product_data.html",
                        data: {
                            pageTitle: 'product-data'
                        }
                    })
                    .state('settings.team', {
                        url: "/team",
                        templateUrl: "views/settings/team/team.html",
                        data: {
                            pageTitle: 'Team'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select','ui.checkbox', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                                            }, {
                                                name: 'ui.footable',
                                                files: ['js/plugins/footable/angular-footable.js']
                                            }, {
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/settings/structure/factory.service.js',
                                                    'app/services/settings/structure/shop.service.js',
                                                    'app/services/settings/structure/line.service.js',
                                                    'app/services/settings/team/team.service.js',
                                                    'app/services/settings/team/partshift.service.js',
                                                    'app/services/settings/team/productshift.service.js',
                                                    'app/controllers/settings/team/team.controller.js',
                                                    'app/controllers/settings/team/partshift.controller.js',
                                                    'app/controllers/settings/team/productshift.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }

                    })
                    .state('settings.license', {
                        url: "/license",
                        templateUrl: "views/demo/set_license.html",
                        data: {
                            pageTitle: 'license'
                        }
                    })
                    .state('users', {
                        abstract: true,
                        url: "/users",
                        templateUrl: "views/common/content.html",
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                serie: true,
                                                files: [
                                                    'app/services/login/login.service.js',
                                                    'app/controllers/login/login.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('users.user', {
                        url: "/user",
                        templateUrl: "views/users/user/user.html",
                        data: {
                            pageTitle: 'user'

                        },

                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                                            }, {
                                                name: 'oitozero.ngSweetAlert',
                                                files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                                            }, {
                                                serie: true,
                                                files: [
                                                    'app/services/users/user/user.service.js',
                                                    'app/services/users/user/group.service.js',
                                                    'app/controllers/users/user/user.controller.js',
                                                    'app/controllers/users/user/group.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('login', {
                        url: "/login",
                        templateUrl: "views/login/login.html",
                        data: {
                            pageTitle: 'Login',
                            specialClass: 'gray-bg'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['toaster']).then(
                                        function() {
                                            return $ocLazyLoad.load([{
                                                serie: true,
                                                files: [
                                                    'app/services/login/login.service.js',
                                                    'app/controllers/login/login.controller.js'
                                                ]
                                            }]);
                                        }
                                    );
                                }
                            ]
                        }
                    });

            }
        ]
    );