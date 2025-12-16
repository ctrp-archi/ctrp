import { useLanguage } from '../contexts/LanguageContext';

// Hook de traduction qui utilise le contexte de langue existant
export const useTranslation = () => {
  const { language, t } = useLanguage();

  // Traductions spécifiques pour la page Projects
  const projectTranslations = {
    pt: {
      'projects.all': 'TODOS',
      'projects.renovations': 'RENOVAÇÕES',
      'projects.new': 'NOVOS',
      'projects.residential': 'HABITAÇÕES',
      'projects.servicesProjects': 'SERVIÇOS',
      'projects.ctaContact': 'Tem um projeto em mente? Contacte-nos para uma primeira consulta gratuita.',
      'projects.ctaContactButton': 'CONTACTAR-NOS',
      'projectDetail.projectNotFound': 'Projeto não encontrado',
      'projectDetail.backToProjects': 'Voltar aos projetos',
      'projectDetail.period': 'Período',
      'projectDetail.locationLabel': 'Localização',
      'projectDetail.surface': 'Superfície',
      'projectDetail.budget': 'Orçamento',
      'projectDetail.similarProject': 'Projeto similar?',
      // Services page translations
      'services.heroTitle': 'Serviços',
      'services.heroSubtitle': 'Acompanhamos os seus projetos da análise prévia à entrega final, com rigor técnico e visão estratégica.',
      'services.ctaText': 'Tem um projeto em mente? Contacte-nos para uma primeira consulta.',
      // Axe 1 - Conseil
      'services.axis1Title': 'Aconselhamento',
      'services.axis1Subtitle': 'Orientação estratégica antes e durante a aquisição',
      'services.conseil1Title': 'Técnico e Arquitetónico',
      'services.conseil1Desc': 'Avaliação da qualidade construtiva, identificação de problemas técnicos e validação da viabilidade do programa.',
      'services.conseil1Point1': 'Visita técnica e diagnóstico',
      'services.conseil1Point2': 'Análise da construção existente',
      'services.conseil1Point3': 'Validação da viabilidade do projeto',
      'services.conseil2Title': 'Administrativo e Jurídico',
      'services.conseil2Desc': 'Análise do enquadramento regulamentar e verificação da legalidade do imóvel.',
      'services.conseil2Point1': 'Consulta do processo municipal',
      'services.conseil2Point2': 'Análise da regulamentação aplicável',
      'services.conseil2Point3': 'Reunião com a câmara municipal',
      'services.conseil3Title': 'Financeiro e de Investimento',
      'services.conseil3Desc': 'Avaliação do potencial de valorização e estimativa dos custos de intervenção.',
      'services.conseil3Point1': 'Análise preço vs. valor',
      'services.conseil3Point2': 'Potencial de valorização',
      'services.conseil3Point3': 'Estimativa de custos',
      // Axe 2 - Projeto
      'services.axis2Title': 'Projeto',
      'services.axis2Subtitle': 'Da conceção à execução técnica',
      'services.projet1Title': 'Estudo Prévio',
      'services.projet1Desc': 'Análise das condições do terreno e definição da melhor solução de intervenção.',
      'services.projet1Point1': 'Plantas, cortes e fachadas conceptuais',
      'services.projet1Point2': 'Memória descritiva',
      'services.projet1Point3': 'Estimativa orçamental',
      'services.projet2Title': 'Licenciamento',
      'services.projet2Desc': 'Gestão do processo de licenciamento junto da câmara municipal.',
      'services.projet2Point1': 'Preparação do projeto de arquitetura',
      'services.projet2Point2': 'Coordenação das especialidades',
      'services.projet2Point3': 'Submissão e acompanhamento',
      'services.projet3Title': 'Projeto de Execução',
      'services.projet3Desc': 'Definição detalhada de acabamentos, equipamentos e coordenação das especialidades.',
      'services.projet3Point1': 'Desenhos detalhados a várias escalas',
      'services.projet3Point2': 'Mapa de trabalhos e quantidades',
      'services.projet3Point3': 'Estimativa orçamental detalhada',
      // Axe 3 - Chantier
      'services.axis3Title': 'Obra',
      'services.axis3Subtitle': 'Acompanhamento e supervisão da execução',
      'services.chantier1Title': 'Concurso e Adjudicação',
      'services.chantier1Desc': 'Assistência na seleção do empreiteiro e negociação contratual.',
      'services.chantier1Point1': 'Preparação dos documentos de concurso',
      'services.chantier1Point2': 'Análise das propostas',
      'services.chantier1Point3': 'Apoio na negociação',
      'services.chantier2Title': 'Assistência Técnica',
      'services.chantier2Desc': 'Acompanhamento regular da obra com reuniões semanais.',
      'services.chantier2Point1': 'Visitas regulares ao estaleiro',
      'services.chantier2Point2': 'Esclarecimento de dúvidas técnicas',
      'services.chantier2Point3': 'Análise de documentos dos fornecedores',
      'services.chantier3Title': 'Fiscalização',
      'services.chantier3Desc': 'Verificação da conformidade da execução com os projetos aprovados.',
      'services.chantier3Point1': 'Controlo de conformidade',
      'services.chantier3Point2': 'Controlo de prazos e custos',
      'services.chantier3Point3': 'Verificação das normas legais'
    },
    fr: {
      'projects.all': 'TOUS',
      'projects.renovations': 'RÉNOVATIONS',
      'projects.new': 'NEUFS',
      'projects.residential': 'HABITATIONS',
      'projects.servicesProjects': 'SERVICES',
      'projects.ctaContact': 'Vous avez un projet en tête ? Contactez-nous pour une première consultation gratuite.',
      'projects.ctaContactButton': 'NOUS CONTACTER',
      'projectDetail.projectNotFound': 'Projet non trouvé',
      'projectDetail.backToProjects': 'Retour aux projets',
      'projectDetail.period': 'Période',
      'projectDetail.locationLabel': 'Localisation',
      'projectDetail.surface': 'Surface',
      'projectDetail.budget': 'Budget',
      'projectDetail.similarProject': 'Projet similaire ?',
      // Services page translations
      'services.heroTitle': 'Services',
      'services.heroSubtitle': 'Nous accompagnons vos projets de l\'analyse préalable à la livraison finale, avec rigueur technique et vision stratégique.',
      'services.ctaText': 'Vous avez un projet en tête ? Contactez-nous pour une première consultation.',
      // Axe 1 - Conseil
      'services.axis1Title': 'Conseil et Accompagnement',
      'services.axis1Subtitle': 'Orientation stratégique avant et pendant l\'acquisition',
      'services.conseil1Title': 'Technique et Architectural',
      'services.conseil1Desc': 'Évaluation de la qualité constructive, identification des problèmes techniques et validation de la faisabilité du programme.',
      'services.conseil1Point1': 'Visite technique et diagnostic',
      'services.conseil1Point2': 'Analyse de la construction existante',
      'services.conseil1Point3': 'Validation de la faisabilité du projet',
      'services.conseil2Title': 'Administratif et Juridique',
      'services.conseil2Desc': 'Analyse du cadre réglementaire et vérification de la légalité du bien.',
      'services.conseil2Point1': 'Consultation du dossier municipal',
      'services.conseil2Point2': 'Analyse de la réglementation applicable',
      'services.conseil2Point3': 'Réunion avec la municipalité',
      'services.conseil3Title': 'Financier et Investissement',
      'services.conseil3Desc': 'Évaluation du potentiel de valorisation et estimation des coûts d\'intervention.',
      'services.conseil3Point1': 'Analyse prix vs. valeur',
      'services.conseil3Point2': 'Potentiel de valorisation',
      'services.conseil3Point3': 'Estimation des coûts',
      // Axe 2 - Projet
      'services.axis2Title': 'Projet',
      'services.axis2Subtitle': 'De la conception à l\'exécution technique',
      'services.projet1Title': 'Étude Préalable',
      'services.projet1Desc': 'Analyse des conditions du site et définition de la meilleure solution d\'intervention.',
      'services.projet1Point1': 'Plans, coupes et façades conceptuels',
      'services.projet1Point2': 'Notice descriptive',
      'services.projet1Point3': 'Estimation budgétaire',
      'services.projet2Title': 'Permis / Déclaration Préalable',
      'services.projet2Desc': 'Gestion du processus d\'autorisation auprès de la mairie.',
      'services.projet2Point1': 'Préparation du projet architectural',
      'services.projet2Point2': 'Coordination des spécialités',
      'services.projet2Point3': 'Soumission et suivi',
      'services.projet3Title': 'Projet d\'Exécution',
      'services.projet3Desc': 'Définition détaillée des finitions, équipements et coordination des spécialités.',
      'services.projet3Point1': 'Dessins détaillés à différentes échelles',
      'services.projet3Point2': 'Bordereau de travaux et quantités',
      'services.projet3Point3': 'Estimation budgétaire détaillée',
      // Axe 3 - Chantier
      'services.axis3Title': 'Chantier',
      'services.axis3Subtitle': 'Accompagnement et supervision de l\'exécution',
      'services.chantier1Title': 'Appel d\'Offres et Adjudication',
      'services.chantier1Desc': 'Assistance dans la sélection de l\'entrepreneur et négociation contractuelle.',
      'services.chantier1Point1': 'Préparation des documents d\'appel d\'offres',
      'services.chantier1Point2': 'Analyse des propositions',
      'services.chantier1Point3': 'Appui à la négociation',
      'services.chantier2Title': 'Assistance Technique',
      'services.chantier2Desc': 'Suivi régulier du chantier avec réunions hebdomadaires.',
      'services.chantier2Point1': 'Visites régulières du chantier',
      'services.chantier2Point2': 'Clarification des questions techniques',
      'services.chantier2Point3': 'Analyse des documents fournisseurs',
      'services.chantier3Title': 'Contrôle et Supervision',
      'services.chantier3Desc': 'Vérification de la conformité de l\'exécution avec les projets approuvés.',
      'services.chantier3Point1': 'Contrôle de conformité',
      'services.chantier3Point2': 'Contrôle des délais et coûts',
      'services.chantier3Point3': 'Vérification des normes légales'
    },
    en: {
      'projects.all': 'ALL',
      'projects.renovations': 'RENOVATIONS',
      'projects.new': 'NEW',
      'projects.residential': 'RESIDENTIAL',
      'projects.servicesProjects': 'SERVICES',
      'projects.ctaContact': 'Do you have a project in mind? Contact us for a free initial consultation.',
      'projects.ctaContactButton': 'CONTACT US',
      'projectDetail.projectNotFound': 'Project not found',
      'projectDetail.backToProjects': 'Back to projects',
      'projectDetail.period': 'Period',
      'projectDetail.locationLabel': 'Location',
      'projectDetail.surface': 'Surface',
      'projectDetail.budget': 'Budget',
      'projectDetail.similarProject': 'Similar project?',
      // Services page translations
      'services.heroTitle': 'Services',
      'services.heroSubtitle': 'We accompany your projects from preliminary analysis to final delivery, with technical rigor and strategic vision.',
      'services.ctaText': 'Do you have a project in mind? Contact us for an initial consultation.',
      // Axis 1 - Consulting
      'services.axis1Title': 'Consulting & Support',
      'services.axis1Subtitle': 'Strategic guidance before and during acquisition',
      'services.conseil1Title': 'Technical & Architectural',
      'services.conseil1Desc': 'Assessment of construction quality, identification of technical issues and validation of program feasibility.',
      'services.conseil1Point1': 'Technical visit and diagnosis',
      'services.conseil1Point2': 'Analysis of existing construction',
      'services.conseil1Point3': 'Project feasibility validation',
      'services.conseil2Title': 'Administrative & Legal',
      'services.conseil2Desc': 'Analysis of the regulatory framework and verification of property legality.',
      'services.conseil2Point1': 'Municipal file consultation',
      'services.conseil2Point2': 'Applicable regulations analysis',
      'services.conseil2Point3': 'Meeting with municipality',
      'services.conseil3Title': 'Financial & Investment',
      'services.conseil3Desc': 'Assessment of valorization potential and estimation of intervention costs.',
      'services.conseil3Point1': 'Price vs. value analysis',
      'services.conseil3Point2': 'Valorization potential',
      'services.conseil3Point3': 'Cost estimation',
      // Axis 2 - Project
      'services.axis2Title': 'Project',
      'services.axis2Subtitle': 'From design to technical execution',
      'services.projet1Title': 'Preliminary Study',
      'services.projet1Desc': 'Analysis of site conditions and definition of the best intervention solution.',
      'services.projet1Point1': 'Conceptual plans, sections and elevations',
      'services.projet1Point2': 'Descriptive report',
      'services.projet1Point3': 'Budget estimate',
      'services.projet2Title': 'Permit / Prior Declaration',
      'services.projet2Desc': 'Management of the authorization process with the municipality.',
      'services.projet2Point1': 'Architectural project preparation',
      'services.projet2Point2': 'Specialties coordination',
      'services.projet2Point3': 'Submission and follow-up',
      'services.projet3Title': 'Execution Project',
      'services.projet3Desc': 'Detailed definition of finishes, equipment and specialties coordination.',
      'services.projet3Point1': 'Detailed drawings at various scales',
      'services.projet3Point2': 'Bill of quantities',
      'services.projet3Point3': 'Detailed budget estimate',
      // Axis 3 - Construction
      'services.axis3Title': 'Construction',
      'services.axis3Subtitle': 'Execution monitoring and supervision',
      'services.chantier1Title': 'Tender & Award',
      'services.chantier1Desc': 'Assistance in contractor selection and contractual negotiation.',
      'services.chantier1Point1': 'Tender documents preparation',
      'services.chantier1Point2': 'Proposals analysis',
      'services.chantier1Point3': 'Negotiation support',
      'services.chantier2Title': 'Technical Assistance',
      'services.chantier2Desc': 'Regular construction site monitoring with weekly meetings.',
      'services.chantier2Point1': 'Regular site visits',
      'services.chantier2Point2': 'Technical questions clarification',
      'services.chantier2Point3': 'Supplier documents analysis',
      'services.chantier3Title': 'Control & Supervision',
      'services.chantier3Desc': 'Verification of execution compliance with approved projects.',
      'services.chantier3Point1': 'Compliance control',
      'services.chantier3Point2': 'Schedule and cost control',
      'services.chantier3Point3': 'Legal standards verification'
    }
  };

  // About page translations
  const aboutTranslations = {
    pt: {
      'about.heroTitle': 'Sobre Nós',
      'about.philosophy': 'A nossa experiência ao seu serviço',
      'about.vision': 'Respondemos aos desafios de cada projeto com um único objetivo: satisfazer plenamente as expectativas dos nossos clientes.',
      // Pourquoi nous choisir
      'about.whyChooseTitle': 'Porquê Escolher-nos',
      'about.experience': 'Experiência',
      'about.experienceText': '25 anos de presença no mercado, tanto em construção nova como em reabilitação de edifícios de diferentes épocas.',
      'about.flexibility': 'Flexibilidade',
      'about.flexibilityText': 'Rigor técnico aliado a uma forte capacidade de adaptação das soluções à realidade do terreno.',
      'about.support': 'Acompanhamento',
      'about.supportText': 'Serviço dedicado e profissional ao longo de todo o processo, coordenando os diferentes intervenientes.',
      'about.investmentValue': 'Investir nos nossos serviços de arquitetura é um investimento com rentabilidade garantida — seja no uso, na manutenção, no arrendamento ou na revenda do imóvel.',
      // Valores
      'about.valuesTitle': 'Os Nossos Valores',
      'about.architecturalSensitivity': 'Sensibilidade Arquitetónica',
      'about.architecturalSensitivityText': 'Intervenções que respeitam e valorizam o património existente, integrando todas as condicionantes do projeto.',
      'about.technicalRigor': 'Rigor Técnico',
      'about.technicalRigorText': 'Procura da melhor solução técnica, combinando segurança, integração e controlo de custos.',
      'about.economicPragmatism': 'Pragmatismo Económico',
      'about.economicPragmatismText': 'Cada intervenção é adaptada aos objetivos e restrições, com total transparência sobre os desafios envolvidos.',
      // História
      'about.historyTitle': 'A Nossa História',
      'about.historyText1': 'Fundado em 2009 em Lisboa por Christophe Tilliet e Rita Pires, o atelier CTRP nasceu inicialmente para gerir os seus próprios projetos de investimento imobiliário.',
      'about.historyText2': 'A nossa atividade centra-se na reabilitação, habitação, acompanhamento de obras, consultoria e avaliação imobiliária.',
      'about.historyText3': 'Os nossos associados acumulam mais de 25 anos de prática profissional, dos quais 18 foram adquiridos noutras estruturas de referência.',
      // Fondateurs
      'about.foundersTitle': 'Os Fundadores',
      'about.christopheBorn': 'Nascido em 1975 na Bélgica',
      'about.christopheGraduated': 'Instituto Victor Horta',
      'about.christopheArrival': 'Em Portugal desde 2001',
      'about.ritaBorn': 'Nascida em 1978 em Portugal',
      'about.ritaGraduated': 'Universidade Técnica de Lisboa',
      'about.ritaLocation': 'Lisboa',
      // CTA
      'about.ctaServices': 'Tem um projeto? Fale connosco para uma primeira consulta.'
    },
    fr: {
      'about.heroTitle': 'Nous',
      'about.philosophy': 'Notre expérience à votre service',
      'about.vision': 'Répondre aux défis de chaque projet avec un seul objectif : satisfaire pleinement les attentes de nos clients.',
      // Pourquoi nous choisir
      'about.whyChooseTitle': 'Pourquoi Nous Choisir',
      'about.experience': 'Expérience',
      'about.experienceText': '25 ans de présence sur le marché, en construction neuve comme en réhabilitation de bâtiments de différentes époques.',
      'about.flexibility': 'Flexibilité',
      'about.flexibilityText': 'Rigueur technique alliée à une forte capacité d\'adaptation des solutions à la réalité du terrain.',
      'about.support': 'Accompagnement',
      'about.supportText': 'Service dédié et professionnel tout au long du processus, en coordonnant les différents intervenants.',
      'about.investmentValue': 'Investir dans nos services d\'architecture, c\'est un investissement à rentabilité garantie — que ce soit à l\'usage, à l\'entretien, à la location ou à la revente du bien.',
      // Valeurs
      'about.valuesTitle': 'Nos Valeurs',
      'about.architecturalSensitivity': 'Sensibilité Architecturale',
      'about.architecturalSensitivityText': 'Des interventions qui respectent et valorisent le patrimoine existant, en intégrant l\'ensemble des contraintes du projet.',
      'about.technicalRigor': 'Rigueur Technique',
      'about.technicalRigorText': 'Recherche de la meilleure solution technique en combinant sécurité, intégration et maîtrise des coûts.',
      'about.economicPragmatism': 'Pragmatisme Économique',
      'about.economicPragmatismText': 'Chaque intervention est adaptée aux objectifs et contraintes, avec une totale transparence sur les enjeux en présence.',
      // Histoire
      'about.historyTitle': 'Notre Histoire',
      'about.historyText1': 'Fondé en 2009 à Lisbonne par Christophe Tilliet et Rita Pires, l\'atelier CTRP est né initialement pour gérer leurs propres projets d\'investissement immobilier.',
      'about.historyText2': 'Notre activité se concentre sur la réhabilitation, l\'habitat, le suivi de chantier, le conseil et l\'évaluation immobilière.',
      'about.historyText3': 'Nos associés cumulent plus de 25 années de pratique professionnelle, dont 18 ont été acquises au sein d\'autres structures de référence.',
      // Fondateurs
      'about.foundersTitle': 'Les Fondateurs',
      'about.christopheBorn': 'Né en 1975 en Belgique',
      'about.christopheGraduated': 'Institut Victor Horta',
      'about.christopheArrival': 'Au Portugal depuis 2001',
      'about.ritaBorn': 'Née en 1978 au Portugal',
      'about.ritaGraduated': 'Université Technique de Lisbonne',
      'about.ritaLocation': 'Lisbonne',
      // CTA
      'about.ctaServices': 'Vous avez un projet ? Contactez-nous pour une première consultation.'
    },
    en: {
      'about.heroTitle': 'About',
      'about.philosophy': 'Our experience at your service',
      'about.vision': 'We address every project challenge with one goal: fully meeting our clients\' expectations.',
      // Why choose us
      'about.whyChooseTitle': 'Why Choose Us',
      'about.experience': 'Experience',
      'about.experienceText': '25 years in the market, in both new construction and rehabilitation of buildings from various eras.',
      'about.flexibility': 'Flexibility',
      'about.flexibilityText': 'Technical rigor combined with strong adaptability of solutions to on-site realities.',
      'about.support': 'Support',
      'about.supportText': 'Dedicated, professional service throughout the process, coordinating all stakeholders.',
      'about.investmentValue': 'Investing in our architectural services delivers guaranteed returns — whether through use, maintenance, rental, or resale.',
      // Values
      'about.valuesTitle': 'Our Values',
      'about.architecturalSensitivity': 'Architectural Sensitivity',
      'about.architecturalSensitivityText': 'Interventions that respect and enhance existing heritage, integrating all project constraints.',
      'about.technicalRigor': 'Technical Rigor',
      'about.technicalRigorText': 'Finding the best technical solution by combining safety, integration, and cost control.',
      'about.economicPragmatism': 'Economic Pragmatism',
      'about.economicPragmatismText': 'Each intervention is tailored to objectives and constraints, with full transparency on the challenges involved.',
      // History
      'about.historyTitle': 'Our History',
      'about.historyText1': 'Founded in 2009 in Lisbon by Christophe Tilliet and Rita Pires, CTRP studio was initially created to manage their own real estate investment projects.',
      'about.historyText2': 'Our work focuses on rehabilitation, housing, site management, consulting, and real estate valuation.',
      'about.historyText3': 'Our partners have accumulated over 25 years of professional practice, 18 of which were gained within other leading firms.',
      // Founders
      'about.foundersTitle': 'The Founders',
      'about.christopheBorn': 'Born in 1975 in Belgium',
      'about.christopheGraduated': 'Victor Horta Institute',
      'about.christopheArrival': 'In Portugal since 2001',
      'about.ritaBorn': 'Born in 1978 in Portugal',
      'about.ritaGraduated': 'Technical University of Lisbon',
      'about.ritaLocation': 'Lisbon',
      // CTA
      'about.ctaServices': 'Have a project? Contact us for an initial consultation.'
    }
  };

  // Contact page translations
  const contactTranslations = {
    pt: {
      'contact.heroLabel': 'CONTACTO',
      'contact.heroTitle': 'Contacto',
      'contact.heroSubtitle': 'Entre em contacto connosco para discutir o seu projeto. Oferecemos uma primeira consulta gratuita.',
      'contact.formLabel': 'FORMULÁRIO DE CONTACTO',
      'contact.informationLabel': 'INFORMAÇÕES DE CONTACTO',
      'contact.name': 'Nome',
      'contact.namePlaceholder': 'O seu nome completo',
      'contact.email': 'Email',
      'contact.emailPlaceholder': 'o.seu.email@exemplo.com',
      'contact.phone': 'Telefone',
      'contact.phonePlaceholder': '+351 xxx xxx xxx',
      'contact.projectType': 'Tipo de Projeto',
      'contact.selectOption': 'Selecione uma opção',
      'contact.rehabilitation': 'Reabilitação',
      'contact.newConstruction': 'Construção Nova',
      'contact.apartment': 'Apartamento',
      'contact.house': 'Moradia',
      'contact.consulting': 'Consultoria',
      'contact.evaluation': 'Avaliação',
      'contact.other': 'Outro',
      'contact.location': 'Localização',
      'contact.locationPlaceholder': 'Cidade, região',
      'contact.estimatedBudget': 'Orçamento Estimado',
      'contact.selectBudgetRange': 'Selecione uma faixa',
      'contact.budget1': 'Até 50.000€',
      'contact.budget2': '50.000€ - 100.000€',
      'contact.budget3': '100.000€ - 250.000€',
      'contact.budget4': '250.000€ - 500.000€',
      'contact.budget5': 'Mais de 500.000€',
      'contact.budgetTbd': 'A definir',
      'contact.projectDescription': 'Descrição do Projeto',
      'contact.descriptionPlaceholder': 'Descreva o seu projeto, objetivos e necessidades específicas...',
      'contact.sendMessage': 'Enviar Mensagem'
    },
    fr: {
      'contact.heroLabel': 'CONTACT',
      'contact.heroTitle': 'Contact',
      'contact.heroSubtitle': 'Contactez-nous pour discuter de votre projet. Nous offrons une première consultation gratuite.',
      'contact.formLabel': 'FORMULAIRE DE CONTACT',
      'contact.informationLabel': 'INFORMATIONS DE CONTACT',
      'contact.name': 'Nom',
      'contact.namePlaceholder': 'Votre nom complet',
      'contact.email': 'Email',
      'contact.emailPlaceholder': 'votre.email@exemple.com',
      'contact.phone': 'Téléphone',
      'contact.phonePlaceholder': '+351 xxx xxx xxx',
      'contact.projectType': 'Type de Projet',
      'contact.selectOption': 'Sélectionnez une option',
      'contact.rehabilitation': 'Réhabilitation',
      'contact.newConstruction': 'Construction Neuve',
      'contact.apartment': 'Appartement',
      'contact.house': 'Maison',
      'contact.consulting': 'Conseil',
      'contact.evaluation': 'Évaluation',
      'contact.other': 'Autre',
      'contact.location': 'Localisation',
      'contact.locationPlaceholder': 'Ville, région',
      'contact.estimatedBudget': 'Budget Estimé',
      'contact.selectBudgetRange': 'Sélectionnez une fourchette',
      'contact.budget1': 'Jusqu\'à 50.000€',
      'contact.budget2': '50.000€ - 100.000€',
      'contact.budget3': '100.000€ - 250.000€',
      'contact.budget4': '250.000€ - 500.000€',
      'contact.budget5': 'Plus de 500.000€',
      'contact.budgetTbd': 'À définir',
      'contact.projectDescription': 'Description du Projet',
      'contact.descriptionPlaceholder': 'Décrivez votre projet, objectifs et besoins spécifiques...',
      'contact.sendMessage': 'Envoyer le Message'
    },
    en: {
      'contact.heroLabel': 'CONTACT',
      'contact.heroTitle': 'Contact',
      'contact.heroSubtitle': 'Contact us to discuss your project. We offer a free initial consultation.',
      'contact.formLabel': 'CONTACT FORM',
      'contact.informationLabel': 'CONTACT INFORMATION',
      'contact.name': 'Name',
      'contact.namePlaceholder': 'Your full name',
      'contact.email': 'Email',
      'contact.emailPlaceholder': 'your.email@example.com',
      'contact.phone': 'Phone',
      'contact.phonePlaceholder': '+351 xxx xxx xxx',
      'contact.projectType': 'Project Type',
      'contact.selectOption': 'Select an option',
      'contact.rehabilitation': 'Rehabilitation',
      'contact.newConstruction': 'New Construction',
      'contact.apartment': 'Apartment',
      'contact.house': 'House',
      'contact.consulting': 'Consulting',
      'contact.evaluation': 'Evaluation',
      'contact.other': 'Other',
      'contact.location': 'Location',
      'contact.locationPlaceholder': 'City, region',
      'contact.estimatedBudget': 'Estimated Budget',
      'contact.selectBudgetRange': 'Select a range',
      'contact.budget1': 'Up to 50,000€',
      'contact.budget2': '50,000€ - 100,000€',
      'contact.budget3': '100,000€ - 250,000€',
      'contact.budget4': '250,000€ - 500,000€',
      'contact.budget5': 'Over 500,000€',
      'contact.budgetTbd': 'To be determined',
      'contact.projectDescription': 'Project Description',
      'contact.descriptionPlaceholder': 'Describe your project, objectives and specific needs...',
      'contact.sendMessage': 'Send Message'
    }
  };

  // Home page translations
  const homeTranslations = {
    pt: {
      'home.heroTitle1': 'Arquitetura',
      'home.heroTitle2': 'Contemporânea',
      'home.heroSubtitle': 'Atelier de arquitetura especializado em reabilitação urbana, habitação e consultoria imobiliária em Lisboa.',
      'home.statsLabel': 'NÚMEROS',
      'home.projectsCompleted': 'PROJETOS CONCLUÍDOS',
      'home.consultationsCompleted': 'CONSULTORIAS REALIZADAS',
      'home.yearsExperience': 'ANOS DE EXPERIÊNCIA',
      'home.consultationsInProgress': 'CONSULTORIAS EM CURSO',
      'home.projectsInProgress': 'PROJETOS EM CURSO',
      'home.constructionSites': 'OBRAS EM CURSO',
      'home.latestProjects': 'Projetos Recentes',
      'home.ourApproach': 'NOSSA ABORDAGEM',
      'home.philosophyTitle': 'Filosofia de Trabalho',
      'home.philosophyText1': 'Nossa abordagem combina rigor técnico, sensibilidade urbana e pragmatismo econômico para criar soluções arquitetônicas adaptadas ao contexto português.',
      'home.philosophyText2': 'Especializamo-nos em reabilitação urbana, valorizando o patrimônio existente enquanto respondemos às necessidades contemporâneas de habitação e trabalho.',
      'home.philosophyText3': 'Cada projeto é uma oportunidade de melhorar a qualidade de vida dos usuários, respeitando o ambiente urbano e otimizando os recursos disponíveis.',
      'home.ctaAbout': 'Descubra nossa história, nossos valores e a experiência que nos permite acompanhar seus projetos com excelência.',
      'home.ctaAboutButton': 'SOBRE NÓS',
      'home.ctaProjects': 'Descubra nossos projetos realizados e inspire-se para seu próximo projeto arquitetônico.',
      'home.ctaProjectsButton': 'PROJETOS'
    },
    fr: {
      'home.heroTitle1': 'Architecture',
      'home.heroTitle2': 'Contemporaine',
      'home.heroSubtitle': 'Atelier d\'architecture spécialisé en réhabilitation urbaine, logement et conseil immobilier à Lisbonne.',
      'home.statsLabel': 'CHIFFRES',
      'home.projectsCompleted': 'PROJETS RÉALISÉS',
      'home.consultationsCompleted': 'CONSULTATIONS RÉALISÉES',
      'home.yearsExperience': 'ANNÉES D\'EXPÉRIENCE',
      'home.consultationsInProgress': 'CONSULTATIONS EN COURS',
      'home.projectsInProgress': 'PROJETS EN COURS',
      'home.constructionSites': 'CHANTIERS EN COURS',
      'home.latestProjects': 'Projets Récents',
      'home.ourApproach': 'NOTRE APPROCHE',
      'home.philosophyTitle': 'Philosophie de Travail',
      'home.philosophyText1': 'Notre approche combine rigueur technique, sensibilité urbaine et pragmatisme économique pour créer des solutions architecturales adaptées au contexte portugais.',
      'home.philosophyText2': 'Nous nous spécialisons en réhabilitation urbaine, valorisant le patrimoine existant tout en répondant aux besoins contemporains d\'habitat et de travail.',
      'home.philosophyText3': 'Chaque projet est une opportunité d\'améliorer la qualité de vie des utilisateurs, en respectant l\'environnement urbain et en optimisant les ressources disponibles.',
      'home.ctaAbout': 'Découvrez notre histoire, nos valeurs et l\'expérience qui nous permet d\'accompagner vos projets avec excellence.',
      'home.ctaAboutButton': 'NOUS',
      'home.ctaProjects': 'Découvrez nos projets réalisés et inspirez-vous pour votre prochain projet architectural.',
      'home.ctaProjectsButton': 'PROJETS'
    },
    en: {
      'home.heroTitle1': 'Architecture',
      'home.heroTitle2': 'Contemporary',
      'home.heroSubtitle': 'Architecture studio specialized in urban rehabilitation, housing and real estate consulting in Lisbon.',
      'home.statsLabel': 'NUMBERS',
      'home.projectsCompleted': 'COMPLETED PROJECTS',
      'home.consultationsCompleted': 'CONSULTATIONS COMPLETED',
      'home.yearsExperience': 'YEARS OF EXPERIENCE',
      'home.consultationsInProgress': 'CONSULTATIONS IN PROGRESS',
      'home.projectsInProgress': 'PROJECTS IN PROGRESS',
      'home.constructionSites': 'CONSTRUCTION SITES',
      'home.latestProjects': 'Recent Projects',
      'home.ourApproach': 'OUR APPROACH',
      'home.philosophyTitle': 'Work Philosophy',
      'home.philosophyText1': 'Our approach combines technical rigor, urban sensitivity and economic pragmatism to create architectural solutions adapted to the Portuguese context.',
      'home.philosophyText2': 'We specialize in urban rehabilitation, valuing existing heritage while responding to contemporary housing and work needs.',
      'home.philosophyText3': 'Each project is an opportunity to improve users\' quality of life, respecting the urban environment and optimizing available resources.',
      'home.ctaAbout': 'Discover our history, our values and the experience that allows us to support your projects with excellence.',
      'home.ctaAboutButton': 'ABOUT',
      'home.ctaProjects': 'Discover our completed projects and get inspired for your next architectural venture.',
      'home.ctaProjectsButton': 'PROJECTS'
    }
  };

  // Cookie consent translations
  const cookieTranslations = {
    pt: {
      'cookies.title': 'Gestão de Cookies',
      'cookies.description': 'Utilizamos cookies para melhorar a sua experiência no nosso site, analisar o tráfego e personalizar conteúdo. Pode gerir as suas preferências abaixo.',
      'cookies.customize': 'Personalizar',
      'cookies.hide': 'Ocultar',
      'cookies.privacyPolicy': 'Política de Privacidade',
      'cookies.legalNotices': 'Menções Legais',
      'cookies.necessary': 'Necessários',
      'cookies.necessaryDesc': 'Essenciais para o funcionamento do site',
      'cookies.analytics': 'Analíticos',
      'cookies.analyticsDesc': 'Ajudam-nos a compreender como utiliza o site',
      'cookies.marketing': 'Marketing',
      'cookies.marketingDesc': 'Utilizados para publicidade personalizada',
      'cookies.functional': 'Funcionais',
      'cookies.functionalDesc': 'Melhoram a funcionalidade do site',
      'cookies.save': 'Guardar Preferências',
      'cookies.acceptAll': 'Aceitar Todos',
      'cookies.declineAll': 'Recusar Todos',
      'cookies.rgpdInfo': 'Conforme o RGPD, pode modificar as suas preferências a qualquer momento através do botão no rodapé.',
      'cookies.moreInfo': 'Mais informações'
    },
    fr: {
      'cookies.title': 'Gestion des Cookies',
      'cookies.description': 'Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu. Vous pouvez gérer vos préférences ci-dessous.',
      'cookies.customize': 'Personnaliser',
      'cookies.hide': 'Masquer',
      'cookies.privacyPolicy': 'Politique de Confidentialité',
      'cookies.legalNotices': 'Mentions Légales',
      'cookies.necessary': 'Nécessaires',
      'cookies.necessaryDesc': 'Essentiels au fonctionnement du site',
      'cookies.analytics': 'Analytiques',
      'cookies.analyticsDesc': 'Nous aident à comprendre comment vous utilisez le site',
      'cookies.marketing': 'Marketing',
      'cookies.marketingDesc': 'Utilisés pour la publicité personnalisée',
      'cookies.functional': 'Fonctionnels',
      'cookies.functionalDesc': 'Améliorent les fonctionnalités du site',
      'cookies.save': 'Sauvegarder les Préférences',
      'cookies.acceptAll': 'Tout Accepter',
      'cookies.declineAll': 'Tout Refuser',
      'cookies.rgpdInfo': 'Conformément au RGPD, vous pouvez modifier vos préférences à tout moment via le bouton en bas de page.',
      'cookies.moreInfo': 'Plus d\'informations'
    },
    en: {
      'cookies.title': 'Cookie Management',
      'cookies.description': 'We use cookies to improve your experience on our site, analyze traffic and personalize content. You can manage your preferences below.',
      'cookies.customize': 'Customize',
      'cookies.hide': 'Hide',
      'cookies.privacyPolicy': 'Privacy Policy',
      'cookies.legalNotices': 'Legal Notices',
      'cookies.necessary': 'Necessary',
      'cookies.necessaryDesc': 'Essential for the site to function',
      'cookies.analytics': 'Analytics',
      'cookies.analyticsDesc': 'Help us understand how you use the site',
      'cookies.marketing': 'Marketing',
      'cookies.marketingDesc': 'Used for personalized advertising',
      'cookies.functional': 'Functional',
      'cookies.functionalDesc': 'Improve site functionality',
      'cookies.save': 'Save Preferences',
      'cookies.acceptAll': 'Accept All',
      'cookies.declineAll': 'Decline All',
      'cookies.rgpdInfo': 'In accordance with GDPR, you can modify your preferences at any time via the button in the footer.',
      'cookies.moreInfo': 'More information'
    }
  };

  // Fonction de traduction étendue
  const extendedT = (key: string): string => {
    // D'abord essayer les traductions spécifiques aux projets
    const projectLang = projectTranslations[language as keyof typeof projectTranslations];
    if (projectLang && projectLang[key as keyof typeof projectLang]) {
      return projectLang[key as keyof typeof projectLang];
    }
    
    // Ensuite essayer les traductions About
    const aboutLang = aboutTranslations[language as keyof typeof aboutTranslations];
    if (aboutLang && aboutLang[key as keyof typeof aboutLang]) {
      return aboutLang[key as keyof typeof aboutLang];
    }
    
    // Ensuite essayer les traductions Contact
    const contactLang = contactTranslations[language as keyof typeof contactTranslations];
    if (contactLang && contactLang[key as keyof typeof contactLang]) {
      return contactLang[key as keyof typeof contactLang];
    }
    
    // Ensuite essayer les traductions Home
    const homeLang = homeTranslations[language as keyof typeof homeTranslations];
    if (homeLang && homeLang[key as keyof typeof homeLang]) {
      return homeLang[key as keyof typeof homeLang];
    }
    
    // Ensuite essayer les traductions Cookies
    const cookieLang = cookieTranslations[language as keyof typeof cookieTranslations];
    if (cookieLang && cookieLang[key as keyof typeof cookieLang]) {
      return cookieLang[key as keyof typeof cookieLang];
    }
    
    // Sinon utiliser la fonction de traduction existante
    return t(key);
  };

  return {
    language,
    t: extendedT
  };
};