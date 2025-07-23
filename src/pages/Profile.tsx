import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Settings, 
  Bell, 
  Bookmark, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  Briefcase
} from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "홍길동",
    email: "hong@example.com",
    phone: "010-1234-5678",
    age: "28",
    location: "서울특별시",
    occupation: "직장인",
    category: "청년"
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    deadline: true
  });

  const stats = {
    bookmarks: 3,
    notifications: 2,
    appliedPolicies: 1
  };

  const recentActivities = [
    { type: "bookmark", title: "청년 월세 지원", date: "2024-01-12" },
    { type: "notification", title: "소상공인 재난지원금 마감 임박", date: "2024-01-11" },
    { type: "applied", title: "청년 취업 지원 프로그램 신청 완료", date: "2024-01-10" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">마이페이지</h1>
          <p className="text-muted-foreground">개인정보와 알림 설정을 관리하세요</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 왼쪽: 프로필 정보 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 기본 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  기본 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">이름</Label>
                    <Input 
                      id="name" 
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">나이</Label>
                    <Input 
                      id="age" 
                      value={userInfo.age}
                      onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">이메일</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">연락처</Label>
                    <Input 
                      id="phone" 
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">거주지</Label>
                    <Input 
                      id="location" 
                      value={userInfo.location}
                      onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="occupation">직업</Label>
                    <Input 
                      id="occupation" 
                      value={userInfo.occupation}
                      onChange={(e) => setUserInfo({...userInfo, occupation: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">분류</Label>
                    <Input 
                      id="category" 
                      value={userInfo.category}
                      onChange={(e) => setUserInfo({...userInfo, category: e.target.value})}
                    />
                  </div>
                </div>
                
                <Button className="w-full">정보 수정</Button>
              </CardContent>
            </Card>

            {/* 알림 설정 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  알림 설정
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>이메일 알림</span>
                  </div>
                  <Switch 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>SMS 알림</span>
                  </div>
                  <Switch 
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <span>푸시 알림</span>
                  </div>
                  <Switch 
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>마감일 알림</span>
                  </div>
                  <Switch 
                    checked={notifications.deadline}
                    onCheckedChange={(checked) => setNotifications({...notifications, deadline: checked})}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 오른쪽: 활동 요약 */}
          <div className="space-y-6">
            {/* 통계 */}
            <Card>
              <CardHeader>
                <CardTitle>활동 요약</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">즐겨찾기</span>
                  </div>
                  <Badge variant="secondary">{stats.bookmarks}개</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">알림 설정</span>
                  </div>
                  <Badge variant="secondary">{stats.notifications}개</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">신청한 정책</span>
                  </div>
                  <Badge variant="secondary">{stats.appliedPolicies}개</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 최근 활동 */}
            <Card>
              <CardHeader>
                <CardTitle>최근 활동</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                      {index < recentActivities.length - 1 && <Separator className="my-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;