import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, TrendingUp, Users, Building, Heart } from "lucide-react";

const categories = [
  {
    title: "청년 정책",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    questions: [
      "청년 월세 지원 신청 방법이 궁금해요",
      "청년 취업 지원금은 어떻게 받나요?",
      "청년 창업 지원 프로그램 알려주세요"
    ]
  },
  {
    title: "소상공인 지원",
    icon: Building,
    color: "from-green-500 to-green-600",
    questions: [
      "소상공인 재난지원금 신청 조건은?",
      "소상공인 대출 지원 프로그램이 있나요?",
      "임대료 지원 정책이 궁금합니다"
    ]
  },
  {
    title: "어르신 복지",
    icon: Heart,
    color: "from-purple-500 to-purple-600",
    questions: [
      "기초연금 신청 방법을 알려주세요",
      "어르신 돌봄 서비스는 어떻게 이용하나요?",
      "노인장기요양보험 등급 판정은 어떻게?"
    ]
  }
];

export function PopularQuestions() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              자주 묻는 질문
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            다른 분들이 많이 찾는 정책 정보를 확인해보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border/50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-full h-24 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <Button
                      key={qIndex}
                      variant="ghost"
                      asChild
                      className="w-full justify-start text-left h-auto p-3 bg-background/50 hover:bg-background/80 border border-border/50"
                    >
                      <Link to={`/chat?q=${encodeURIComponent(question)}`}>
                        <MessageCircle className="w-4 h-4 mr-3 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{question}</span>
                      </Link>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-hover transition-smooth">
            <Link to="/chat">
              <MessageCircle className="w-5 h-5 mr-2" />
              AI 챗봇으로 더 많은 질문하기
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}