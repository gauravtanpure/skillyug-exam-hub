import React from 'react';
import { BarChart, BookOpen, Trophy, TrendingUp, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';

const Dashboard = () => {
  return (
    <Layout showFooter={false}>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-display">Welcome back, Alex!</h1>
            <p className="text-muted-foreground">Continue your learning journey</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card className="learning-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tests Completed</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="learning-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                    <p className="text-2xl font-bold">87%</p>
                  </div>
                  <Trophy className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card className="learning-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Study Streak</p>
                    <p className="text-2xl font-bold">12 days</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="learning-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Time Studied</p>
                    <p className="text-2xl font-bold">45h</p>
                  </div>
                  <Clock className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="learning-card">
              <CardHeader>
                <CardTitle>Recent Tests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Advanced Mathematics", score: 92, date: "2 days ago" },
                  { name: "Python Programming", score: 85, date: "5 days ago" },
                  { name: "Logical Reasoning", score: 78, date: "1 week ago" }
                ].map((test, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-muted/30">
                    <div>
                      <p className="font-medium">{test.name}</p>
                      <p className="text-sm text-muted-foreground">{test.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{test.score}%</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < 4 ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="w-full btn-hero-primary">View All Tests</Button>
              </CardContent>
            </Card>

            <Card className="learning-card">
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { subject: "Mathematics", progress: 78 },
                  { subject: "Programming", progress: 65 },
                  { subject: "Science", progress: 42 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.subject}</span>
                      <span className="text-sm text-muted-foreground">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;