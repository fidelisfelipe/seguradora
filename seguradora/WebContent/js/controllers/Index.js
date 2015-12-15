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
		scope.title = "Andrade & Associados Corretora de Seguros";
		scope.links = [
		               {label:'Home', href:'#index'},
		               {label:'Login', href:'#login'},
		               {label:'Nova Proposta', href:'#proposta'},
		               {label:'Lista Propostas', href:'#propostas'},
		               {label:'Agenda', href:'#agenda'}
		               ];
		
	}