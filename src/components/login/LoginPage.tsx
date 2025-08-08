import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LoginPage = () => {
  useEffect(() => {
    document.title = "로그인 - 복지랑";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("로그인 기능은 곧 제공됩니다", {
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
                <CardTitle>로그인</CardTitle>
                <CardDescription>복지랑 계정으로 로그인하세요</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">로그인</Button>
                </form>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">계정이 없으신가요?</p>
                <Button variant="ghost" asChild>
                  <Link to="/signup">회원가입</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
