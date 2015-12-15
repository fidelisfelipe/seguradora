   /**
	 * Proposta
	 */
	function Proposta(id, seguro, titular, menor, 
			condutorPrincipal, veiculo, cobertura,
			situacao, dtVigencia, isTransmitida){
		this.id = id;
		this.seguro = seguro;
		this.titular = titular;
		this.menor = menor;
		this.condutorPrincipal = condutorPrincipal;
		this.veiculo = veiculo;
		this.cobertura = cobertura;
		this.situacao = situacao;
		this.dtVigencia = dtVigencia;
		this.isTransmitida = isTransmitida;
	}

	/**
	 * Situacao da Proposta
	 */
	function SituacaoProposta(id, nome){
		this.id = id;
		this.nome = nome;
	}
	
	function TipoSeguro(id, nome){
		this.id = id;
		this.nome = nome;
	}

	/**
	 * Seguro
	 */	
	function Seguro(id, seguro, ci, seguradora, dtVigenciaDe, dtVigenciaAte, apolice, bonus, isSinistro){
		this.id = id;
		this.seguro = seguro;
		this.ci = ci;
		this.seguradora = seguradora;
		this.dtVigenciaDe = dtVigenciaDe;
		this.dtVigenciaAte = dtVigenciaAte;
		this.apolice = apolice;
		this.bonus = bonus;
		this.isSinistro = isSinistro;
	}

	/**
	 * Pessoa
	 **/
	function Pessoa(id, nome, dtEmissao, dtNascimento, sexo, orgEmissor,  
			profissao, estadoCivil, endereco, cep, bairro, cidade, telefone, email, 
			habilitacao, dtValidade, dtPrimeiraHabilitacao){
		this.id = id;
		this.nome = nome;
		this.rg = rg;
		this.dtEmissao = dtEmissao;
		this.dtNascimento = dtNascimento;
		this.sexo = sexo;
		this.orgEmissor = orgEmissor;
		this.profissao = profissao;
		this.estadoCivil = estadoCivil;
		this.endereco = endereco;
		this.cep = cep;
		this.bairro = bairro;
		this.cidade = cidade;
		this.telefone = telefone;
		this.email = email;
		this.habilitacao = habilitacao;
		this.dtValidade = dtValidade;
		this.dtPrimeiraHabilitacao = dtPrimeiraHabilitacao;
	}

	/**
	 * Titular
	 */
	function Titular(id, pessoa, isGaragem, dadosBancarios){
		this.id = id;
		this.pessoa = pessoa;
		this.isGaragem = isGaragem;
		this.dadosBancarios = dadosBancarios;
	}

	/**
	 * Menor
	 */
	function Menor(id, pessoa){
		this.id = id;
		this.pessoa = pessoa;
	}

	/**
	 * Dados Bancarios
	 */
	function DadosBancarios(id){
		this.id = id;
		this.nomeBanco = nomeBanco;
		this.agencia = agencia;
		this.dvAgencia = dvAgencia;
		this.conta = conta;
		this.dvConta = dvConta;
	}

	/**
	 * Dados do Condutor Principal
	 */
	function CondutorPrincipal(id, pessoa, perfil){
		this.id = id;
		this.pessoa = pessoa;
		this.perfil = perfil;
	}

	/**
	 * Perfil do Condutor Principal
	 */
	function Perfil(id, enderecoTrabalho, isGaragem, cep, cidade, uf){
		this.id = id;
		this.enderecoTrabalho = enderecoTrabalho;
		this.isGaragem = isGaragem;
		this.cep = cep;
		this.cidade = cidade; 
		this.uf = uf;
	}

	/**
	 * Dados do Veículo
	 */
	function Veiculo(id, fabricante, fipe, modelo, anoFabricacao, combustivel,
			cor, cambio, placa, chassi, renavan, situacao, banco){
		this.id = id;
		this.fabricante = fabricante;
		this.fipe = fipe;
		this.modelo = modelo;
		this.anoFabricacao = anoFabricacao;
		this.combustivel = combustivel;
		this.cor = cor;
		this.cambio = cambio;
		this.placa = placa;
		this.chassi = chassi;
		this.renavan = this.renavan;
		this.situacao = situacao;
		this.banco = banco;
	}

	/**
	 * Dados da Cobertura
	 */
	function Cobertura(id, danosMateriais, danosPessoais, app, isAssistencia, assistenciaKm,
			isCarroReserva, prazoCarroReserva, isProtecaoVidros, isParabrisa,
			isTraseiro, isLaterais, isFarois, isLanterna, isRetrovisores, kmPorMes){
		this.id = id;
		this.danosMateriais = danosMateriais;
		this.danosPessoais = danosPessoais;
		this.app = app;
		this.isAssistencia = isAssistencia;
		this.assistenciaKm = assistenciaKm;
		this.isCarroReserva = isCarroReserva;
		this.prazoCarroReserva = prazoCarroReserva;
		this.isProtecaoVidros = isProtecaoVidros;
		this.isParabrisa = isParabrisa;
		this.isTraseiro = isTraseiro;
		this.isLaterais = isLaterais;
		this.isFarois = isFarois;
		this.isLanterna = isLanterna;
		this.isRetrovisores = isRetrovisores;
		this.kmPorMes = kmPorMes;
	}
	
