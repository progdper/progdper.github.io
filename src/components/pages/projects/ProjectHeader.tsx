import React from 'react';

const ProjectHeader: React.FC = () => {
  return (
    <div className="mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent font-heading text-white">
        Project Archive
      </h2>
      <p className="text-slate-400 text-lg">지금까지 진행한 프로젝트와 월별 작업 기록을 아카이브 형태로 정리했습니다.</p>
    </div>
  );
};

export default ProjectHeader;
