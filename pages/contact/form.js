import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight, BsCheckCircle, BsExclamationTriangle, BsX } from 'react-icons/bs';

// Variantes de animação
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  }
};

// Componente de Círculos Decorativos
const Circles = () => (
  <div className="relative">
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full border border-white/20 opacity-50"></div>
    <div className="absolute top-8 left-8 w-48 h-48 rounded-full border border-white/10 opacity-30"></div>
    <div className="absolute top-16 left-16 w-32 h-32 rounded-full border border-white/5 opacity-20"></div>
  </div>
);

// Componente de Modal de Feedback
const FeedbackModal = ({ isOpen, type, message, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className={`bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-2xl ${
            type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center mb-4">
            {type === 'success' ? (
              <BsCheckCircle className="text-green-500 text-2xl mr-3" />
            ) : (
              <BsExclamationTriangle className="text-red-500 text-2xl mr-3" />
            )}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {type === 'success' ? 'Sucesso!' : 'Erro!'}
            </h3>
            <button
              onClick={onClose}
              className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <BsX className="text-xl" />
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Componente do Formulário de Contato
const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: '', message: '' });

  // Validação do formulário
  const validateForm = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manipulador de mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpar erro do campo específico quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Envio do formulário (simulado - você deve integrar com EmailJS)
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulação de envio - substitua pela integração real com EmailJS
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simular sucesso/erro aleatório para demonstração
      const isSuccess = Math.random() > 0.3;

      if (isSuccess) {
        setModal({
          isOpen: true,
          type: 'success',
          message: 'Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.'
        });
        
        // Limpar formulário
        setFormData({
          from_name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      setModal({
        isOpen: true,
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-sm"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center">
          Envie uma Mensagem
        </h3>

        {/* Linha com Nome e E-mail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white font-medium mb-2">
              Nome *
            </label>
            <input
              className={`w-full px-4 py-3 bg-white/10 border ${
                errors.from_name ? 'border-red-500' : 'border-white/20'
              } rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300`}
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
            {errors.from_name && (
              <p className="text-red-400 text-sm mt-1">{errors.from_name}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              E-mail *
            </label>
            <input
              className={`w-full px-4 py-3 bg-white/10 border ${
                errors.email ? 'border-red-500' : 'border-white/20'
              } rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Assunto */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">
            Assunto *
          </label>
          <input
            className={`w-full px-4 py-3 bg-white/10 border ${
              errors.subject ? 'border-red-500' : 'border-white/20'
            } rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300`}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Assunto da mensagem"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">
            Mensagem *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/10 border ${
              errors.message ? 'border-red-500' : 'border-white/20'
            } rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 resize-none`}
            rows="5"
            placeholder="Digite sua mensagem aqui..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full md:w-auto min-w-[200px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Enviando...
            </>
          ) : (
            <>
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                Enviar Mensagem
              </span>
              <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </button>
      </motion.form>

      {/* Modal de Feedback */}
      <FeedbackModal
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal({ isOpen: false, type: '', message: '' })}
      />
    </>
  );
};

// Componente Principal de Contato
const Contact = () => {
  return (
    <div className="min-h-screen mt-[-80px] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 overflow-hidden">
      <div className="container mx-auto py-8 pt-20 sm:py-12 sm:pt-24 md:py-16 md:pt-32 lg:py-32 px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white"
        >
          Vamos nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">conectar</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:w-1/2 bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-sm order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">@</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm">E-mail</p>
                  <p className="text-white font-medium">tiago_carvalho07@yahoo.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📱</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Telefone</p>
                  <p className="text-white font-medium">+55 18-981142927</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📍</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Endereço</p>
                  <p className="text-white font-medium">Av. Paulista, 542, Araçatuba-SP, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/90 text-sm leading-relaxed">
                💡 <strong>Dica:</strong> Entre em contato comigo para quaisquer dúvidas ou informações 
                adicionais. Respondo normalmente em até 24 horas!
              </p>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Círculos Decorativos */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden lg:flex justify-center mt-16 opacity-10"
        >
          <Circles />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;