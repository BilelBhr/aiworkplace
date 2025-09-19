import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Sparkles, 
  Database, 
  Code2, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: "Multi-Provider AI",
      description: "Access OpenAI, Anthropic, and Google models in one unified interface"
    },
    {
      icon: Database,
      title: "SharePoint Integration",
      description: "Seamlessly connect and analyze your organizational data"
    },
    {
      icon: Code2,
      title: "Python Execution",
      description: "Generate and run Python code for advanced data analysis"
    },
    {
      icon: Zap,
      title: "Tool Calling",
      description: "Execute functions and integrate with external APIs"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share conversations and insights across your organization"
    }
  ];

  const models = [
    { provider: "OpenAI", color: "bg-green-500", logo: "/openai.svg" },
    { provider: "Anthropic", color: "bg-red-500", logo: "/anthropic-logo.svg" },
    { provider: "Google", color: "bg-blue-500", logo: "/google-logo.svg" },
    { provider: "Mistral AI", color: "bg-orange-500", logo: "/mistral-logo.svg" }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals getting started",
      features: ["5,000 AI points/month", "Access to GPT-3.5", "Basic SharePoint integration", "Community support"],
      cta: "Get Started",
      redirection: "/workspace",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      description: "For professionals and small teams",
      features: ["50,000 AI points/month", "All AI models", "Full SharePoint access", "Python execution", "Priority support"],
      cta: "Start Free Trial",
      redirection: "/workspace",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited AI points", "Custom model fine-tuning", "Advanced security", "Dedicated support", "Custom integrations"],
      cta: "Contact Sales",
      redirection: "https://kauz.ai/erfahren-sie-mehr-ueber-ki-assistenten/",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-gradient-primary border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center justify-center">
                <img
                src="/logo.png"
                alt="KAUZ AI Workplace"
                className="w-full max-h-12 object-contain"
              />
            </div>
              
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#models" className="text-white/80 hover:text-white transition-colors">Models</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <Button variant="outline" className=" text-white hover:bg-white/10 bg-white/10" asChild>
                <Link to="https://ai-workplace.kauz.ai/">Sign In</Link>
              </Button>
              <Button className="bg-white text-black hover:bg-white/90" asChild>
                <Link to="/workspace">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-gradient-primary text-primary-foreground border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Now supporting Claude 3 & Gemini Pro
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              The AI workplace that
              <span className="bg-gradient-primary bg-clip-text text-transparent"> transforms </span>
              how you work
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Chat with multiple AI providers, access your SharePoint data, execute Python code,
              and automate workflows all in one intelligent workplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8" asChild>
                <Link to="/workspace">
                  Start Building <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Link to="https://www.youtube.com/watch?v=xoYkzKD_q4w">
                  Watch Demo
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Enterprise ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful AI capabilities designed for modern teams and enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Access the top tier AI models
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Switch between leading AI providers seamlessly in one interface
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map((provider, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <img className={`w-7 h-7 `} src={provider.logo} alt={`${provider.provider} logo`} />
                    <CardTitle className="text-foreground">{provider.provider}</CardTitle>
                  </div>
                </CardHeader>
                
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade at any time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`bg-gradient-card border-border hover:shadow-card transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-primary shadow-workspace' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-foreground text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-foreground">
                      {plan.price}
                      {plan.price !== "Free" && plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >

                    <Link to={plan.redirection}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-workspace rounded-3xl p-12 text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold ">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Join thousands of teams already using KAUZ to accelerate their AI-powered productivity.
            </p>
            <Button size="lg" className="bg-white text-foreground hover:bg-gradient-primary hover:text-white transition-all text-lg" asChild>
              <Link to="/workspace">
                Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-21 h-auto flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="KAUZ AI Workplace"
                  className="w-full h-8 object-contain"
                />
              </div>
              
            </div>
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="https://kauz.ai/datenschutz" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="https://kauz.ai/impressum" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="https://kauz.ai/eula" className="hover:text-foreground transition-colors">EULA</a>
              <span>© 2025 Kauz GmbH. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};