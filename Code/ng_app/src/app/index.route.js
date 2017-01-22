(function() {
  'use strict';

  angular
    .module('ngApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('admin_login', {
        url: '/admin/login',
        templateUrl: 'app/sessions/login.html',
        controller: 'SessionsController',
        controllerAs: 'sessions'
      })
      .state('agent_login', {
        url: '/agent/login',
        templateUrl: 'app/sessions/login.html',
        controller: 'SessionsController',
        controllerAs: 'sessions'
      })
      .state('customer_login', {
        url: '/login',
        templateUrl: 'app/sessions/login.html',
        controller: 'SessionsController',
        controllerAs: 'sessions'
      })
      .state('dashboard', {
        url: '/home',
        templateUrl: 'app/tickets/tickets.html',
        controller: 'TicketsController',
        controllerAs: 'tickets'
      })
      .state('agents', {
        url: '/admin/agents',
        templateUrl: 'app/agents/agents.html',
        controller: 'AgentsController',
        controllerAs: 'agents'
      })
      .state('customers', {
        url: '/admin/customers',
        templateUrl: 'app/customers/customers.html',
        controller: 'CustomersController',
        controllerAs: 'customers'
      })
      .state('new', {
        url: '/new',
        templateUrl: 'app/new/new.html',
        controller: 'NewController',
        controllerAs: 'tn'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
