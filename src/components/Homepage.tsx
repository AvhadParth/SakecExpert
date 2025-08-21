import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Upload, Users, TrendingUp, Star, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="animate-counter">{count}{suffix}</span>;
};

// Typing animation component
const TypingAnimation = () => {
  const phrases = [
    "Explore AI & ML Projects...",
    "Discover Web Applications...", 
    "Find Data Science Work...",
    "Browse Cybersecurity Projects..."
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    let index = 0;
    
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (index < phrase.length) {
          setDisplayedText(phrase.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayedText("");
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [currentPhrase, isTyping, phrases]);

  return (
    <span className="text-gold font-medium">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SakecExpert
              </span>
            </div>
            <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button variant="ghost" size="sm">About</Button>
              <Button variant="ghost" size="sm">Contact</Button>
              <Button variant="outline" size="sm">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Explore, Learn, and Share
              <br />
              <span className="text-foreground">Final Year Projects</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Discover innovative student projects, get inspired by cutting-edge research, and showcase your own work to the academic community.
            </p>
            
            {/* Typing Animation */}
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <p className="text-lg text-muted-foreground">
                <TypingAnimation />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/browse">
                <Button size="lg" className="group bg-gradient-primary hover:shadow-hero transition-all duration-300 transform hover:scale-105">
                  <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Browse Projects
                </Button>
              </Link>
              <Link to="/submit">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group border-2 border-gold text-gold hover:bg-gold hover:color-white-foreshadow transition-all duration-300 hover:shadow-soft animate-pulse-glow"
                >
                  <Upload className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Submit Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FileText, label: "Projects Submitted", value: 1247, suffix: "+" },
              { icon: Users, label: "Active Students", value: 356, suffix: "" },
              { icon: TrendingUp, label: "Topics Submitted", value: 45, suffix: "+" },
              { icon: Star, label: "Usability Rate", value: 94, suffix: "%" }
            ].map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-elevated transition-all duration-300 animate-scale-in bg-card/80 backdrop-blur-sm border-border/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Everything You Need to
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform designed to help students explore, learn, and share their academic achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Search & Filters",
                description: "Find exactly what you're looking for with advanced search capabilities and category filters.",
                icon: Search,
                delay: "0s"
              },
              {
                title: "GitHub Integration", 
                description: "Seamlessly connect your projects with GitHub repositories for easy code sharing.",
                icon: Github,
                delay: "0.2s"
              },
              {
                title: "Academic Excellence",
                description: "Showcase your best work and get recognition from peers and faculty members.",
                icon: Star,
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-500 animate-fade-in-up border-border/50 bg-card/80 backdrop-blur-sm" style={{ animationDelay: feature.delay }}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Student Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get inspired by the latest innovations from our student community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "AI-Powered Learning Assistant", category: "Artificial Intelligence", author: "Sarah Johnson" },
              { title: "Sustainable Smart City Platform", category: "Web Development", author: "Mike Chen" },
              { title: "Blockchain Voting System", category: "Cybersecurity", author: "Alex Rivera" }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 cursor-pointer animate-scale-in border-border/50 bg-card/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-gold/10 text-gold border-gold/20">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">by {project.author}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">
                      View Project
                    </Button>
                    <Button size="sm" variant="ghost" className="group-hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/browse">
              <Button size="lg" variant="outline" className="group border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View All Projects
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="container mx-auto px-4 animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-3xl font-bold">SakecExpert</span>
            </div>
            <p className="text-xl mb-4 text-primary-foreground/90">
              Sakec College of Engineering
            </p>
            <p className="text-primary-foreground/70 text-lg">
              Built by Students, for Students • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
