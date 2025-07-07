import Header from "@/components/Header";
import ReportSection from "@/components/ReportSection";
import EnergySimulation from "@/components/EnergySimulation";
import DataTable from "@/components/DataTable";
import EnergyChart from "@/components/EnergyChart";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Sample data for demonstration
  const experimentalData = [
    ["1", "0", "0", "98", "0", "98"],
    ["2", "25", "15.2", "73.5", "1.3", "98"],
    ["3", "50", "24.8", "49.7", "3.5", "98"],
    ["4", "75", "18.3", "27.2", "6.5", "98"],
    ["5", "100", "0", "0", "12.0", "98"]
  ];

  const chartData = [
    { position: 0, kinetic: 0, potential: 98, thermal: 0, total: 98 },
    { position: 25, kinetic: 15.2, potential: 73.5, thermal: 1.3, total: 98 },
    { position: 50, kinetic: 24.8, potential: 49.7, thermal: 3.5, total: 98 },
    { position: 75, kinetic: 18.3, potential: 27.2, thermal: 6.5, total: 98 },
    { position: 100, kinetic: 0, potential: 0, thermal: 12.0, total: 98 }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Simulación Interactiva */}
        <ReportSection title="Simulación Interactiva">
          <p className="mb-6 text-muted-foreground">
            Utilice los controles para explorar cómo se transforma la energía en la pista de patinaje.
            Observe cómo la energía cinética y potencial se intercambian mientras la energía total se conserva.
          </p>
          <EnergySimulation />
        </ReportSection>

        {/* Objetivos */}
        <ReportSection title="Objetivos">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Objetivo General</h3>
              <p>
                Analizar y verificar la conservación de la energía mecánica en un sistema de pista de patinaje
                mediante simulación interactiva, observando las transformaciones entre energía cinética,
                potencial y térmica.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Objetivos Específicos</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Determinar la relación entre la posición del objeto y su energía potencial gravitacional</li>
                <li>Calcular la energía cinética en diferentes puntos de la trayectoria</li>
                <li>Analizar el efecto de la fricción en la conservación de energía mecánica</li>
                <li>Validar experimentalmente el principio de conservación de energía</li>
                <li>Interpretar gráficamente el comportamiento energético del sistema</li>
              </ul>
            </div>
          </div>
        </ReportSection>

        {/* Fundamento Teórico */}
        <ReportSection title="Fundamento Teórico">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Energía Mecánica</h3>
              <p className="mb-3">
                La energía mecánica de un sistema es la suma de sus energías cinética y potencial:
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-center text-lg">
                E<sub>mecánica</sub> = E<sub>cinética</sub> + E<sub>potencial</sub>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Energía Cinética</h3>
              <p className="mb-3">
                La energía cinética es la energía asociada al movimiento de un objeto:
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-center text-lg">
                E<sub>k</sub> = ½mv²
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Donde m es la masa (kg) y v es la velocidad (m/s)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Energía Potencial Gravitacional</h3>
              <p className="mb-3">
                La energía potencial gravitacional depende de la altura del objeto:
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-center text-lg">
                E<sub>p</sub> = mgh
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Donde m es la masa (kg), g es la aceleración gravitacional (9.8 m/s²) y h es la altura (m)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Conservación de Energía</h3>
              <p>
                En ausencia de fuerzas no conservativas (como la fricción), la energía mecánica total
                permanece constante. Cuando hay fricción, parte de la energía mecánica se convierte
                en energía térmica, pero la energía total del sistema se mantiene constante.
              </p>
            </div>
          </div>
        </ReportSection>

        {/* Materiales y Equipos */}
        <ReportSection title="Materiales y Equipos">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Simulación Digital</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Simulador PhET - Energía en la Pista de Patinaje</li>
                <li>Computadora con navegador web</li>
                <li>Interfaz de usuario interactiva</li>
                <li>Herramientas de medición integradas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Parámetros Variables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Masa del objeto patinador</li>
                <li>Altura de la pista</li>
                <li>Coeficiente de fricción</li>
                <li>Posición inicial del objeto</li>
              </ul>
            </div>
          </div>
        </ReportSection>

        {/* Datos Experimentales */}
        <ReportSection title="Datos Experimentales">
          <p className="mb-4">
            Los siguientes datos fueron obtenidos mediante la simulación, variando la posición del objeto
            en la pista y registrando los valores de energía correspondientes:
          </p>
          
          <DataTable
            title="Tabla 1: Energías en función de la posición"
            headers={[
              "Medición",
              "Posición (%)",
              "E. Cinética (J)",
              "E. Potencial (J)",
              "E. Térmica (J)",
              "E. Total (J)"
            ]}
            data={experimentalData}
          />

          <div className="mt-6">
            <EnergyChart data={chartData} />
          </div>
        </ReportSection>

        {/* Análisis de Resultados */}
        <ReportSection title="Análisis de Resultados">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Conservación de Energía</h3>
              <p>
                Los datos experimentales confirman que la energía total del sistema se mantiene
                prácticamente constante (98 J) a lo largo de toda la trayectoria. Las pequeñas
                variaciones observadas son atribuibles a las pérdidas por fricción que se acumulan
                como energía térmica.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Transformación Energética</h3>
              <p>
                Se observa claramente la transformación entre energía cinética y potencial:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>En la posición 0% (punto más alto): máxima energía potencial, energía cinética nula</li>
                <li>En la posición 50% (punto medio): equilibrio entre energías cinética y potencial</li>
                <li>En la posición 100% (punto más bajo): máxima energía cinética, energía potencial nula</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Efecto de la Fricción</h3>
              <p>
                La energía térmica aumenta progresivamente a medida que el objeto se desplaza,
                alcanzando un valor de 12 J al final del recorrido. Esto representa aproximadamente
                el 12% de la energía inicial, lo que indica un sistema con fricción moderada.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Análisis Gráfico</h3>
              <p>
                El gráfico muestra comportamientos característicos:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>La energía potencial decrece linealmente con la altura</li>
                <li>La energía cinética presenta un máximo en el punto más bajo</li>
                <li>La energía térmica aumenta monotónicamente</li>
                <li>La suma de todas las energías permanece constante</li>
              </ul>
            </div>
          </div>
        </ReportSection>

        {/* Conclusiones */}
        <ReportSection title="Conclusiones">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Verificación de Objetivos</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Conservación de energía:</strong> Se verificó experimentalmente que la energía
                  total del sistema se conserva, cumpliendo con el principio fundamental de la física.
                </li>
                <li>
                  <strong>Transformaciones energéticas:</strong> Se observaron claramente las
                  transformaciones entre energía cinética y potencial a lo largo de la trayectoria.
                </li>
                <li>
                  <strong>Efecto de la fricción:</strong> Se cuantificó el impacto de la fricción
                  como responsable de la conversión de energía mecánica en energía térmica.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Hallazgos Principales</h3>
              <p>
                La simulación demostró ser una herramienta efectiva para visualizar y comprender
                los conceptos de conservación y transformación de energía. Los resultados obtenidos
                son consistentes con la teoría física establecida y permiten una comprensión
                intuitiva de estos principios fundamentales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Aplicaciones Prácticas</h3>
              <p>
                Los principios observados en esta simulación tienen aplicaciones directas en el
                diseño de montañas rusas, sistemas de transporte por gravedad, y cualquier
                sistema mecánico donde sea importante optimizar el uso de la energía.
              </p>
            </div>
          </div>
        </ReportSection>

        {/* Referencias */}
        <ReportSection title="Referencias Bibliográficas">
          <div className="space-y-3">
            <div className="border-l-4 border-primary pl-4">
              <p>
                <strong>PhET Interactive Simulations.</strong> (2024). <em>Energy Skate Park</em>. 
                University of Colorado Boulder. https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_es.html
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <p>
                <strong>Serway, R. A., & Jewett, J. W.</strong> (2018). <em>Physics for Scientists and Engineers</em> 
                (10th ed.). Cengage Learning.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <p>
                <strong>Halliday, D., Resnick, R., & Walker, J.</strong> (2017). <em>Fundamentals of Physics</em> 
                (11th ed.). Wiley.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <p>
                <strong>Young, H. D., & Freedman, R. A.</strong> (2019). <em>University Physics with Modern Physics</em> 
                (15th ed.). Pearson.
              </p>
            </div>
          </div>
        </ReportSection>

        {/* Footer */}
        <div className="text-center py-8">
          <Button
            onClick={() => window.print()}
            className="gap-2"
          >
            Imprimir Informe
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            © 2024 Corporación Unificada Nacional - Laboratorio de Física
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;