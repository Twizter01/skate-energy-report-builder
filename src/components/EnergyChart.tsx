import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface EnergyChartProps {
  data: {
    position: number;
    kinetic: number;
    potential: number;
    thermal: number;
    total: number;
  }[];
}

const EnergyChart = ({ data }: EnergyChartProps) => {
  return (
    <div className="w-full h-80 bg-card rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-primary">Energía vs Posición</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="position" 
            label={{ value: 'Posición (%)', position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            label={{ value: 'Energía (J)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="kinetic" 
            stroke="hsl(var(--energy-kinetic))" 
            strokeWidth={2}
            name="Energía Cinética"
          />
          <Line 
            type="monotone" 
            dataKey="potential" 
            stroke="hsl(var(--energy-potential))" 
            strokeWidth={2}
            name="Energía Potencial"
          />
          <Line 
            type="monotone" 
            dataKey="thermal" 
            stroke="hsl(var(--energy-thermal))" 
            strokeWidth={2}
            name="Energía Térmica"
          />
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="hsl(var(--energy-total))" 
            strokeWidth={3}
            strokeDasharray="5 5"
            name="Energía Total"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;