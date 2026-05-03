import React from 'react';
import { Link } from '@tanstack/react-router';
import { Briefcase } from 'lucide-react';
import Container from '@/components/shared/ui/Container';
import Badge from '@/components/shared/ui/Badge';
import GradientText from '@/components/shared/ui/GradientText';
import Button from '@/components/shared/ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <Container className="z-10">
        {/* Section Header / Announcement */}
        <div className="flex justify-center lg:justify-start mb-12 animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Badge 
              className="relative px-6 py-2 bg-[#0a0a0c] border-white/10 text-indigo-400"
              icon={
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
              }
            >
              새로운 도전을 시작할 준비가 되었습니다
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <h1 className="text-5xl md:text-8xl font-black mb-0 leading-[0.82] tracking-[-0.06em] text-white">
            Building Digital <br />
            <GradientText>Masterpieces.</GradientText>
          </h1>
          <div className="text-xl md:text-2xl font-bold text-slate-500 mb-10 tracking-tight mt-5">
            가치 있는 디지털 결과물을 빚어냅니다
          </div>
          
          <p className="text-slate-400 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed font-medium break-keep">
            비즈니스의 본질을 감각적으로 통찰하고, AI 기술을 도구 삼아 최상의 가치를 빚어냅니다.
            단순한 코딩을 넘어, 기술의 가치를 더해 비즈니스의 도약을 이끄는 디지털 결과물을 완성합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center lg:justify-start w-full sm:w-auto">
            <Button size="xl" variant="secondary" as={Link} to="/" hash="contact" className="w-full sm:w-auto">
              Contact Me
            </Button>
            
            <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md group hover:bg-white/10 transition-all text-left">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Briefcase size={20} className="text-indigo-400" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Recent Role</div>
                <div className="text-sm font-bold text-white">Project Manager @ 스마트핏</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-[3rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-700" />
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-2xl overflow-hidden shadow-2xl">
              <img 
                src="/imgs/am_i.jpg" 
                alt="Developer Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
            </div>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
