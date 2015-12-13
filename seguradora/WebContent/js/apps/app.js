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
	.otherwise({
		redirectTo : '/index'
	});
} ]);

/** confing plugins **/
app.run([nameVarLog, function(log) {
	log.info('init config plugins');
}]);
 
