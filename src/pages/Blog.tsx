import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'study-tips', name: 'Study Tips', count: 8 },
    { id: 'exam-prep', name: 'Exam Preparation', count: 6 },
    { id: 'technology', name: 'Technology', count: 5 },
    { id: 'success-stories', name: 'Success Stories', count: 3 },
    { id: 'updates', name: 'Platform Updates', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Proven Study Techniques That Actually Work",
      excerpt: "Discover evidence-based study methods that can dramatically improve your learning efficiency and retention rates.",
      content: "From the Pomodoro Technique to active recall, we explore scientifically-backed methods...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "study-tips",
      tags: ["Study Methods", "Learning", "Productivity"],
      featured: true
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Personalized Learning",
      excerpt: "Explore how artificial intelligence is creating adaptive learning experiences tailored to individual student needs.",
      content: "Artificial intelligence has transformed many industries, and education is no exception...",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "technology",
      tags: ["AI", "EdTech", "Innovation"],
      featured: true
    },
    {
      id: 3,
      title: "Mastering Time Management During Exam Season",
      excerpt: "Strategic approaches to balance study time, practice tests, and self-care during intensive exam periods.",
      content: "Exam season can be overwhelming, but with the right time management strategies...",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "exam-prep",
      tags: ["Time Management", "Exams", "Stress Management"],
      featured: false
    },
    {
      id: 4,
      title: "From Struggling Student to Top Performer: Maria's Journey",
      excerpt: "How one student transformed her academic performance using adaptive learning techniques and consistent practice.",
      content: "Maria started college with below-average grades, but through dedication and smart study strategies...",
      author: "Content Team",
      date: "2024-01-08",
      readTime: "5 min read",
      category: "success-stories",
      tags: ["Success Story", "Motivation", "Student Journey"],
      featured: false
    },
    {
      id: 5,
      title: "Understanding Different Learning Styles and How to Adapt",
      excerpt: "Identify your learning style and discover methods to optimize your study approach for better results.",
      content: "Not everyone learns the same way. Understanding your unique learning style can significantly...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "study-tips",
      tags: ["Learning Styles", "Study Tips", "Personalization"],
      featured: false
    },
    {
      id: 6,
      title: "New Feature: Real-time Progress Analytics",
      excerpt: "Introducing our latest dashboard feature that provides instant insights into your learning progress and performance.",
      content: "We're excited to announce the launch of our new real-time analytics dashboard...",
      author: "Product Team",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "updates",
      tags: ["Product Update", "Analytics", "Dashboard"],
      featured: false
    },
    {
      id: 7,
      title: "The Science Behind Spaced Repetition",
      excerpt: "Learn why spacing out your study sessions leads to better long-term retention and how to implement this technique.",
      content: "Spaced repetition is one of the most powerful learning techniques backed by decades of research...",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-01",
      readTime: "9 min read",
      category: "study-tips",
      tags: ["Memory", "Learning Science", "Study Techniques"],
      featured: false
    },
    {
      id: 8,
      title: "Building Confidence for High-Stakes Exams",
      excerpt: "Psychological strategies and practical tips to manage exam anxiety and perform at your best when it matters most.",
      content: "High-stakes exams can be intimidating, but with the right mindset and preparation...",
      author: "Dr. Sarah Johnson",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "exam-prep",
      tags: ["Confidence", "Exam Anxiety", "Performance"],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-display text-white">
              Blog & Resources
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover expert insights, study tips, and the latest in educational technology 
              to enhance your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="learning-card group animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full btn-hero-primary group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-display">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`} 
              ({filteredPosts.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="learning-card group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or browse different categories.
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold font-display text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90">
              Get the latest study tips, exam strategies, and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="btn-hero-secondary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;