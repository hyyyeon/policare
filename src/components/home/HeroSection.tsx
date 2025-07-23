import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle, Search, ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-subtle min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  복지랑
                </span>
                <br />
                나에게 맞는<br />
                정책을 찾아드려요
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                청년, 소상공인, 어르신 등 누구나 쉽게 자신에게 맞는 복지·정책 정보를 
                AI 챗봇으로 빠르게 찾을 수 있습니다.
              </p>
            </div>

            {/* Search input */}
            <Card className="p-4 shadow-card bg-gradient-card">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="어떤 정책이 궁금하신가요? (예: 청년 월세 지원, 소상공인 대출)"
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
                <Button asChild className="bg-gradient-primary hover:shadow-hover transition-smooth">
                  <Link to="/chat">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    AI에게 물어보기
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" asChild>
                <Link to="/chat">
                  "청년 월세 지원"
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/chat">
                  "소상공인 재난지원금"
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/chat">
                  "어르신 돌봄 서비스"
                </Link>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl transform rotate-6"></div>
            <img
              src={heroBanner}
              alt="복지랑 서비스 소개"
              className="relative w-full h-auto rounded-3xl shadow-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}