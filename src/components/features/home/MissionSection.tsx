import { Target, View, Users } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Nossa Missão é a Sua <span className="text-primary">Evolução</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A FCP - Frente de Capacitação Pública - nasceu com o objetivo de transformar o setor público através do conhecimento, oferecendo cursos e palestras de alto nível ministrados por profissionais experientes e atuantes em suas áreas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card Missão */}
          <div 
            className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:transform hover:-translate-y-2"
            style={{ backgroundColor: '#1f304a' }}
          >
            <div className="bg-primary/10 p-5 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300 group-hover:text-primary transition-colors">
              Missão
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Capacitar servidores e gestores públicos com as ferramentas e o conhecimento necessários para enfrentar os desafios modernos da administração pública com excelência e integridade.
            </p>
          </div>

          {/* Card Visão */}
          <div 
            className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:transform hover:-translate-y-2"
            style={{ backgroundColor: '#1f304a' }}
          >
            <div className="bg-primary/10 p-5 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <View className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300 group-hover:text-primary transition-colors">
              Visão
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Ser a principal referência em capacitação para o setor público no Brasil, reconhecida pela qualidade de nosso corpo docente e pelo impacto positivo de nossos cursos na sociedade.
            </p>
          </div>

          {/* Card Valores */}
          <div 
            className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:transform hover:-translate-y-2"
            style={{ backgroundColor: '#1f304a' }}
          >
            <div className="bg-primary/10 p-5 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300 group-hover:text-primary transition-colors">
              Valores
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Compromisso com a ética, busca contínua pela excelência, inovação no ensino e valorização do serviço público como pilar para o desenvolvimento do país.
            </p>
          </div>
        </div>
      </div>
    </section>
); }