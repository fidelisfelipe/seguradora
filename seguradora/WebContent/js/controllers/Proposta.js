   /**
	 * Proposta
	 */
	function Proposta(id, seguro){
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
	function Pessoa(id, nome, dtEmissao, dtNascimento, orgEmissor, dtEmissao, 
			profissao, estadoCivil, endereco, cep, bairro, cidade, telefone, email, 
			habilitacao, dtValidade, dtPrimeiraHabilitacao){
		this.id = id;
		this.nome = nome;
		this.rg = rg;
		this.dtEmissao = dtEmissao;
		this.dtNascimento = dtNascimento;
		this.orgEmissor = orgEmissor;
		this.dtEmissao = dtEmissao;
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

	/**
	 * Ctrl Proposta
	 **/

	controllers.controller('proposta-ctrl', [nameVarInject, nameVarInterval, nameVarLog, nameVarModal, nameVarRootScope, setIndexCtrl]);
	function setIndexCtrl(scope, interval, log, modal, rootScope){
		console.log("proposta-ctrl");
		scope.title = "Propostas";
		scope.seguro = new Seguro();
		
	}
