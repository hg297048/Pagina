
import React from 'react';

const AppointmentInfo = () => {
  const infoPoints = [
    "Las citas tienen una duración de 50 minutos.",
    "Se recomienda llegar 10 minutos antes de la hora programada.",
    "En caso de no poder asistir, por favor cancele su cita con al menos 24 horas de anticipación.",
    "Recibirá un correo electrónico de confirmación una vez que su cita haya sido procesada."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 section-title">Información Importante</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {infoPoints.map((point, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentInfo;
