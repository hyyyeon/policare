import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { 
  User, 
  Settings, 
  Bell, 
  Bookmark, 
  Calendar,
  Mail,
  Phone,
  Briefcase,
  Lock
} from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "홍길동",
    email: "hong@example.com",
    phone: "010-1234-5678",
    industry: "도소매업",
    businessRegion: "서울특별시",
    startDate: "2023-01-01",
    employees: 5
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    deadline: true
  });

  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: ""
  });

  const { toast } = useToast();

  useEffect(() => {
    document.title = "마이페이지 - 기본정보 관리";
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.content = "이름, 이메일, 전화번호, 업종, 사업장 지역, 사업시작일, 종업원 수 및 비밀번호 변경을 관리하세요.";
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = "이름, 이메일, 전화번호, 업종, 사업장 지역, 사업시작일, 종업원 수 및 비밀번호 변경을 관리하세요.";
      document.head.appendChild(m);
    }
  }, []);

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
                    <Label htmlFor="email">이메일</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">전화번호</Label>
                    <Input 
                      id="phone" 
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">업종</Label>
                    <Select value={userInfo.industry} onValueChange={(val) => setUserInfo({...userInfo, industry: val})}>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="업종 선택" />
                      </SelectTrigger>
                      <SelectContent className="z-50">
                        <SelectItem value="제조업">제조업</SelectItem>
                        <SelectItem value="도소매업">도소매업</SelectItem>
                        <SelectItem value="서비스업">서비스업</SelectItem>
                        <SelectItem value="정보통신업">정보통신업</SelectItem>
                        <SelectItem value="숙박·음식점업">숙박·음식점업</SelectItem>
                        <SelectItem value="건설업">건설업</SelectItem>
                        <SelectItem value="운수업">운수업</SelectItem>
                        <SelectItem value="교육서비스업">교육서비스업</SelectItem>
                        <SelectItem value="보건·사회복지업">보건·사회복지업</SelectItem>
                        <SelectItem value="기타">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessRegion">사업장 지역</Label>
                    <Select value={userInfo.businessRegion} onValueChange={(val) => setUserInfo({...userInfo, businessRegion: val})}>
                      <SelectTrigger id="businessRegion">
                        <SelectValue placeholder="지역 선택" />
                      </SelectTrigger>
                      <SelectContent className="z-50">
                        <SelectItem value="서울특별시">서울특별시</SelectItem>
                        <SelectItem value="부산광역시">부산광역시</SelectItem>
                        <SelectItem value="대구광역시">대구광역시</SelectItem>
                        <SelectItem value="인천광역시">인천광역시</SelectItem>
                        <SelectItem value="광주광역시">광주광역시</SelectItem>
                        <SelectItem value="대전광역시">대전광역시</SelectItem>
                        <SelectItem value="울산광역시">울산광역시</SelectItem>
                        <SelectItem value="세종특별자치시">세종특별자치시</SelectItem>
                        <SelectItem value="경기도">경기도</SelectItem>
                        <SelectItem value="강원특별자치도">강원특별자치도</SelectItem>
                        <SelectItem value="충청북도">충청북도</SelectItem>
                        <SelectItem value="충청남도">충청남도</SelectItem>
                        <SelectItem value="전북특별자치도">전북특별자치도</SelectItem>
                        <SelectItem value="전라남도">전라남도</SelectItem>
                        <SelectItem value="경상북도">경상북도</SelectItem>
                        <SelectItem value="경상남도">경상남도</SelectItem>
                        <SelectItem value="제주특별자치도">제주특별자치도</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="startDate">사업시작일</Label>
                    <Input 
                      id="startDate" 
                      type="date"
                      value={userInfo.startDate}
                      onChange={(e) => setUserInfo({...userInfo, startDate: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employees">종업원 수</Label>
                    <Input 
                      id="employees" 
                      type="number"
                      min={0}
                      value={userInfo.employees}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          employees: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                
                <Button className="w-full">정보 수정</Button>
              </CardContent>
            </Card>

            {/* 비밀번호 변경 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  비밀번호 변경
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="currentPassword">현재 비밀번호</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwords.current}
                      onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">새 비밀번호</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwords.next}
                      onChange={(e) => setPasswords({ ...passwords, next: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">새 비밀번호 확인</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                    />
                  </div>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    if (!passwords.current || !passwords.next || !passwords.confirm) {
                      toast({ title: "실패", description: "모든 비밀번호 입력란을 채워주세요." });
                      return;
                    }
                    if (passwords.next !== passwords.confirm) {
                      toast({ title: "실패", description: "새 비밀번호가 일치하지 않습니다." });
                      return;
                    }
                    toast({ title: "성공", description: "비밀번호 변경 요청이 제출되었습니다." });
                  }}
                >
                  비밀번호 변경
                </Button>
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