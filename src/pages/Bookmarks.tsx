import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Bookmark, 
  Clock, 
  ExternalLink, 
  Bell, 
  BellOff,
  Trash2,
  Filter
} from "lucide-react";
import { useState } from "react";

const mockBookmarks = [
  {
    id: 1,
    title: "청년 월세 지원",
    category: "청년",
    deadline: "2024-02-15",
    description: "만 19~34세 청년에게 월세를 지원하는 정책입니다. 소득 요건을 충족하는 경우 월 최대 20만원까지 지원받을 수 있습니다.",
    savedDate: "2024-01-10",
    notificationEnabled: true,
    source: "국토교통부",
    link: "#"
  },
  {
    id: 2,
    title: "소상공인 재난지원금",
    category: "소상공인",
    deadline: "2024-02-20",
    description: "코로나19로 피해를 입은 소상공인을 대상으로 하는 재난지원금입니다. 매출 감소율에 따라 차등 지원됩니다.",
    savedDate: "2024-01-08",
    notificationEnabled: false,
    source: "중소벤처기업부",
    link: "#"
  },
  {
    id: 3,
    title: "청년 취업 지원 프로그램",
    category: "청년",
    deadline: "2024-03-01",
    description: "청년 취업을 위한 직업훈련과 취업매칭 서비스를 제공합니다. 훈련비 전액 지원 및 취업 성공시 인센티브 제공",
    savedDate: "2024-01-12",
    notificationEnabled: true,
    source: "고용노동부",
    link: "#"
  }
];

const BookmarksPage = () => {
  const [bookmarks, setBookmarks] = useState(mockBookmarks);
  const [sortBy, setSortBy] = useState<"deadline" | "recent">("deadline");
  const [filterCategory, setFilterCategory] = useState<string>("전체");

  const categories = ["전체", "청년", "소상공인", "어르신"];

  const toggleNotification = (id: number) => {
    setBookmarks(prev => 
      prev.map(bookmark => 
        bookmark.id === id 
          ? { ...bookmark, notificationEnabled: !bookmark.notificationEnabled }
          : bookmark
      )
    );
  };

  const removeBookmark = (id: number) => {
    setBookmarks(prev => prev.filter(bookmark => bookmark.id !== id));
  };

  const filteredAndSortedBookmarks = bookmarks
    .filter(bookmark => filterCategory === "전체" || bookmark.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === "deadline") {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      } else {
        return new Date(b.savedDate).getTime() - new Date(a.savedDate).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">즐겨찾기</h1>
          <p className="text-muted-foreground">저장한 정책을 관리하고 알림을 설정하세요</p>
        </div>

        {/* 필터 및 정렬 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              필터
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filterCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={sortBy === "deadline" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("deadline")}
            >
              마감 임박 순
            </Button>
            <Button
              variant={sortBy === "recent" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("recent")}
            >
              최근 저장 순
            </Button>
          </div>
        </div>

        {/* 즐겨찾기 목록 */}
        <div className="space-y-4">
          {filteredAndSortedBookmarks.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Bookmark className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">저장된 정책이 없습니다.</p>
              </CardContent>
            </Card>
          ) : (
            filteredAndSortedBookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Bookmark className="w-5 h-5 text-primary fill-primary" />
                      <h3 className="font-semibold text-foreground">{bookmark.title}</h3>
                      <Badge variant="secondary">{bookmark.category}</Badge>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeBookmark(bookmark.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {bookmark.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      마감일: {bookmark.deadline}
                    </div>
                    <div>출처: {bookmark.source}</div>
                    <div>저장일: {bookmark.savedDate}</div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleNotification(bookmark.id)}
                        className="flex items-center gap-2"
                      >
                        {bookmark.notificationEnabled ? (
                          <>
                            <Bell className="w-4 h-4" />
                            알림 ON
                          </>
                        ) : (
                          <>
                            <BellOff className="w-4 h-4" />
                            알림 OFF
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      신청하러 가기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default BookmarksPage;