const { v4: uuidv4 } = require('uuid');
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('discipline', [
      { id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM ENGENHARIA DE SOFTWARE: BANCO DE DADOS NÃO RELACIONAL - NOSQL', workload: 30, description: 'GT07ESO0 02.1' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 2},
      {
        id:uuidv4(), name: 'CÁLCULO I', workload: 90, description: '7CECOM.001' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'GEOMETRIA ANALÍTICA E ÁLGEBRA VETORIAL', workload: 90, description: '7CECOM.002' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'INGLÊS INSTRUMENTAL I', workload: 30, description: '7CECOM.003' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'PROGRAMAÇÃO DE COMPUTADORES I', workload: 30, description: '7CECOM.004', idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE PROGRAMAÇÃO DE COMPUTADORES I', workload: 30, description: '7CECOM.005' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'INTRODUÇÃO À ENGENHARIA DE COMPUTAÇÃO', workload: 30, description: '7CECOM.006' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'PORTUGUÊS INSTRUMENTAL', workload: 30, description: '7CECOM.007' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'METODOLOGIA CIENTÍFICA', workload: 30, description: '7CECOM.008' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'GEOMETRIA ANALÍTICA E ÁLGEBRA VETORIAL', workload: 90, description: '7CECOM.002' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'PROGRAMAÇÃO DE COMPUTADORES II', workload: 30, description: '7CECOM.013' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE PROGRAMAÇÃO DE COMPUTADORES II', workload: 30, description: '7CECOM.014' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'FILOSOFIA DA TECNOLOGIA', workload: 30, description: '7CECOM.015' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE SISTEMAS DIGITAIS PARA COMPUTAÇÃO', workload: 30, description: '7CECOM.016' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'SISTEMAS DIGITAIS PARA COMPUTAÇÃO', workload: 30, description: '7CECOM.017' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'MATEMÁTICA DISCRETA', workload: 60, description: '7CECOM.018' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'CÁLCULO II', workload: 90, description: '7CECOM.011' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'FÍSICA I', workload: 60, description: '7CECOM.012' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'INGLÊS INSTRUMENTAL II', workload: 30, description: '7CECOM.019' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'ALGORITMOS E ESTRUTURA DE DADOS I', workload: 60, description: '7CECOM.023' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ALGORITMOS E ESTRUTURA DE DADOS I', workload: 30, description: '7CECOM.024' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES I', workload: 30, description: '7CECOM.026' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
          id:uuidv4(), name: 'ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES I', workload: 60, description: '7CECOM.101' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'CÁLCULO III', workload: 60, description: '7CECOM.020' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'FÍSICA II', workload: 60, description: '7CECOM.021' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'MÉTODOS NUMÉRICOS COMPUTACIONAIS', workload: 60, description: '7CECOM.025' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'FÍSICA EXPERIMENTAL I', workload: 30, description: '7CECOM.022' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'ESTATÍSTICA', workload: 60, description: '7CECOM.028' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM COMPUTAÇÃO E ALGORITMOS: RACIOCÍNIO LÓGICO', workload: 30, description: 'GT07CAL00 2.1' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 2}, 
 {
        id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM MATEMÁTICA: FUNDAMENTOS DE MATEMÁTICA PARA ENGENHARIA DE COMPUTAÇÃO', workload: 30, description: 'GT07MAT0 01.1' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 2}, 
 {
          id:uuidv4(), name: 'ALGORITMOS E ESTRUTURA DE DADOS II', workload: 60, description: '7CECOM.032' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ALGORITMOS E ESTRUTURA DE DADOS II', workload: 30, description: '7CECOM.033' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES II', workload: 60, description: '7CECOM.036' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES II', workload: 30, description: '7CECOM.037' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
          id:uuidv4(), name: 'FÍSICA III', workload: 60, description: '7CECOM.030' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'FÍSICA EXPERIMENTAL II', workload: 30, description: '7CECOM.031' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LINGUAGENS DE PROGRAMAÇÃO', workload: 30, description: '7CECOM.034' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE LINGUAGENS DE PROGRAMAÇÃO', workload: 30, description: '7CECOM.035' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'CÁLCULO IV', workload: 60, description: '7CECOM.038' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'BANCO DE DADOS I', workload: 60, description: '7CECOM.04' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE BANCO DE DADOS I', workload: 30, description: '7CECOM.045' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'ÁLGEBRA LINEAR', workload: 60, description: '7CECOM.047' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'MODELAGEM E DESENVOLVIMENTO DE SOFTWARE ', workload: 60, description: '7CECOM.042' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE MODELAGEM E DESENVOLVIMENTO DE SOFTWARE - ', workload: 30, description: '7CECOM.043' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'PRINCÍPIOS DE COMUNICAÇÃO DE DADOS', workload: 60, description: '7CECOM.046' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LINGUAGENS FORMAIS E AUTÔMATOS', workload: 60, description: '7CECOM.048' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'SISTEMAS OPERACIONAIS', workload: 60, description: '7CECOM.058' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE SISTEMAS OPERACIONAIS', workload: 30, description: '7CECOM.059' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'CONTROLE DE SISTEMAS DINÂMICOS', workload: 60, description: '7CECOM.060' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE CONTROLE DE SISTEMAS DINÂMICOS', workload: 30, description: '7CECOM.061' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'ENGENHARIA DE SOFTWARE I', workload: 60, description: '7CECOM.054' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ENGENHARIA DE SOFTWARE I', workload: 30, description: '7CECOM.055' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'REDES DE COMPUTADORES I', workload: 60, description: '7CECOM.056' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE REDES DE COMPUTADORES I', workload: 30, description: '7CECOM.057' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'COMPILADORES - SOMENTE PARA POSSÍVEIS FORMANDOS.', workload: 60, description: '7CECOM.068' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'COMPUTAÇÃO GRÁFICA', workload: 60, description: '7CECOM.084' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
        id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM PROGRAMAÇÃO DE COMPUTADORES: INFORMÁTICA APLICADA À EDUCAÇÃO', workload: 30, description: '7CECOM.134' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1}, 
 {
          id:uuidv4(), name: 'TÓPICOS DE SAÚDE, SEGURANÇA, QUALIDADE E MEIO-AMBIENTE', workload: 45, description: 'G07TSSQM0.01' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 2}, 
{ id:uuidv4(), name: 'LABORATÓRIO DE ENGENHARIA DE SOFTWARE ', workload: 30  , description: '7CECOM.055' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'OTIMIZAÇÃO I', workload: 60  , description: '7CECOM.070' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'PSICOLOGIA APLICADA ÀS ORGANIZAÇÕES', workload: 30  , description: '7CECOM.069' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'INTELIGÊNCIA ARTIFICIAL', workload: 60  , description: '7CECOM.066' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'LABORATÓRIO DE INTELIGÊNCIA ARTIFICIAL', workload: 30  , description: '7CECOM.067' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'COMPILADORES', workload: 60  , description: '7CECOM.068' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'CONTROLE DIGITAL DE SISTEMAS DINÂMICOS', workload: 60  , description: '7CECOM.071' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'LABORATÓRIO DE CONTROLE DIGITAL DE SISTEMAS DINÂMICOS', workload: 30  , description: '7CECOM.072' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'SISTEMAS DISTRIBUÍDOS', workload: 60  , description: '7CECOM.080' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'INTRODUÇÃO À ADMINISTRAÇÃO', workload: 30  , description: '7CECOM.082' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'COMPUTAÇÃO GRÁFICA Matriculado', workload: 60  , description: '7CECOM.084' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'OTIMIZAÇÃO II', workload: 60  , description: '7CECOM.081' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'INTELIGÊNCIA COMPUTACIONAL I', workload: 90  , description: '7CECOM.083' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'INTERAÇÃO  UMANO-COMPUTADOR', workload: 60  , description: '7CECOM.079' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'METODOLOGIA DE PESQUISA', workload: 30  , description: '7CECOM.091' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'ORGANIZAÇÃO EMPRESARIAL', workload: 30  , description: '7CECOM.090' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'TRABALHO DE CONCLUSÃO DE CURSO I', workload: 15  , description: '7CECOM.089' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'CONTEXTO SOCIAL E PROFISSIONAL DA ENGENHARIA DE COMPUTAÇÃO', workload: 30  , description: '7CECOM.098' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'TRABALHO DE CONCLUSÃO DE CURSO II', workload: 15  , description: '7CECOM.097' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'ESTÁGIO SUPERVISIONADO', workload: 30  , description: '7CECOM.099' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'INTRODUÇÃO À SOCIOLOGIA', workload: 30  , description: '7CECOM.100' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'ESTÁGIO SUPERVISIONADO CURRICULAR - COMPUTAÇÃO', workload: 300  , description: 'SE.1' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'ENADE CONCLUINTE PENDENTE', workload: 0  , description: 'ENADE' , idCourse: 'ee714bf1-f558-4142-8fd0-c6a4933014eb', typeDiscipline: 1},
      { id:uuidv4(), name: 'CÁLCULO III', workload: 60, description: '7CECOM.020' , idCourse: '71c752e7-8ab1-4a35-a615-2c62eaff825b', typeDiscipline: 1}, 
      { id:uuidv4(), name: 'FÍSICA II', workload: 60, description: '7CECOM.021' , idCourse: '71c752e7-8ab1-4a35-a615-2c62eaff825b', typeDiscipline: 1}, 
    ]);

  },

   async  down(queryInterface, Sequelize) {
    //implements down
  }
}
