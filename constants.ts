import { InsuranceProduct, NavLink, FaqItem, FeatureItem, ProcessStep, Testimonial, ConsortiumFeature, BlogPost, ConsortiumBenefit, ProductPageData } from './types';

// Absolute paths for routing
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Produtos', href: '/#produtos' },
  { label: 'Consórcios', href: '/consorcios' },
  { label: 'Como Funciona', href: '/#processo' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contato', href: '/#contato' },
];

export const PERSONAL_PRODUCTS: InsuranceProduct[] = [
  { id: 'p1', title: 'Responsabilidade Civil', description: 'Proteção jurídica e financeira essencial contra danos causados a terceiros.', iconName: 'ShieldAlert', href: '/responsabilidade-civil' },
  { id: 'p2', title: 'Plano de Saúde', description: 'Cuidado completo para você e sua família com as melhores redes credenciadas.', iconName: 'Heart', href: '/plano-de-saude' },
  { id: 'p3', title: 'Automóveis', description: 'Seguro completo contra colisões, roubos e com assistência 24h.', iconName: 'Car', href: '/seguro-auto' },
  { id: 'p4', title: 'Aeronáutico', description: 'Cobertura especializada para proteger sua aeronave e operações de voo.', iconName: 'Plane', href: '/seguro-aeronautico' },
  { id: 'p5', title: 'Agrícola / Rural', description: 'Segurança para sua safra e maquinário contra imprevistos climáticos e danos.', iconName: 'Tractor', href: '/seguro-rural' },
  { id: 'p6', title: 'Aluguel (Fiança)', description: 'Alugue imóveis sem fiador com agilidade e garantia para proprietários.', iconName: 'Key', href: '/seguro-fianca' },
  { id: 'p7', title: 'Cartão de Crédito', description: 'Blindagem contra fraudes, perda ou roubo dos seus cartões.', iconName: 'CreditCard', href: '/seguro-cartao' },
  { id: 'p8', title: 'Consórcio', description: 'Realize o sonho do imóvel ou veículo próprio com parcelas que cabem no bolso.', iconName: 'PiggyBank', href: '/consorcios' },
  { id: 'p9', title: 'Equipamentos Portáteis', description: 'Segurança contra roubo e danos para notebooks, câmeras e smartphones.', iconName: 'Smartphone', href: '/seguro-equipamentos' },
  { id: 'p10', title: 'Financiamento', description: 'Crédito facilitado com seguro prestamista para sua tranquilidade.', iconName: 'Banknote', href: '/financiamento' },
  { id: 'p11', title: 'Náutico', description: 'Navegue sem preocupações com proteção total para sua embarcação.', iconName: 'Anchor', href: '/seguro-nautico' },
  { id: 'p12', title: 'Odontológico', description: 'Sorrisos mais saudáveis com acesso a tratamentos de qualidade.', iconName: 'Smile', href: '/plano-odontologico' },
  { id: 'p13', title: 'Previdência', description: 'Garanta uma aposentadoria tranquila e estabilidade financeira futura.', iconName: 'TrendingUp', href: '/previdencia' },
  { id: 'p14', title: 'Residencial', description: 'Proteja seu lar contra incêndios, roubos e danos elétricos com assistências dia e noite.', iconName: 'Home', href: '/seguro-residencial' },
  { id: 'p15', title: 'Viagem', description: 'Viaje pelo mundo com assistência médica, bagagem e suporte global.', iconName: 'Map', href: '/seguro-viagem' },
  { id: 'p16', title: 'Vida', description: 'Amparo financeiro imediato para quem você ama nos momentos difíceis.', iconName: 'Activity', href: '/seguro-vida' },
];

