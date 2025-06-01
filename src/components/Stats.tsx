
import React from 'react';
import { Users, Scissors, MapPin, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "10,000+",
      label: "Clientes Satisfechos"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      number: "500+",
      label: "Barberos Registrados"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      number: "32",
      label: "Provincias Cubiertas"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9",
      label: "Calificación Promedio"
    }
  ];

  return (
    <section className="py-16 bg-amber-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-3 opacity-80">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
