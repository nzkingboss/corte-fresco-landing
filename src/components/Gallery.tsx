
import React from 'react';
import { Instagram, Camera } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=400"
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-playfair mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada corte cuenta una historia. Mira algunos de nuestros trabajos 
            más recientes y déjate inspirar para tu próxima visita.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={image}
                alt={`Trabajo de barbería ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Instagram className="h-6 w-6 text-amber-600" />
            <span className="text-lg font-medium text-gray-700">Síguenos en Instagram</span>
            <span className="text-amber-600 font-semibold">@barbershoprd</span>
          </div>
          <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 hover:text-white transition-all duration-300">
            Ver Más en Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