function setMascaras(){
		
		$("input").each(function(){
			var mascara = $(this).attr("mask");
			if(mascara == 'maskCpf'){
				$(this).mask('000.000.000-00', {reverse: true, clearIfNotMatch: true});
			}else if(mascara == 'maskAlfaNumerico'){
				
			}else if(mascara == 'maskData'){
				$(this).mask('00/00/0000', {clearIfNotMatch: true});
			}else if(mascara == 'maskCep'){
				$(this).mask('00000-000', {reverse: true, clearIfNotMatch: true});
			}else if(mascara == 'maskTelefone'){
				$(this).mask('(00) 0000-0000', {clearIfNotMatch: true});
			}else if(mascara == 'maskEmail'){
				
			}else if(mascara == 'maskNumerico'){
				
			}else if(mascara == 'maskPlaca'){
				$(this).mask('AAA-0000', {clearIfNotMatch: true});
			}
		});
		
	}

	/**
	 * Ctrl Proposta
	 **/

	controllers.controller('proposta-ctrl', [nameVarInject, nameVarInterval, nameVarLog, nameVarModal, nameVarRootScope, setPropostaCtrl]);
	function setPropostaCtrl(scope, interval, log, modal, rootScope){
		console.log("proposta-ctrl");
		scope.title = "Nova Proposta";
		scope.proposta = new Proposta();
		scope.seguradoras = [
				               {id:1, nome: 'Porto Seguros'},
				               {id:2, nome: 'Itaú Seguros'}
				              ];
		scope.tipoSeguroList = [
				               {id:1, nome: 'Novo'},
				               {id:2, nome: 'Renovação'}
				              ];
		scope.validarCampos = function(){
			log.info("validar campos");
		}
		//setMascaras();
	}
	
	controllers.controller('proposta-list-ctrl', [nameVarInject, nameVarInterval, nameVarLog, nameVarModal, nameVarRootScope, setPropostaListCtrl]);
	function setPropostaListCtrl(scope, interval, log, modal, rootScope){
		console.log('proposta-list-ctrl');
		scope.title = 'Lista de Propostas';
		var titular1 = new Titular();
		titular1.nome = 'João Almeida';
		
		var titular2 = new Titular();
		titular2.nome = 'Mário Soares';

		var titular3 = new Titular();
		titular3.nome = 'Flavio Nunes';
		
		var titular4 = new Titular();
		titular4.nome = 'Laurito Abreu';
		
		var titular5 = new Titular();
		titular5.nome = 'Carlos Alberto';
		
		scope.propostaList = [
				               {id:1, titular: titular1,
				            	   seguro: "Itaú Seguros",
				            	   dtVigencia: '15/01/2016',
				            	   isTransmitida: 'Sim',
  			            	       status: 'ativo'},
				               {id:2, titular: titular2,
				            		   seguro: 'Porto Seguros',
				            		   dtVigencia: '10/01/2016',
				            		   isTransmitida: 'Não',
				            		   status: 'inativo'},
		            		   {id:3, titular: titular3,
			            		   seguro: 'Azul Seguros',
			            		   dtVigencia: '11/01/2016',
			            		   isTransmitida: 'Não',
			            		   status: 'inativo'},
		            		   {id:4, titular: titular4,
		            			   seguro: 'Porto Seguros',
		            			   dtVigencia: '12/01/2016',
		            			   isTransmitida: 'Não',
		            			   status: 'inativo'},
		            		   {id:5, titular: titular5,
		            			   seguro: 'Porto Seguros',
		            			   dtVigencia: '12/01/2016',
		            			   isTransmitida: 'Não',
		            			   status: 'ativo'}
				              ];
		scope.removeProposta = function(proposta){
			var index = scope.propostaList.indexOf(proposta);
			scope.propostaList.splice(index,1);
			
		};
	}
	
	
