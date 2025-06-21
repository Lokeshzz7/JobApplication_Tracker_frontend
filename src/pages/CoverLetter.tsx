
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, RefreshCw, Save } from "lucide-react";

const CoverLetter = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cover Letter Generator</h1>
          <p className="text-gray-600">Create personalized cover letters with AI assistance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>Provide information about the position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="e.g., Senior Frontend Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="e.g., TechCorp Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tone">Writing Tone</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="highlights">Key Points to Highlight</Label>
                <Textarea 
                  id="highlights" 
                  placeholder="e.g., 5 years React experience, led team of 4 developers..."
                  rows={3}
                />
              </div>
              <Button className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                Generate Cover Letter
              </Button>
            </CardContent>
          </Card>

          {/* Generated Cover Letter */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Generated Cover Letter</CardTitle>
                <CardDescription>AI-generated cover letter based on your inputs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  className="min-h-96"
                  defaultValue="Dear Hiring Manager,

I am writing to express my strong interest in the Senior Frontend Developer position at TechCorp Inc. With over 5 years of experience in React development and a proven track record of delivering high-quality web applications, I am excited about the opportunity to contribute to your innovative team.

In my current role, I have successfully led a team of 4 developers in building scalable frontend solutions that serve over 100,000 daily active users. My expertise in React, TypeScript, and modern web technologies aligns perfectly with your requirements. I have consistently delivered projects on time and within budget while maintaining high code quality standards.

What particularly excites me about TechCorp is your commitment to innovation and user-centric design. Your recent product launch demonstrates the kind of forward-thinking approach that I thrive in. I am eager to bring my passion for creating exceptional user experiences and my collaborative leadership style to your development team.

I would welcome the opportunity to discuss how my experience and enthusiasm can contribute to TechCorp's continued success. Thank you for considering my application.

Sincerely,
John Doe"
                />
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                  <Button variant="outline">
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoverLetter;
