import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle, Search, ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-secondary/20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-primary opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-secondary to-accent opacity-10 blur-2xl rounded-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-card border border-border/50">
                <span className="text-sm font-medium text-primary">🎯 맞춤형 AI 정책 도우미</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  복지랑
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl">
                  나에게 딱 맞는<br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    정책을 찾아드려요
                  </span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                청년부터 어르신까지, 누구나 쉽게 자신에게 맞는 복지·정책 정보를 
                <span className="font-semibold text-primary"> AI 챗봇</span>으로 빠르게 찾을 수 있습니다
              </p>
            </div>

            {/* Enhanced Search input */}
            <Card className="p-6 shadow-card bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center space-x-3 flex-1 w-full">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <input
                    type="text"
                    placeholder="어떤 정책이 궁금하신가요? (예: 청년 월세 지원, 창업 대출)"
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
                  />
                </div>
                <Button 
                  asChild 
                  className="bg-gradient-primary hover:shadow-hover transition-smooth px-8 py-3 text-lg font-semibold whitespace-nowrap"
                >
                  <Link to="/chat">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    AI에게 물어보기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Enhanced Quick actions */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">인기 검색어:</p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="secondary" 
                  asChild 
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Link to="/chat">
                    💰 청년 월세 지원
                  </Link>
                </Button>
                <Button 
                  variant="secondary" 
                  asChild 
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Link to="/chat">
                    🏪 소상공인 재난지원금
                  </Link>
                </Button>
                <Button 
                  variant="secondary" 
                  asChild 
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Link to="/chat">
                    👥 어르신 돌봄 서비스
                  </Link>
                </Button>
                <Button 
                  variant="secondary" 
                  asChild 
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Link to="/chat">
                    🚀 창업 지원 정책
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Right visual */}
          <div className="relative lg:block">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full opacity-30 animate-bounce"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-card rounded-3xl p-8 shadow-hover border border-border/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <img
                    src={heroBanner}
                    alt="복지랑 AI 챗봇 서비스"
                    className="w-full h-auto rounded-2xl shadow-md"
                  />
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">AI 챗봇이 실시간으로 답변</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}