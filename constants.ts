import { InsuranceProduct, NavLink, FaqItem, FeatureItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export const PERSONAL_PRODUCTS: InsuranceProduct[] = [
  { id: 'p1', title: 'Responsabilidade Civil', description: 'Proteção contra danos a terceiros.', iconName: 'ShieldAlert' },
  { id: 'p2', title: 'Plano de Saúde', description: 'Cuidado completo para você e sua família.', iconName: 'Heart' },
  { id: 'p3', title: 'Automóveis', description: 'Segurança para seu veículo em qualquer situação.', iconName: 'Car' },
  { id: 'p4', title: 'Aeronáutico', description: 'Cobertura especializada para aeronaves.', iconName: 'Plane' },
  { id: 'p5', title: 'Agrícola / Rural', description: 'Proteção para sua produção e equipamentos.', iconName: 'Tractor' },
  { id: 'p6', title: 'Aluguel (Fiança)', description: 'Facilidade e segurança na locação de imóveis.', iconName: 'Key' },
  { id: 'p7', title: 'Cartão de Crédito', description: 'Seguros associados e proteção financeira.', iconName: 'CreditCard' },
  { id: 'p8', title: 'Consórcio', description: 'Planejamento para conquistar seus bens.', iconName: 'PiggyBank' },
  { id: 'p9', title: 'Equipamentos Eletrônicos', description: 'Proteção para gadgets e portáteis.', iconName: 'Smartphone' },
  { id: 'p10', title: 'Financiamento', description: 'Soluções de crédito com seguro prestamista.', iconName: 'Banknote' },
  { id: 'p11', title: 'Náutico', description: 'Navegue tranquilo com cobertura completa.', iconName: 'Anchor' },
  { id: 'p12', title: 'Odontológico', description: 'Sorrisos saudáveis com ampla rede credenciada.', iconName: 'Smile' },
  { id: 'p13', title: 'Previdência', description: 'Planeje hoje um futuro tranquilo.', iconName: 'TrendingUp' },
  { id: 'p14', title: 'Residencial', description: 'Proteção para seu lar contra diversos riscos.', iconName: 'Home' },
  { id: 'p15', title: 'Viagem', description: 'Assistência médica e suporte global.', iconName: 'Map' },
  { id: 'p16', title: 'Vida', description: 'Segurança financeira para quem você ama.', iconName: 'Activity' },
];

export const BUSINESS_PRODUCTS: InsuranceProduct[] = [
  { id: 'b1', title: 'Patrimonial', description: 'Proteção física para sua empresa.', iconName: 'Building2' },
  { id: 'b2', title: 'Empresarial', description: 'Multirriscos para o seu negócio.', iconName: 'Briefcase' },
  { id: 'b3', title: 'Saúde PME/Corp', description: 'Planos de saúde para colaboradores.', iconName: 'Users' },
  { id: 'b4', title: 'Seguro Garantia', description: 'Garantia contratual e judicial.', iconName: 'FileCheck' },
  { id: 'b5', title: 'Affinity', description: 'Seguros massificados para seus clientes.', iconName: 'Link' },
  { id: 'b6', title: 'Eventos', description: 'Cobertura para organizadores e expositores.', iconName: 'Ticket' },
  { id: 'b7', title: 'Auto Frota', description: 'Gestão e proteção para veículos da empresa.', iconName: 'Truck' },
  { id: 'b8', title: 'Capitalização', description: 'Soluções financeiras e garantias.', iconName: 'Coins' },
  { id: 'b9', title: 'Equipamentos', description: 'Maquinário e equipamentos estacionários.', iconName: 'Settings' },
  { id: 'b10', title: 'Clínicas e Consultórios', description: 'Coberturas específicas para área da saúde.', iconName: 'Stethoscope' },
  { id: 'b11', title: 'Instituições de Ensino', description: 'Segurança para escolas e universidades.', iconName: 'GraduationCap' },
  { id: 'b12', title: 'Prestamista', description: 'Garantia de quitação de dívidas.', iconName: 'Handshake' },
  { id: 'b13', title: 'Previdência Corp', description: 'Benefício de longo prazo para funcionários.', iconName: 'BarChart' },
  { id: 'b14', title: 'Resp. Civil Profissional', description: 'Proteção contra falhas profissionais (E&O).', iconName: 'Scale' },
  { id: 'b15', title: 'Risco de Engenharia', description: 'Para obras, instalações e montagens.', iconName: 'HardHat' },
  { id: 'b16', title: 'Serviços e Comércio', description: 'Pacotes customizados por setor.', iconName: 'ShoppingBag' },
  { id: 'b17', title: 'Transporte de Carga', description: 'Segurança logística nacional e internacional.', iconName: 'Container' },
  { id: 'b18', title: 'Vida em Grupo', description: 'Proteção para sócios e colaboradores.', iconName: 'HeartHandshake' },
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
    answer: 'Você pode solicitar uma cotação clicando nos botões "Solicitar Cotação" espalhados pelo site, preenchendo nosso formulário de contato ou nos ligando diretamente. Nossa equipe retornará rapidamente.',
  },
  {
    question: 'A Kafir trabalha com quais seguradoras?',
    answer: 'Temos parcerias com as principais seguradoras do mercado nacional e internacional, garantindo que buscaremos sempre a melhor opção de custo-benefício para o seu perfil.',
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