export const BUSINESS_PRODUCTS: InsuranceProduct[] = [
  { id: 'b1', title: 'Patrimonial', description: 'Blindagem do patrimônio físico da sua empresa contra múltiplos riscos.', iconName: 'Building2', href: '/seguro-patrimonial' },
  { id: 'b2', title: 'Empresarial', description: 'Cobertura multirrisco adaptada ao segmento do seu negócio.', iconName: 'Briefcase', href: '/seguro-empresarial' },
  { id: 'b3', title: 'Saúde PME/Corp', description: 'Planos de saúde empresariais para retenção de talentos e bem-estar.', iconName: 'Users', href: '/saude-empresarial' },
  { id: 'b4', title: 'Seguro Garantia', description: 'Alternativa eficiente à fiança bancária para contratos e processos.', iconName: 'FileCheck', href: '/seguro-garantia' },
  { id: 'b5', title: 'Affinity', description: 'Seguros personalizados para oferecer aos seus clientes ou associados.', iconName: 'Link', href: '/affinity' },
  { id: 'b6', title: 'Eventos', description: 'Tranquilidade para organizadores com proteção contra cancelamentos e danos.', iconName: 'Ticket', href: '/seguro-eventos' },
  { id: 'b7', title: 'Auto Frota', description: 'Gestão otimizada e proteção unificada para os veículos da empresa.', iconName: 'Truck', href: '/frota' },
  { id: 'b8', title: 'Capitalização', description: 'Garantias locatícias e soluções financeiras versáteis.', iconName: 'Coins', href: '/capitalizacao' },
  { id: 'b9', title: 'Equipamentos', description: 'Proteção para maquinário pesado e estacionário contra acidentes.', iconName: 'Settings', href: '/riscos-diversos' },
  { id: 'b10', title: 'Clínicas e Consultórios', description: 'Coberturas específicas para riscos do setor de saúde.', iconName: 'Stethoscope', href: '/seguro-clinicas' },
  { id: 'b11', title: 'Instituições de Ensino', description: 'Segurança para alunos e patrimônio escolar.', iconName: 'GraduationCap', href: '/seguro-educacional' },
  { id: 'b12', title: 'Prestamista', description: 'Garanta o pagamento de obrigações financeiras em caso de imprevistos.', iconName: 'Handshake', href: '/prestamista' },
  { id: 'b13', title: 'Previdência Corp', description: 'Benefício estratégico para motivar e fidelizar sua equipe.', iconName: 'BarChart', href: '/previdencia-empresarial' },
  { id: 'b14', title: 'Resp. Civil Profissional', description: 'Segurança contra reclamações por falhas profissionais (E&O).', iconName: 'Scale', href: '/rc-profissional' },
  { id: 'b15', title: 'Risco de Engenharia', description: 'Proteção completa para obras, da instalação à montagem.', iconName: 'HardHat', href: '/risco-engenharia' },
  { id: 'b16', title: 'Serviços e Comércio', description: 'Pacotes customizados para atender as demandas do seu varejo.', iconName: 'ShoppingBag', href: '/seguro-comercio' },
  { id: 'b17', title: 'Transporte de Carga', description: 'Segurança logística nacional e internacional para suas mercadorias.', iconName: 'Container', href: '/transporte-cargas' },
  { id: 'b18', title: 'Vida em Grupo', description: 'Proteção social essencial para sócios, diretores e funcionários.', iconName: 'HeartHandshake', href: '/vida-grupo' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Rapidez na Cotação',
    description: 'Processos ágeis para entregar os melhores valores sem burocracia desnecessária.',
    iconName: 'Zap',
  },
  {
    title: 'Consultoria Especializada',
    description: 'Analisamos seu perfil para oferecer exatamente o que você precisa, nem mais, nem menos.',
    iconName: 'UserCheck',
  },
  {
    title: 'Parceria Premium',
    description: 'Trabalhamos com as seguradoras mais renomadas e sólidas do mercado.',
    iconName: 'Award',
  },
  {
    title: 'Atendimento Humano',
    description: 'Suporte real, com pessoas reais. Estamos ao seu lado quando você mais precisa.',
    iconName: 'PhoneCall',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como solicito uma cotação?',
    answer: 'Você pode solicitar uma cotação clicando nos botões "Solicitar Cotação Agora" espalhados pelo site, preenchendo nosso formulário de contato ou nos ligando diretamente. Nossa equipe retornará rapidamente.',
  },
  {
    question: 'A Kafir trabalha com quais seguradoras?',
    answer: 'Temos parcerias com as principais seguradoras do mercado nacional e internacional, como Porto Seguro, Allianz, Azul Seguros, Bradesco Seguros, entre outras, garantindo sempre o melhor custo-benefício.',
  },
  {
    question: 'Quanto tempo demora para contratar um seguro?',
    answer: 'Depende do tipo de seguro. Seguros como Automóvel e Residencial podem ser fechados no mesmo dia. Seguros corporativos complexos exigem uma análise mais detalhada, mas prezamos sempre pela agilidade.',
  },
  {
    question: 'Existe custo para a consultoria?',
    answer: 'Não. Nossa consultoria para cotação e desenho da apólice é parte do nosso serviço. Você paga apenas o valor do seguro contratado.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: 'Levantamento', description: 'Entendemos suas necessidades e perfil de risco em uma conversa rápida.', iconName: 'FileText' },
  { id: 2, title: 'Pesquisa', description: 'Consultamos as melhores seguradoras do mercado para encontrar a opção ideal.', iconName: 'Search' },
  { id: 3, title: 'Apresentação', description: 'Explicamos as propostas de forma clara, destacando custos e benefícios.', iconName: 'Presentation' },
  { id: 4, title: 'Suporte', description: 'Acompanhamos você desde a contratação até o pós-venda e sinistros.', iconName: 'LifeBuoy' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Roberto Almeida',
    role: 'Empresário',
    content: 'A Kafir transformou a gestão de seguros da minha empresa. A agilidade no atendimento e a clareza nas explicações foram fundamentais.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Juliana Costa',
    role: 'Médica',
    content: 'Excelente consultoria para meu seguro profissional e plano de saúde. Me senti segura e bem orientada em todas as etapas.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    role: 'Engenheiro',
    content: 'Precisei acionar o seguro do meu carro e o suporte da Kafir foi impecável. Resolveram tudo muito rápido, sem dor de cabeça.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export const CONSORTIUM_FEATURES: ConsortiumFeature[] = [
  {
    title: 'Parcelas Acessíveis',
    description: 'Conquiste bens de alto valor planejando seu orçamento com mensalidades que cabem no seu bolso.',
    iconName: 'Wallet'
  },
  {
    title: 'Zero Juros',
    description: 'Fuja das altas taxas de financiamento. No consórcio você paga apenas uma taxa administrativa reduzida.',
    iconName: 'Percent'
  },
  {
    title: 'Alavancagem',
    description: 'Amplie seu patrimônio imobiliário ou renove sua frota de forma estratégica e programada.',
    iconName: 'Rocket'
  },
  {
    title: 'Poder à Vista',
    description: 'Com a carta de crédito contemplada, você tem o poder de compra à vista para negociar melhores descontos.',
    iconName: 'Banknote'
  }
];

export const CONSORTIUM_LP_BENEFITS: ConsortiumBenefit[] = [
  {
    title: 'Planejamento sem juros',
    description: 'A maneira mais inteligente de comprar bens sem pagar as taxas abusivas dos financiamentos tradicionais.',
    iconName: 'Percent'
  },
  {
    title: 'Poder de compra à vista',
    description: 'Ao ser contemplado, você utiliza a carta de crédito como dinheiro vivo, garantindo alto poder de negociação.',
    iconName: 'Banknote'
  },
  {
    title: 'Flexibilidade total',
    description: 'Use para imóveis (compra, reforma, construção), veículos (leves, pesados) ou serviços.',
    iconName: 'Rocket'
  },
  {
    title: 'Patrimônio Seguro',
    description: 'Uma forma disciplinada de poupar e investir no aumento do seu patrimônio familiar ou empresarial.',
    iconName: 'ShieldAlert'
  }
];

export const CONSORTIUM_LP_TESTIMONIALS: Testimonial[] = [
  {
    id: 101,
    name: 'Mariana Souza',
    role: 'Investidora',
    content: 'Com a Kafir, planejei a compra da minha segunda sala comercial através de consórcio. A economia em relação ao financiamento foi absurda.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 102,
    name: 'Felipe Rocha',
    role: 'Empresário',
    content: 'Renovei a frota da minha empresa utilizando cartas de crédito. A assessoria da Kafir foi essencial para escolher os melhores grupos.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Seguro de Vida: Planejamento e Amor',
    excerpt: 'Descubra como o seguro de vida garante o futuro da sua família e traz tranquilidade para o presente.',
    date: '15 Out 2023',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    title: 'Dicas para economizar no Seguro Auto',
    excerpt: 'Saiba quais fatores influenciam no preço e como obter o melhor custo-benefício na sua apólice.',
    date: '28 Set 2023',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    title: 'Consórcio ou Financiamento?',
    excerpt: 'Entenda as principais diferenças e saiba qual modalidade é a mais vantajosa para o seu objetivo.',
    date: '10 Set 2023',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de2929e507?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

// Content for Modular Product Pages
export const PRODUCT_PAGES_DATA: Record<string, ProductPageData> = {
  '/seguro-auto': {
    slug: '/seguro-auto',
    title: 'Seguro Auto',
    subtitle: 'Proteção completa para seu veículo com assistência 24 horas e coberturas personalizadas.',
    description: 'Dirija com tranquilidade sabendo que você e seu carro estão protegidos contra imprevistos. Oferecemos planos que vão desde o básico até coberturas completas com carro reserva, proteção de vidros e danos a terceiros.',
    iconName: 'Car',
    ctaTitle: 'Cote seu seguro auto',
    ctaText: 'Solicitar Simulação',
    benefits: [
      { title: 'Assistência 24h', description: 'Guincho, chaveiro, troca de pneus e pane elétrica a qualquer hora.', iconName: 'Clock' },
      { title: 'Cobertura Completa', description: 'Proteção contra colisão, incêndio, roubo e furto.', iconName: 'ShieldAlert' },
      { title: 'Carro Reserva', description: 'Não fique a pé em caso de sinistro. Planos com até 30 dias de carro reserva.', iconName: 'Car' },
      { title: 'Danos a Terceiros', description: 'Cobertura para danos materiais e corporais causados a outras pessoas.', iconName: 'Users' }
    ]
  },
  '/plano-de-saude': {
    slug: '/plano-de-saude',
    title: 'Plano de Saúde',
    subtitle: 'Cuide do seu bem mais precioso com as melhores redes de atendimento do país.',
    description: 'Acesso aos melhores hospitais, laboratórios e médicos especialistas. Encontramos o plano ideal para sua família ou empresa, equilibrando cobertura de qualidade e custo-benefício.',
    iconName: 'Heart',
    ctaTitle: 'Invista na sua saúde',
    ctaText: 'Cotar Plano de Saúde',
    benefits: [
      { title: 'Rede Credenciada', description: 'Hospitais e laboratórios de referência na sua região.', iconName: 'Map' },
      { title: 'Cobertura Nacional', description: 'Atendimento de urgência e emergência em todo o Brasil.', iconName: 'Globe' }, // Using Map/Globe placeholder
      { title: 'Reembolso', description: 'Liberdade para escolher médicos fora da rede com reembolso garantido.', iconName: 'Banknote' },
      { title: 'Telemedicina', description: 'Consultas online com especialistas sem sair de casa.', iconName: 'Smartphone' }
    ]
  },
  '/seguro-vida': {
    slug: '/seguro-vida',
    title: 'Seguro de Vida',
    subtitle: 'Amparo financeiro e segurança para quem você mais ama, hoje e no futuro.',
    description: 'O seguro de vida é um ato de amor e responsabilidade. Garanta a estabilidade financeira da sua família em momentos delicados e conte com coberturas em vida para doenças graves e invalidez.',
    iconName: 'Activity',
    ctaTitle: 'Proteja seu futuro',
    ctaText: 'Simular Seguro de Vida',
    benefits: [
      { title: 'Indenização Rápida', description: 'Pagamento ágil aos beneficiários sem entrar em inventário.', iconName: 'Zap' },
      { title: 'Doenças Graves', description: 'Receba o capital em vida em caso de diagnóstico de doenças graves.', iconName: 'Heart' },
      { title: 'Invalidez', description: 'Proteção financeira em caso de acidentes que impeçam o trabalho.', iconName: 'UserCheck' },
      { title: 'Assistência Funeral', description: 'Suporte completo para resolver trâmites burocráticos e custos.', iconName: 'PhoneCall' }
    ]
  },
  '/seguro-empresarial': {
    slug: '/seguro-empresarial',
    title: 'Seguro Empresarial',
    subtitle: 'Blindagem completa para o patrimônio e as operações do seu negócio.',
    description: 'Cada empresa é única, e seus riscos também. Personalizamos apólices que protegem desde a estrutura física até a responsabilidade civil e lucros cessantes, garantindo a continuidade do seu negócio.',
    iconName: 'Building2',
    ctaTitle: 'Proteja sua empresa',
    ctaText: 'Falar com Consultor',
    benefits: [
      { title: 'Multirrisco', description: 'Incêndio, raio, explosão, roubo e danos elétricos em uma só apólice.', iconName: 'ShieldAlert' },
      { title: 'Lucros Cessantes', description: 'Cobertura das despesas fixas caso a empresa precise parar as atividades.', iconName: 'TrendingUp' },
      { title: 'Responsabilidade Civil', description: 'Proteção contra processos por danos a clientes ou terceiros.', iconName: 'Scale' },
      { title: 'Equipamentos', description: 'Cobertura específica para maquinário e eletrônicos essenciais.', iconName: 'Settings' }
    ]
  }
};