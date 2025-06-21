
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, MapPin, DollarSign, Clock, Bookmark } from "lucide-react";

const JobSearch = () => {
  const jobBoards = [
    { name: "LinkedIn", logo: "🔗", connected: true },
    { name: "Indeed", logo: "🟦", connected: false },
    { name: "Glassdoor", logo: "🟢", connected: false },
    { name: "AngelList", logo: "👼", connected: true }
  ];

  const recentJobs = [
    {
      title: "Senior React Developer",
      company: "TechFlow Inc",
      location: "San Francisco, CA",
      salary: "$140k - $180k",
      posted: "2 days ago",
      type: "Full-time",
      remote: true
    },
    {
      title: "Frontend Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$120k - $150k",
      posted: "1 week ago",
      type: "Full-time",
      remote: true
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "New York, NY",
      salary: "$130k - $160k",
      posted: "3 days ago",
      type: "Full-time",
      remote: false
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Search</h1>
          <p className="text-gray-600">Find and track new opportunities</p>
        </div>

        {/* Manual Entry Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add Job Manually</CardTitle>
            <CardDescription>Manually add job opportunities you want to track</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="e.g., Senior Frontend Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="e.g., TechCorp Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g., San Francisco, CA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range</Label>
                <Input id="salary" placeholder="e.g., $120k - $150k" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobUrl">Job Posting URL</Label>
              <Input id="jobUrl" placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Any additional notes about this position..." rows={3} />
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </CardContent>
        </Card>

        {/* Job Board Integration */}
        <Card>
          <CardHeader>
            <CardTitle>Connected Job Boards</CardTitle>
            <CardDescription>Connect to job boards to automatically fetch opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {jobBoards.map((board, index) => (
                <div key={index} className="p-4 border rounded-lg text-center">
                  <div className="text-2xl mb-2">{board.logo}</div>
                  <h3 className="font-medium">{board.name}</h3>
                  <Button 
                    variant={board.connected ? "outline" : "default"} 
                    size="sm" 
                    className="mt-2 w-full"
                  >
                    {board.connected ? "Connected" : "Connect"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Job Recommendations */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recommended Jobs</CardTitle>
                <CardDescription>Jobs that match your profile and preferences</CardDescription>
              </div>
              <Button variant="outline">
                <Search className="w-4 h-4 mr-2" />
                Search More
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs.map((job, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        {job.remote && <Badge variant="secondary">Remote</Badge>}
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <p className="text-gray-600 font-medium">{job.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button size="sm">Apply</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search Preferences</CardTitle>
            <CardDescription>Set your job search criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Keywords</Label>
                <Input placeholder="React, Frontend, JavaScript" />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input placeholder="San Francisco, Remote" />
              </div>
              <div className="space-y-2">
                <Label>Salary Range</Label>
                <Input placeholder="$100k - $150k" />
              </div>
            </div>
            <Button className="mt-4">
              <Search className="w-4 h-4 mr-2" />
              Save Search Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default JobSearch;
