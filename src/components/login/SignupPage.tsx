import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SignupPage = () => {
  useEffect(() => {
    document.title = "회원가입 - 복지랑";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("회원가입 기능은 곧 제공됩니다", {
      description: "Supabase 연결 후 활성화됩니다.",
    });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-4rem)] bg-background">
        <section className="container mx-auto px-4 py-10">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>회원가입</CardTitle>
                <CardDescription>간단한 정보 입력으로 시작해보세요</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" type="text" placeholder="홍길동" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">회원가입</Button>
                </form>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">이미 계정이 있으신가요?</p>
                <Button variant="ghost" asChild>
                  <Link to="/login">로그인</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignupPage;
