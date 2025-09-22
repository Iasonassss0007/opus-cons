import { AppLayout } from '@/components/Layout/AppLayout';
import { Header } from '@/components/Navigation/Header';
import '@/styles/navigation.css';
import '@/styles/language.css';

export default function Home() {
  return (
    <AppLayout>
      <div className="min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Hero section removed */}
        </main>
      </div>
    </AppLayout>
  );
}