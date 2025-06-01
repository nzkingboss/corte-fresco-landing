
import React from 'react';
import { Scissors, Sparkles, Crown, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-12 w-12" />,
      title: "Corte Clásico",
      description: "Cortes tradicionales dominicanos con técnicas modernas. Precisión y estilo en cada tijera.",
      price: "RD$ 800"
    },
    {
      icon: <Crown className="h-12 w-12" />,
      title: "Corte Premium",
      description: "Experiencia completa con lavado, corte, barba y masaje. El tratamiento real que mereces.",
      price: "RD$ 1,500"
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Barba & Bigote",
      description: "Diseño y perfilado de barba con productos premium. Dale forma a tu personalidad.",
      price: "RD$ 600"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Eventos Especiales",
      description: "Servicio a domicilio para bodas, graduaciones y eventos importantes.",
      price: "Desde RD$ 2,000"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-playfair mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada servicio está diseñado para realzar tu estilo personal con la calidad 
            y atención que caracteriza la hospitalidad dominicana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="text-2xl font-bold text-amber-600">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105">
            Ver Todos los Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
