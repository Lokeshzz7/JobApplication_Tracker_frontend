import Layout from "@/components/Layout";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp, Target, Calendar, Award } from "lucide-react";

const Analytics = () => {
  const applicationData = [
    { month: "Jan", applications: 12, interviews: 3, offers: 1 },
    { month: "Feb", applications: 18, interviews: 5, offers: 2 },
    { month: "Mar", applications: 15, interviews: 4, offers: 1 },
    { month: "Apr", applications: 22, interviews: 7, offers: 3 },
    { month: "May", applications: 20, interviews: 6, offers: 2 },
    { month: "Jun", applications: 25, interviews: 8, offers: 4 },
  ];

  const statusData = [
    { name: "Applied", value: 45, color: "#3b82f6" },
    { name: "Under Review", value: 25, color: "#10b981" },
    { name: "Interview", value: 15, color: "#f59e0b" },
    { name: "Offer", value: 8, color: "#8b5cf6" },
    { name: "Rejected", value: 20, color: "#ef4444" },
  ];

  const responseTimeData = [
    { week: "Week 1", time: 5.2 },
    { week: "Week 2", time: 4.8 },
    { week: "Week 3", time: 6.1 },
    { week: "Week 4", time: 4.5 },
  ];

  const [goal, setGoal] = useState({
  applications: 20,
  interviews: 5,
  networking: 5,
  followUps: 10,
});

const [actual, setActual] = useState({
  applications: 15,
  interviews: 3,
  networking: 2,
  followUps: 9,
});

const [formInput, setFormInput] = useState(goal);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormInput({ ...formInput, [name]: parseInt(value) });
};

const handleSetGoal = (e) => {
  e.preventDefault();
  setGoal(formInput);
  alert("Goals updated!");
};

  const successRate = 68;

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics & Success Probability
          </h1>
          <p className="text-gray-600">
            Track your job search performance and get insights
          </p>
        </div>

        {/* Success Probability */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <Target className="w-6 h-6 mr-2 text-green-600" />
              Success Probability
            </CardTitle>
            <CardDescription>
              Based on your application activity and market trends
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray={`${successRate}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">
                  {successRate}%
                </span>
              </div>
            </div>
            <p className="text-lg font-medium">High Success Probability</p>
            <p className="text-sm text-gray-600">
              You're likely to receive an offer within 2-3 weeks
            </p>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Applications Sent
                  </p>
                  <p className="text-3xl font-bold text-gray-900">112</p>
                  <p className="text-sm text-green-600">+18% this month</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Interviews Scheduled
                  </p>
                  <p className="text-3xl font-bold text-gray-900">33</p>
                  <p className="text-sm text-green-600">+25% this month</p>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Offers Received
                  </p>
                  <p className="text-3xl font-bold text-gray-900">13</p>
                  <p className="text-sm text-green-600">+160% this month</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-full">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Response Rate
                  </p>
                  <p className="text-3xl font-bold text-gray-900">29%</p>
                  <p className="text-sm text-green-600">+8% this month</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-full">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Applications Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>Application Activity</CardTitle>
              <CardDescription>
                Monthly applications, interviews, and offers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={applicationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar
                    dataKey="applications"
                    fill="#3b82f6"
                    name="Applications"
                  />
                  <Bar dataKey="interviews" fill="#10b981" name="Interviews" />
                  <Bar dataKey="offers" fill="#8b5cf6" name="Offers" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>
                Current distribution of application statuses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-2 mt-4">
                {statusData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">
                      {item.name}: {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Summary & Suggestions</CardTitle>
            <CardDescription>
              AI-powered insights to improve your job search
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">
                  Strong Performance
                </h4>
                <p className="text-sm text-green-700">
                  Your response rate increased by 8% this week. Keep applying to
                  similar roles!
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">
                  Improvement Opportunity
                </h4>
                <p className="text-sm text-blue-700">
                  Consider optimizing your resume for React roles - they show
                  40% higher response rates.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Next Steps</h4>
                <p className="text-sm text-purple-700">
                  Schedule 3 more applications this week to maintain momentum.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
  <CardHeader>
    <CardTitle>🎯 Goal Setting & Achievement Tracking</CardTitle>
    <CardDescription>Track your weekly goals and update them anytime</CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    <form onSubmit={handleSetGoal} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {["applications", "interviews", "networking", "followUps"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize text-gray-700 mb-1">
            {field} Goal
          </label>
          <input
            type="number"
            name={field}
            value={formInput[field]}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            min="0"
          />
        </div>
      ))}
      <div className="col-span-full">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Set Weekly Goals
        </button>
      </div>
    </form>

    <hr />

    {/* Progress display */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.keys(goal).map((key) => {
        const progress = Math.min((actual[key] / goal[key]) * 100, 100);
        const labelMap = {
          applications: "Weekly Application Goal",
          interviews: "Interview Goal",
          networking: "Networking Goal",
          followUps: "Follow-ups Sent",
        };
        return (
          <div key={key}>
            <p className="text-sm font-medium text-gray-700 mb-1">{labelMap[key]}</p>
            <Progress value={progress} className="h-3" />
            <p className="text-xs text-gray-500 mt-1">
              {actual[key]} of {goal[key]} completed
            </p>
          </div>
        );
      })}
    </div>
  </CardContent>
</Card>
    </Layout>
  );
};

export default Analytics;
