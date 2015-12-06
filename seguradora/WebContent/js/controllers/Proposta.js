	/**
	 * Ctrl Proposta
	 **/

	controllers.controller('proposta-ctrl', [nameVarInject, nameVarInterval, nameVarLog, nameVarModal, nameVarRootScope, setIndexCtrl]);
	function setIndexCtrl(scope, interval, log, modal, rootScope){
		console.log("proposta-ctrl");
		scope.title = "Propostas";
	}
