export type Professor = {
  name: string;
  title: string;
  imageUrl: string;
};

export const mockProfessors: Professor[] = [
  {
    name: 'Dr. Wolney Nascimento Lopes Quintão',
    title: 'Delegado da PCDF e Especialista em Direito Público, IA e Gestão Pública',
    imageUrl: '/prof1.jpg',
  },
  {
    name: 'Dra. Thalyta Cambraia Faria',
    title: 'Especialista em Direito Empresarial e Ciências Criminais',
    imageUrl: '/prof2.jpg',
  },
  {
    name: 'Dr. Maurício Azeredo',
    title: 'Coordenador-Geral de Orçamento e Finanças no Ministério do Esporte',
    imageUrl: '/prof3.jpg',
  },
  {
    name: 'Dra. Elisângela Landim',
    title: 'Especialista em Gestão de Convênios e na plataforma Transferegov',
    imageUrl: '/prof4.jpg',
}, ];