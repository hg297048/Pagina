
import React from 'react';
import { motion } from 'framer-motion';
import useAppointments from '@/hooks/useAppointments';
import AppointmentForm from '@/components/appointment/AppointmentForm';
import MyAppointments from '@/components/appointment/MyAppointments';
import AppointmentInfo from '@/components/appointment/AppointmentInfo';

const AppointmentPage = () => {
  const {
    appointments,
    formData,
    errors,
    availableTimes,
    handleChange,
    handleSelectChange,
    handleSubmit,
    cancelAppointment,
  } = useAppointments();

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
              Agenda tu Cita
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Completa el formulario para programar una consulta con nuestros profesionales.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AppointmentForm
              formData={formData}
              errors={errors}
              availableTimes={availableTimes}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              handleSubmit={handleSubmit}
            />
            <MyAppointments
              appointments={appointments}
              cancelAppointment={cancelAppointment}
            />
          </div>
        </div>
      </section>

      <AppointmentInfo />
    </div>
  );
};

export default AppointmentPage;
