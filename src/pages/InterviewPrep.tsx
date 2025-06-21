
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Target, MessageSquare, Brain, Users, Play } from "lucide-react";

const InterviewPrep = () => {
  const technicalQuestions = [
    {
      question: "Explain the difference between useState and useEffect in React.",
      difficulty: "Medium",
      category: "React"
    },
    {
      question: "How would you optimize a React application's performance?",
      difficulty: "Hard",
      category: "Performance"
    },
    {
      question: "What is the difference between TypeScript and JavaScript?",
      difficulty: "Easy",
      category: "TypeScript"
    }
  ];

  const behavioralQuestions = [
    {
      question: "Tell me about a time you had to work with a difficult team member.",
      framework: "STAR Method"
    },
    {
      question: "Describe a challenging project you worked on and how you overcame obstacles.",
      framework: "STAR Method"
    },
    {
      question: "How do you handle competing priorities and tight deadlines?",
      framework: "STAR Method"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Interview Preparation</h1>
          <p className="text-gray-600">AI-powered interview practice and preparation</p>
        </div>

        {/*Setup Section */}
        <Card>
          <CardHeader>
            <CardTitle>Customize Your Prep Session</CardTitle>
            <CardDescription>Tell us about the role you're preparing for</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Job Title (e.g., Senior Frontend Developer)" />
              <Input placeholder="Company Name" />
            </div>
            <Button>
              <Target className="w-4 h-4 mr-2" />
              Generate Questions
            </Button>
          </CardContent>
        </Card>

        {/* Question Categories */}
        <Tabs defaultValue="technical" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="technical" className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="behavioral" className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Behavioral
            </TabsTrigger>
            <TabsTrigger value="hr" className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              HR Questions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-4">
            <div className="grid gap-4">
              {technicalQuestions.map((q, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-medium text-lg">{q.question}</h3>
                      <div className="flex space-x-2 ml-4">
                        <Badge className={getDifficultyColor(q.difficulty)}>
                          {q.difficulty}
                        </Badge>
                        <Badge variant="outline">{q.category}</Badge>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium mb-2">AI Suggested Answer:</p>
                      <p className="text-sm text-blue-700">
                        {index === 0 && "useState is used for managing local component state, while useEffect handles side effects like API calls, subscriptions, or DOM manipulation. useState returns a state value and setter function, while useEffect runs after render and can optionally clean up..."}
                        {index === 1 && "React performance optimization includes: 1) Using React.memo for component memoization, 2) Implementing useMemo and useCallback for expensive calculations, 3) Code splitting with React.lazy, 4) Optimizing bundle size, and 5) Using proper key props in lists..."}
                        {index === 2 && "TypeScript is a superset of JavaScript that adds static type checking. Key differences include: compile-time error checking, better IDE support, interfaces and type definitions, enhanced code maintainability, and improved developer experience..."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="behavioral" className="space-y-4">
            <div className="grid gap-4">
              {behavioralQuestions.map((q, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-medium text-lg">{q.question}</h3>
                      <Badge variant="outline">{q.framework}</Badge>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800 font-medium mb-2">STAR Framework Guide:</p>
                      <div className="text-sm text-green-700 space-y-1">
                        <p><strong>Situation:</strong> Set the context</p>
                        <p><strong>Task:</strong> Describe your responsibility</p>
                        <p><strong>Action:</strong> Explain what you did</p>
                        <p><strong>Result:</strong> Share the outcome</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hr" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4">Common HR Questions</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-medium">"Tell me about yourself"</p>
                    <p className="text-sm text-gray-600 mt-1">Focus on your professional journey, key achievements, and what you're looking for next.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium">"Why do you want to work here?"</p>
                    <p className="text-sm text-gray-600 mt-1">Research the company's mission, values, and recent achievements to give a specific answer.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-medium">"What are your salary expectations?"</p>
                    <p className="text-sm text-gray-600 mt-1">Research market rates and provide a range based on your experience and the role's requirements.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Mock Interview */}
       
      </div>
    </Layout>
  );
};

export default InterviewPrep;
