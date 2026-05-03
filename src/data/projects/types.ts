/**
 * 프로젝트의 월별 세부 작업 단위 타입
 */
export interface ProjectTask {
  /** 작업 연월 (예: '23.01') - 정렬 및 필터링의 기준 */
  month: string;
  /** 작업 내용에 대한 상세 설명 */
  description: string;
  /** 작업 결과물 이미지 경로 (공백 시 이미지가 표시되지 않음) */
  imageUrl?: string;
  /** 타임라인 목록에서 숨김 여부 (이미지만 갤러리에 노출하고 싶을 때 사용) */
  hidden?: boolean;
  /** 
   * 프로젝트 목록(Card)에서 보여줄 대표 이미지 지정 여부.
   * - 미지정 시: 프로젝트 대표 이미지 -> 최신 작업 이미지 -> 첫 번째 이미지 순으로 자동 선택됨
   */
  isRepresentative?: boolean;
}

/**
 * 전체 프로젝트 정보를 담는 메인 타입
 */
export interface Project {
  /** 프로젝트 고유 ID (URL 경로 등으로 사용) */
  id: string;
  /** 프로젝트 공식 명칭 */
  name: string;
  /** 프로젝트 카테고리 (예: '풀스택', '퍼블리싱', '인프라' 등) */
  category: string;
  /** 클라이언트 또는 소속 기관 (예: '자체 서비스', '(주)회사명') */
  client: string;
  /** 진행 기간 표시용 문자열 (예: '2023. 03. ~ 2023. 12.') */
  period: string;
  /** 필터링용 연도 - 단일 연도('2023') 또는 다중 연도(['2022', '2023']) 지원 */
  year: string | string[];
  /** 정렬 기준이 되는 시작일 (예: '2023-03') */
  startDate: string; 
  /** 사용된 주요 기술 스택 리스트 (예: ['React', 'TypeScript']) */
  techStack: string[];
  /** 프로젝트의 핵심 요약 설명 */
  description: string;
  /** 프로젝트를 통해 얻은 주요 성과나 배운 점 리스트 */
  learnings: string[];
  /** 월별 세부 작업 내역 리스트 */
  tasks: ProjectTask[];
  /** 프로젝트 기본 대표 이미지 (tasks에 대표 이미지가 없을 경우 대비) */
  imageUrl?: string;
  /** 관련 영상 링크 (유튜브 등) */
  videoUrl?: string;
  /** 프로젝트 회고 및 상세 느낀 점 */
  reflections?: string;
  /** 홈 화면의 'Selected Projects' 섹션 노출 여부 */
  featured?: boolean;
}
