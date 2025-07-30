import { Shield, Award, Users, Clock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "정부 인증",
    description: "공식 정책 데이터"
  },
  {
    icon: Award,
    title: "신뢰성 보장",
    description: "검증된 정보만 제공"
  },
  {
    icon: Users,
    title: "50만+ 이용자",
    description: "많은 분들이 선택"
  },
  {
    icon: Clock,
    title: "24시간 서비스",
    description: "언제든지 이용 가능"
  }
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-hover transition-smooth">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}