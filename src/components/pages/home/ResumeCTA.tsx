import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { resumeData } from '@/data';
import Card from '@/components/shared/ui/Card';
import Badge from '@/components/shared/ui/Badge';
import Button from '@/components/shared/ui/Button';

const ResumeCTA: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <Card className="bg-gradient-to-br from-indigo-600 to-indigo-900 border-none shadow-2xl shadow-indigo-500/20" padding="lg">
      <div className="relative z-10">
        <Badge 
          variant="glass" 
          size="sm" 
          className="mb-6 bg-white/10 border-white/20"
          icon={<Sparkles size={12} className="text-indigo-200" />}
        >
          Available for Hire
        </Badge>
        
        <h3 className="text-2xl font-black text-white mb-4 leading-tight">
          함께 성장할 <br />파트너를 찾으시나요?
        </h3>
        
        <p className="text-indigo-100/70 mb-8 text-sm font-medium leading-relaxed">
          기술적 도전과 비즈니스 성장을 <br />
          함께 고민할 준비가 되어 있습니다.
        </p>
        
        <Button 
          variant="secondary" 
          size="md" 
          as="a" 
          href={`mailto:${personalInfo.email}`}
          icon={<Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          className="w-full"
        >
          Send Message
        </Button>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl" />
    </Card>
  );
};

export default ResumeCTA;
