
import React from 'react';
import { Scissors, Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scissors className="h-8 w-8 text-amber-400" />
              <h3 className="text-2xl font-bold font-playfair">Barber Shop RD</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              La barbería dominicana que combina tradición y modernidad. 
              Tu estilo, nuestra pasión.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Corte Clásico</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Corte Premium</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Barba & Bigote</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Eventos Especiales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-amber-400 transition-colors">Galería</a></li>
              <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(809) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ensanche Piantini, SD</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Barber Shop RD. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Hecho con ❤️ en República Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
