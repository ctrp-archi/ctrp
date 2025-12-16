import React from 'react';
import { Shield, Mail, Phone, MapPin, Database, Users, Lock, Eye, Clock, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const privacyContent = {
    pt: {
      title: 'Política de Privacidade',
      
      // Introdução
      introTitle: 'Introdução',
      introText: 'A CTRP compromete-se a proteger a privacidade e os dados pessoais dos seus utilizadores, clientes e parceiros. Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos os seus dados pessoais, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação portuguesa aplicável.',
      
      // Responsável pelo tratamento
      dataControllerTitle: 'Responsável pelo Tratamento de Dados',
      identity: 'Identidade',
      socialName: 'Denominação Social',
      socialNameValue: 'CTRP LDA',
      legalForm: 'Forma Jurídica',
      legalFormValue: 'Sociedade por Quotas',
      activitySector: 'Setor de Atividade',
      activitySectorValue: 'Arquitetura e Consultoria Imobiliária',
      coordinates: 'Coordenadas',
      dpoTitle: 'Encarregado de Proteção de Dados',
      dpoText: 'Para questões relacionadas com a proteção de dados, contacte: ct@ctrp.pt ou rp@ctrp.pt',
      
      // Dados coletados
      dataCollectedTitle: 'Dados Pessoais Recolhidos',
      dataCollectedIntro: 'Recolhemos diferentes tipos de dados pessoais consoante a sua interação connosco:',
      
      contactDataTitle: 'Dados de Contacto',
      contactDataItems: [
        'Nome completo',
        'Endereço de email',
        'Número de telefone',
        'Morada postal',
        'Empresa/Organização (se aplicável)'
      ],
      
      projectDataTitle: 'Dados de Projeto',
      projectDataItems: [
        'Tipo de projeto pretendido',
        'Localização do projeto',
        'Orçamento estimado',
        'Cronograma pretendido',
        'Descrição detalhada do projeto',
        'Preferências e requisitos específicos'
      ],
      
      technicalDataTitle: 'Dados Técnicos',
      technicalDataItems: [
        'Endereço IP',
        'Tipo de navegador e versão',
        'Sistema operativo',
        'Páginas visitadas e tempo de permanência',
        'Origem do tráfego (referrer)',
        'Cookies e tecnologias similares'
      ],
      
      // Finalidades do tratamento
      purposesTitle: 'Finalidades do Tratamento',
      purposesIntro: 'Os seus dados pessoais são tratados para as seguintes finalidades:',
      
      purposes: [
        {
          title: 'Prestação de Serviços',
          description: 'Desenvolvimento de projetos de arquitetura, consultoria técnica e acompanhamento de obras',
          legalBasis: 'Execução de contrato'
        },
        {
          title: 'Comunicação',
          description: 'Resposta a pedidos de informação, orçamentos e comunicação sobre projetos',
          legalBasis: 'Interesse legítimo'
        },
        {
          title: 'Marketing',
          description: 'Envio de newsletters, informações sobre novos serviços e projetos (com consentimento)',
          legalBasis: 'Consentimento'
        },
        {
          title: 'Análise e Melhoria',
          description: 'Análise do website, melhoria dos serviços e experiência do utilizador',
          legalBasis: 'Interesse legítimo'
        },
        {
          title: 'Cumprimento Legal',
          description: 'Cumprimento de obrigações legais, contabilísticas e fiscais',
          legalBasis: 'Obrigação legal'
        }
      ],
      
      // Base legal
      legalBasisTitle: 'Base Legal do Tratamento',
      legalBasisText: 'O tratamento dos seus dados pessoais baseia-se nas seguintes bases legais previstas no RGPD:',
      
      legalBases: [
        'Consentimento explícito (Art. 6º, n.º 1, a) do RGPD)',
        'Execução de contrato (Art. 6º, n.º 1, b) do RGPD)',
        'Interesse legítimo (Art. 6º, n.º 1, f) do RGPD)',
        'Obrigação legal (Art. 6º, n.º 1, c) do RGPD)'
      ],
      
      // Partilha de dados
      dataSharingTitle: 'Partilha de Dados',
      dataSharingText: 'Os seus dados pessoais podem ser partilhados com as seguintes entidades:',
      
      dataRecipients: [
        {
          category: 'Parceiros Técnicos',
          description: 'Engenheiros, consultores especializados e outros profissionais envolvidos nos projetos',
          safeguards: 'Contratos de confidencialidade e proteção de dados'
        },
        {
          category: 'Fornecedores de Serviços',
          description: 'Empresas de hosting, email marketing, contabilidade e serviços jurídicos',
          safeguards: 'Acordos de subcontratação conforme RGPD'
        },
        {
          category: 'Autoridades Públicas',
          description: 'Câmaras municipais, autoridades fiscais e outras entidades quando legalmente exigido',
          safeguards: 'Apenas quando obrigatório por lei'
        }
      ],
      
      // Transferências internacionais
      transfersTitle: 'Transferências Internacionais',
      transfersText: 'Alguns dos nossos fornecedores de serviços podem estar localizados fora da União Europeia. Nestes casos, garantimos proteção adequada através de:',
      transfersSafeguards: [
        'Decisões de adequação da Comissão Europeia',
        'Cláusulas contratuais tipo aprovadas pela UE',
        'Certificações e códigos de conduta reconhecidos',
        'Garantias específicas de proteção de dados'
      ],
      
      // Retenção de dados
      retentionTitle: 'Período de Conservação',
      retentionText: 'Os seus dados pessoais são conservados pelos seguintes períodos:',
      
      retentionPeriods: [
        {
          category: 'Dados de Clientes Ativos',
          period: 'Durante a relação contratual + 5 anos',
          reason: 'Cumprimento de obrigações contratuais e legais'
        },
        {
          category: 'Dados de Prospects',
          period: '3 anos após último contacto',
          reason: 'Interesse legítimo em manter relacionamento comercial'
        },
        {
          category: 'Dados de Marketing',
          period: 'Até retirada do consentimento',
          reason: 'Baseado no consentimento do titular'
        },
        {
          category: 'Dados Técnicos (Analytics)',
          period: '26 meses',
          reason: 'Análise estatística e melhoria do website'
        },
        {
          category: 'Dados Contabilísticos',
          period: '10 anos',
          reason: 'Obrigações legais fiscais e contabilísticas'
        }
      ],
      
      // Direitos dos titulares
      rightsTitle: 'Os Seus Direitos',
      rightsIntro: 'Enquanto titular de dados pessoais, tem os seguintes direitos:',
      
      rights: [
        {
          right: 'Direito de Acesso',
          description: 'Obter confirmação sobre o tratamento dos seus dados e acesso aos mesmos'
        },
        {
          right: 'Direito de Retificação',
          description: 'Corrigir dados pessoais inexatos ou incompletos'
        },
        {
          right: 'Direito de Apagamento',
          description: 'Solicitar a eliminação dos seus dados pessoais (direito ao esquecimento)'
        },
        {
          right: 'Direito de Limitação',
          description: 'Restringir o tratamento dos seus dados em determinadas circunstâncias'
        },
        {
          right: 'Direito de Portabilidade',
          description: 'Receber os seus dados num formato estruturado e transmiti-los a outro responsável'
        },
        {
          right: 'Direito de Oposição',
          description: 'Opor-se ao tratamento dos seus dados por motivos relacionados com a sua situação particular'
        },
        {
          right: 'Direito de Retirada do Consentimento',
          description: 'Retirar o consentimento a qualquer momento, sem afetar a licitude do tratamento anterior'
        }
      ],
      
      // Exercício de direitos
      exerciseRightsTitle: 'Como Exercer os Seus Direitos',
      exerciseRightsText: 'Para exercer qualquer dos seus direitos, contacte-nos através de:',
      exerciseRightsEmail: 'Email: ct@ctrp.pt ou rp@ctrp.pt',
      exerciseRightsPhone: 'Telefone: +351 916 922 022',
      exerciseRightsResponse: 'Responderemos ao seu pedido no prazo máximo de 30 dias.',
      
      // Segurança
      securityTitle: 'Medidas de Segurança',
      securityText: 'Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais:',
      
      securityMeasures: [
        'Encriptação de dados em trânsito e em repouso',
        'Controlo de acesso baseado em funções',
        'Monitorização e auditoria regular dos sistemas',
        'Formação regular da equipa em proteção de dados',
        'Backup seguro e plano de recuperação de dados',
        'Avaliação regular de riscos de segurança'
      ],
      
      // Cookies
      cookiesTitle: 'Política de Cookies',
      cookiesText: 'O nosso website utiliza cookies e tecnologias similares. Para informações detalhadas, consulte a nossa política de cookies através do gestor de preferências no rodapé do website.',
      
      // Violações de dados
      breachTitle: 'Notificação de Violações',
      breachText: 'Em caso de violação de dados pessoais que possa resultar em risco para os seus direitos e liberdades, notificaremos as autoridades competentes no prazo de 72 horas e, se necessário, comunicaremos diretamente consigo.',
      
      // Reclamações
      complaintsTitle: 'Direito de Reclamação',
      complaintsText: 'Tem o direito de apresentar reclamação junto da autoridade de controlo competente:',
      complaintsAuthority: 'Comissão Nacional de Proteção de Dados (CNPD)',
      complaintsContact: 'Website: www.cnpd.pt | Email: geral@cnpd.pt',
      
      // Alterações
      changesTitle: 'Alterações à Política',
      changesText: 'Esta Política de Privacidade pode ser atualizada periodicamente. As alterações significativas serão comunicadas através do website ou por email.',
      
      // Contactos
      contactTitle: 'Contactos',
      contactText: 'Para questões sobre esta Política de Privacidade ou proteção de dados:',
      
      // Última atualização
      lastUpdate: 'Última atualização',
      lastUpdateDate: 'Janeiro de 2025'
    },
    
    fr: {
      title: 'Politique de Confidentialité',
      
      // Introduction
      introTitle: 'Introduction',
      introText: 'CTRP s\'engage à protéger la vie privée et les données personnelles de ses utilisateurs, clients et partenaires. Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation portugaise applicable.',
      
      // Responsable du traitement
      dataControllerTitle: 'Responsable du Traitement des Données',
      identity: 'Identité',
      socialName: 'Dénomination Sociale',
      socialNameValue: 'CTRP LDA',
      legalForm: 'Forme Juridique',
      legalFormValue: 'Société à Responsabilité Limitée',
      activitySector: 'Secteur d\'Activité',
      activitySectorValue: 'Architecture et Conseil Immobilier',
      coordinates: 'Coordonnées',
      dpoTitle: 'Délégué à la Protection des Données',
      dpoText: 'Pour les questions relatives à la protection des données, contactez : ct@ctrp.pt ou rp@ctrp.pt',
      
      // Données collectées
      dataCollectedTitle: 'Données Personnelles Collectées',
      dataCollectedIntro: 'Nous collectons différents types de données personnelles selon votre interaction avec nous :',
      
      contactDataTitle: 'Données de Contact',
      contactDataItems: [
        'Nom complet',
        'Adresse email',
        'Numéro de téléphone',
        'Adresse postale',
        'Entreprise/Organisation (si applicable)'
      ],
      
      projectDataTitle: 'Données de Projet',
      projectDataItems: [
        'Type de projet souhaité',
        'Localisation du projet',
        'Budget estimé',
        'Calendrier souhaité',
        'Description détaillée du projet',
        'Préférences et exigences spécifiques'
      ],
      
      technicalDataTitle: 'Données Techniques',
      technicalDataItems: [
        'Adresse IP',
        'Type et version du navigateur',
        'Système d\'exploitation',
        'Pages visitées et temps de séjour',
        'Origine du trafic (referrer)',
        'Cookies et technologies similaires'
      ],
      
      // Finalités du traitement
      purposesTitle: 'Finalités du Traitement',
      purposesIntro: 'Vos données personnelles sont traitées pour les finalités suivantes :',
      
      purposes: [
        {
          title: 'Prestation de Services',
          description: 'Développement de projets d\'architecture, conseil technique et suivi de chantiers',
          legalBasis: 'Exécution de contrat'
        },
        {
          title: 'Communication',
          description: 'Réponse aux demandes d\'information, devis et communication sur les projets',
          legalBasis: 'Intérêt légitime'
        },
        {
          title: 'Marketing',
          description: 'Envoi de newsletters, informations sur nouveaux services et projets (avec consentement)',
          legalBasis: 'Consentement'
        },
        {
          title: 'Analyse et Amélioration',
          description: 'Analyse du site web, amélioration des services et expérience utilisateur',
          legalBasis: 'Intérêt légitime'
        },
        {
          title: 'Conformité Légale',
          description: 'Respect des obligations légales, comptables et fiscales',
          legalBasis: 'Obligation légale'
        }
      ],
      
      // Base légale
      legalBasisTitle: 'Base Légale du Traitement',
      legalBasisText: 'Le traitement de vos données personnelles se base sur les bases légales suivantes prévues par le RGPD :',
      
      legalBases: [
        'Consentement explicite (Art. 6, par. 1, a) du RGPD)',
        'Exécution de contrat (Art. 6, par. 1, b) du RGPD)',
        'Intérêt légitime (Art. 6, par. 1, f) du RGPD)',
        'Obligation légale (Art. 6, par. 1, c) du RGPD)'
      ],
      
      // Partage de données
      dataSharingTitle: 'Partage de Données',
      dataSharingText: 'Vos données personnelles peuvent être partagées avec les entités suivantes :',
      
      dataRecipients: [
        {
          category: 'Partenaires Techniques',
          description: 'Ingénieurs, consultants spécialisés et autres professionnels impliqués dans les projets',
          safeguards: 'Contrats de confidentialité et protection des données'
        },
        {
          category: 'Fournisseurs de Services',
          description: 'Entreprises d\'hébergement, email marketing, comptabilité et services juridiques',
          safeguards: 'Accords de sous-traitance conformes au RGPD'
        },
        {
          category: 'Autorités Publiques',
          description: 'Mairies, autorités fiscales et autres entités quand légalement requis',
          safeguards: 'Uniquement quand obligatoire par la loi'
        }
      ],
      
      // Transferts internationaux
      transfersTitle: 'Transferts Internationaux',
      transfersText: 'Certains de nos fournisseurs de services peuvent être situés hors de l\'Union Européenne. Dans ces cas, nous garantissons une protection adéquate par :',
      transfersSafeguards: [
        'Décisions d\'adéquation de la Commission Européenne',
        'Clauses contractuelles types approuvées par l\'UE',
        'Certifications et codes de conduite reconnus',
        'Garanties spécifiques de protection des données'
      ],
      
      // Rétention des données
      retentionTitle: 'Période de Conservation',
      retentionText: 'Vos données personnelles sont conservées pour les périodes suivantes :',
      
      retentionPeriods: [
        {
          category: 'Données de Clients Actifs',
          period: 'Pendant la relation contractuelle + 5 ans',
          reason: 'Respect des obligations contractuelles et légales'
        },
        {
          category: 'Données de Prospects',
          period: '3 ans après dernier contact',
          reason: 'Intérêt légitime à maintenir la relation commerciale'
        },
        {
          category: 'Données de Marketing',
          period: 'Jusqu\'au retrait du consentement',
          reason: 'Basé sur le consentement du titulaire'
        },
        {
          category: 'Données Techniques (Analytics)',
          period: '26 mois',
          reason: 'Analyse statistique et amélioration du site web'
        },
        {
          category: 'Données Comptables',
          period: '10 ans',
          reason: 'Obligations légales fiscales et comptables'
        }
      ],
      
      // Droits des titulaires
      rightsTitle: 'Vos Droits',
      rightsIntro: 'En tant que titulaire de données personnelles, vous avez les droits suivants :',
      
      rights: [
        {
          right: 'Droit d\'Accès',
          description: 'Obtenir confirmation du traitement de vos données et accès à celles-ci'
        },
        {
          right: 'Droit de Rectification',
          description: 'Corriger les données personnelles inexactes ou incomplètes'
        },
        {
          right: 'Droit d\'Effacement',
          description: 'Demander la suppression de vos données personnelles (droit à l\'oubli)'
        },
        {
          right: 'Droit de Limitation',
          description: 'Restreindre le traitement de vos données dans certaines circonstances'
        },
        {
          right: 'Droit de Portabilité',
          description: 'Recevoir vos données dans un format structuré et les transmettre à un autre responsable'
        },
        {
          right: 'Droit d\'Opposition',
          description: 'S\'opposer au traitement de vos données pour des motifs liés à votre situation particulière'
        },
        {
          right: 'Droit de Retrait du Consentement',
          description: 'Retirer le consentement à tout moment, sans affecter la licéité du traitement antérieur'
        }
      ],
      
      // Exercice des droits
      exerciseRightsTitle: 'Comment Exercer Vos Droits',
      exerciseRightsText: 'Pour exercer l\'un de vos droits, contactez-nous via :',
      exerciseRightsEmail: 'Email : ct@ctrp.pt ou rp@ctrp.pt',
      exerciseRightsPhone: 'Téléphone : +351 916 922 022',
      exerciseRightsResponse: 'Nous répondrons à votre demande dans un délai maximum de 30 jours.',
      
      // Sécurité
      securityTitle: 'Mesures de Sécurité',
      securityText: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :',
      
      securityMeasures: [
        'Chiffrement des données en transit et au repos',
        'Contrôle d\'accès basé sur les rôles',
        'Surveillance et audit régulier des systèmes',
        'Formation régulière de l\'équipe en protection des données',
        'Sauvegarde sécurisée et plan de récupération des données',
        'Évaluation régulière des risques de sécurité'
      ],
      
      // Cookies
      cookiesTitle: 'Politique de Cookies',
      cookiesText: 'Notre site web utilise des cookies et technologies similaires. Pour des informations détaillées, consultez notre politique de cookies via le gestionnaire de préférences en bas de page.',
      
      // Violations de données
      breachTitle: 'Notification de Violations',
      breachText: 'En cas de violation de données personnelles pouvant entraîner un risque pour vos droits et libertés, nous notifierons les autorités compétentes dans les 72 heures et, si nécessaire, communiquerons directement avec vous.',
      
      // Réclamations
      complaintsTitle: 'Droit de Réclamation',
      complaintsText: 'Vous avez le droit de déposer une réclamation auprès de l\'autorité de contrôle compétente :',
      complaintsAuthority: 'Commission Nationale de Protection des Données (CNPD)',
      complaintsContact: 'Site web : www.cnpd.pt | Email : geral@cnpd.pt',
      
      // Modifications
      changesTitle: 'Modifications de la Politique',
      changesText: 'Cette Politique de Confidentialité peut être mise à jour périodiquement. Les modifications importantes seront communiquées via le site web ou par email.',
      
      // Contacts
      contactTitle: 'Contacts',
      contactText: 'Pour les questions sur cette Politique de Confidentialité ou la protection des données :',
      
      // Dernière mise à jour
      lastUpdate: 'Dernière mise à jour',
      lastUpdateDate: 'Janvier 2025'
    },
    
    en: {
      title: 'Privacy Policy',
      
      // Introduction
      introTitle: 'Introduction',
      introText: 'CTRP is committed to protecting the privacy and personal data of its users, clients and partners. This Privacy Policy explains how we collect, use, store and protect your personal data, in accordance with the General Data Protection Regulation (GDPR) and applicable Portuguese legislation.',
      
      // Data controller
      dataControllerTitle: 'Data Controller',
      identity: 'Identity',
      socialName: 'Company Name',
      socialNameValue: 'CTRP LDA',
      legalForm: 'Legal Form',
      legalFormValue: 'Limited Liability Company',
      activitySector: 'Activity Sector',
      activitySectorValue: 'Architecture and Real Estate Consulting',
      coordinates: 'Contact Details',
      dpoTitle: 'Data Protection Officer',
      dpoText: 'For data protection related questions, contact: ct@ctrp.pt or rp@ctrp.pt',
      
      // Data collected
      dataCollectedTitle: 'Personal Data Collected',
      dataCollectedIntro: 'We collect different types of personal data depending on your interaction with us:',
      
      contactDataTitle: 'Contact Data',
      contactDataItems: [
        'Full name',
        'Email address',
        'Phone number',
        'Postal address',
        'Company/Organization (if applicable)'
      ],
      
      projectDataTitle: 'Project Data',
      projectDataItems: [
        'Desired project type',
        'Project location',
        'Estimated budget',
        'Desired timeline',
        'Detailed project description',
        'Specific preferences and requirements'
      ],
      
      technicalDataTitle: 'Technical Data',
      technicalDataItems: [
        'IP address',
        'Browser type and version',
        'Operating system',
        'Pages visited and time spent',
        'Traffic source (referrer)',
        'Cookies and similar technologies'
      ],
      
      // Processing purposes
      purposesTitle: 'Processing Purposes',
      purposesIntro: 'Your personal data is processed for the following purposes:',
      
      purposes: [
        {
          title: 'Service Provision',
          description: 'Development of architecture projects, technical consulting and construction monitoring',
          legalBasis: 'Contract execution'
        },
        {
          title: 'Communication',
          description: 'Response to information requests, quotes and project communication',
          legalBasis: 'Legitimate interest'
        },
        {
          title: 'Marketing',
          description: 'Sending newsletters, information about new services and projects (with consent)',
          legalBasis: 'Consent'
        },
        {
          title: 'Analysis and Improvement',
          description: 'Website analysis, service improvement and user experience',
          legalBasis: 'Legitimate interest'
        },
        {
          title: 'Legal Compliance',
          description: 'Compliance with legal, accounting and tax obligations',
          legalBasis: 'Legal obligation'
        }
      ],
      
      // Legal basis
      legalBasisTitle: 'Legal Basis for Processing',
      legalBasisText: 'The processing of your personal data is based on the following legal bases provided for in the GDPR:',
      
      legalBases: [
        'Explicit consent (Art. 6, par. 1, a) of GDPR)',
        'Contract execution (Art. 6, par. 1, b) of GDPR)',
        'Legitimate interest (Art. 6, par. 1, f) of GDPR)',
        'Legal obligation (Art. 6, par. 1, c) of GDPR)'
      ],
      
      // Data sharing
      dataSharingTitle: 'Data Sharing',
      dataSharingText: 'Your personal data may be shared with the following entities:',
      
      dataRecipients: [
        {
          category: 'Technical Partners',
          description: 'Engineers, specialized consultants and other professionals involved in projects',
          safeguards: 'Confidentiality and data protection contracts'
        },
        {
          category: 'Service Providers',
          description: 'Hosting companies, email marketing, accounting and legal services',
          safeguards: 'GDPR-compliant subcontracting agreements'
        },
        {
          category: 'Public Authorities',
          description: 'Municipalities, tax authorities and other entities when legally required',
          safeguards: 'Only when mandatory by law'
        }
      ],
      
      // International transfers
      transfersTitle: 'International Transfers',
      transfersText: 'Some of our service providers may be located outside the European Union. In these cases, we ensure adequate protection through:',
      transfersSafeguards: [
        'European Commission adequacy decisions',
        'EU-approved standard contractual clauses',
        'Recognized certifications and codes of conduct',
        'Specific data protection guarantees'
      ],
      
      // Data retention
      retentionTitle: 'Retention Period',
      retentionText: 'Your personal data is retained for the following periods:',
      
      retentionPeriods: [
        {
          category: 'Active Client Data',
          period: 'During contractual relationship + 5 years',
          reason: 'Compliance with contractual and legal obligations'
        },
        {
          category: 'Prospect Data',
          period: '3 years after last contact',
          reason: 'Legitimate interest in maintaining business relationship'
        },
        {
          category: 'Marketing Data',
          period: 'Until consent withdrawal',
          reason: 'Based on data subject consent'
        },
        {
          category: 'Technical Data (Analytics)',
          period: '26 months',
          reason: 'Statistical analysis and website improvement'
        },
        {
          category: 'Accounting Data',
          period: '10 years',
          reason: 'Legal tax and accounting obligations'
        }
      ],
      
      // Data subject rights
      rightsTitle: 'Your Rights',
      rightsIntro: 'As a personal data subject, you have the following rights:',
      
      rights: [
        {
          right: 'Right of Access',
          description: 'Obtain confirmation about the processing of your data and access to it'
        },
        {
          right: 'Right of Rectification',
          description: 'Correct inaccurate or incomplete personal data'
        },
        {
          right: 'Right of Erasure',
          description: 'Request deletion of your personal data (right to be forgotten)'
        },
        {
          right: 'Right of Restriction',
          description: 'Restrict the processing of your data in certain circumstances'
        },
        {
          right: 'Right of Portability',
          description: 'Receive your data in a structured format and transmit it to another controller'
        },
        {
          right: 'Right of Objection',
          description: 'Object to the processing of your data for reasons related to your particular situation'
        },
        {
          right: 'Right to Withdraw Consent',
          description: 'Withdraw consent at any time, without affecting the lawfulness of previous processing'
        }
      ],
      
      // Exercise of rights
      exerciseRightsTitle: 'How to Exercise Your Rights',
      exerciseRightsText: 'To exercise any of your rights, contact us via:',
      exerciseRightsEmail: 'Email: ct@ctrp.pt or rp@ctrp.pt',
      exerciseRightsPhone: 'Phone: +351 916 922 022',
      exerciseRightsResponse: 'We will respond to your request within a maximum of 30 days.',
      
      // Security
      securityTitle: 'Security Measures',
      securityText: 'We implement appropriate technical and organizational measures to protect your personal data:',
      
      securityMeasures: [
        'Data encryption in transit and at rest',
        'Role-based access control',
        'Regular system monitoring and auditing',
        'Regular team training in data protection',
        'Secure backup and data recovery plan',
        'Regular security risk assessment'
      ],
      
      // Cookies
      cookiesTitle: 'Cookie Policy',
      cookiesText: 'Our website uses cookies and similar technologies. For detailed information, see our cookie policy through the preferences manager in the website footer.',
      
      // Data breaches
      breachTitle: 'Breach Notification',
      breachText: 'In case of a personal data breach that may result in risk to your rights and freedoms, we will notify the competent authorities within 72 hours and, if necessary, communicate directly with you.',
      
      // Complaints
      complaintsTitle: 'Right to Complaint',
      complaintsText: 'You have the right to file a complaint with the competent supervisory authority:',
      complaintsAuthority: 'National Data Protection Commission (CNPD)',
      complaintsContact: 'Website: www.cnpd.pt | Email: geral@cnpd.pt',
      
      // Changes
      changesTitle: 'Policy Changes',
      changesText: 'This Privacy Policy may be updated periodically. Significant changes will be communicated through the website or by email.',
      
      // Contact
      contactTitle: 'Contact',
      contactText: 'For questions about this Privacy Policy or data protection:',
      
      // Last update
      lastUpdate: 'Last updated',
      lastUpdateDate: 'January 2025'
    }
  };

  const content = privacyContent[language as keyof typeof privacyContent];

  return (
    <div className="bg-dark-950 text-white min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl md:text-6xl font-light text-white mb-12">
          {content.title}
        </h1>
        
        <div className="space-y-16">
          
          {/* Introduction */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-6 flex items-center">
              <FileText className="h-6 w-6 text-accent-500 mr-3" />
              {content.introTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed">{content.introText}</p>
            </div>
          </section>

          {/* Responsável pelo tratamento */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Shield className="h-6 w-6 text-accent-500 mr-3" />
              {content.dataControllerTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-4">{content.identity}</h3>
                  <div className="space-y-2 text-accent-400">
                    <p><strong className="font-display text-white">{content.socialName}:</strong> {content.socialNameValue}</p>
                    <p><strong className="font-display text-white">{content.legalForm}:</strong> {content.legalFormValue}</p>
                    <p><strong className="font-display text-white">{content.activitySector}:</strong> {content.activitySectorValue}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-4">{content.coordinates}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-accent-400">
                      <MapPin className="h-4 w-4 mr-3 text-accent-500" />
                      <div>
                        <p>Rua Cristóvão Figueiredo 11B</p>
                        <p>1600-049 Lisboa, Portugal</p>
                      </div>
                    </div>
                    <div className="flex items-center text-accent-400">
                      <Mail className="h-4 w-4 mr-3 text-accent-500" />
                      <div className="space-y-2">
                        <a href="mailto:ct@ctrp.pt" className="font-display hover:text-white transition-colors block">
                          ct@ctrp.pt
                        </a>
                        <a href="mailto:rp@ctrp.pt" className="font-display hover:text-white transition-colors block">
                          rp@ctrp.pt
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center text-accent-400">
                      <Phone className="h-4 w-4 mr-3 text-accent-500" />
                      <a href="tel:+351916922022" className="font-display hover:text-white transition-colors">
                        +351 916 922 022
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent-500/10 border border-accent-500/30 p-6">
                <h3 className="font-display font-medium text-white mb-2">{content.dpoTitle}</h3>
                <p className="text-sm text-accent-400">{content.dpoText}</p>
              </div>
            </div>
          </section>

          {/* Dados coletados */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Database className="h-6 w-6 text-accent-500 mr-3" />
              {content.dataCollectedTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-8">{content.dataCollectedIntro}</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-4">{content.contactDataTitle}</h3>
                  <ul className="space-y-2">
                    {content.contactDataItems.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-accent-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-4">{content.projectDataTitle}</h3>
                  <ul className="space-y-2">
                    {content.projectDataItems.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-accent-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-4">{content.technicalDataTitle}</h3>
                  <ul className="space-y-2">
                    {content.technicalDataItems.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-accent-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Finalidades do tratamento */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Users className="h-6 w-6 text-accent-500 mr-3" />
              {content.purposesTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-8">{content.purposesIntro}</p>
              
              <div className="space-y-6">
                {content.purposes.map((purpose, index) => (
                  <div key={index} className="border border-dark-700 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-lg font-medium text-white">{purpose.title}</h3>
                      <span className="text-xs bg-accent-500/20 text-accent-400 px-3 py-1 rounded-full">
                        {purpose.legalBasis}
                      </span>
                    </div>
                    <p className="text-accent-400 text-sm leading-relaxed">{purpose.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Base legal */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.legalBasisTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.legalBasisText}</p>
              
              <ul className="space-y-3">
                {content.legalBases.map((basis, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-accent-400">{basis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Partilha de dados */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.dataSharingTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-8">{content.dataSharingText}</p>
              
              <div className="space-y-6">
                {content.dataRecipients.map((recipient, index) => (
                  <div key={index} className="border border-dark-700 p-6">
                    <h3 className="font-display text-lg font-medium text-white mb-3">{recipient.category}</h3>
                    <p className="text-accent-400 text-sm leading-relaxed mb-3">{recipient.description}</p>
                    <div className="bg-dark-800/50 p-3 rounded">
                      <p className="text-xs text-accent-500">
                        <strong>Salvaguardas:</strong> {recipient.safeguards}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Transferências internacionais */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.transfersTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.transfersText}</p>
              
              <ul className="space-y-3">
                {content.transfersSafeguards.map((safeguard, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-accent-400">{safeguard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Período de conservação */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Clock className="h-6 w-6 text-accent-500 mr-3" />
              {content.retentionTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-8">{content.retentionText}</p>
              
              <div className="space-y-4">
                {content.retentionPeriods.map((period, index) => (
                  <div key={index} className="border border-dark-700 p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-display text-lg font-medium text-white">{period.category}</h3>
                      </div>
                      <div>
                        <p className="text-accent-400 font-medium">{period.period}</p>
                      </div>
                      <div>
                        <p className="text-accent-400 text-sm">{period.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Direitos dos titulares */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Eye className="h-6 w-6 text-accent-500 mr-3" />
              {content.rightsTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-8">{content.rightsIntro}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {content.rights.map((right, index) => (
                  <div key={index} className="border border-dark-700 p-6">
                    <h3 className="font-display text-lg font-medium text-white mb-3">{right.right}</h3>
                    <p className="text-accent-400 text-sm leading-relaxed">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Exercício de direitos */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.exerciseRightsTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.exerciseRightsText}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-accent-500" />
                  <span className="font-display text-accent-400">{content.exerciseRightsEmail}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-accent-500" />
                  <span className="font-display text-accent-400">{content.exerciseRightsPhone}</span>
                </div>
              </div>
              
              <div className="bg-accent-500/10 border border-accent-500/30 p-4">
                <p className="text-sm text-accent-400">{content.exerciseRightsResponse}</p>
              </div>
            </div>
          </section>

          {/* Medidas de segurança */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Lock className="h-6 w-6 text-accent-500 mr-3" />
              {content.securityTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.securityText}</p>
              
              <ul className="space-y-3">
                {content.securityMeasures.map((measure, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-accent-400">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Política de Cookies */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.cookiesTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed">{content.cookiesText}</p>
            </div>
          </section>

          {/* Notificação de violações */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <AlertTriangle className="h-6 w-6 text-accent-500 mr-3" />
              {content.breachTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed">{content.breachText}</p>
            </div>
          </section>

          {/* Direito de reclamação */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.complaintsTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-4">{content.complaintsText}</p>
              
              <div className="bg-accent-500/10 border border-accent-500/30 p-6">
                <h3 className="font-display font-medium text-white mb-2">{content.complaintsAuthority}</h3>
                <p className="text-sm text-accent-400">{content.complaintsContact}</p>
              </div>
            </div>
          </section>

          {/* Alterações à política */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.changesTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed">{content.changesText}</p>
            </div>
          </section>

          {/* Contactos */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Mail className="h-6 w-6 text-accent-500 mr-3" />
              {content.contactTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-4">{content.contactText}</p>
              
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-accent-500" />
                <div className="space-y-2">
                  <a href="mailto:ct@ctrp.pt" className="font-display text-accent-400 hover:text-white transition-colors block">
                    ct@ctrp.pt
                  </a>
                  <a href="mailto:rp@ctrp.pt" className="font-display text-accent-400 hover:text-white transition-colors block">
                    rp@ctrp.pt
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Última atualização */}
          <section className="border-t border-dark-800 pt-8">
            <div className="text-center">
              <p className="font-display text-sm text-accent-500 flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{content.lastUpdate}: {content.lastUpdateDate}</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;