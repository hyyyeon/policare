import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { PopularQuestions } from "@/components/home/PopularQuestions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main>
        <HeroSection />
        <FeatureCards />
        <PopularQuestions />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">복지랑</h3>
            <p className="text-muted-foreground mb-4">
              AI로 더 쉽게 찾는 나만의 복지·정책 정보
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 복지랑. 모든 권리 보유.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
