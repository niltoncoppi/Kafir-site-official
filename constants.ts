import { InsuranceProduct, NavLink, FaqItem, FeatureItem, ProcessStep, Testimonial, BlogPost } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Como Funciona', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export const PERSONAL_PRODUCTS: InsuranceProduct[] = [
  { id: 'p1', title: 'Responsabilidade Civil', description: 'Proteção jurídica e financeira essencial contra danos causados a terceiros.', iconName: 'ShieldAlert' },
  { id: 'p2', title: 'Plano de Saúde', description: 'Cuidado completo para você e sua família com as melhores redes credenciadas.', iconName: 'Heart' },
  { id: 'p3', title: 'Automóveis', description: 'Seguro completo contra colisões, roubos e com assistência 24h.', iconName: 'Car' },
  { id: 'p4', title: 'Aeronáutico', description: 'Cobertura especializada para proteger sua aeronave e operações de voo.', iconName: 'Plane' },
  { id: 'p5', title: 'Agrícola / Rural', description: 'Segurança para sua safra e maquinário contra imprevistos climáticos e danos.', iconName: 'Tractor' },
  { id: 'p6', title: 'Aluguel (Fiança)', description: 'Alugue imóveis sem fiador com agilidade e garantia para proprietários.', iconName: 'Key' },
  { id: 'p7', title: 'Cartão de Crédito', description: 'Blindagem contra fraudes, perda ou roubo dos seus cartões.', iconName: 'CreditCard' },
  { id: 'p8', title: 'Consórcio', description: 'Realize o sonho do imóvel ou veículo próprio com parcelas que cabem no bolso.', iconName: 'PiggyBank' },
  { id: 'p9', title: 'Equipamentos Portáteis', description: 'Segurança contra roubo e danos para notebooks, câmeras e smartphones.', iconName: 'Smartphone' },
  { id: 'p10', title: 'Financiamento', description: 'Crédito facilitado com seguro prestamista para sua tranquilidade.', iconName: 'Banknote' },
  { id: 'p11', title: 'Náutico', description: 'Navegue sem preocupações com proteção total para sua embarcação.', iconName: 'Anchor' },
  { id: 'p12', title: 'Odontológico', description: 'Sorrisos mais saudáveis com acesso a tratamentos de qualidade.', iconName: 'Smile' },
  { id: 'p13', title: 'Previdência', description: 'Garanta uma aposentadoria tranquila e estabilidade financeira futura.', iconName: 'TrendingUp' },
  { id: 'p14', title: 'Residencial', description: 'Proteja seu lar contra incêndios, roubos e danos elétricos com assistências dia e noite.', iconName: 'Home' },
  { id: 'p15', title: 'Viagem', description: 'Viaje pelo mundo com assistência médica, bagagem e suporte global.', iconName: 'Map' },
  { id: 'p16', title: 'Vida', description: 'Amparo financeiro imediato para quem você ama nos momentos difíceis.', iconName: 'Activity' },
];

export const BUSINESS_PRODUCTS: InsuranceProduct[] = [
  { id: 'b1', title: 'Patrimonial', description: 'Blindagem do patrimônio físico da sua empresa contra múltiplos riscos.', iconName: 'Building2' },
  { id: 'b2', title: 'Empresarial', description: 'Cobertura multirrisco adaptada ao segmento do seu negócio.', iconName: 'Briefcase' },
  { id: 'b3', title: 'Saúde PME/Corp', description: 'Planos de saúde empresariais para retenção de talentos e bem-estar.', iconName: 'Users' },
  { id: 'b4', title: 'Seguro Garantia', description: 'Alternativa eficiente à fiança bancária para contratos e processos.', iconName: 'FileCheck' },
  { id: 'b5', title: 'Affinity', description: 'Seguros personalizados para oferecer aos seus clientes ou associados.', iconName: 'Link' },
  { id: 'b6', title: 'Eventos', description: 'Tranquilidade para organizadores com proteção contra cancelamentos e danos.', iconName: 'Ticket' },
  { id: 'b7', title: 'Auto Frota', description: 'Gestão otimizada e proteção unificada para os veículos da empresa.', iconName: 'Truck' },
  { id: 'b8', title: 'Capitalização', description: 'Garantias locatícias e soluções financeiras versáteis.', iconName: 'Coins' },
  { id: 'b9', title: 'Equipamentos', description: 'Proteção para maquinário pesado e estacionário contra acidentes.', iconName: 'Settings' },
  { id: 'b10', title: 'Clínicas e Consultórios', description: 'Coberturas específicas para riscos do setor de saúde.', iconName: 'Stethoscope' },
  { id: 'b11', title: 'Instituições de Ensino', description: 'Segurança para alunos e patrimônio escolar.', iconName: 'GraduationCap' },
  { id: 'b12', title: 'Prestamista', description: 'Garanta o pagamento de obrigações financeiras em caso de imprevistos.', iconName: 'Handshake' },
  { id: 'b13', title: 'Previdência Corp', description: 'Benefício estratégico para motivar e fidelizar sua equipe.', iconName: 'BarChart' },
  { id: 'b14', title: 'Resp. Civil Profissional', description: 'Segurança contra reclamações por falhas profissionais (E&O).', iconName: 'Scale' },
  { id: 'b15', title: 'Risco de Engenharia', description: 'Proteção completa para obras, da instalação à montagem.', iconName: 'HardHat' },
  { id: 'b16', title: 'Serviços e Comércio', description: 'Pacotes customizados para atender as demandas do seu varejo.', iconName: 'ShoppingBag' },
  { id: 'b17', title: 'Transporte de Carga', description: 'Segurança logística nacional e internacional para suas mercadorias.', iconName: 'Container' },
  { id: 'b18', title: 'Vida em Grupo', description: 'Proteção social essencial para sócios, diretores e funcionários.', iconName: 'HeartHandshake' },
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '5 dicas para economizar no seguro do seu carro',
    excerpt: 'Descubra como pequenos ajustes no perfil e na cobertura podem reduzir o valor da sua apólice.',
    date: '10 Out, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Por que sua empresa precisa de um Seguro de Responsabilidade Civil?',
    excerpt: 'Entenda os riscos jurídicos do dia a dia e como proteger o patrimônio do seu negócio.',
    date: '25 Set, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Plano de Saúde Empresarial: Benefício ou Investimento?',
    excerpt: 'Veja como um bom plano de saúde pode aumentar a produtividade e retenção de talentos.',
    date: '05 Set, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];