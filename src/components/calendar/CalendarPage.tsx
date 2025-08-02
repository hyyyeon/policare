import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, ExternalLink, Bell } from "lucide-react";
import { useState } from "react";

const mockPolicies = [
  {
    id: 1,
    title: "청년 월세 지원",
    deadline: "2024-02-15",
    category: "청년",
    description: "만 19~34세 청년에게 월세를 지원하는 정책",
    link: "#"
  },
  {
    id: 2,
    title: "소상공인 재난지원금",
    deadline: "2024-02-20",
    category: "소상공인",
    description: "코로나19로 피해를 입은 소상공인 대상 지원금",
    link: "#"
  },
  {
    id: 3,
    title: "어르신 돌봄 서비스",
    deadline: "2024-02-28",
    category: "어르신",
    description: "65세 이상 어르신 대상 돌봄 서비스 신청",
    link: "#"
  }
];

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  const categories = ["전체", "청년", "소상공인", "어르신"];

  const filteredPolicies = selectedCategory === "전체" 
    ? mockPolicies 
    : mockPolicies.filter(policy => policy.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">정책 캘린더</h1>
          <p className="text-muted-foreground">정책 신청 마감일을 한눈에 확인하세요</p>
        </div>

        {/* 필터 버튼 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 캘린더 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                정책 캘린더
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0"
              />
            </CardContent>
          </Card>

          {/* 정책 목록 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              마감 예정 정책
            </h2>
            
            {filteredPolicies.map((policy) => (
              <Card key={policy.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-foreground">{policy.title}</h3>
                    <Badge variant="secondary">{policy.category}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {policy.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      마감일: {policy.deadline}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Bell className="w-4 h-4 mr-1" />
                        알림
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        신청
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalendarPage;