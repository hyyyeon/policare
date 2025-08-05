import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, MessageCircle, User, Bot, ExternalLink, Home } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PolicyResponse } from "./PolicyResponse";
import { useToast } from "@/hooks/use-toast";

interface Message {
  type: 'user' | 'bot' | 'policy';
  content: string;
  timestamp: Date;
  sources?: { title: string; url: string }[];
  policyData?: {
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
  };
}

const suggestedQuestions = [
  "청년 월세 지원 신청 방법이 궁금해요",
  "소상공인 재난지원금은 어떻게 받나요?", 
  "어르신 돌봄 서비스는 어떻게 이용하나요?",
  "청년 창업 지원 프로그램 알려주세요",
  "기초연금 신청 조건이 궁금합니다",
  "임대료 지원 정책이 있나요?"
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    const question = searchParams.get('q');
    if (question) {
      handleSendMessage(question);
    }
  }, [searchParams]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputValue.trim();
    if (!messageToSend) return;

    const userMessage: Message = {
      type: 'user',
      content: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // 시뮬레이션된 AI 응답
    setTimeout(() => {
      // 정책 관련 질문인지 확인
      if (messageToSend.includes('월세') || messageToSend.includes('청년') || messageToSend.includes('지원')) {
        const policyMessage: Message = {
          type: 'policy',
          content: '청년 월세 특별지원 정책 정보를 찾았습니다.',
          timestamp: new Date(),
          policyData: {
            title: '청년 월세 특별지원',
            icon: <Home className="w-5 h-5" />,
            target: '만 19세 ~ 34세 독립세대 청년',
            period: '2025.03.01 ~ 2025.05.31',
            support: '월 최대 20만원 지원 (최대 12개월)',
            method: '복지로 사이트 또는 주민센터 방문',
            link: {
              title: '정부24 바로가기',
              url: 'https://www.gov.kr'
            }
          }
        };
        setMessages(prev => [...prev, policyMessage]);
      } else {
        const botMessage: Message = {
          type: 'bot',
          content: `"${messageToSend}"에 대한 정보를 찾아드리고 있습니다. 구체적인 정책명이나 키워드를 포함해서 질문해주시면 더 정확한 정보를 제공할 수 있습니다.`,
          timestamp: new Date(),
          sources: [
            { title: "복지로 - 통합 복지 서비스", url: "https://www.bokjiro.go.kr" },
            { title: "정부24 - 온라인 민원서비스", url: "https://www.gov.kr" }
          ]
        };
        setMessages(prev => [...prev, botMessage]);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBookmark = () => {
    toast({
      title: "즐겨찾기 추가",
      description: "정책이 즐겨찾기에 추가되었습니다.",
    });
  };

  const handleCalendar = () => {
    toast({
      title: "캘린더 등록",
      description: "정책 일정이 캘린더에 등록되었습니다.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI 정책 상담</h1>
          <p className="text-muted-foreground">궁금한 정책에 대해 자연어로 질문해보세요</p>
        </div>

        {/* 채팅 영역 */}
        <Card className="mb-6 h-[500px] flex flex-col">
          <CardContent className="flex-1 p-6 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-4">안녕하세요! 복지랑 AI입니다.</p>
                <p>궁금한 정책에 대해 무엇이든 물어보세요.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    
                    {message.type === 'policy' && message.policyData ? (
                      <div className="max-w-[90%]">
                        <PolicyResponse 
                          data={message.policyData}
                          onBookmark={handleBookmark}
                          onCalendar={handleCalendar}
                        />
                      </div>
                    ) : (
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted border'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm">
                          {message.content}
                        </div>
                        
                        {message.sources && (
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <p className="text-xs font-medium mb-2">참고 자료:</p>
                            {message.sources.map((source, idx) => (
                              <a
                                key={idx}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-primary hover:underline"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {source.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {message.type === 'user' && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>
                          <User className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted border rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </CardContent>
        </Card>

        {/* 추천 질문 */}
        {messages.length === 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">추천 질문</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleSendMessage(question)}
                  className="text-left h-auto p-3 justify-start"
                >
                  <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                  <span className="text-sm">{question}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* 입력 영역 */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="정책에 대해 궁금한 것을 물어보세요..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={() => handleSendMessage()} 
                disabled={!inputValue.trim() || isLoading}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Chat;