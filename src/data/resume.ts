export interface Experience {
  period: string;
  company: string;
  role: string;
  details: string[];
  isLegacy?: boolean;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  type: 'backend' | 'frontend' | 'business';
}

export interface Education {
  period: string;
  school: string;
  major: string;
  degree: string;
  description?: string;
}

export interface Training {
  period: string;
  institution: string;
  course: string;
  details?: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    status: string;
  };
  experiences: Experience[];
  skillCategories: SkillCategory[];
  education: Education[];
  training: Training[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Choi Jaehun',
    title: '풀스택 개발자 · 기술 전략가',
    description:
      '비즈니스의 본질을 감각적으로 통찰하고, AI 기술을 도구 삼아 최상의 가치를 빚어냅니다. 12년 이상의 비즈니스 실무 경험을 바탕으로 기술을 비즈니스 언어로 연결하며, 데이터와 지능형 기술을 결합해 실제적인 비즈니스 도약을 이끄는 개발자입니다.',
    email: 'progdper@gmail.com',
    phone: '010-6382-7493',
    location: '경남, 대한민국',
    status: '채용 및 협업 가능',
  },
  experiences: [
    {
      period: '2025.12 - 재 직 중',
      company: '(주)스마트핏',
      role: 'Project Manager / Full-Stack Developer',
      details: [
        '요구사항 분석과 프로젝트 일정 수립을 포함한 PM 역할 수행',
        '기존 서비스 유지보수 및 기능 개선',
        'Nextjs, Tailwind Css, Atomic Design 기반의 반응형 웹 디자인 및 개발',
      ],
    },
    {
      period: '2022.06 - 2025.09',
      company: '(주)USSOFT 외',
      role: 'Project Manager / Full-Stack Developer',
      details: [
        '요구사항 분석과 프로젝트 일정 수립을 포함한 PM 역할 수행',
        '스타트업 경험도 있기에 스타트업의 요구사항과 니즈를 파악하여 개발 업무 수행',
        'Nodejs Framework, Java Spring Boot, Python FrameWork',
      ],
    },
    {
      period: '2021.11 - 2022.04',
      company: 'KH정보교육원',
      role: '국비지원 교육 수료',
      details: [
        'S/W Engineering 고찰과 Java 기반 Spring FrameWork 교육 이수',
        '기획부터 구현, Git 형상관리까지 프로젝트 전 과정을 경험',
      ],
    },
    {
      period: '2009.05 - 2021.11',
      company: '건설업, 제조업(50인 이상) 울산지역',
      role: 'Manager',
      isLegacy: true,
      description:
        '12년간 기업 운영과 지원 부서에서 근무하며 법령 검토, 관공서 대응, 부서 간 조율과 중재 역량을 쌓았습니다. 이 경험은 개발 과정에서도 요구사항을 명확하게 정의하고 복잡한 이해관계를 정리하는 기반이 되었습니다.',
      details: [
        '경영관리 기획 및 실행',
        '관공서 행정 업무 대응 및 법규 준수',
        '부서 간 협업 및 중재를 통한 프로젝트 원활한 진행',
      ],
    },
  ],
  skillCategories: [
    {
      title: 'Backend Development',
      type: 'backend',
      skills: ['Spring Boot', 'Express', 'Django', 'NestJS', 'GraphQL'],
    },
    {
      title: 'Frontend Development',
      type: 'frontend',
      skills: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'Tailwind CSS'],
    },
    {
      title: 'Planning & Business',
      type: 'business',
      skills: ['PM', 'Requirement Analysis', 'DB Design', 'Issue Management', 'Business Communication'],
    },
  ],
  education: [
    {
      period: '2020.03 - 2025.02',
      school: '한국방송통신대학교',
      major: '컴퓨터과학과',
      degree: '학사 졸업',
      description: '개발자에게 필요한 이론과 실무 감각을 함께 익히며 최신 기술 흐름을 꾸준히 학습했습니다.',
    },
    {
      period: '2012.03 - 2023.02',
      school: '한국방송통신대학교',
      major: '법학과',
      degree: '학사 졸업',
      description: '논리적 사고와 법적 관점에서 문제를 해석하고 정리하는 훈련을 쌓았습니다.',
    },
    {
      period: '2001.03 - 2008.08',
      school: '울산대학교',
      major: '경영학과',
      degree: '학사 졸업',
      description: '비즈니스 프로세스와 조직 운영의 기본 구조를 이해하며 실무 감각을 넓혔습니다.',
    },
  ],
  training: [],
};
