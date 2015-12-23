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
		//selected menu default
		scope.menu = 1;
		scope.selectedMenu = function(item){
			scope.menu=item;
			log.info('select menu: '+scope.menu);
		}
		scope.title = "Andrade & Associados Corretora de Seguros";
		scope.links = [
		               {id:1,label:'Home', href:'#index'},
		               {id:2,label:'Login', href:'#login'},
		               {id:3,label:'Nova Proposta', href:'#proposta'},
		               {id:4,label:'Lista Propostas', href:'#propostas'},
		               {id:5,label:'Agenda', href:'#agenda'}
		               ];
		
	}