import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-gradient-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">
              Corporación Unificada Nacional
            </h1>
            <div className="w-24 h-1 bg-primary-foreground/50 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold mb-4">
              Energía en la Pista de Patinaje
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Simulación Interactiva y Análisis de Conservación de Energía
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="font-semibold">Estudiante</p>
                <p>Gabriel Rodriguez</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="font-semibold">Código de Asignatura</p>
                <p>53312</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="font-semibold">Laboratorio de Física</p>
                <p>Mecánica y Energía</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;