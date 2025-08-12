import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Bookmark, 
  Calendar, 
  ExternalLink, 
  Trash2, 
  Bell,
  Filter,
  SortAsc
} from "lucide-react";
import { useState } from "react";
import "./bookmarks.css";

const mockBookmarks = [
  {
    id: 1,
    title: "청년 월세 지원",
    category: "청년",
    deadline: "2024-02-15",
    description: "만 19~34세 청년에게 월세를 지원하는 정책으로, 월 최대 20만원까지 12개월간 지원",
    savedDate: "2024-01-12",
    notificationEnabled: true,
    source: "복지로",
    link: "#"
  },
  {
    id: 2,
    title: "소상공인 재난지원금",
    category: "소상공인",
    deadline: "2024-02-20",
    description: "코로나19로 피해를 입은 소상공인을 대상으로 하는 재난지원금",
    savedDate: "2024-01-10",
    notificationEnabled: false,
    source: "중소벤처기업부",
    link: "#"
  },
  {
    id: 3,
    title: "어르신 돌봄 서비스",
    category: "어르신",
    deadline: "2024-02-28",
    description: "65세 이상 어르신을 대상으로 하는 재가 돌봄 서비스",
    savedDate: "2024-01-08",
    notificationEnabled: true,
    source: "보건복지부",
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
    <div className="bookmarks-page">
      <Navigation />
      
      <main className="bookmarks-container">
        <div className="bookmarks-header">
          <h1 className="bookmarks-title">즐겨찾기</h1>
          <p className="bookmarks-subtitle">저장한 정책들을 관리하고 알림을 설정하세요</p>
        </div>

        {/* 필터 및 정렬 */}
        <div className="bookmarks-filters">
          {/* 카테고리 필터 */}
          <div className="bookmarks-category">
            <Filter className="w-4 h-4 muted-icon" />
            <span className="text-sm font-medium">카테고리:</span>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filterCategory === category ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setFilterCategory(category)}
                className={filterCategory === category ? "" : "text-muted-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* 정렬 */}
          <div className="bookmarks-sort">
            <SortAsc className="w-4 h-4 muted-icon" />
            <span className="text-sm font-medium">정렬:</span>
            <Button
              variant={sortBy === "deadline" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSortBy("deadline")}
            >
              마감 임박순
            </Button>
            <Button
              variant={sortBy === "recent" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSortBy("recent")}
            >
              최근 저장순
            </Button>
          </div>
        </div>

        {/* 북마크 목록 */}
        <div className="bookmarks-grid">
          {filteredAndSortedBookmarks.length === 0 ? (
            <Card className="bookmarks-empty">
              <Bookmark className="w-12 h-12 mx-auto mb-4 muted-icon opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                저장된 정책이 없습니다
              </h3>
              <p className="text-muted-foreground">
                AI 챗봇에서 관심 있는 정책을 저장해보세요
              </p>
            </Card>
          ) : (
            filteredAndSortedBookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="bookmark-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="bookmark-card-title">{bookmark.title}</CardTitle>
                        <Badge variant="secondary">{bookmark.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {bookmark.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeBookmark(bookmark.id)}
                      className="bookmark-delete-btn"
                      aria-label="북마크 삭제"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="bookmark-meta">
                    <div className="bookmark-meta-items">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        마감: {bookmark.deadline}
                      </div>
                      <div>출처: {bookmark.source}</div>
                      <div>저장: {bookmark.savedDate}</div>
                    </div>
                  </div>
                  
                  <div className="bookmark-actions">
                    <div className="bookmark-action-left">
                      <div className="bookmark-notify">
                        <Bell className="w-4 h-4 muted-icon" />
                        <span className="text-sm">알림</span>
                        <Switch
                          checked={bookmark.notificationEnabled}
                          onCheckedChange={() => toggleNotification(bookmark.id)}
                          aria-label="알림 설정 토글"
                        />
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" asChild>
                      <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        신청하러 가기
                      </a>
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