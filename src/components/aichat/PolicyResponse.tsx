import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Calendar, ExternalLink, Home, Target, Clock, DollarSign, FileText } from "lucide-react";

interface PolicyData {
  title: string;
  icon: React.ReactNode;
  target: string;
  period: string;
  support: string;
  method: string;
  link: {
    title: string;
    url: string;
  };
}

interface PolicyResponseProps {
  data: PolicyData;
  onBookmark?: () => void;
  onCalendar?: () => void;
}

export const PolicyResponse = ({ data, onBookmark, onCalendar }: PolicyResponseProps) => {
  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="text-primary text-xl">{data.icon}</div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{data.title}</h3>
            <Badge variant="secondary" className="mt-1">2025</Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* 지원 대상 */}
        <div className="flex gap-3">
          <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-foreground">지원 대상</h4>
            <p className="text-sm text-muted-foreground mt-1">{data.target}</p>
          </div>
        </div>

        {/* 신청 기간 */}
        <div className="flex gap-3">
          <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-foreground">신청 기간</h4>
            <p className="text-sm text-muted-foreground mt-1">{data.period}</p>
          </div>
        </div>

        {/* 지원 내용 */}
        <div className="flex gap-3">
          <DollarSign className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-foreground">지원 내용</h4>
            <p className="text-sm text-muted-foreground mt-1">{data.support}</p>
          </div>
        </div>

        {/* 신청 방법 */}
        <div className="flex gap-3">
          <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-foreground">신청 방법</h4>
            <p className="text-sm text-muted-foreground mt-1">{data.method}</p>
          </div>
        </div>

        {/* 공식 링크 */}
        <div className="flex gap-3">
          <ExternalLink className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm text-foreground">공식 링크</h4>
            <a 
              href={data.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline mt-1 inline-flex items-center gap-1"
            >
              {data.link.title}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex gap-2 pt-4 border-t border-border">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onBookmark}
            className="flex-1"
          >
            <Bookmark className="w-4 h-4 mr-2" />
            즐겨찾기 추가
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onCalendar}
            className="flex-1"
          >
            <Calendar className="w-4 h-4 mr-2" />
            캘린더 등록
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};