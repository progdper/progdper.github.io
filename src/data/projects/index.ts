import { Project, ProjectTask } from './types';

export * from './types';

/**
 * 프로젝트 데이터 자동 스캔 (Eager 모드)
 * - 모든 20xx.ts 파일을 즉시 로드하여 메인 화면 등에서 바로 사용할 수 있게 함
 */
const allModules = import.meta.glob('./20*.ts', { eager: true });

/**
 * 모든 연도별 데이터를 하나의 배열로 통합 (자동화)
 */
export const projectsData: Project[] = Object.values(allModules)
  .flatMap((module: any) => {
    const key = Object.keys(module).find(k => k.startsWith('projects'));
    return (key ? module[key] : []) as Project[];
  })
  .sort((a: Project, b: Project) => {
    // 각 프로젝트의 tasks 중 가장 최신 month 추출
    const aLastMonth = a.tasks.reduce((max: string, t: ProjectTask) => (t.month > max ? t.month : max), '00.00');
    const bLastMonth = b.tasks.reduce((max: string, t: ProjectTask) => (t.month > max ? t.month : max), '00.00');
    return bLastMonth.localeCompare(aLastMonth);
  });

/**
 * 프로젝트 데이터 지연 로딩용 로더 (Projects 페이지용)
 */
export const projectLoaders = import.meta.glob('./20*.ts');

/**
 * 파일명에서 연도를 추출하여 정렬된 목록 생성 (자동화)
 */
export const availableYears = Object.keys(projectLoaders)
  .map(path => {
    const match = path.match(/20\d{2}/);
    return match ? match[0] : '';
  })
  .filter(Boolean)
  .sort((a, b) => b.localeCompare(a));
