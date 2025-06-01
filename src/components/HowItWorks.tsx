
import React from 'react';
import { Search, Calendar, Scissors, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "1. Busca",
      description: "Encuentra barberos cerca de ti con las mejores calificaciones"
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "2. Reserva",
      description: "Elige el horario que mejor se adapte a tu agenda"
    },
    {
      icon: <Scissors className="h-12 w-12" />,
      title: "3. Disfruta",
      description: "Recibe el mejor corte con barberos profesionales"
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "4. Califica",
      description: "Ayuda a otros usuarios calificando tu experiencia"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-playfair mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600">
            Conseguir el corte perfecto nunca fue tan fácil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg text-amber-600">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors">
            Comenzar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
