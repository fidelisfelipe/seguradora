	/**
	 * Ctrl Index
	 **/

	controllers.controller('init-ctrl', [nameVarInject, nameVarLog, nameVarRootScope, runInitApp]);
	function runInitApp(scope, log, rootScope){
			log.info('init-ctrl');
			
			scope.initRunApp = function (){
				log.info('initRunApp');
				
			};
			scope.initRunApp();
			
	};
	
	controllers.controller('index-ctrl', [nameVarInject, nameVarInterval, nameVarLog,nameVarRootScope,  setIndexCtrl]);
	function setIndexCtrl(scope, interval, log, rootScope){
		console.log("index-ctrl");
		scope.title = "Seguradora";
		scope.links = [
		               {label:'Proposta', href:'#proposta'}
		               ];
		
	}