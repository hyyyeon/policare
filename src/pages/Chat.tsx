import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Navigation } from "@/components/ui/navigation";
import { Send, Bot, User, Bookmark, Bell, ExternalLink, Lightbulb } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  sources?: string[];
}

const suggestedQuestions = [
  "청년 월세 지원 신청 조건은 무엇인가요?",
  "소상공인 재난지원금은 언제까지 신청할 수 있나요?",
  "기초연금 수급 자격을 알려주세요",
  "청년 취업 지원 프로그램이 있나요?",
  "어르신 돌봄 서비스 이용 방법을 알려주세요"
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const initialQuestion = searchParams.get('q');
    if (initialQuestion) {
      setInputValue(initialQuestion);
    }
  }, [searchParams]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // 시뮬레이션된 AI 응답 (실제로는 Perplexity API 호출)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `"${messageText}"에 대한 정책 정보를 찾았습니다.\n\n현재 이 질문과 관련된 여러 정책들이 운영되고 있습니다. 구체적인 신청 조건, 지원 금액, 신청 방법 등을 확인하시려면 관련 기관에 문의하시거나 공식 웹사이트를 확인해주세요.\n\n더 구체적인 정보가 필요하시면 추가 질문을 해주세요.`,
        timestamp: new Date(),
        sources: [
          "정부24 (www.gov.kr)",
          "고용노동부 (www.moel.go.kr)",
          "보건복지부 (www.mohw.go.kr)"
        ]
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI 정책 상담</h1>
          <p className="text-muted-foreground">
            궁금한 정책이나 복지 정보를 자연어로 질문해보세요
          </p>
        </div>

        {/* Chat Messages */}
        <Card className="mb-6 bg-card/80 backdrop-blur-sm shadow-card">
          <CardContent className="p-0">
            <ScrollArea ref={scrollAreaRef} className="h-[500px] p-6">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    복지랑 AI에게 무엇이든 물어보세요
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    정책, 복지, 지원금 등 궁금한 것을 자연어로 질문해보세요
                  </p>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      추천 질문
                    </div>
                    {suggestedQuestions.slice(0, 3).map((question, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full text-left justify-start h-auto p-3 bg-muted/50 hover:bg-muted border border-border/50"
                        onClick={() => handleSuggestedQuestion(question)}
                      >
                        <span className="text-sm">{question}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-gradient-primary text-primary-foreground'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        
                        <div className={`rounded-2xl p-4 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted border border-border'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          
                          {message.sources && (
                            <div className="mt-3 pt-3 border-t border-border/50">
                              <p className="text-xs text-muted-foreground mb-2">출처:</p>
                              <div className="space-y-1">
                                {message.sources.map((source, index) => (
                                  <div key={index} className="flex items-center text-xs text-muted-foreground">
                                    <ExternalLink className="w-3 h-3 mr-1" />
                                    {source}
                                  </div>
                                ))}
                              </div>
                              
                              <div className="flex space-x-2 mt-3">
                                <Button size="sm" variant="outline" className="text-xs">
                                  <Bookmark className="w-3 h-3 mr-1" />
                                  저장
                                </Button>
                                <Button size="sm" variant="outline" className="text-xs">
                                  <Bell className="w-3 h-3 mr-1" />
                                  알림
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="bg-muted border border-border rounded-2xl p-4">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Input Area */}
        <Card className="bg-card/80 backdrop-blur-sm shadow-card">
          <CardContent className="p-4">
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="정책이나 복지 정보에 대해 궁금한 것을 물어보세요..."
                className="flex-1"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                disabled={isLoading}
              />
              <Button 
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="bg-gradient-primary hover:shadow-hover transition-smooth"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {suggestedQuestions.slice(3).map((question, index) => (
                  <Button
                    key={index}
                    variant="secondary"
                    size="sm"
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}