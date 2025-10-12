import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { AuthorFooter } from "@/components/AuthorFooter";
import { Shield, Lock, Palette, Zap } from "lucide-react";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <div className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
              Modern Authentication System
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Secure, beautiful, and user-friendly authentication with multiple themes
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-gradient text-lg px-8"
              onClick={() => navigate("/auth")}
            >
              <Lock className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8"
              onClick={() => navigate("/auth")}
            >
              Learn More
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="auth-card p-6 space-y-3 text-center rounded-lg">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Secure</h3>
              <p className="text-sm text-muted-foreground">
                Industry-standard authentication with secure password handling
              </p>
            </div>

            <div className="auth-card p-6 space-y-3 text-center rounded-lg">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Multiple Themes</h3>
              <p className="text-sm text-muted-foreground">
                Choose from 5 beautiful themes to match your style
              </p>
            </div>

            <div className="auth-card p-6 space-y-3 text-center rounded-lg">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Fast & Smooth</h3>
              <p className="text-sm text-muted-foreground">
                Lightning-fast with smooth transitions and animations
              </p>
            </div>

            <div className="auth-card p-6 space-y-3 text-center rounded-lg">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Protected Routes</h3>
              <p className="text-sm text-muted-foreground">
                Secure pages accessible only to authenticated users
              </p>
            </div>
          </div>
        </div>
      </div>

      <AuthorFooter />
    </div>
  );
};

export default Index;
