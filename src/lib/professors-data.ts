export type Professor = {
  name: string;
  title: string;
  imageUrl: string;
};

export const mockProfessors: Professor[] = [
  {
    name: 'Dr. Wolney Nascimento Lopes Quintão',
    title: 'Delegado da PCDF | Direito Público, IA e Gestão Pública',
    imageUrl: '/prof1.jpg',
  },
  {
    name: 'Thalyta Cambraia Faria',
    title: 'Coordenadora-Geral de Prestação de Contas',
    imageUrl: '/prof2.jpg',
  },
  {
    name: 'Maurício Azeredo',
    title: 'Coordenador-Geral de Orçamento e Finanças no Ministério do Esporte',
    imageUrl: '/prof3.jpg',
  },
  {
    name: 'Elisângela Landim',
    title: 'Especialista em Gestão de Convênios e na plataforma Transferegov',
    imageUrl: '/prof4.jpg',
}, ];