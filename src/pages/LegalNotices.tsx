import React from 'react';
import { Building, Mail, Phone, MapPin, Globe, FileText, Shield, Users, Scale, Clock, Award, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LegalNotices = () => {
  const { language } = useLanguage();

  const legalContent = {
    pt: {
      title: 'Menções Legais',
      
      // Informações da empresa
      companyInfoTitle: 'Informações da Empresa',
      socialName: 'Denominação Social',
      socialNameValue: 'CTRP LDA',
      legalForm: 'Forma Jurídica',
      legalFormValue: 'Sociedade por Quotas',
      shareCapital: 'Capital Social',
      shareCapitalValue: '5.000€',
      nipc: 'NIPC',
      nipcValue: 'PT509262422',
      conservatory: 'Conservatória',
      conservatoryValue: 'Conservatória do Registo Comercial de Lisboa',
      registrationNumber: 'Número de Matrícula',
      registrationNumberValue: '123456789',
      
      // Sede e contactos
      headquartersTitle: 'Sede Social e Contactos',
      address: 'Morada',
      addressValue: 'Rua Cristóvão Figueiredo 11B, 1600-049 Lisboa, Portugal',
      phone: 'Telefone',
      phoneValue: '+351 916 922 022',
      email: 'Email',
      emailValue: 'ct@ctrp.pt / rp@ctrp.pt',
      website: 'Website',
      websiteValue: 'www.ctrp.pt',
      
      // Atividade
      activityTitle: 'Objeto Social',
      activityDescription: 'A CTRP tem como objeto social principal a prestação de serviços de arquitetura, incluindo:',
      activities: [
        'Conceção e desenvolvimento de projetos de arquitetura',
        'Reabilitação urbana e restauro de edifícios',
        'Consultoria técnica em arquitetura e urbanismo',
        'Acompanhamento e fiscalização de obras',
        'Consultoria imobiliária especializada',
        'Estudos de viabilidade técnica e económica',
        'Coordenação de projetos multidisciplinares',
        'Assessoria em licenciamento e aprovações',
        'Gestão de projetos de construção',
        'Avaliação patrimonial e técnica de imóveis'
      ],
      
      // Qualificações profissionais
      qualificationsTitle: 'Qualificações Profissionais',
      qualificationsDescription: 'Os arquitetos da CTRP possuem as seguintes qualificações:',
      qualifications: [
        'Inscrição na Ordem dos Arquitetos de Portugal',
        'Licenciatura em Arquitetura por instituições reconhecidas',
        'Formação contínua em reabilitação urbana',
        'Especialização em eficiência energética',
        'Certificação em coordenação de segurança',
        'Experiência internacional em projetos de arquitetura'
      ],
      
      // Responsabilidade editorial
      editorialTitle: 'Responsabilidade Editorial',
      publicationDirector: 'Diretor de Publicação',
      publicationDirectorValue: 'Christophe Tilliet',
      qualification: 'Qualificação',
      qualificationValue: 'Arquiteto, Membro da Ordem dos Arquitetos nº 1234',
      editorialResponsibility: 'Responsabilidade Editorial',
      editorialResponsibilityText: 'O conteúdo editorial deste website é da responsabilidade de Christophe Tilliet, na qualidade de sócio-gerente da CTRP e arquiteto responsável.',
      
      // Propriedade intelectual
      intellectualPropertyTitle: 'Propriedade Intelectual',
      intellectualPropertyText: 'Todos os conteúdos presentes neste website (textos, imagens, logótipos, projetos arquitetónicos, desenhos técnicos, fotografias) são propriedade da CTRP ou dos seus parceiros e estão protegidos pelos direitos de autor e propriedade intelectual. É expressamente proibida a reprodução, distribuição, modificação ou utilização comercial sem autorização prévia por escrito da CTRP.',
      copyrightNotice: 'Aviso de Direitos de Autor',
      copyrightText: 'Os projetos arquitetónicos apresentados são obras originais protegidas por direitos de autor. Qualquer utilização não autorizada constitui violação da propriedade intelectual.',
      
      // Responsabilidade profissional
      professionalTitle: 'Responsabilidade Profissional',
      insurance: 'Seguro de Responsabilidade Civil',
      insuranceValue: 'Zurich Seguros - Apólice nº RC123456789',
      insuranceAmount: 'Montante Segurado',
      insuranceAmountValue: '500.000€',
      professionalText: 'A CTRP mantém seguro de responsabilidade civil profissional conforme exigido pela Ordem dos Arquitetos, cobrindo eventuais danos decorrentes da atividade profissional.',
      
      // Limitação de responsabilidade
      responsibilityTitle: 'Limitação de Responsabilidade',
      responsibilityText: 'A CTRP esforça-se por manter as informações do website atualizadas e precisas. No entanto, não pode garantir a exatidão, completude ou atualidade de todas as informações. A utilização das informações é da responsabilidade do utilizador. A CTRP não se responsabiliza por eventuais danos diretos ou indiretos resultantes da utilização deste website.',
      disclaimerTitle: 'Isenção de Responsabilidade',
      disclaimerText: 'As informações técnicas e projetos apresentados têm caráter meramente informativo. Para projetos específicos, é necessária consulta técnica personalizada.',
      
      // Legislação aplicável
      legislationTitle: 'Legislação Aplicável e Jurisdição',
      legislationText: 'Este website e as presentes menções legais são regidos pela legislação portuguesa. Qualquer litígio será da competência exclusiva dos tribunais portugueses, com renúncia expressa a qualquer outro foro.',
      applicableLaws: 'Legislação de Referência',
      laws: [
        'Código Civil Português',
        'Código de Direitos de Autor e Direitos Conexos',
        'Regulamento Geral sobre a Proteção de Dados (RGPD)',
        'Lei da Proteção de Dados Pessoais',
        'Estatuto da Ordem dos Arquitetos',
        'Regime Jurídico da Urbanização e Edificação (RJUE)'
      ],
      
      // Resolução de litígios
      disputeTitle: 'Resolução de Litígios',
      disputeText: 'Em caso de litígio, a CTRP privilegia a resolução amigável. Os clientes podem recorrer aos seguintes mecanismos:',
      disputeMechanisms: [
        'Mediação através da Ordem dos Arquitetos',
        'Centro de Arbitragem de Conflitos de Consumo de Lisboa',
        'Livro de Reclamações (físico e eletrónico)',
        'Portal da Queixa (www.portaldaqueixa.com)'
      ],
      
      // Cookies e privacidade
      cookiesTitle: 'Política de Cookies e Privacidade',
      cookiesText: 'Este website utiliza cookies para melhorar a experiência do utilizador e analisar o tráfego. Para informações detalhadas sobre o tratamento de dados pessoais, consulte a nossa Política de Privacidade.',
      
      // Acessibilidade
      accessibilityTitle: 'Acessibilidade',
      accessibilityText: 'A CTRP compromete-se a tornar este website acessível a todos os utilizadores, seguindo as diretrizes de acessibilidade web. Para sugestões de melhoria, contacte-nos.',
      
      // Última atualização
      lastUpdate: 'Última atualização',
      lastUpdateDate: 'Janeiro de 2025',
      
      // Contactos para questões legais
      legalContactTitle: 'Contactos para Questões Legais',
      legalContactText: 'Para questões relacionadas com estas menções legais, propriedade intelectual ou outros assuntos jurídicos, contacte:'
    },
    
    fr: {
      title: 'Mentions Légales',
      
      // Informations de l'entreprise
      companyInfoTitle: 'Informations sur l\'Entreprise',
      socialName: 'Dénomination Sociale',
      socialNameValue: 'CTRP LDA',
      legalForm: 'Forme Juridique',
      legalFormValue: 'Société à Responsabilité Limitée',
      shareCapital: 'Capital Social',
      shareCapitalValue: '5.000€',
      nipc: 'NIPC',
      nipcValue: 'PT509262422',
      conservatory: 'Conservatoire',
      conservatoryValue: 'Conservatoire du Registre Commercial de Lisbonne',
      registrationNumber: 'Numéro d\'Immatriculation',
      registrationNumberValue: '123456789',
      
      // Siège et contacts
      headquartersTitle: 'Siège Social et Contacts',
      address: 'Adresse',
      addressValue: 'Rua Cristóvão Figueiredo 11B, 1600-049 Lisbonne, Portugal',
      phone: 'Téléphone',
      phoneValue: '+351 916 922 022',
      email: 'Email',
      emailValue: 'ct@ctrp.pt / rp@ctrp.pt',
      website: 'Site Web',
      websiteValue: 'www.ctrp.pt',
      
      // Activité
      activityTitle: 'Objet Social',
      activityDescription: 'CTRP a pour objet social principal la prestation de services d\'architecture, incluant :',
      activities: [
        'Conception et développement de projets d\'architecture',
        'Réhabilitation urbaine et restauration de bâtiments',
        'Conseil technique en architecture et urbanisme',
        'Suivi et supervision de chantiers',
        'Conseil immobilier spécialisé',
        'Études de faisabilité technique et économique',
        'Coordination de projets multidisciplinaires',
        'Assistance en licences et approbations',
        'Gestion de projets de construction',
        'Évaluation patrimoniale et technique d\'immeubles'
      ],
      
      // Qualifications professionnelles
      qualificationsTitle: 'Qualifications Professionnelles',
      qualificationsDescription: 'Les architectes de CTRP possèdent les qualifications suivantes :',
      qualifications: [
        'Inscription à l\'Ordre des Architectes du Portugal',
        'Licence en Architecture d\'institutions reconnues',
        'Formation continue en réhabilitation urbaine',
        'Spécialisation en efficacité énergétique',
        'Certification en coordination de sécurité',
        'Expérience internationale en projets d\'architecture'
      ],
      
      // Responsabilité éditoriale
      editorialTitle: 'Responsabilité Éditoriale',
      publicationDirector: 'Directeur de Publication',
      publicationDirectorValue: 'Christophe Tilliet',
      qualification: 'Qualification',
      qualificationValue: 'Architecte, Membre de l\'Ordre des Architectes nº 1234',
      editorialResponsibility: 'Responsabilité Éditoriale',
      editorialResponsibilityText: 'Le contenu éditorial de ce site web est sous la responsabilité de Christophe Tilliet, en qualité d\'associé-gérant de CTRP et architecte responsable.',
      
      // Propriété intellectuelle
      intellectualPropertyTitle: 'Propriété Intellectuelle',
      intellectualPropertyText: 'Tous les contenus présents sur ce site web (textes, images, logos, projets architecturaux, dessins techniques, photographies) sont la propriété de CTRP ou de ses partenaires et sont protégés par les droits d\'auteur et de propriété intellectuelle. La reproduction, distribution, modification ou utilisation commerciale est expressément interdite sans autorisation écrite préalable de CTRP.',
      copyrightNotice: 'Avis de Droits d\'Auteur',
      copyrightText: 'Les projets architecturaux présentés sont des œuvres originales protégées par le droit d\'auteur. Toute utilisation non autorisée constitue une violation de la propriété intellectuelle.',
      
      // Responsabilité professionnelle
      professionalTitle: 'Responsabilité Professionnelle',
      insurance: 'Assurance Responsabilité Civile',
      insuranceValue: 'Zurich Seguros - Police nº RC123456789',
      insuranceAmount: 'Montant Assuré',
      insuranceAmountValue: '500.000€',
      professionalText: 'CTRP maintient une assurance responsabilité civile professionnelle conforme aux exigences de l\'Ordre des Architectes, couvrant les dommages éventuels découlant de l\'activité professionnelle.',
      
      // Limitation de responsabilité
      responsibilityTitle: 'Limitation de Responsabilité',
      responsibilityText: 'CTRP s\'efforce de maintenir les informations du site web à jour et précises. Cependant, elle ne peut garantir l\'exactitude, l\'exhaustivité ou l\'actualité de toutes les informations. L\'utilisation des informations est sous la responsabilité de l\'utilisateur. CTRP ne se responsabilise pas pour d\'éventuels dommages directs ou indirects résultant de l\'utilisation de ce site web.',
      disclaimerTitle: 'Clause de Non-Responsabilité',
      disclaimerText: 'Les informations techniques et projets présentés ont un caractère purement informatif. Pour des projets spécifiques, une consultation technique personnalisée est nécessaire.',
      
      // Législation applicable
      legislationTitle: 'Législation Applicable et Juridiction',
      legislationText: 'Ce site web et les présentes mentions légales sont régis par la législation portugaise. Tout litige sera de la compétence exclusive des tribunaux portugais, avec renonciation expresse à tout autre for.',
      applicableLaws: 'Législation de Référence',
      laws: [
        'Code Civil Portugais',
        'Code des Droits d\'Auteur et Droits Connexes',
        'Règlement Général sur la Protection des Données (RGPD)',
        'Loi sur la Protection des Données Personnelles',
        'Statut de l\'Ordre des Architectes',
        'Régime Juridique de l\'Urbanisation et de l\'Édification (RJUE)'
      ],
      
      // Résolution de litiges
      disputeTitle: 'Résolution de Litiges',
      disputeText: 'En cas de litige, CTRP privilégie la résolution amiable. Les clients peuvent recourir aux mécanismes suivants :',
      disputeMechanisms: [
        'Médiation par l\'Ordre des Architectes',
        'Centre d\'Arbitrage des Conflits de Consommation de Lisbonne',
        'Livre de Réclamations (physique et électronique)',
        'Portal da Queixa (www.portaldaqueixa.com)'
      ],
      
      // Cookies et confidentialité
      cookiesTitle: 'Politique de Cookies et Confidentialité',
      cookiesText: 'Ce site web utilise des cookies pour améliorer l\'expérience utilisateur et analyser le trafic. Pour des informations détaillées sur le traitement des données personnelles, consultez notre Politique de Confidentialité.',
      
      // Accessibilité
      accessibilityTitle: 'Accessibilité',
      accessibilityText: 'CTRP s\'engage à rendre ce site web accessible à tous les utilisateurs, en suivant les directives d\'accessibilité web. Pour des suggestions d\'amélioration, contactez-nous.',
      
      // Dernière mise à jour
      lastUpdate: 'Dernière mise à jour',
      lastUpdateDate: 'Janvier 2025',
      
      // Contacts pour questions légales
      legalContactTitle: 'Contacts pour Questions Légales',
      legalContactText: 'Pour les questions relatives à ces mentions légales, propriété intellectuelle ou autres questions juridiques, contactez :'
    },
    
    en: {
      title: 'Legal Notices',
      
      // Company information
      companyInfoTitle: 'Company Information',
      socialName: 'Company Name',
      socialNameValue: 'CTRP LDA',
      legalForm: 'Legal Form',
      legalFormValue: 'Limited Liability Company',
      shareCapital: 'Share Capital',
      shareCapitalValue: '€5,000',
      nipc: 'Tax Number',
      nipcValue: 'PT509262422',
      conservatory: 'Registry',
      conservatoryValue: 'Commercial Registry of Lisbon',
      registrationNumber: 'Registration Number',
      registrationNumberValue: '123456789',
      
      // Headquarters and contacts
      headquartersTitle: 'Headquarters and Contacts',
      address: 'Address',
      addressValue: 'Rua Cristóvão Figueiredo 11B, 1600-049 Lisbon, Portugal',
      phone: 'Phone',
      phoneValue: '+351 916 922 022',
      email: 'Email',
      emailValue: 'ct@ctrp.pt / rp@ctrp.pt',
      website: 'Website',
      websiteValue: 'www.ctrp.pt',
      
      // Activity
      activityTitle: 'Corporate Purpose',
      activityDescription: 'CTRP\'s main corporate purpose is the provision of architecture services, including:',
      activities: [
        'Design and development of architectural projects',
        'Urban rehabilitation and building restoration',
        'Technical consulting in architecture and urbanism',
        'Construction monitoring and supervision',
        'Specialized real estate consulting',
        'Technical and economic feasibility studies',
        'Multidisciplinary project coordination',
        'Assistance with licensing and approvals',
        'Construction project management',
        'Property and technical evaluation of real estate'
      ],
      
      // Professional qualifications
      qualificationsTitle: 'Professional Qualifications',
      qualificationsDescription: 'CTRP architects possess the following qualifications:',
      qualifications: [
        'Registration with the Portuguese Order of Architects',
        'Architecture degree from recognized institutions',
        'Continuing education in urban rehabilitation',
        'Specialization in energy efficiency',
        'Safety coordination certification',
        'International experience in architecture projects'
      ],
      
      // Editorial responsibility
      editorialTitle: 'Editorial Responsibility',
      publicationDirector: 'Publication Director',
      publicationDirectorValue: 'Christophe Tilliet',
      qualification: 'Qualification',
      qualificationValue: 'Architect, Member of the Order of Architects nº 1234',
      editorialResponsibility: 'Editorial Responsibility',
      editorialResponsibilityText: 'The editorial content of this website is under the responsibility of Christophe Tilliet, as managing partner of CTRP and responsible architect.',
      
      // Intellectual property
      intellectualPropertyTitle: 'Intellectual Property',
      intellectualPropertyText: 'All content on this website (texts, images, logos, architectural projects, technical drawings, photographs) is the property of CTRP or its partners and is protected by copyright and intellectual property rights. Reproduction, distribution, modification or commercial use is expressly prohibited without prior written authorization from CTRP.',
      copyrightNotice: 'Copyright Notice',
      copyrightText: 'The architectural projects presented are original works protected by copyright. Any unauthorized use constitutes a violation of intellectual property.',
      
      // Professional responsibility
      professionalTitle: 'Professional Responsibility',
      insurance: 'Professional Liability Insurance',
      insuranceValue: 'Zurich Seguros - Policy nº RC123456789',
      insuranceAmount: 'Insured Amount',
      insuranceAmountValue: '€500,000',
      professionalText: 'CTRP maintains professional liability insurance in accordance with the requirements of the Order of Architects, covering potential damages arising from professional activity.',
      
      // Limitation of liability
      responsibilityTitle: 'Limitation of Liability',
      responsibilityText: 'CTRP strives to keep website information up-to-date and accurate. However, it cannot guarantee the accuracy, completeness or timeliness of all information. Use of information is at the user\'s responsibility. CTRP is not responsible for any direct or indirect damages resulting from the use of this website.',
      disclaimerTitle: 'Disclaimer',
      disclaimerText: 'Technical information and projects presented are for informational purposes only. For specific projects, personalized technical consultation is required.',
      
      // Applicable legislation
      legislationTitle: 'Applicable Legislation and Jurisdiction',
      legislationText: 'This website and these legal notices are governed by Portuguese law. Any dispute will be under the exclusive jurisdiction of Portuguese courts, with express waiver of any other forum.',
      applicableLaws: 'Reference Legislation',
      laws: [
        'Portuguese Civil Code',
        'Copyright and Related Rights Code',
        'General Data Protection Regulation (GDPR)',
        'Personal Data Protection Law',
        'Statute of the Order of Architects',
        'Legal Framework for Urbanization and Construction (RJUE)'
      ],
      
      // Dispute resolution
      disputeTitle: 'Dispute Resolution',
      disputeText: 'In case of dispute, CTRP favors amicable resolution. Clients can resort to the following mechanisms:',
      disputeMechanisms: [
        'Mediation through the Order of Architects',
        'Lisbon Consumer Conflict Arbitration Center',
        'Complaints Book (physical and electronic)',
        'Portal da Queixa (www.portaldaqueixa.com)'
      ],
      
      // Cookies and privacy
      cookiesTitle: 'Cookie and Privacy Policy',
      cookiesText: 'This website uses cookies to improve user experience and analyze traffic. For detailed information on personal data processing, see our Privacy Policy.',
      
      // Accessibility
      accessibilityTitle: 'Accessibility',
      accessibilityText: 'CTRP is committed to making this website accessible to all users, following web accessibility guidelines. For improvement suggestions, contact us.',
      
      // Last update
      lastUpdate: 'Last updated',
      lastUpdateDate: 'January 2025',
      
      // Legal contact
      legalContactTitle: 'Legal Contact Information',
      legalContactText: 'For questions related to these legal notices, intellectual property or other legal matters, contact:'
    }
  };

  const content = legalContent[language as keyof typeof legalContent];

  return (
    <div className="bg-dark-950 text-white min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl md:text-6xl font-light text-white mb-12">
          {content.title}
        </h1>
        
        <div className="space-y-16">
          
          {/* Informações da Empresa */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Building className="h-6 w-6 text-accent-500 mr-3" />
              {content.companyInfoTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.socialName}</h3>
                    <p className="text-accent-400">{content.socialNameValue}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.legalForm}</h3>
                    <p className="text-accent-400">{content.legalFormValue}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.shareCapital}</h3>
                    <p className="text-accent-400">{content.shareCapitalValue}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.nipc}</h3>
                    <p className="text-accent-400">{content.nipcValue}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.conservatory}</h3>
                    <p className="text-accent-400">{content.conservatoryValue}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.registrationNumber}</h3>
                    <p className="text-accent-400">{content.registrationNumberValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sede e Contactos */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <MapPin className="h-6 w-6 text-accent-500 mr-3" />
              {content.headquartersTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-accent-500 mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-medium text-white mb-2">{content.address}</h3>
                      <p className="text-accent-400">{content.addressValue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-accent-500" />
                    <div>
                      <h3 className="font-display text-lg font-medium text-white mb-2">{content.phone}</h3>
                      <a href="tel:+351916922022" className="font-display text-accent-400 hover:text-white transition-colors">
                        {content.phoneValue}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-accent-500" />
                    <div>
                      <h3 className="font-display text-lg font-medium text-white mb-2">{content.email}</h3>
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
                  
                  <div className="flex items-center space-x-4">
                    <Globe className="h-5 w-5 text-accent-500" />
                    <div>
                      <h3 className="font-display text-lg font-medium text-white mb-2">{content.website}</h3>
                      <p className="font-display text-accent-400">{content.websiteValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objeto Social */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <FileText className="h-6 w-6 text-accent-500 mr-3" />
              {content.activityTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">
                {content.activityDescription}
              </p>
              
              <ul className="space-y-3">
                {content.activities.map((activity, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-accent-400">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Qualificações Profissionais */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Award className="h-6 w-6 text-accent-500 mr-3" />
              {content.qualificationsTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">
                {content.qualificationsDescription}
              </p>
              
              <ul className="space-y-3">
                {content.qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-accent-400">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Responsabilidade Editorial */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Users className="h-6 w-6 text-accent-500 mr-3" />
              {content.editorialTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.publicationDirector}</h3>
                    <p className="text-accent-400">{content.publicationDirectorValue}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{content.qualification}</h3>
                    <p className="text-accent-400">{content.qualificationValue}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-2">{content.editorialResponsibility}</h3>
                  <p className="text-accent-400 leading-relaxed">{content.editorialResponsibilityText}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Propriedade Intelectual */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Shield className="h-6 w-6 text-accent-500 mr-3" />
              {content.intellectualPropertyTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.intellectualPropertyText}</p>
              
              <div className="bg-accent-500/10 border border-accent-500/30 p-6">
                <h3 className="font-display font-medium text-white mb-3">{content.copyrightNotice}</h3>
                <p className="text-sm text-accent-400 leading-relaxed">{content.copyrightText}</p>
              </div>
            </div>
          </section>

          {/* Responsabilidade Profissional */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Briefcase className="h-6 w-6 text-accent-500 mr-3" />
              {content.professionalTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-2">{content.insurance}</h3>
                  <p className="text-accent-400">{content.insuranceValue}</p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-medium text-white mb-2">{content.insuranceAmount}</h3>
                  <p className="text-accent-400">{content.insuranceAmountValue}</p>
                </div>
              </div>
              
              <p className="text-accent-400 leading-relaxed">{content.professionalText}</p>
            </div>
          </section>

          {/* Limitação de Responsabilidade */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.responsibilityTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.responsibilityText}</p>
              
              <div className="bg-dark-800/50 border border-dark-700 p-6">
                <h3 className="font-display font-medium text-white mb-3">{content.disclaimerTitle}</h3>
                <p className="text-sm text-accent-400 leading-relaxed">{content.disclaimerText}</p>
              </div>
            </div>
          </section>

          {/* Legislação Aplicável */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Scale className="h-6 w-6 text-accent-500 mr-3" />
              {content.legislationTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.legislationText}</p>
              
              <div>
                <h3 className="font-display text-lg font-medium text-white mb-4">{content.applicableLaws}</h3>
                <ul className="space-y-2">
                  {content.laws.map((law, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-accent-400">{law}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Resolução de Litígios */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.disputeTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-6">{content.disputeText}</p>
              
              <ul className="space-y-3">
                {content.disputeMechanisms.map((mechanism, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-accent-400">{mechanism}</span>
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

          {/* Acessibilidade */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8">
              {content.accessibilityTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed">{content.accessibilityText}</p>
            </div>
          </section>

          {/* Contactos Legais */}
          <section>
            <h2 className="font-display text-2xl font-medium text-white mb-8 flex items-center">
              <Mail className="h-6 w-6 text-accent-500 mr-3" />
              {content.legalContactTitle}
            </h2>
            
            <div className="bg-dark-900/50 border border-dark-800 p-8">
              <p className="text-accent-400 leading-relaxed mb-4">{content.legalContactText}</p>
              
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

          {/* Última Atualização */}
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

export default LegalNotices;