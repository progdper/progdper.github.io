import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import Navbar from '@/components/layout/Navbar'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import PageLayout from '@/components/layout/PageLayout'
import NotFound from '@/components/shared/NotFound'

export const Route = createRootRoute({
  component: () => (
    <div className="font-sans">
      <ScrollRestoration />
      
      <main className="pt-nav">
        <PageLayout>
          <Outlet />
        </PageLayout>
      </main>

      <Contact />
      <Footer />
      <Navbar />
    </div>
  ),
  notFoundComponent: () => <NotFound />,
})
