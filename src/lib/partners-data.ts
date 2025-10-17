export type Partner = {
  name: string;
  title: string;
  imageUrl: string;
};

// Substitua estes dados pelos dados reais dos sócios
export const mockPartners: Partner[] = [
  {
    name: 'Nome do Sócio 1',
    title: 'Cargo ou Especialidade do Sócio 1',
    imageUrl: '/prof1.jpg',
  },
  {
    name: 'Nome da Sócia 2',
    title: 'Cargo ou Especialidade da Sócia 2',
    imageUrl: '/prof2.jpg',
  },
  {
    name: 'Nome do Sócio 3',
    title: 'Cargo ou Especialidade do Sócio 3',
    imageUrl: '/prof3.jpg',
  },
  {
    name: 'Nome da Sócia 4',
    title: 'Cargo ou Especialidade da Sócia 4',
    imageUrl: '/prof4.jpg',
  },
];