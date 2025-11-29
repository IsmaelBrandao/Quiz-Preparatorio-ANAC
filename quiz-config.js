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
    },
    'seg_voo_n1': {
        title: 'Segurança de Voo',
        subtitle: 'Nível 1 - Conceitos SVO',
        description: 'Conceitos de SVO, filosofia S-G-S-O, gerenciamento de risco e prevenção de acidentes.',
        className: 'seg-voo',
        questions: quizDataSegVooN1
    },
    'seg_voo_n2': {
        title: 'Segurança de Voo',
        subtitle: 'Nível 2 - Fatores e Investigação',
        description: 'Aprofunde-se em relatórios, CENIPA, e os fatores humanos, materiais e operacionais.',
        className: 'seg-voo level-2',
        questions: quizDataSegVooN2
    },
    
    // Sistema de Aviação Civil (NOVOS)
    'sis_avcivil_n1': {
        title: 'Sistema de Aviação Civil',
        subtitle: 'Nível 1 - Organismos',
        description: 'Estrutura do SISAC, ICAO, ANAC, DECEA, e a organização aeronáutica nacional e internacional.',
        className: 'sis-avcivil',
        questions: quizDataSistAvCivilN1
    },
    'sis_avcivil_n2': {
        title: 'Sistema de Aviação Civil',
        subtitle: 'Nível 2 - Infraestrutura e Regras',
        description: 'Entenda a infraestrutura aeroportuária, serviços de tráfego aéreo e regras do ar.',
        className: 'sis-avcivil level-2',
        questions: quizDataSistAvCivilN2
    },
    
    // Direito Aeronáutico (NOVOS)
    'direito_aero_n1': {
        title: 'Direito Aeronáutico',
        subtitle: 'Nível 1 - CBAER',
        description: 'Estude o Código Brasileiro de Aeronáutica (CBAER), licenças, certificados e aeronaves.',
        className: 'direito-aero',
        questions: quizDataDireitoAeronauticoN1
    },
    'direito_aero_n2': {
        title: 'Direito Aeronáutico',
        subtitle: 'Nível 2 - Contratos e Responsabilidades',
        description: 'Foco em contratos de transporte aéreo, responsabilidade civil e direito internacional.',
        className: 'direito-aero level-2',
        questions: quizDataDireitoAeronauticoN2
    },

    // Navegação Aérea (NOVOS)
    'navegacao_n1': {
        title: 'Navegação Aérea',
        subtitle: 'Nível 1 - Conceitos Básicos',
        description: 'Magnetismo, orientação, coordenadas geográficas e conceitos fundamentais de navegação.',
        className: 'navegacao',
        questions: quizNavN1
    },

    'navegacao_n2': {
        title: 'Navegação Aérea',
        subtitle: 'Nível 2 - Cálculos e Fusos',
        description: 'Cálculos de conversão de unidades, fusos horários, tempo e pé de galinha.',
        className: 'navegacao level-2',
        questions: quizNavN2
    },

    // Conhecimentos Gerais de Aeronaves - CGA (NOVOS)
    'cga_n1': {
        title: 'Conhecimentos Gerais (CGA)',
        subtitle: 'Nível 1 - Estruturas',
        description: 'Estruturas da aeronave, componentes básicos, definições e classificação.',
        className: 'cga',
        questions: quizCGANivel1
    },
    
    'cga_n2': {
        title: 'Conhecimentos Gerais (CGA)',
        subtitle: 'Nível 2 - Teoria e Sistemas',
        description: 'Teoria de voo, aerodinâmica, motores, instrumentos e sistemas da aeronave.',
        className: 'cga level-2',
        questions: quizCGANivel2
    },
    // === SIMULADO BLOCO 1 (20 Questões - Balanceado) ===
    'simulado_bloco_1_rapido': {
        title: 'Simulado Bloco 1',
        subtitle: '20 Questões',
        description: 'Simulado oficial do Bloco 1 com 5 questões sorteadas de cada matéria: Emergência, Sobrevivência, Combate ao fogo e Fatores Humanos na Aviação Civil.',
        className: 'simulado-rapido',
        
        // CONFIGURAÇÃO BALANCEADA (5 de cada):
        composition: [
            { 
                // Matéria 1: Emergência a Bordo
                count: 5, 
                sources: [quizDataEmergenciaN1, quizDataEmergenciaN2] 
            },
            { 
                // Matéria 2: Sobrevivência (Foco em Peçonhentos)
                count: 5, 
                sources: [quizDataAnimaisPeconhentos] 
            },
            { 
                // Matéria 3: Combate ao Fogo
                count: 5, 
                sources: [quizDataCombateFogo] 
            },
            { 
                // Matéria 4: Fatores Humanos (Segurança de Voo)
                count: 5, 
                sources: [quizDataSegVooN1, quizDataSegVooN2] 
            }
        ]
    },
    // === SIMULADO BLOCO 2 (20 Questões - Balanceado) ===
    'simulado_bloco_2_rapido': {
        title: 'Simulado Bloco 2',
        subtitle: '20 Questões - Sorteio',
        description: 'Simulado oficial do Bloco 2: Aeronauta, Regulamentação Geral, Sistema de Aviação e Segurança de Voo.',
        className: 'simulado-bloco-2',
        
        // CONFIGURAÇÃO BALANCEADA (5 de cada):
        composition: [
            { 
                // Matéria 1: Regulamentação da Profissão do Aeronauta
                count: 5, 
                sources: [quizDataAeronautaN1, quizDataAeronautaN2] 
            },
            { 
                // Matéria 2: Regulamentação da Aviação Civil (Direito)
                count: 5, 
                sources: [quizDataDireitoAeronauticoN1, quizDataDireitoAeronauticoN2] 
            },
            { 
                // Matéria 3: Sistema de Aviação Civil
                count: 5, 
                sources: [quizDataSistAvCivilN1, quizDataSistAvCivilN2] 
            },
            { 
                // Matéria 4: Segurança de Voo
                count: 5, 
                sources: [quizDataSegVooN1, quizDataSegVooN2] 
            }
        ]
    },
    // === SIMULADO BLOCO 3 (20 Questões - Saúde) ===
    'simulado_bloco_3_rapido': {
        title: 'Simulado Bloco 3',
        subtitle: '20 Questões - Sorteio',
        description: 'Simulado oficial do Bloco 3: Fisiologia de Voo e Primeiros Socorros na Aviação Civil.',
        className: 'simulado-bloco-3',
        
        // COMPOSIÇÃO (10 de cada):
        composition: [
            { 
                // Matéria 1: Aspectos Fisiológicos
                count: 10, 
                sources: [quizDataFisiologiaN1, quizDataFisiologiaN2, quizDataAspectosFisiologicosN1] 
            },
            { 
                // Matéria 2: Primeiros Socorros
                count: 10, 
                sources: [quizDataPrimeirosSocorros, quizDataPrimeirosSocorrosN2] 
            }
        ]
    },

    // === SIMULADO BLOCO 4 (20 Questões - Técnico) ===
    'simulado_bloco_4_rapido': {
        title: 'Simulado Bloco 4',
        subtitle: '20 Questões - Sorteio',
        description: 'Simulado oficial do Bloco 4: Conhecimentos Gerais (CGA), Meteorologia e Navegação Aérea.',
        className: 'simulado-bloco-4',
        
        // COMPOSIÇÃO (7 + 7 + 6 = 20):
        composition: [
            { 
                // Matéria 1: Meteorologia
                count: 7, 
                sources: [quizDataMeteorologiaN1, quizDataMeteorologiaN2] 
            },
            { 
                // Matéria 2: Navegação Aérea
                count: 7, 
                sources: [quizNavN1, quizNavN2] 
            },
            { 
                // Matéria 3: Conhecimentos Gerais (CGA)
                count: 6, 
                sources: [quizCGANivel1, quizCGANivel2] 
            }
        ]
    }
};