import { Project } from './types';

export const projects2023: Project[] = [
  {
    id: 'aibici-sub-core-2023',
    name: 'AiBICI EXPRESS 백엔드 개발',
    category: '백엔드',
    client: '자체',
    period: '2023. 11. ~ 2023. 11.',
    year: '2023',
    startDate: '2023-11',
    techStack: ['GraphQL', 'Express', 'Apollo Server', 'TypeGraphQL', 'Prisma', 'MongoDB'],
    description: 'Express + Apollo Server 를 기반인 Graphql 구조이며 TypeGraphql-Prisma를 사용하여 MongoDB를 제어함',
    learnings: ['GraphQL 사용방법과 백엔드 API 서버의 구조와 장단점'],
    tasks: [
      { month: '23.11', description: 'AiBICI EXPRESS 회원가입 및 서비스 생성, 외주 용역', imageUrl: '/imgs/years/2023/2311_1.png', },
      { month: '23.11', description: 'AiBICI EXPRESS 회원가입 및 서비스 생성, 외주 용역', imageUrl: '/imgs/years/2023/2311_3.png', hidden: true },
      
    ],
  },  
  {
    id: 'company-product-webpage-2023',
    name: '회사 제품 웹페이지 기획 및 마크업',
    category: '퍼블리싱',
    client: '자체',
    period: '2023. 02. ~ 2023. 02.',
    year: '2023',
    startDate: '2023-02',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    videoUrl: 'https://www.youtube.com/watch?v=g3CudWRDeIY',
    description: '회사 제품을 홍보하기 위한 웹페이지를 반응형 개발',
    learnings: ['반응형 웹사이트 디자인'],
    tasks: [
      { month: '23.02', description: '회사 제품 웹페이지 기획 및 요구사항을 바탕으로 목업 제작', imageUrl: '/imgs/years/2023/2302_1.png', },
      { month: '23.02', description: '회사 제품 웹페이지 기획 및 요구사항을 바탕으로 목업 제작', imageUrl: '/imgs/years/2023/2302_2.png', hidden: true },
      { month: '23.02', description: 'HTML + CSS + JavaScript를 활용한 웹사이트 구축', imageUrl: '/imgs/years/2023/2302_3.png', hidden:true, isRepresentative: true },
      { month: '22.02', description: 'HTML + CSS + JavaScript를 활용한 웹사이트 구축', imageUrl: '/imgs/years/2023/2302_4.png', hidden: true },      
    ],
  },  
];
