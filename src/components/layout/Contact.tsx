import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { resumeData } from '@/data';
import Container from '@/components/shared/ui/Container';
import Card from '@/components/shared/ui/Card';
import Badge from '@/components/shared/ui/Badge';

const Contact: React.FC = () => {
  const { personalInfo } = resumeData;
  const telLink = `tel:${personalInfo.phone.replace(/-/g, '')}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative">
        {/* Top Badge */}
        <div className="mb-10 lg:mb-12 animate-fade-in">
          <Badge icon={<MessageSquare size={14} className="text-indigo-400" />}>
            Contact Me
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-stretch">
          {/* Left Column: Title & Contact Info */}
          <div className="lg:col-span-3 flex flex-col justify-start animate-fade-in">
            <div className="mb-4">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                Let's Build <br />
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Something Great</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                비즈니스 가치에 기여하는 기술적 해결책이 필요하신가요? 새로운 프로젝트 제안이나 협업 문의는 언제든 환영합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={20} />, label: 'Phone', value: personalInfo.phone, href: telLink },
              ].map((item, idx) => (
                <Card 
                  key={idx}
                  as="a"
                  href={item.href}
                  className="flex items-center gap-5 group cursor-pointer"
                  hoverable
                  padding="sm"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                    <span className="text-white font-bold hover:text-indigo-400 transition-colors block truncate">
                      {item.value}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: CTA Card */}
          <div className="relative group lg:col-span-2 w-full animate-fade-in [animation-delay:200ms]">
            <Card 
              as="a"
              href={telLink}
              className="h-full bg-gradient-to-br from-indigo-600 to-indigo-900 border-none shadow-2xl shadow-indigo-500/20 flex flex-col justify-center cursor-pointer relative z-10"
              padding="lg"
            >
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">Ready to start <br />your next project?</h3>
                
                <div className="w-12 h-1 bg-white/20 mb-6 rounded-full" />
                
                <p className="text-indigo-100/70 mb-8 text-sm md:text-base font-medium leading-relaxed">
                  지금 바로 전화를 걸어 대화를 시작해 보세요. <br />
                  빠르고 확실한 상담이 가능합니다.
                </p>
                
                <div className="flex">
                  <div className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-white text-black font-black hover:bg-indigo-50 shadow-2xl transition-all active:scale-95 group-hover:scale-105">
                    <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                    Call Me Now
                  </div>
                </div>
              </div>
              
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            </Card>
            
            {/* Hover shadow effect */}
            <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-[4rem] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
