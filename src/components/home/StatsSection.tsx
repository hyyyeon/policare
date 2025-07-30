import { TrendingUp, MessageCircle, Calendar, Bookmark } from "lucide-react";

const stats = [
  {
    icon: MessageCircle,
    value: "500K+",
    label: "AI 상담 완료",
    color: "text-blue-500"
  },
  {
    icon: Calendar,
    value: "1,200+",
    label: "정책 정보 등록",
    color: "text-green-500"
  },
  {
    icon: Bookmark,
    value: "98%",
    label: "이용자 만족도",
    color: "text-purple-500"
  },
  {
    icon: TrendingUp,
    value: "24시간",
    label: "평균 응답 시간",
    color: "text-orange-500"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            복지랑과 함께하는 성과
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            더 많은 분들이 복지랑을 통해 자신에게 맞는 정책을 찾고 계십니다
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-card rounded-2xl flex items-center justify-center shadow-card border border-border/50 group-hover:shadow-hover transition-smooth">
                    <Icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}