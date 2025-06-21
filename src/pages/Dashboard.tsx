
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Briefcase, 
  Calendar, 
  Clock, 
  FileText, 
  Plus, 
  TrendingUp,
  Users,
  Target,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Applications Sent",
      value: "24",
      change: "+12%",
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Interviews Scheduled",
      value: "8",
      change: "+25%",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Response Rate",
      value: "33%",
      change: "+8%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Offers Received",
      value: "3",
      change: "+200%",
      icon: CheckCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const recentApplications = [
    {
      company: "TechCorp",
      position: "Senior Frontend Developer",
      status: "Interview Scheduled",
      appliedDate: "2 days ago",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      status: "Applied",
      appliedDate: "5 days ago",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      company: "BigTech Inc",
      position: "React Developer",
      status: "Under Review",
      appliedDate: "1 week ago",
      statusColor: "bg-purple-100 text-purple-800"
    }
  ];

  const upcomingTasks = [
    { task: "Follow up with TechCorp", due: "Today", priority: "high" },
    { task: "Complete take-home assignment", due: "Tomorrow", priority: "high" },
    { task: "Research BigTech Inc culture", due: "This week", priority: "medium" },
    { task: "Update portfolio website", due: "Next week", priority: "low" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-blue-100 text-lg">
                You have 3 interviews scheduled this week. Keep up the great work! 🚀
              </p>
            </div>
            <div className="hidden md:block">
              <Button variant="secondary" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Add Application
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  <span className="text-sm text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Your latest job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{app.position}</h4>
                      <p className="text-sm text-gray-600">{app.company}</p>
                      <p className="text-xs text-gray-500 mt-1">{app.appliedDate}</p>
                    </div>
                    <Badge className={app.statusColor}>{app.status}</Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Applications
              </Button>
            </CardContent>
          </Card>

        

        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get things done faster</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="p-6 h-auto flex-col space-y-2">
                <FileText className="w-8 h-8 text-blue-600" />
                <span>Optimize Resume</span>
              </Button>
              <Button variant="outline" className="p-6 h-auto flex-col space-y-2">
                <Target className="w-8 h-8 text-green-600" />
                <span>Practice Interview</span>
              </Button>
              <Button variant="outline" className="p-6 h-auto flex-col space-y-2">
                <BarChart3 className="w-8 h-8 text-purple-600" />
                <span>View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
