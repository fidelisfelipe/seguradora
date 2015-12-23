	/**
	 * APP
	 * */

	var app = angular.module('seguradora', ['controllers-ctrl','services-srv','ngRoute','ui.bootstrap']);	
	var nameVarInject = '$scope';
	var nameHttpInject = '$http';
	var nameVarInterval = '$interval';
	var nameVarModal = '$modal';
	var nameVarModalInstance = '$modalInstance';
	var nameVarLog = '$log';
	var nameVarRootScope = '$rootScope';
	var nameRouteProvider = '$routeProvider';
	var nameUserRules = 'USER_ROLES';
	var nameAuthEvents = 'AUTH_EVENTS';
	var nameVarLocation = '$location';
	
	/**
	 * Constantes
	 */
	
	app.constant('AUTH_EVENTS', {
		  loginSuccess: 'auth-login-success',
		  loginFailed: 'auth-login-failed',
		  logoutSuccess: 'auth-logout-success',
		  sessionTimeout: 'auth-session-timeout',
		  notAuthenticated: 'auth-not-authenticated',
		  notAuthorized: 'auth-not-authorized'
		});
	
	app.constant('USER_ROLES', {
		  all: '*',
		  admin: 'admin',
		  editor: 'editor',
		  guest: 'guest'
		});
	
	/**
	 * Controllers
	 * */
	
	var controllers = angular.module('controllers-ctrl',[]);
	
	/**
	 * Services
	 * */
	
	var services = angular.module('services-srv',[]);
	
	/** rotas **/
	app.config([ nameRouteProvider , function(routeProvider) {
		routeProvider
		.when('/proposta', {
			templateUrl : 'proposta.html',
			controller : 'proposta-ctrl'
		})
		.when('/propostas', {
			templateUrl : 'propostaList.html',
			controller : 'proposta-list-ctrl'
		})
		.when('/agenda', {
			templateUrl : 'agenda.html',
			controller : 'agenda-ctrl'
		})
		.when('/login', {
			templateUrl : 'login.html',
			controller : 'login-ctrl'
		})
		.otherwise({
			redirectTo : '/index'
		});
	} ]);

/** confing plugins **/
	
app.run([nameVarLog, nameVarRootScope, nameAuthEvents, function (log, rootScope, AUTH_EVENTS, AuthService) {
	log.info('init config plugins');
}]);

