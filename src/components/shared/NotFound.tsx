import { Link } from '@tanstack/react-router'
import { Home, MoveLeft, Ghost } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 blur-3xl opacity-20 bg-primary rounded-full animate-pulse" />
        <Ghost size={120} className="text-primary relative animate-bounce" />
      </div>
      
      <h1 className="text-8xl font-black font-heading mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-fade-in">
        404
      </h1>
      
      <h2 className="text-2xl font-bold mb-6 text-white/90 break-keep">길을 잃으셨나요?</h2>
      
      <p className="text-slate-400 text-center max-w-md mb-10 leading-relaxed break-keep">
        찾으시는 페이지가 이동되었거나 삭제되었을 수 있습니다.<br />
        아래 버튼을 눌러 안전한 곳으로 돌아가세요.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <button 
          onClick={() => window.history.back()}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95 text-sm font-semibold"
        >
          <MoveLeft size={18} />
          이전 페이지로
        </button>
        
        <Link 
          to="/"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary text-white hover:opacity-90 transition-all active:scale-95 text-sm font-semibold shadow-lg shadow-primary/20"
        >
          <Home size={18} />
          홈으로 가기
        </Link>
      </div>
    </div>
  )
}
