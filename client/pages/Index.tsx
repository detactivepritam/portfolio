import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, Download, Code, Users, Star, Menu, X, Heart, Sparkles, Rocket, Coffee, Car, GitFork, Eye, Clock, CheckCircle, ArrowRight, Zap, Globe, Shield, Smartphone, Camera, ImageIcon, Palette, Monitor, MousePointer } from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    "python", "NumPy","Pandas","Matplotlib","C", "Git","Scikit-learn","TensorFlow","PyTorch","VS Code"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-md'
      } border-b border-white/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
                Pritam Bhuin
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
              <a href="#journey" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Journey</a>
              <a href="#vision" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Vision</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
            </div>
            
            <div className="hidden md:flex">
              <Button variant="outline" className="hover:scale-105 transition-transform duration-300 gradient-border">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                <a href="#journey" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Journey</a>
                <a href="#vision" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Vision</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                <Button variant="outline" className="w-fit">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 animate-slide-in-left relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium">Available for opportunities</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block animate-glow">
                    Pritam Bhuin
                  </span>
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-6 h-6 text-amber-600" />
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    Pre-final year Computer Science student at <span className="font-semibold text-blue-600">JIS University</span>, Passionate about building innovative AI-powered solutions with a strong focus on Python and Generative AI. Skilled in developing intelligent applications, data handling, and leveraging tools like Hugging Face and Scikit-learn to create impactful projects.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.slice(0, 8).map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-sm py-2 px-4 hover:scale-110 transition-transform duration-300 cursor-default bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 hover:border-blue-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = 'mailto:utsab.ghoshal04@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:scale-105 transition-all duration-300 gradient-border"
                  onClick={() => window.open('https://github.com/UtsabGhoshal', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center animate-slide-in-right relative z-10">
              <div className="relative animate-float">
                <div className="w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1 hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <div className="w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center relative">
                      {/* Avatar Design */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Head */}
                        <div className="w-24 h-32 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full relative">
                          {/* Eyes */}
                          <div className="absolute top-8 left-4 w-3 h-3 bg-gray-800 rounded-full"></div>
                          <div className="absolute top-8 right-4 w-3 h-3 bg-gray-800 rounded-full"></div>
                          {/* Smile */}
                          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-gray-800 rounded-full"></div>
                        </div>
                        {/* Body */}
                        <div className="absolute top-24 w-20 h-24 bg-gradient-to-b from-blue-500 to-blue-600 rounded-t-lg"></div>
                        {/* Laptop */}
                        <div className="absolute bottom-12 w-16 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                          <div className="w-12 h-6 bg-green-400 rounded-sm flex items-center justify-center">
                            <Code className="w-3 h-3 text-green-800" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce hover:animate-pulse cursor-pointer shadow-lg">
                  <Rocket className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse hover:animate-bounce cursor-pointer shadow-lg">
                  <Heart className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse delay-1000 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 px-4 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">My Coding Journey</h2>
              <Rocket className="w-8 h-8 text-blue-600 scale-x-[-1]" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every line of code brings me closer to my goal of becoming a skilled AI developer. Currently pursuing Computer Science with a specialization in AI & ML at JIS University, I’m passionate about building innovative AI-powered solutions and exploring Generative AI to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">Learning & Growing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-700">
                  Constantly expanding my knowledge in Generative AI, exploring new technologies, 
                  and building exciting projects that challenge my skills and creativity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-gradient-to-br from-green-50 to-emerald-50 border-green-200" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-green-900">Collaborating</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-700">
                  Believing in the power of teamwork and open-source contribution. Ready to collaborate 
                  on innovative projects and learn from the amazing developer community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-900">Innovating</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-700">
                  Passionate about creating AI-driven solutions that make a real impact. From Python-based applications to Generative AI projects, I’m always exploring ways to innovate and improve.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Future Vision</h2>
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-scale-in bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-indigo-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
              
              <CardHeader className="text-center relative z-10">
                <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Building Tomorrow's Solutions Today
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6 relative z-10">
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  🚀 Currently exploring <strong>Generative AI</strong> and <strong>Python</strong> to create impactful, AI-powered applications and practical tech solution
                </CardDescription>
                
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  💡 Passionate about <strong>open-source contribution</strong> and creating tools that help other developers 
                  grow and succeed in their coding journey.
                </CardDescription>
                
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  🎯 My goal is to become a <strong>Generative AI Engineer</strong>, building intelligent solutions that bridge the gap between innovative ideas and impactful real-world applications.
                </CardDescription>

                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-110 transition-transform duration-300 px-4 py-2">
                    Generative AI
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-110 transition-transform duration-300 px-4 py-2">
                    Open Source
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:scale-110 transition-transform duration-300 px-4 py-2">
                    Innovation
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:scale-110 transition-transform duration-300 px-4 py-2">
                    Problem Solving
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Open Source Project Section */}
      <section id="opensource" className="py-20 px-4 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-200/15 to-green-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Car className="w-10 h-10 text-green-600 animate-bounce" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Featured Open Source Project
              </h2>
              <div className="relative">
                <Car className="w-10 h-10 text-green-600 scale-x-[-1] animate-bounce delay-300" />
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-green-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Contributing to the future of transportation technology. 
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                Join me in revolutionizing the ride industry!
              </span>
            </p>
          </div>

          {/* Enhanced Main Card */}
          <div className="max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 animate-scale-in bg-white/80 backdrop-blur-sm border-2 border-green-200/50 relative overflow-hidden">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-300/30 to-green-300/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                {/* Enhanced Project Image/Preview */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-100 via-emerald-100 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 relative">
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets%2Ffb709f066b274ce4b391d7819e0c0170%2F0d78a96252884627a1d6bc56702f954f?format=webp&width=800"
                      alt="Cab Services App Preview"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-6 left-6 flex flex-col gap-3">
                    <Badge className="bg-white/95 text-green-700 border border-green-300 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Production Ready
                    </Badge>
                    <Badge className="bg-white/95 text-blue-700 border border-blue-300 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                      <Clock className="w-4 h-4 mr-2 text-blue-600" />
                      Active Development
                    </Badge>
                    <Badge className="bg-white/95 text-purple-700 border border-purple-300 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                      <Zap className="w-4 h-4 mr-2 text-purple-600" />
                      High Performance
                    </Badge>
                  </div>

                  {/* Feature Icons */}
                  <div className="absolute bottom-6 right-6 flex gap-3">
                    <div className="w-12 h-12 bg-green-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-purple-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Details */}
                <div className="p-8 lg:p-12 space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                          <Car className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                          <Star className="w-3 h-3 text-yellow-800" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                          Cab-services
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-semibold text-lg">Open for Contributions</span>
                          <ArrowRight className="w-4 h-4 text-green-600 animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                      This project is set up to solve the common problems of ride industry. 
                      A comprehensive solution that addresses real-world transportation challenges 
                      with modern technology and user-centric design.
                    </p>
                  </div>

                  {/* Enhanced Tech Stack */}
                  <div className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-2xl border border-green-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      Tech Stack & Features
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS"].map((tech, index) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="justify-center py-3 px-4 hover:scale-110 hover:bg-green-50 transition-all duration-300 border-green-300 text-green-700 font-semibold text-sm"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Call to Action for Beginners */}
                  <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 p-8 rounded-2xl border-2 border-green-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center gap-3 text-xl">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-white animate-pulse" />
                        </div>
                        Beginners Welcome!
                      </h4>
                      <p className="text-green-700 text-lg mb-4 leading-relaxed font-medium">
                        Perfect for developers who want to contribute to real-world projects. 
                        All skill levels are encouraged to add features and improve the platform.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="text-green-600 border-green-400 bg-white/80 text-sm py-2 px-4 hover:scale-105 transition-transform duration-300">
                          Good First Issues
                        </Badge>
                        <Badge variant="outline" className="text-green-600 border-green-400 bg-white/80 text-sm py-2 px-4 hover:scale-105 transition-transform duration-300">
                          Beginner Friendly
                        </Badge>
                        <Badge variant="outline" className="text-green-600 border-green-400 bg-white/80 text-sm py-2 px-4 hover:scale-105 transition-transform duration-300">
                          Mentorship Available
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-700 hover:via-emerald-700 hover:to-green-800 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg py-6 px-8 font-semibold"
                      onClick={() => window.open('https://github.com/UtsabGhoshal/cab-services', '_blank')}
                    >
                      <Github className="w-5 h-5 mr-3" />
                      View Repository
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="hover:scale-105 transition-all duration-300 border-2 border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 text-lg py-6 px-8 font-semibold shadow-lg hover:shadow-xl"
                      onClick={() => window.open('https://github.com/UtsabGhoshal/cab-services/fork', '_blank')}
                    >
                      <GitFork className="w-5 h-5 mr-3" />
                      Fork & Contribute
                    </Button>
                  </div>

                  {/* Enhanced Project Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-green-200">
                    <div className="flex items-center gap-8 text-sm text-gray-600">
                      <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer group">
                        <Star className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Star the repo</span>
                      </div>
                      <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer group">
                        <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Watch updates</span>
                      </div>
                      <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer group">
                        <GitFork className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Fork & contribute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Showcase Section */}
      <section id="websites" className="py-20 px-4 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200/25 to-pink-200/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-200/25 to-purple-200/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Camera className="w-10 h-10 text-purple-600 animate-bounce" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Featured Website Project
              </h2>
              <div className="relative">
                <ImageIcon className="w-10 h-10 text-purple-600 animate-bounce delay-300" />
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-purple-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-600 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Showcasing my web development skills through beautiful, functional websites.
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                Experience the live projects!
              </span>
            </p>
          </div>

          {/* Beyond Lenses Showcase */}
          <div className="max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 animate-scale-in bg-white/80 backdrop-blur-sm border-2 border-purple-200/50 relative overflow-hidden hover:border-purple-300/70 hover:bg-white/90">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-sm"></div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-12"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                {/* Website Preview */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 relative">
                    {/* Website Preview Frame with Browser */}
                    <div className="w-full h-full bg-gray-900 rounded-lg p-2 shadow-2xl transform group-hover:rotate-1 transition-transform duration-700">
                      <div className="w-full h-full bg-white rounded-md overflow-hidden relative group-hover:shadow-inner transition-shadow duration-500">
                        {/* Enhanced Browser Bar */}
                        <div className="h-8 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center px-4 border-b border-gray-300">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors duration-300 animate-pulse"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors duration-300 animate-pulse delay-100"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 transition-colors duration-300 animate-pulse delay-200"></div>
                          </div>
                          <div className="ml-4 text-xs text-gray-700 bg-white rounded px-3 py-1 shadow-sm border font-mono">🌐 beyond-lenses.netlify.app</div>
                          <div className="ml-auto flex gap-1">
                            <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                            <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          </div>
                        </div>
                        {/* Actual Website Screenshot */}
                        <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-green-900 via-gray-800 to-gray-900 relative">
                            {/* Navigation Bar */}
                            <div className="absolute top-0 left-0 w-full h-16 bg-white/95 backdrop-blur-sm flex items-center justify-between px-6 z-10">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <span className="font-bold text-gray-800">Beyond Lenses</span>
                              </div>
                              <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
                                <span className="hover:text-green-600 transition-colors">Home</span>
                                <span className="hover:text-green-600 transition-colors">Destinations</span>
                                <span className="hover:text-green-600 transition-colors">Tours</span>
                                <span className="hover:text-green-600 transition-colors">About</span>
                              </div>
                              <div className="flex gap-2">
                                <div className="px-3 py-1 bg-gray-100 rounded text-xs">Login</div>
                                <div className="px-3 py-1 bg-green-500 text-white rounded text-xs">Sign Up</div>
                              </div>
                            </div>

                            {/* Hero Section */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-green-900/70"></div>
                              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                                <div className="mb-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
                                  <span className="text-green-300 text-sm font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Authentic Bengal Experience
                                  </span>
                                </div>
                                <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                                  Discover the Beauty<br />of
                                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">West Bengal</span>
                                </h1>
                                <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                                  Experience the diverse cultures, breathtaking landscapes, and rich heritage that make West Bengal an unforgettable destination
                                </p>
                                <div className="flex gap-4">
                                  <div className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                                    Explore Destinations →
                                  </div>
                                  <div className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    Plan Your Journey
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Subtle animations */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
                              <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                              <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                            </div>
                          </div>
                          {/* Enhanced Overlay with Parallax Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200"></div>

                          {/* Floating Animation Elements */}
                          <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 delay-300"></div>
                          <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-500"></div>
                          <div className="absolute bottom-6 left-6 w-4 h-4 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 delay-700"></div>
                        </div>
                      </div>
                    </div>
                    {/* Enhanced Multi-layer Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-transparent via-indigo-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200"></div>
                  </div>

                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-6 left-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    <Badge className="bg-white/95 text-purple-700 border border-purple-300 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 transform translate-x-[-20px] group-hover:translate-x-0">
                      <Globe className="w-4 h-4 mr-2 text-purple-600" />
                      Live Website
                    </Badge>
                    <Badge className="bg-white/95 text-indigo-700 border border-indigo-300 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 delay-100 transform translate-x-[-20px] group-hover:translate-x-0">
                      <Palette className="w-4 h-4 mr-2 text-indigo-600" />
                      Travel Portal
                    </Badge>
                    <Badge className="bg-white/95 text-pink-700 border border-pink-300 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 delay-200 transform translate-x-[-20px] group-hover:translate-x-0">
                      <Monitor className="w-4 h-4 mr-2 text-pink-600" />
                      Responsive
                    </Badge>
                  </div>

                  {/* Feature Icons */}
                  <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                    <div className="w-12 h-12 bg-purple-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 transform translate-y-[20px] group-hover:translate-y-0 hover:rotate-12">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-indigo-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 delay-100 transform translate-y-[20px] group-hover:translate-y-0 hover:-rotate-12">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-pink-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 delay-200 transform translate-y-[20px] group-hover:translate-y-0 hover:rotate-12">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center animate-bounce">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
                          Beyond Lenses
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-semibold text-lg">Live & Interactive</span>
                          <MousePointer className="w-4 h-4 text-green-600 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                      A stunning travel and tourism website showcasing the beauty of West Bengal.
                      Features responsive design, smooth animations, and an intuitive user experience that brings
                      the diverse cultures, breathtaking landscapes, and rich heritage to life on the web.
                    </p>
                  </div>

                  {/* Enhanced Tech Stack */}
                  <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-2xl border border-purple-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      Technologies & Features
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {["HTML", "CSS", "JavaScript", "Responsive", "Travel UI", "Modern Design"].map((tech, index) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="justify-center py-3 px-4 hover:scale-110 hover:bg-purple-50 transition-all duration-300 border-purple-300 text-purple-700 font-semibold text-sm"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Call to Action */}
                  <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-purple-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-3 text-xl">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-white animate-pulse" />
                        </div>
                        Contribute & Collaborate!
                      </h4>
                      <p className="text-purple-700 text-lg mb-4 leading-relaxed font-medium">
                        Love what you see? This project is open for contributions! Help improve the design,
                        add new features, or enhance the user experience. Perfect for learning modern web development.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="text-purple-600 border-purple-400 bg-white/80 text-sm py-2 px-4 hover:scale-105 transition-transform duration-300">
                          UI/UX Improvements
                        </Badge>
                        <Badge variant="outline" className="text-purple-600 border-purple-400 bg-white/80 text-sm py-2 px-4 hover:scale-105 transition-transform duration-300">
                          Feature Additions
                        </Badge>
                        <Badge variant="outline" className="text-purple-600 border-purple-400 bg-white/80 text-sm py-2 px-4 hover:scale-105 transition-transform duration-300">
                          Code Optimization
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-800 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg py-6 px-8 font-semibold"
                      onClick={() => window.open('https://beyond-lenses.netlify.app/', '_blank')}
                    >
                      <Globe className="w-5 h-5 mr-3" />
                      Visit Live Website
                      <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:scale-105 transition-all duration-300 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 text-lg py-6 px-8 font-semibold shadow-lg hover:shadow-xl"
                      onClick={() => window.open('https://github.com/UtsabGhoshal/beyond-lenses', '_blank')}
                    >
                      <Github className="w-5 h-5 mr-3" />
                      View Source Code
                    </Button>
                  </div>

                  {/* Enhanced Project Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-purple-200">
                    <div className="flex items-center gap-8 text-sm text-gray-600">
                      <div className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-300 cursor-pointer group">
                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Visit Live Site</span>
                      </div>
                      <div className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-300 cursor-pointer group">
                        <Star className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Star Repository</span>
                      </div>
                      <div className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-300 cursor-pointer group">
                        <GitFork className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Fork & Contribute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className={"absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="absolute inset-0 bg-white/5 rounded-3xl transform rotate-3 scale-105 blur-sm"></div>
          <div className="relative z-10 p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-pink-300 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white animate-fade-in">Let's Create Something Amazing!</h2>
              <Heart className="w-8 h-8 text-pink-300 animate-pulse" />
            </div>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed">
              I'm always excited to connect with fellow developers, work on innovative projects, 
              and contribute to meaningful solutions. Whether it's collaboration, mentorship, or just a friendly chat about code!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                variant="secondary" 
                className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-white text-blue-600 hover:bg-gray-50"
                onClick={() => window.location.href = 'mailto:utsab.ghoshal04@gmail.com?subject=Hello%20Utsab!&body=Hi%20Utsab,%0A%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0A'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://github.com/UtsabGhoshal', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://www.linkedin.com/in/utsab-ghoshal-18a430287/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="text-blue-100 text-sm">
                📧 <strong>utsab.ghoshal04@gmail.com</strong> • 🎓 <strong>JIS University</strong> • 💻 <strong>Computer Science Student</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Utsab Ghoshal
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building the future, one line of code at a time. 
                <br />
                <span className="text-blue-300">Always learning, always growing.</span>
              </p>
            </div>
            <div className="animate-slide-in-left">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-400" />
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors duration-300 hover:underline">About Me</a></li>
                <li><a href="#journey" className="hover:text-white transition-colors duration-300 hover:underline">My Journey</a></li>
                <li><a href="#vision" className="hover:text-white transition-colors duration-300 hover:underline">Future Vision</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-300 hover:underline">Let's Connect</a></li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:bg-blue-600"
                  onClick={() => window.open('https://github.com/detactivepritam', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:bg-blue-600"
                  onClick={() => window.open('https://www.linkedin.com/in/utsab-ghoshal-18a430287/', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:bg-blue-600"
                  onClick={() => window.location.href = 'mailto:utsab.ghoshal04@gmail.com'}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Always open to interesting conversations!
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in">
            <p className="flex items-center justify-center gap-2">
              &copy; 2024 Utsab Ghoshal. Built with 
              <Heart className="w-4 h-4 text-red-400" />
              using React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
