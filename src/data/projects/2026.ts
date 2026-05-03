import { Project } from './types';

export const projects2026: Project[] = [
  {
    id: 'smartfit-rtp-2026',
    name: 'RtoP 시스템 고도화',
    category: '기능 개선',
    client: '자체',
    period: '2025. 12. ~ 진행중',
    year: ['2025', '2026'],
    startDate: '2025-12',
    techStack: ['Next.js', 'React Native', 'MariaDB'],
    description: '기존 RtoP 운영 서비스 기능 개선',
    learnings: ['React Native와 스토어 등록'],
    tasks: [
      { month: '25.12', description: '소셜로그인 기능 개선', imageUrl: '/imgs/years/2025/2512.png' },
    ],
  },  
  {
    id: 'smartfit-prehab-2026',
    name: '프리햅 운영 시스템 개발',
    category: '고객사 프로젝트',
    client: '(주)프리햅',
    period: '2026. 01. ~ 진행중',
    year: '2026',
    startDate: '2026-01',
    techStack: ['Next.js', 'React Native', 'MariaDB', 'Typescript', 'Prisma', 'Electron'],
    description: 'AI를 활용(바이브코딩)하여 프리햅 운영사이트를 구축했습니다.',
    learnings: ['Next.js SSE 최적화','Prisma ORM 활용','Electron 앱 개발'],
    tasks: [
      { month: '26.01', description: '프리햅 Nextjs 관리자 프론트 및 백엔드', imageUrl: '/imgs/years/2026/2601.png' },
      { month: '26.02', description: '프리햅 Nextjs 사용자 프론트 밑 백엔드 및 운영 서버 ', imageUrl: '/imgs/years/2026/2602.png' },
      { month: '26.03', description: '프리햅 React Native WebView', imageUrl: '/imgs/years/2026/2603.png' },
      { month: '26.04', description: '프리햅 기능 개선 및 Electron 기능 개발', imageUrl: '/imgs/years/2026/2604.png' },
    ],
    featured: true,
  },
];
