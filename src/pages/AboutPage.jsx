
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sobre Nosotros
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conoce nuestra historia, misión, visión y los valores que guían nuestro trabajo diario.
            </motion.p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              {...fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 section-title">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                Clínica Psicológica Bienestar fue fundada en 2010 por un grupo de psicólogos comprometidos con brindar atención de calidad a la comunidad. Lo que comenzó como un pequeño consultorio, ha crecido hasta convertirse en un centro de referencia en salud mental.
              </p>
              <p className="text-gray-700 mb-4">
                A lo largo de estos años, hemos ayudado a miles de personas a superar sus dificultades emocionales y psicológicas, adaptándonos constantemente a las nuevas investigaciones y metodologías en el campo de la psicología.
              </p>
              <p className="text-gray-700">
                Nuestro compromiso con la excelencia y el bienestar de nuestros pacientes nos ha permitido crecer y expandir nuestros servicios, manteniendo siempre la calidad y calidez que nos caracteriza.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img  
                alt="Historia de la clínica" 
                className="w-full h-auto"
               src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-6 inline-block section-title"
              {...fadeIn}
            >
              Misión, Visión y Valores
            </motion.h2>
            <motion.p 
              className="text-gray-700"
              {...fadeIn}
            >
              Estos son los pilares que sostienen nuestra práctica profesional y guían cada una de nuestras acciones.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Misión</h3>
              <p className="text-gray-700">
                Proporcionar servicios psicológicos de alta calidad que promuevan el bienestar emocional y mental de nuestros pacientes, a través de un enfoque integral, personalizado y basado en evidencia científica, contribuyendo así a mejorar su calidad de vida y desarrollo personal.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Visión</h3>
              <p className="text-gray-700">
                Ser reconocidos como un centro de referencia en salud mental, destacando por la excelencia profesional, la innovación en nuestros métodos terapéuticos y el impacto positivo en la comunidad, contribuyendo a la construcción de una sociedad más consciente de la importancia del bienestar psicológico.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Profesionalismo:</strong> Actuamos con ética y excelencia.</li>
                <li><strong>Empatía:</strong> Comprendemos y respetamos las experiencias de cada persona.</li>
                <li><strong>Confidencialidad:</strong> Protegemos la privacidad de nuestros pacientes.</li>
                <li><strong>Respeto:</strong> Valoramos la diversidad y dignidad humana.</li>
                <li><strong>Compromiso:</strong> Nos dedicamos al bienestar de nuestros pacientes.</li>
                <li><strong>Innovación:</strong> Buscamos constantemente mejorar nuestros servicios.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-6 inline-block section-title"
              {...fadeIn}
            >
              Nuestro Equipo
            </motion.h2>
            <motion.p 
              className="text-gray-700"
              {...fadeIn}
            >
              Contamos con profesionales altamente calificados y comprometidos con tu bienestar.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden psychologist-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img  
                    alt={`Psicólogo profesional ${index}`} 
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dr. Nombre Apellido</h3>
                  <p className="text-primary font-medium mb-3">Psicólogo Clínico</p>
                  <p className="text-gray-600 mb-4">Especialista en terapia cognitivo-conductual con más de 10 años de experiencia.</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link to="/psicologos" className="flex items-center mx-auto">
                Ver Todo el Equipo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Comienza tu camino hacia el bienestar</h2>
            <p className="text-xl mb-8">
              Nuestro equipo está listo para ayudarte a alcanzar una mejor salud mental y emocional.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/citas">Agendar una Cita</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
