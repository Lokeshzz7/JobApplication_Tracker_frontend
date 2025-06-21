
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Zap, CheckCircle } from "lucide-react";

const ResumeOptimizer = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resume Optimizer</h1>
          <p className="text-gray-600">AI-powered resume optimization for better job matches</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Resume */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Upload Resume
              </CardTitle>
              <CardDescription>Upload your current resume or paste the content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <Button variant="outline">Upload File</Button>
                  <p className="mt-2 text-sm text-gray-500">or drag and drop</p>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">OR</div>
              <Textarea placeholder="Paste your resume content here..." rows={6} />
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Job Description
              </CardTitle>
              <CardDescription>Add the job description you're targeting</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Paste the job description here..."
                rows={12}
                defaultValue="We are looking for a Senior Frontend Developer with 5+ years of experience in React, TypeScript, and modern web technologies. The ideal candidate should have experience with cloud platforms, CI/CD, and agile development methodologies."
              />
              <Button className="w-full mt-4">
                <Zap className="w-4 h-4 mr-2" />
                Analyze & Optimize
              </Button>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Personalized suggestions to improve your resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Add Missing Keywords</p>
                  <p className="text-sm text-green-700">Include "TypeScript", "CI/CD", "Agile" in your skills section</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">Strengthen Experience</p>
                  <p className="text-sm text-blue-700">Quantify your React projects with metrics and impact</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm font-medium text-yellow-800">Improve Formatting</p>
                  <p className="text-sm text-yellow-700">Use consistent bullet points and action verbs</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Apply All Suggestions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ResumeOptimizer;
