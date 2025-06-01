
import React from 'react';
import { Scissors, Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-amber-900 font-playfair">Barber Shop RD</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Servicios</a>
            <a href="#galeria" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Galería</a>
            <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contacto</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-1 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(809) 555-0123</span>
            </div>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
              Reservar Cita
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
