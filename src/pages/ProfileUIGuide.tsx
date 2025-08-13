import { useEffect, useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function ProfileUIGuide() {
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    document.title = "마이페이지 UI 컴포넌트 가이드";
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const content = "마이페이지에서 사용하는 Card, Button, Input, Select, DatePicker 등 UI 컴포넌트를 한 페이지에서 확인하세요.";
    if (meta) meta.content = content; else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">마이페이지 UI 컴포넌트 가이드</h1>
          <p className="text-muted-foreground mt-1">소상공인·기업 사용자를 위한 프로필 화면의 핵심 UI를 미리보기로 제공합니다.</p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>기본</Button>
              <Button variant="outline">외곽선</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="ghost">고스트</Button>
              <Button variant="link">링크</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inputs & Labels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="홍길동" />
              </div>
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="biz@example.com" />
              </div>
              <div>
                <Label htmlFor="employees">종업원 수</Label>
                <Input id="employees" type="number" min={0} placeholder="0" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Selects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="industry">업종</Label>
                <Select>
                  <SelectTrigger id="industry"><SelectValue placeholder="업종 선택" /></SelectTrigger>
                  <SelectContent className="z-50">
                    <SelectItem value="제조업">제조업</SelectItem>
                    <SelectItem value="도소매업">도소매업</SelectItem>
                    <SelectItem value="서비스업">서비스업</SelectItem>
                    <SelectItem value="정보통신업">정보통신업</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="region">사업장 지역</Label>
                <Select>
                  <SelectTrigger id="region"><SelectValue placeholder="지역 선택" /></SelectTrigger>
                  <SelectContent className="z-50">
                    <SelectItem value="서울특별시">서울특별시</SelectItem>
                    <SelectItem value="경기도">경기도</SelectItem>
                    <SelectItem value="부산광역시">부산광역시</SelectItem>
                    <SelectItem value="대구광역시">대구광역시</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Date Picker</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>사업시작일 선택</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges & Dividers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge>기본 배지</Badge>
                <Badge variant="secondary">보조 배지</Badge>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground">구분선을 이용해 정보를 시각적으로 분리할 수 있습니다.</p>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Form Layout (샘플)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>이름</Label>
                  <Input placeholder="홍길동" />
                </div>
                <div>
                  <Label>이메일</Label>
                  <Input type="email" placeholder="biz@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>전화번호</Label>
                  <Input placeholder="010-0000-0000" />
                </div>
                <div>
                  <Label>종업원 수</Label>
                  <Input type="number" min={0} placeholder="0" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>업종</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="업종 선택" /></SelectTrigger>
                    <SelectContent className="z-50">
                      <SelectItem value="제조업">제조업</SelectItem>
                      <SelectItem value="도소매업">도소매업</SelectItem>
                      <SelectItem value="서비스업">서비스업</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>사업장 지역</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="지역 선택" /></SelectTrigger>
                    <SelectContent className="z-50">
                      <SelectItem value="서울특별시">서울특별시</SelectItem>
                      <SelectItem value="경기도">경기도</SelectItem>
                      <SelectItem value="부산광역시">부산광역시</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">초기화</Button>
                <Button>저장</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
