
import React from 'react';
import { Star, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 font-playfair mb-6 leading-tight">
              Estilo <span className="text-amber-600">Dominicano</span>
              <br />
              Corte <span className="text-amber-600">Moderno</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Más que una barbería, somos tu destino para lucir impecable. 
              Tradición dominicana con técnicas modernas en el corazón de la ciudad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105">
                Reservar Ahora
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 hover:text-white transition-all duration-300">
                Ver Servicios
              </button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.9/5 (200+ reseñas)</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 text-white">
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&h=600" 
                alt="Interior de barbería moderna"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Años de experiencia</div>
                </div>
                <div>
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Clientes satisfechos</div>
                </div>
                <div>
                  <Star className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm opacity-90">Calificación promedio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
