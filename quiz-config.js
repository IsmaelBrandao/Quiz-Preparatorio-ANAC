// =========================================================================
// ARQUIVO: quiz-config.js (NOVO ARQUIVO)
// (Este arquivo DEVE ser carregado DEPOIS do questions.js)
// =========================================================================

// Este objeto mestre contém todos os metadados (títulos, descrições, classes)
// e aponta para os arrays de perguntas definidos no 'questions.js'.
const allQuizInfo = {
    // Regulamentação
    'aeronauta_nivel1': {
        title: 'Regulamentação do Aeronauta',
        subtitle: 'Nível 1 - Conceitos Gerais',
        description: 'Lei do Aeronauta, tipos de tripulação, jornada de trabalho e limites de voo.',
        className: 'aeronauta',
        questions: quizDataAeronautaN1
    },
    'aeronauta_nivel2': {
        title: 'Regulamentação do Aeronauta',
        subtitle: 'Nível 2 - Conhecimento Aprofundado',
        description: 'Sobreaviso, reserva, fusos horários, transferências e detalhes da legislação.',
        className: 'aeronauta level-2',
        questions: quizDataAeronautaN2
    },
    // Fisiologia
    'fisiologia_nivel1': {
        title: 'Aspectos Fisiológicos',
        subtitle: 'Nível 1 - Fundamentos',
        description: 'Entenda hipóxia, disbarismos, leis dos gases e os efeitos da altitude no corpo.',
        className: 'fisiologia',
        questions: quizDataFisiologiaN1
    },
    'fisiologia_nivel2': {
        title: 'Aspectos Fisiológicos',
        subtitle: 'Nível 2 - Detalhes e Aplicações',
        description: 'Aprofunde-se no TUC, hipóxia histotóxica, desorientação espacial e fadiga.',
        className: 'fisiologia level-2',
        questions: quizDataFisiologiaN2
    },
    // Emergência
    'emergencia_nivel1': {
        title: 'Emergência a Bordo',
        subtitle: 'Nível 1 - Equipamentos e Procedimentos',
        description: 'Conheça os equipamentos (coletes, slides, ELT) e procedimentos básicos de evacuação.',
        className: 'emergencia',
        questions: quizDataEmergenciaN1
    },
    'emergencia_nivel2': {
        title: 'Emergência a Bordo',
        subtitle: 'Nível 2 - Detalhes Técnicos e Cenários',
        description: 'Domine despressurização, checklists, evacuação em água e cenários complexos.',
        className: 'emergencia level-2',
        questions: quizDataEmergenciaN2
    },
    // Combate ao Fogo
    'combate_fogo': {
        title: 'Combate ao Fogo',
        subtitle: 'Módulo Único - Classes e Agentes',
        description: 'Tetraedro do fogo, classes de incêndio (A, B, C, K) e agentes extintores (Halon, Água).',
        className: 'combate-fogo',
        questions: quizDataCombateFogo
    },
    // Meteorologia
    'meteorologia_nivel1': {
        title: 'Meteorologia Aeronáutica',
        subtitle: 'Nível 1 - Fundamentos',
        description: 'Atmosfera, pressão, temperatura, ventos, nuvens e estabilidade atmosférica.',
        className: 'meteorologia',
        questions: quizDataMeteorologiaN1
    },
    'meteorologia_nivel2': {
        title: 'Meteorologia Aeronáutica',
        subtitle: 'Nível 2 - Fenômenos e Cartas',
        description: 'Interprete METAR, TAF, SIGMET e entenda frentes, trovoadas e formação de gelo.',
        className: 'meteorologia level-2',
        questions: quizDataMeteorologiaN2
    },
    // Procedimentos Detalhados
    'emergencia_detalhada': {
        title: 'Procedimentos Detalhados',
        subtitle: 'Módulo Único - Tópicos Específicos',
        description: 'Revisão de procedimentos específicos de emergência, focados em cenários práticos.',
        className: 'emergencia-detalhada',
        questions: quizDataEmergenciaDetalhada
    },
    'fisiologia_avancada': {
        title: 'Fisiologia ANAC (Bloco 1)',
        subtitle: 'Módulo Único - Fisiologia',
        description: 'Questões focadas no bloco de Fisiologia (Hipóxia, Disbarismos, Visão, Fadiga).',
        className: 'fisiologia-anac',
        questions: quizDataAspectosFisiologicosN1
    },
    'fisiologia_avancada_2': {
        title: 'Fisiologia ANAC (Bloco 2)',
        subtitle: 'Módulo Único - Primeiros Socorros',
        description: 'Questões focadas no bloco de Primeiros Socorros (RCP, DEA, Hemorragias).',
        className: 'fisiologia-anac_2',
        questions: quizDataPrimeirosSocorrosN2
    },
    // Sobrevivência
    'sobrevivencia_1': {
        title: 'Sobrevivência - Peçonhentos',
        subtitle: 'Nível 1 - Animais Peçonhentos',
        description: 'Identificação, prevenção e primeiros socorros para acidentes com serpentes, aranhas e escorpiões.',
        className: 'sobrevivencia level-1',
        questions: quizDataAnimaisPeconhentos
    },
    'sobrevivencia_2': {
        title: 'Sobrevivência - Mar',
        subtitle: 'Nível 2 - Sobrevivência em Mar',
        description: 'Uso de botes, equipamentos de sinalização marítima, hipotermia e obtenção de água.',
        className: 'sobrevivencia level-2',
        questions: quizDataSobrevivenciaMar
    },
    'sobrevivencia_3': {
        title: 'Sobrevivência - Terra',
        subtitle: 'Nível 3 - Sobrevivência em Terra',
        description: 'Obtenção de água, fogo, construção de abrigos e prioridades em ambiente terrestre.',
        className: 'sobrevivencia level-3',
        questions: quizDataSobrevivenciaTerra
    },
    'sobrevivencia_4': {
        title: 'Sobrevivência - Orientação',
        subtitle: 'Nível 4 - Sinalização e Orientação',
        description: 'Uso de heliógrafo, pirotécnicos e métodos naturais de orientação (sol, estrelas).',
        className: 'sobrevivencia level-4',
        questions: quizDataSinalizacaoOrientacao
    },
    'sobrevivencia_5': {
        title: 'Sobrevivência - Socorros',
        subtitle: 'Nível 5 - Primeiros Socorros',
        description: 'Técnicas de primeiros socorros aplicadas a cenários de sobrevivência e resgate.',
        className: 'sobrevivencia level-5',
        questions: quizDataPrimeirosSocorros
    },
    'sobrevivencia_6': {
        title: 'Sobrevivência - Psicologia',
        subtitle: 'Nível 6 - Princípios e Psicologia',
        description: 'A vontade de viver, pânico, apatia, liderança e o estresse em situações de sobrevivência.',
        className: 'sobrevivencia level-6',
        questions: quizDataPrincipiosPsicologia
    },
    // RPA
    'prova_rpa': {
        title: 'Preparatório Prova RPA',
        subtitle: 'Módulo Único - Questões Focadas',
        description: 'Simulado com questões essenciais de Regulamentação e Direito para a prova de RPA.',
        className: 'rpa-prep',
        questions: quizDataProvaRPA
    }
};