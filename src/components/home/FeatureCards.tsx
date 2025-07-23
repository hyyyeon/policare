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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            복지랑의 주요 기능
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI 기술과 최신 정책 데이터로 여러분에게 가장 적합한 복지 정보를 제공합니다
          </p>
        </div>

        {/* Main feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-smooth bg-gradient-card border-border/50 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-80 rounded-lg flex items-center justify-center`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full group-hover:shadow-md transition-smooth">
                    <Link to={feature.href}>
                      바로 이용하기
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center p-6 bg-gradient-card border-border/50">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
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