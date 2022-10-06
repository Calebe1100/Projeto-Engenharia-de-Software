const { v4: uuidv4 } = require('uuid');
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('user_course_discipline', [
      { id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM ENGENHARIA DE SOFTWARE: BANCO DE DADOS NÃO RELACIONAL - NOSQL', workload: 30, description: 'GT07ESO0 02.1' },
      {
        id:uuidv4(), name: 'CÁLCULO I', workload: 90, description: '7CECOM.001' }, 
 {
        id:uuidv4(), name: 'GEOMETRIA ANALÍTICA E ÁLGEBRA VETORIAL', workload: 90, description: '7CECOM.002' }, 
 {
        id:uuidv4(), name: 'INGLÊS INSTRUMENTAL I', workload: 30, description: '7CECOM.003' }, 
 {
        id:uuidv4(), name: 'PROGRAMAÇÃO DE COMPUTADORES I', workload: 30, description: '7CECOM.004' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE PROGRAMAÇÃO DE COMPUTADORES I', workload: 30, description: '7CECOM.005' }, 
 {
        id:uuidv4(), name: 'INTRODUÇÃO À ENGENHARIA DE COMPUTAÇÃO', workload: 30, description: '7CECOM.006' }, 
 {
        id:uuidv4(), name: 'PORTUGUÊS INSTRUMENTAL', workload: 30, description: '7CECOM.007' }, 
 {
        id:uuidv4(), name: 'METODOLOGIA CIENTÍFICA', workload: 30, description: '7CECOM.008' }, 
 {
        id:uuidv4(), name: 'CÁLCULO I', workload: 90, description: '7CECOM.001' }, 
 {
        id:uuidv4(), name: 'GEOMETRIA ANALÍTICA E ÁLGEBRA VETORIAL', workload: 90, description: '7CECOM.002' }, 
 {
        id:uuidv4(), name: 'PROGRAMAÇÃO DE COMPUTADORES II', workload: 30, description: '7CECOM.013' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE PROGRAMAÇÃO DE COMPUTADORES II', workload: 30, description: '7CECOM.014' }, 
 {
        id:uuidv4(), name: 'FILOSOFIA DA TECNOLOGIA', workload: 30, description: '7CECOM.015' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE SISTEMAS DIGITAIS PARA COMPUTAÇÃO', workload: 30, description: '7CECOM.016' }, 
 {
        id:uuidv4(), name: 'SISTEMAS DIGITAIS PARA COMPUTAÇÃO', workload: 30, description: '7CECOM.017' }, 
 {
        id:uuidv4(), name: 'MATEMÁTICA DISCRETA', workload: 60, description: '7CECOM.018' }, 
 {
        id:uuidv4(), name: 'CÁLCULO II', workload: 90, description: '7CECOM.011' }, 
 {
        id:uuidv4(), name: 'FÍSICA I', workload: 60, description: '7CECOM.012' }, 
 {
        id:uuidv4(), name: 'INGLÊS INSTRUMENTAL II', workload: 30, description: '7CECOM.019' }, 
 {
        id:uuidv4(), name: 'ALGORITMOS E ESTRUTURA DE DADOS I', workload: 60, description: '7CECOM.023' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ALGORITMOS E ESTRUTURA DE DADOS I', workload: 30, description: '7CECOM.024' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES I', workload: 30, description: '7CECOM.026' }, 
 {
          id:uuidv4(), name: 'ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES I', workload: 60, description: '7CECOM.101' }, 
 {
        id:uuidv4(), name: 'CÁLCULO III', workload: 60, description: '7CECOM.020' }, 
 {
        id:uuidv4(), name: 'FÍSICA II', workload: 60, description: '7CECOM.021' }, 
 {
        id:uuidv4(), name: 'MÉTODOS NUMÉRICOS COMPUTACIONAIS', workload: 60, description: '7CECOM.025' }, 
 {
        id:uuidv4(), name: 'FÍSICA EXPERIMENTAL I', workload: 30, description: '7CECOM.022' }, 
 {
        id:uuidv4(), name: 'ESTATÍSTICA', workload: 60, description: '7CECOM.028' }, 
 {
        id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM COMPUTAÇÃO E ALGORITMOS: RACIOCÍNIO LÓGICO', workload: 30, description: 'GT07CAL00 2.1' }, 
 {
        id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM MATEMÁTICA: FUNDAMENTOS DE MATEMÁTICA PARA ENGENHARIA DE COMPUTAÇÃO', workload: 30, description: 'GT07MAT0 01.1' }, 
 {
          id:uuidv4(), name: 'ALGORITMOS E ESTRUTURA DE DADOS II', workload: 60, description: '7CECOM.032' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ALGORITMOS E ESTRUTURA DE DADOS II', workload: 30, description: '7CECOM.033' }, 
 {
        id:uuidv4(), name: 'ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES II', workload: 60, description: '7CECOM.036' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES II', workload: 30, description: '7CECOM.037' }, 
 {
          id:uuidv4(), name: 'FÍSICA III', workload: 60, description: '7CECOM.030' }, 
 {
        id:uuidv4(), name: 'FÍSICA EXPERIMENTAL II', workload: 30, description: '7CECOM.031' }, 
 {
        id:uuidv4(), name: 'LINGUAGENS DE PROGRAMAÇÃO', workload: 30, description: '7CECOM.034' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE LINGUAGENS DE PROGRAMAÇÃO', workload: 30, description: '7CECOM.035' }, 
 {
        id:uuidv4(), name: 'CÁLCULO IV', workload: 60, description: '7CECOM.038' }, 
 {
        id:uuidv4(), name: 'FÍSICA EXPERIMENTAL II', workload: 30, description: '7CECOM.01' }, 
 {
        id:uuidv4(), name: 'BANCO DE DADOS I', workload: 60, description: '7CECOM.04' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE BANCO DE DADOS I', workload: 30, description: '7CECOM.045' }, 
 {
        id:uuidv4(), name: 'ÁLGEBRA LINEAR', workload: 60, description: '7CECOM.047' }, 
 {
        id:uuidv4(), name: 'MODELAGEM E DESENVOLVIMENTO DE SOFTWARE ', workload: 60, description: '7CECOM.042' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE MODELAGEM E DESENVOLVIMENTO DE SOFTWARE - ', workload: 30, description: '7CECOM.043' }, 
 {
        id:uuidv4(), name: 'PRINCÍPIOS DE COMUNICAÇÃO DE DADOS', workload: 60, description: '7CECOM.046' }, 
 {
        id:uuidv4(), name: 'LINGUAGENS FORMAIS E AUTÔMATOS', workload: 60, description: '7CECOM.048' }, 
 {
        id:uuidv4(), name: 'SISTEMAS OPERACIONAIS', workload: 60, description: '7CECOM.058' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE SISTEMAS OPERACIONAIS', workload: 30, description: '7CECOM.059' }, 
 {
        id:uuidv4(), name: 'CONTROLE DE SISTEMAS DINÂMICOS', workload: 60, description: '7CECOM.060' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE CONTROLE DE SISTEMAS DINÂMICOS', workload: 30, description: '7CECOM.061' }, 
 {
        id:uuidv4(), name: 'ENGENHARIA DE SOFTWARE I', workload: 60, description: '7CECOM.054' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE ENGENHARIA DE SOFTWARE I', workload: 30, description: '7CECOM.055' }, 
 {
        id:uuidv4(), name: 'REDES DE COMPUTADORES I', workload: 60, description: '7CECOM.056' }, 
 {
        id:uuidv4(), name: 'LABORATÓRIO DE REDES DE COMPUTADORES I', workload: 30, description: '7CECOM.057' }, 
 {
        id:uuidv4(), name: 'COMPILADORES - SOMENTE PARA POSSÍVEIS FORMANDOS.', workload: 60, description: '7CECOM.068' }, 
 {
        id:uuidv4(), name: 'COMPUTAÇÃO GRÁFICA', workload: 60, description: '7CECOM.084' }, 
 {
        id:uuidv4(), name: 'TÓPICOS ESPECIAIS EM PROGRAMAÇÃO DE COMPUTADORES: INFORMÁTICA APLICADA À EDUCAÇÃO', workload: 30, description: '7CECOM.134' }, 
 {
          id:uuidv4(), name: 'TÓPICOS DE SAÚDE, SEGURANÇA, QUALIDADE E MEIO-AMBIENTE', workload: 45, description: 'G07TSSQM0.01' }, 
{ id:uuidv4(), name: 'LABORATÓRIO DE ENGENHARIA DE SOFTWARE ', workload: 30  , description: '7CECOM.055' },
      { id:uuidv4(), name: 'OTIMIZAÇÃO I', workload: 60  , description: '7CECOM.070' },
      { id:uuidv4(), name: 'PSICOLOGIA APLICADA ÀS ORGANIZAÇÕES', workload: 30  , description: '7CECOM.069' },
      { id:uuidv4(), name: 'INTELIGÊNCIA ARTIFICIAL', workload: 60  , description: '7CECOM.066' },
      { id:uuidv4(), name: 'LABORATÓRIO DE INTELIGÊNCIA ARTIFICIAL', workload: 30  , description: '7CECOM.067' },
      { id:uuidv4(), name: 'COMPILADORES', workload: 60  , description: '7CECOM.068' },
      { id:uuidv4(), name: 'CONTROLE DIGITAL DE SISTEMAS DINÂMICOS', workload: 60  , description: '7CECOM.071' },
      { id:uuidv4(), name: 'LABORATÓRIO DE CONTROLE DIGITAL DE SISTEMAS DINÂMICOS', workload: 30  , description: '7CECOM.072' },
      { id:uuidv4(), name: 'SISTEMAS DISTRIBUÍDOS', workload: 60  , description: '7CECOM.080' },
      { id:uuidv4(), name: 'INTRODUÇÃO À ADMINISTRAÇÃO', workload: 30  , description: '7CECOM.082' },
      { id:uuidv4(), name: 'COMPUTAÇÃO GRÁFICA Matriculado', workload: 60  , description: '7CECOM.084' },
      { id:uuidv4(), name: 'OTIMIZAÇÃO II', workload: 60  , description: '7CECOM.081' },
      { id:uuidv4(), name: 'INTELIGÊNCIA COMPUTACIONAL I', workload: 90  , description: '7CECOM.083' },
      { id:uuidv4(), name: 'INTERAÇÃO  UMANO-COMPUTADOR', workload: 60  , description: '7CECOM.079' },
      { id:uuidv4(), name: 'METODOLOGIA DE PESQUISA', workload: 30  , description: '7CECOM.091' },
      { id:uuidv4(), name: 'ORGANIZAÇÃO EMPRESARIAL', workload: 30  , description: '7CECOM.090' },
      { id:uuidv4(), name: 'TRABALHO DE CONCLUSÃO DE CURSO I', workload: 15  , description: '7CECOM.089' },
      { id:uuidv4(), name: 'CONTEXTO SOCIAL E PROFISSIONAL DA ENGENHARIA DE COMPUTAÇÃO', workload: 30  , description: '7CECOM.098' },
      { id:uuidv4(), name: 'TRABALHO DE CONCLUSÃO DE CURSO II', workload: 15  , description: '7CECOM.097' },
      { id:uuidv4(), name: 'ESTÁGIO SUPERVISIONADO', workload: 30  , description: '7CECOM.099' },
      { id:uuidv4(), name: 'INTRODUÇÃO À SOCIOLOGIA', workload: 30  , description: '7CECOM.100' },
      { id:uuidv4(), name: 'ESTÁGIO SUPERVISIONADO CURRICULAR - COMPUTAÇÃO', workload: 300  , description: 'SE.1' },
      { id:uuidv4(), name: 'ENADE CONCLUINTE PENDENTE', workload: 0  , description: 'ENADE' },
    ]);

  },

  async down(queryInterface, Sequelize) {
    //implements down
  }
};
