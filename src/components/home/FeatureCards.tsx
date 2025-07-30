import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Calendar, Bookmark, Bell, Target, ExternalLink } from "lucide-react";
import chatbotIcon from "@/assets/chatbot-icon.jpg";
import calendarIcon from "@/assets/calendar-icon.jpg";
import bookmarkIcon from "@/assets/bookmark-icon.jpg";

const features = [
  {
    title: "AI 챗봇 상담",
    description: "자연어로 질문하면 맞춤형 정책을 즉시 찾아드려요",
    icon: MessageCircle,
    image: chatbotIcon,
    href: "/chat",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "정책 캘린더",
    description: "신청 마감일을 한눈에 보고 놓치지 마세요",
    icon: Calendar,
    image: calendarIcon,
    href: "/calendar",
    color: "from-green-500 to-green-600"
  },
  {
    title: "즐겨찾기",
    description: "관심 있는 정책을 저장하고 알림을 받아보세요",
    icon: Bookmark,
    image: bookmarkIcon,
    href: "/bookmarks",
    color: "from-purple-500 to-purple-600"
  }
];

const additionalFeatures = [
  {
    title: "맞춤형 추천",
    description: "나이, 직업, 상황에 따른 정확한 정책 추천",
    icon: Target
  },
  {
    title: "마감일 알림",
    description: "중요한 정책 신청 마감일을 미리 알려드려요",
    icon: Bell
  },
  {
    title: "공식 출처",
    description: "정부·지자체 공식 정보로 신뢰할 수 있어요",
    icon: ExternalLink
  }
];

export function FeatureCards() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-secondary to-accent opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-card border border-border/50 mb-6">
            <span className="text-sm font-medium text-primary">✨ 주요 서비스</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            복지랑이 제공하는
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">스마트한 기능들</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI 기술과 최신 정책 데이터로 여러분에게 가장 적합한 복지 정보를 
            정확하고 빠르게 제공합니다
          </p>
        </div>

        {/* Enhanced Main feature cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover hover:-translate-y-2 transition-all duration-300 bg-gradient-card border-border/50 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="pb-6 relative">
                  <div className="relative mb-6">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-85 flex items-center justify-center`}>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <Icon className="w-14 h-14 text-white drop-shadow-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-foreground font-bold mb-3">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <Button 
                    asChild 
                    className="w-full group-hover:shadow-md transition-all duration-300 bg-gradient-primary hover:scale-105"
                  >
                    <Link to={feature.href}>
                      <span className="font-semibold">바로 이용하기</span>
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Additional features */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center p-8 bg-gradient-card border-border/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-hover transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}