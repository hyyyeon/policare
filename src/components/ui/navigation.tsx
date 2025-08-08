import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, Calendar, Bookmark, User, Home } from "lucide-react";

const navigationItems = [
  { name: "홈", href: "/", icon: Home },
  { name: "AI 챗봇", href: "/chat", icon: MessageCircle },
  { name: "정책 캘린더", href: "/calendar", icon: Calendar },
  { name: "즐겨찾기", href: "/bookmarks", icon: Bookmark },
  { name: "마이페이지", href: "/profile", icon: User },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">복지랑</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={cn(
                    "flex items-center space-x-2 px-3",
                    isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Link to={item.href}>
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">메뉴 열기</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>

          {/* Auth actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link to="/login">로그인</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/signup">회원가입</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-border bg-card">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Button
                key={item.name}
                variant={isActive ? "default" : "ghost"}
                asChild
                className={cn(
                  "w-full justify-start space-x-3",
                  isActive && "bg-gradient-primary text-primary-foreground"
                )}
              >
                <Link to={item.href}>
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            );
          })}

          <div className="pt-2 flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <Link to="/login">로그인</Link>
            </Button>
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to="/signup">회원가입</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}