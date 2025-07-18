
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento! A equipe é muito profissional e o resultado do meu tratamento superou as expectativas.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Clínica moderna com equipamentos de última geração. Me senti muito seguro durante todo o procedimento.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Finalmente encontrei uma clínica que se preocupa realmente com o bem-estar do paciente. Recomendo!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Validação simples
    if (!name || !email || !phone || !message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    // Simulação de envio
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!"
    });

    e.target.reset();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀"
    });
  };

  const handleScheduleClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Sorriso Ideal - Clínica Odontológica | Cuidando do seu sorriso</title>
        <meta name="description" content="Clínica odontológica moderna em São Paulo. Oferecemos tratamentos completos com tecnologia avançada e equipe especializada. Agende sua consulta!" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <header className="header">
          <nav className="nav container">
            <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              🦷 Sorriso Ideal
            </a>
            
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre</a></li>
              <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Serviços</a></li>
              <li><a href="#team" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Equipe</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contato</a></li>
            </ul>

            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-text">
                <h1>Transformando <span className="highlight">sorrisos</span>, cuidando de você</h1>
                <p>Na Sorriso Ideal, oferecemos tratamentos odontológicos de excelência com tecnologia avançada e uma equipe altamente qualificada. Seu sorriso perfeito está a um passo de distância.</p>
                <button className="cta-button" onClick={handleScheduleClick}>
                  Agende uma avaliação gratuita
                </button>
              </div>
              <div className="hero-image">
                <img  alt="Pacientes felizes na clínica odontológica" src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about">
          <div className="container">
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Sobre a Sorriso Ideal</h2>
              <p>Há mais de 15 anos cuidando da saúde bucal com excelência e dedicação</p>
            </motion.div>

            <motion.div 
              className="about-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-text">
                <h3>Nossa Missão</h3>
                <p>Proporcionar cuidados odontológicos de alta qualidade em um ambiente acolhedor e moderno, utilizando as mais avançadas tecnologias para garantir o melhor resultado para nossos pacientes.</p>
                
                <h3>Por que escolher a Sorriso Ideal?</h3>
                <ul className="about-features">
                  <li>Equipamentos de última geração</li>
                  <li>Equipe altamente qualificada</li>
                  <li>Ambiente moderno e acolhedor</li>
                  <li>Atendimento personalizado</li>
                  <li>Tecnologia digital avançada</li>
                  <li>Protocolos de segurança rigorosos</li>
                </ul>
              </div>
              <div className="about-image">
                <img  alt="Interior moderno da clínica odontológica" src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe6" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Nossos Serviços</h2>
              <p>Oferecemos uma gama completa de tratamentos odontológicos para toda a família</p>
            </motion.div>

            <motion.div 
              className="services-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-card">
                <div className="service-icon">🦷</div>
                <h3>Limpeza e Prevenção</h3>
                <p>Limpeza profissional, aplicação de flúor e orientações para manter sua saúde bucal em dia.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">✨</div>
                <h3>Clareamento Dental</h3>
                <p>Técnicas modernas de clareamento para deixar seu sorriso mais branco e radiante.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Implantes Dentários</h3>
                <p>Reposição de dentes perdidos com implantes de alta qualidade e tecnologia avançada.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">📐</div>
                <h3>Ortodontia</h3>
                <p>Aparelhos convencionais e invisíveis para alinhamento perfeito dos seus dentes.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">💎</div>
                <h3>Estética Dental</h3>
                <p>Facetas, lentes de contato dental e outros procedimentos para um sorriso perfeito.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">🚨</div>
                <h3>Emergência 24h</h3>
                <p>Atendimento de urgência disponível 24 horas para quando você mais precisar.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section team">
          <div className="container">
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Nossa Equipe</h2>
              <p>Profissionais experientes e dedicados ao seu bem-estar</p>
            </motion.div>

            <motion.div 
              className="team-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="team-card">
                <img  alt="Dr. Carlos Mendes - Dentista especialista" src="https://images.unsplash.com/photo-1674775372047-27fb6492c9a2" />
                <div className="team-info">
                  <h3>Dr. Carlos Mendes</h3>
                  <div className="specialty">Implantodontia</div>
                  <p>Especialista em implantes com mais de 20 anos de experiência. Formado pela USP com pós-graduação em Harvard.</p>
                </div>
              </div>

              <div className="team-card">
                <img  alt="Dra. Ana Paula - Ortodontista" src="https://images.unsplash.com/photo-1685022036259-04cf91a89af1" />
                <div className="team-info">
                  <h3>Dra. Ana Paula</h3>
                  <div className="specialty">Ortodontia</div>
                  <p>Especialista em ortodontia e ortopedia facial. Referência em aparelhos invisíveis e tratamentos estéticos.</p>
                </div>
              </div>

              <div className="team-card">
                <img  alt="Dr. Roberto Silva - Periodontista" src="https://images.unsplash.com/photo-1580821810660-5486b8e980a6" />
                <div className="team-info">
                  <h3>Dr. Roberto Silva</h3>
                  <div className="specialty">Periodontia</div>
                  <p>Especialista em gengiva e estruturas de suporte dos dentes. Mestre em periodontia pela UNICAMP.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <div className="container">
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>O que nossos pacientes dizem</h2>
              <p>Depoimentos reais de quem confia na Sorriso Ideal</p>
            </motion.div>

            <motion.div 
              className="testimonial-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <div style={{ fontSize: '3rem', color: '#3B82F6', marginBottom: '1rem' }}>❝</div>
              <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '2rem', fontStyle: 'italic' }}>
                {testimonials[currentTestimonial].text}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} style={{ color: '#FCD34D', fontSize: '1.5rem' }}>⭐</span>
                ))}
              </div>
              <h4 style={{ color: '#1E293B', fontWeight: '600' }}>
                {testimonials[currentTestimonial].name}
              </h4>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      background: index === currentTestimonial ? '#3B82F6' : '#E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ background: '#F8FAFC' }}>
          <div className="container">
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Entre em Contato</h2>
              <p>Estamos prontos para cuidar do seu sorriso. Agende sua consulta!</p>
            </motion.div>

            <motion.div 
              className="contact-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-info">
                <h3>Informações de Contato</h3>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <strong>Endereço</strong><br />
                    Rua das Flores, 123 - Centro<br />
                    São Paulo, SP - CEP: 01234-567
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <strong>Telefone</strong><br />
                    (11) 3456-7890<br />
                    (11) 98765-4321
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <strong>Email</strong><br />
                    contato@sorrisoideal.com.br<br />
                    agendamento@sorrisoideal.com.br
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <strong>Horário de Funcionamento</strong><br />
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Clínica Sorriso Ideal"
                  ></iframe>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <h3 style={{ marginBottom: '1.5rem', color: '#1E293B' }}>Envie uma Mensagem</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea id="message" name="message" placeholder="Conte-nos como podemos ajudar..." required></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Sorriso Ideal</h3>
                <p>Transformando sorrisos há mais de 15 anos com excelência, tecnologia e cuidado humanizado.</p>
                <div className="social-links">
                  <a href="#" className="social-link" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}>📘</a>
                  <a href="#" className="social-link" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}>📷</a>
                  <a href="#" className="social-link" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}>🐦</a>
                  <a href="#" className="social-link" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}>💼</a>
                </div>
              </div>

              <div className="footer-section">
                <h3>Serviços</h3>
                <ul>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Limpeza e Prevenção</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Clareamento Dental</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Implantes</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Ortodontia</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Estética Dental</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Contato</h3>
                <p>📍 Rua das Flores, 123 - Centro</p>
                <p>São Paulo, SP - CEP: 01234-567</p>
                <p>📞 (11) 3456-7890</p>
                <p>✉️ contato@sorrisoideal.com.br</p>
              </div>

              <div className="footer-section">
                <h3>Horários</h3>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
                <p style={{ marginTop: '1rem', color: '#3B82F6' }}>🚨 Emergência 24h disponível</p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2024 Sorriso Ideal. Todos os direitos reservados. | Desenvolvido com ❤️</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Float Button */}
        <a href="#" className="whatsapp-float" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}>
          💬
        </a>

        <Toaster />
      </div>
    </>
  );
}

export default App;
