
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Calendar, Bell, FileText, MoreHorizontal } from "lucide-react";

const Applications = () => {
  const [search, setSearch] = useState("");
  
  const applications = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp",
      status: "Interview Scheduled",
      appliedDate: "2024-01-15",
      followUpDate: "2024-01-20",
      salary: "$120k - $150k",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      jobTitle: "Full Stack Engineer",
      company: "StartupXYZ",
      status: "Applied",
      appliedDate: "2024-01-12",
      followUpDate: "2024-01-19",
      salary: "$100k - $130k",
      location: "Remote"
    },
    {
      id: 3,
      jobTitle: "React Developer",
      company: "BigTech Inc",
      status: "Under Review",
      appliedDate: "2024-01-10",
      followUpDate: "2024-01-17",
      salary: "$140k - $180k",
      location: "New York, NY"
    },
    {
      id: 4,
      jobTitle: "Software Engineer",
      company: "Innovative Co",
      status: "Rejected",
      appliedDate: "2024-01-08",
      followUpDate: null,
      salary: "$110k - $140k",
      location: "Austin, TX"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-yellow-100 text-yellow-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      case "Interview Scheduled":
        return "bg-green-100 text-green-800";
      case "Offer":
        return "bg-purple-100 text-purple-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const kanbanColumns = [
    { title: "Applied", status: "Applied", color: "border-yellow-200" },
    { title: "Under Review", status: "Under Review", color: "border-blue-200" },
    { title: "Interview", status: "Interview Scheduled", color: "border-green-200" },
    { title: "Offer", status: "Offer", color: "border-purple-200" },
    { title: "Rejected", status: "Rejected", color: "border-red-200" }
  ];

  const getApplicationsByStatus = (status: string) => {
    return applications.filter(app => app.status === status);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
            <p className="text-gray-600">Track and manage your job applications</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Application
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search applications..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="applied">Applied</SelectItem>
              <SelectItem value="review">Under Review</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="offer">Offer</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* View Toggle */}
        <Tabs defaultValue="table" className="space-y-4">
          <TabsList>
            <TabsTrigger value="table">Table View</TabsTrigger>
            <TabsTrigger value="kanban">Kanban View</TabsTrigger>
          </TabsList>

          {/* Table View */}
          <TabsContent value="table">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applied Date</TableHead>
                      <TableHead>Follow-up Date</TableHead>
                      <TableHead>Salary</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.jobTitle}</TableCell>
                        <TableCell>{app.company}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(app.status)}>
                            {app.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{app.appliedDate}</TableCell>
                        <TableCell>{app.followUpDate || "-"}</TableCell>
                        <TableCell>{app.salary}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <FileText className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Bell className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Kanban View */}
          <TabsContent value="kanban">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {kanbanColumns.map((column) => (
                <Card key={column.status} className={`border-t-4 ${column.color}`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {column.title}
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {getApplicationsByStatus(column.status).length}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {getApplicationsByStatus(column.status).map((app) => (
                      <Card key={app.id} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">{app.jobTitle}</h4>
                          <p className="text-xs text-gray-600">{app.company}</p>
                          <p className="text-xs text-gray-500">{app.appliedDate}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {app.location}
                            </Badge>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <FileText className="w-3 h-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <Bell className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Applications;
