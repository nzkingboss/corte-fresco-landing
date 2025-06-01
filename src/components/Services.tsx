
import React from 'react';
import { Scissors, Crown, Sparkles, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Corte Clásico",
      description: "El corte tradicional dominicano que nunca pasa de moda",
      price: "RD$ 800",
      duration: "45 min"
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Corte Premium",
      description: "Experiencia completa con lavado, corte, barba y masaje",
      price: "RD$ 1,500",
      duration: "90 min"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Barba & Bigote",
      description: "Perfilado profesional con productos premium",
      price: "RD$ 600",
      duration: "30 min"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Eventos Especiales",
      description: "Servicio a domicilio para ocasiones importantes",
      price: "Desde RD$ 2,000",
      duration: "2+ horas"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-playfair mb-4">
            Servicios Disponibles
          </h2>
          <p className="text-xl text-gray-600">
            Encuentra el servicio perfecto para tu estilo personal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-amber-200 group cursor-pointer"
            >
              <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-amber-600">{service.price}</span>
                <span className="text-sm text-gray-500">{service.duration}</span>
              </div>
              <div className="flex items-center text-amber-600 text-sm font-medium group-hover:text-amber-700">
                <span>Reservar ahora</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
