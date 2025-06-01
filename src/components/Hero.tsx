
import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-white to-amber-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 font-playfair mb-6 leading-tight">
            Tu Barbero <span className="text-amber-600">Perfecto</span>
            <br />
            <span className="text-3xl lg:text-4xl font-normal text-gray-600">en República Dominicana</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Conecta con los mejores barberos dominicanos. Reserva tu corte ideal, 
            cuando quieras, donde quieras.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Reserva tu corte ahora</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">¿Qué servicio necesitas?</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>Corte Clásico - RD$ 800</option>
                  <option>Corte Premium - RD$ 1,500</option>
                  <option>Barba & Bigote - RD$ 600</option>
                  <option>Servicio Completo - RD$ 2,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">¿Cuándo?</label>
                <input 
                  type="datetime-local" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors">
              Buscar Barberos Disponibles
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Encuentra</h4>
              <p className="text-gray-600">Barberos cerca de ti en toda RD</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reserva</h4>
              <p className="text-gray-600">Horario que se adapte a ti</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Disfruta</h4>
              <p className="text-gray-600">El mejor corte de tu vida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
