import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { PopularQuestions } from "@/components/home/PopularQuestions";
import { TrustBadges } from "@/components/home/TrustBadges";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="space-y-0">
        <HeroSection />
        <TrustBadges />
        <FeatureCards />
        <StatsSection />
        <PopularQuestions />
      </main>
      
      {/* Enhanced Footer */}
      <footer className="relative bg-card border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                복지랑
              </h3>
              <p className="text-muted-foreground mb-4">
                AI로 더 쉽게 찾는<br />나만의 복지·정책 정보
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">서비스</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>AI 챗봇 상담</p>
                <p>정책 캘린더</p>
                <p>즐겨찾기 관리</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">지원</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>이용 가이드</p>
                <p>자주 묻는 질문</p>
                <p>고객 지원</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 복지랑. 모든 권리 보유. | 안전하고 신뢰할 수 있는 정책 정보 서비스
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
