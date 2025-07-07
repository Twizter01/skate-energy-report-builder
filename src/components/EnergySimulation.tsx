import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";

interface EnergyData {
  kinetic: number;
  potential: number;
  thermal: number;
  total: number;
}

const EnergySimulation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(50);
  const [velocity, setVelocity] = useState(0);
  const [trackHeight, setTrackHeight] = useState(150);
  const [mass, setMass] = useState(50);
  const [friction, setFriction] = useState(0.1);
  const [energyData, setEnergyData] = useState<EnergyData>({
    kinetic: 0,
    potential: 100,
    thermal: 0,
    total: 100
  });

  const animationRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Physics calculations
  const calculateEnergy = (pos: number, vel: number, thermalEnergy: number) => {
    const height = Math.sin((pos / 100) * Math.PI) * trackHeight;
    const potential = mass * 9.8 * height / 100;
    const kinetic = 0.5 * mass * Math.pow(vel, 2) / 100;
    const total = 100; // Conservation of energy (minus thermal losses)
    
    return {
      kinetic: Math.max(0, kinetic),
      potential: Math.max(0, potential),
      thermal: thermalEnergy,
      total: total
    };
  };

  // Animation loop
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setPosition(prev => {
          let newPos = prev + velocity * 0.5;
          if (newPos <= 0 || newPos >= 100) {
            setVelocity(v => -v * 0.8); // Bounce with energy loss
            newPos = Math.max(0, Math.min(100, newPos));
          }
          
          // Apply friction
          setVelocity(v => v * (1 - friction * 0.01));
          
          // Calculate gravitational acceleration
          const slope = Math.cos((newPos / 100) * Math.PI) * trackHeight / 100;
          setVelocity(v => v + slope * 0.1);
          
          return newPos;
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, velocity, friction, trackHeight]);

  // Update energy calculations
  useEffect(() => {
    const thermalAccumulated = (100 - position) * friction * 0.1;
    setEnergyData(calculateEnergy(position, velocity, thermalAccumulated));
  }, [position, velocity, mass, friction, trackHeight]);

  // Draw track and ball
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw track
    ctx.strokeStyle = '#8B5CF6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    
    for (let x = 0; x <= canvas.width; x += 2) {
      const normalizedX = x / canvas.width;
      const y = canvas.height - 50 - Math.sin(normalizedX * Math.PI) * trackHeight;
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Draw ball
    const ballX = (position / 100) * canvas.width;
    const ballY = canvas.height - 50 - Math.sin((position / 100) * Math.PI) * trackHeight;
    
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(ballX, ballY - 15, 12, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add glow effect
    ctx.shadowColor = '#F59E0B';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;
    
  }, [position, trackHeight]);

  const reset = () => {
    setIsPlaying(false);
    setPosition(10);
    setVelocity(0);
    setEnergyData({
      kinetic: 0,
      potential: 100,
      thermal: 0,
      total: 100
    });
  };

  return (
    <Card className="p-6 bg-gradient-surface">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Simulation Canvas */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg p-4 mb-4">
            <canvas
              ref={canvasRef}
              width={600}
              height={300}
              className="w-full border rounded-lg bg-gradient-to-b from-blue-50 to-green-50"
            />
          </div>
          
          {/* Controls */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant={isPlaying ? "secondary" : "default"}
              className="gap-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Pausar" : "Reproducir"}
            </Button>
            <Button onClick={reset} variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </Button>
          </div>
        </div>

        {/* Energy Display and Controls */}
        <div className="space-y-4">
          {/* Energy Bars */}
          <div className="bg-card rounded-lg p-4">
            <h3 className="font-semibold mb-4 text-center">Energías (J)</h3>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Cinética</span>
                  <span>{energyData.kinetic.toFixed(1)}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-energy-kinetic h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(energyData.kinetic / 100) * 100}%` }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Potencial</span>
                  <span>{energyData.potential.toFixed(1)}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-energy-potential h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(energyData.potential / 100) * 100}%` }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Térmica</span>
                  <span>{energyData.thermal.toFixed(1)}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-energy-thermal h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(energyData.thermal / 100) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="border-t pt-2">
                <div className="flex justify-between text-sm mb-1 font-semibold">
                  <span>Total</span>
                  <span>{energyData.total.toFixed(1)}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4">
                  <div 
                    className="bg-energy-total h-4 rounded-full transition-all duration-300"
                    style={{ width: `${(energyData.total / 100) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Parameter Controls */}
          <div className="bg-card rounded-lg p-4">
            <h3 className="font-semibold mb-4">Parámetros</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Masa: {mass} kg
                </label>
                <Slider
                  value={[mass]}
                  onValueChange={(value) => setMass(value[0])}
                  max={100}
                  min={10}
                  step={5}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Altura de Pista: {trackHeight} px
                </label>
                <Slider
                  value={[trackHeight]}
                  onValueChange={(value) => setTrackHeight(value[0])}
                  max={200}
                  min={50}
                  step={10}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Fricción: {friction.toFixed(2)}
                </label>
                <Slider
                  value={[friction]}
                  onValueChange={(value) => setFriction(value[0])}
                  max={0.5}
                  min={0}
                  step={0.01}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnergySimulation;