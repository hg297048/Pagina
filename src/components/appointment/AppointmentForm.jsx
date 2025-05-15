
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';
import { psychologistsList } from '@/config/psychologists';
import { getAvailableDates, formatDateToPPP } from '@/utils/dateUtils';

const AppointmentForm = ({ formData, errors, availableTimes, handleChange, handleSelectChange, handleSubmit }) => {
  const availableDates = getAvailableDates();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 section-title">Formulario de Cita</h2>
      
      <Form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormItem>
            <FormLabel htmlFor="name">Nombre Completo</FormLabel>
            <FormControl>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Ingrese su nombre"
                />
              </div>
            </FormControl>
            {errors.name && <FormMessage>{errors.name}</FormMessage>}
          </FormItem>
          
          <FormItem>
            <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
            <FormControl>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </FormControl>
            {errors.email && <FormMessage>{errors.email}</FormMessage>}
          </FormItem>
          
          <FormItem>
            <FormLabel htmlFor="phone">Teléfono</FormLabel>
            <FormControl>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="123-456-7890"
                />
              </div>
            </FormControl>
            {errors.phone && <FormMessage>{errors.phone}</FormMessage>}
          </FormItem>
          
          <FormItem>
            <FormLabel htmlFor="psychologist">Psicólogo</FormLabel>
            <Select
              value={formData.psychologist}
              onValueChange={(value) => handleSelectChange('psychologist', value)}
            >
              <FormControl>
                <SelectTrigger className={errors.psychologist ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Seleccione un psicólogo" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {psychologistsList.map((psy) => (
                  <SelectItem key={psy.id} value={psy.name}>
                    {psy.name} - {psy.specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.psychologist && <FormMessage>{errors.psychologist}</FormMessage>}
          </FormItem>
          
          <FormItem>
            <FormLabel htmlFor="date">Fecha</FormLabel>
            <Select
              value={formData.date}
              onValueChange={(value) => handleSelectChange('date', value)}
            >
              <FormControl>
                <SelectTrigger className={errors.date ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Seleccione una fecha" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {availableDates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {formatDateToPPP(date)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.date && <FormMessage>{errors.date}</FormMessage>}
          </FormItem>
          
          <FormItem>
            <FormLabel htmlFor="time">Hora</FormLabel>
            <Select
              value={formData.time}
              onValueChange={(value) => handleSelectChange('time', value)}
              disabled={!formData.date || !formData.psychologist}
            >
              <FormControl>
                <SelectTrigger className={errors.time ? 'border-red-500' : ''}>
                  <SelectValue placeholder={formData.date && formData.psychologist ? "Seleccione una hora" : "Seleccione psicólogo y fecha"} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {availableTimes.length > 0 ? (
                  availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="" disabled>
                    {formData.date && formData.psychologist ? "No hay horarios disponibles" : "Seleccione psicólogo y fecha"}
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            {errors.time && <FormMessage>{errors.time}</FormMessage>}
          </FormItem>
        </div>
        
        <FormItem className="mb-6">
          <FormLabel htmlFor="reason">Motivo de la Consulta</FormLabel>
          <FormControl>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
              <Textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={`pl-10 ${errors.reason ? 'border-red-500' : ''}`}
                placeholder="Describa brevemente el motivo de su consulta"
                rows={4}
              />
            </div>
          </FormControl>
          {errors.reason && <FormMessage>{errors.reason}</FormMessage>}
        </FormItem>
        
        <Button type="submit" className="w-full">
          Agendar Cita
        </Button>
      </Form>
    </motion.div>
  );
};

export default AppointmentForm;
