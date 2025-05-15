
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PsychologistsPage = () => {
  const psychologists = [
    {
      id: 1,
      name: "Dra. Ana Martínez",
      title: "Psicóloga Clínica",
      specialties: ["Terapia Cognitivo-Conductual", "Ansiedad", "Depresión"],
      description: "Especialista en terapia cognitivo-conductual con más de 10 años de experiencia tratando trastornos de ansiedad y depresión. Su enfoque se centra en proporcionar herramientas prácticas para que los pacientes puedan gestionar sus emociones de manera efectiva.",
      education: ["Doctorado en Psicología Clínica, Universidad Nacional", "Maestría en Terapia Cognitivo-Conductual, Universidad Europea"]
    },
    {
      id: 2,
      name: "Dr. Carlos Rodríguez",
      title: "Psicólogo Infantil",
      specialties: ["Psicología Infantil", "Trastornos del Aprendizaje", "TDAH"],
      description: "Especializado en el trabajo con niños y adolescentes, el Dr. Rodríguez tiene amplia experiencia en el diagnóstico y tratamiento de trastornos del aprendizaje y TDAH. Su enfoque lúdico y adaptado a cada edad facilita la conexión con los más jóvenes.",
      education: ["Doctorado en Psicología del Desarrollo, Universidad Central", "Especialización en Neuropsicología Infantil, Instituto Superior de Psicología"]
    },
    {
      id: 3,
      name: "Dra. Laura Sánchez",
      title: "Psicoterapeuta",
      specialties: ["Terapia de Pareja", "Relaciones Interpersonales", "Comunicación"],
      description: "Con más de 15 años de experiencia en terapia de pareja, la Dra. Sánchez ayuda a mejorar la comunicación y resolver conflictos en las relaciones. Su enfoque integrador combina técnicas de diversas escuelas terapéuticas para adaptarse a las necesidades específicas de cada pareja.",
      education: ["Doctorado en Psicología Clínica, Universidad Internacional", "Formación en Terapia Sistémica Familiar, Centro de Estudios Sistémicos"]
    },
    {
      id: 4,
      name: "Dr. Miguel Torres",
      title: "Psicólogo Clínico",
      specialties: ["Trauma", "TEPT", "Terapia EMDR"],
      description: "Especialista en el tratamiento del trauma y trastorno de estrés postraumático (TEPT). El Dr. Torres está certificado en EMDR y otras técnicas avanzadas para el procesamiento del trauma, ayudando a los pacientes a recuperar su bienestar emocional.",
      education: ["Doctorado en Psicología Clínica, Universidad Metropolitana", "Certificación en EMDR, Instituto de EMDR"]
    },
    {
      id: 5,
      name: "Dra. Elena Gómez",
      title: "Neuropsicóloga",
      specialties: ["Evaluación Neuropsicológica", "Rehabilitación Cognitiva", "Trastornos Neurodegenerativos"],
      description: "Especializada en evaluación y rehabilitación neuropsicológica, la Dra. Gómez trabaja con pacientes que presentan deterioro cognitivo, secuelas de daño cerebral y trastornos neurodegenerativos, desarrollando programas personalizados de rehabilitación.",
      education: ["Doctorado en Neuropsicología, Universidad de Ciencias", "Maestría en Neurociencias, Instituto de Investigación Cerebral"]
    },
    {
      id: 6,
      name: "Dr. Javier López",
      title: "Psicólogo Clínico",
      specialties: ["Adicciones", "Terapia Motivacional", "Prevención de Recaídas"],
      description: "Con amplia experiencia en el tratamiento de adicciones, el Dr. López utiliza un enfoque integrador que combina la entrevista motivacional, terapia cognitivo-conductual y estrategias de prevención de recaídas para ayudar a sus pacientes a recuperar el control de sus vidas.",
      education: ["Doctorado en Psicología Clínica, Universidad Estatal", "Especialización en Adicciones, Centro de Estudios sobre Dependencias"]
    }
  ];

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
              Nuestro Equipo de Profesionales
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conoce a los psicólogos que forman parte de nuestra clínica, todos ellos altamente calificados y comprometidos con tu bienestar.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Psychologists Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {psychologists.map((psychologist, index) => (
              <motion.div
                key={psychologist.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden psychologist-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img  
                    alt={`${psychologist.name}, ${psychologist.title}`} 
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{psychologist.name}</h3>
                  <p className="text-primary font-medium mb-3">{psychologist.title}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {psychologist.specialties.map((specialty, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{psychologist.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Formación:</h4>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      {psychologist.education.map((edu, i) => (
                        <li key={i}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/citas" className="w-full">Agendar Cita</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-6">¿Listo para dar el primer paso?</h2>
            <p className="text-xl mb-8">
              Nuestros profesionales están preparados para ayudarte en tu camino hacia el bienestar emocional.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/citas">Agendar una Cita Ahora</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PsychologistsPage;
