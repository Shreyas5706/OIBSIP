import { Card } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

export function AuthorFooter() {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="container mx-auto px-4">
        <Card className="auth-card p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Modern Authentication System
          </h2>
          <div className="space-y-2 text-muted-foreground">
            <p className="text-lg">
              <span className="font-semibold text-foreground">Author:</span> Shreyas Solanki
            </p>
            <p className="text-lg">
              <span className="font-semibold text-foreground">Date:</span> {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A responsive, modern authentication web application featuring secure login and registration.
            Includes multiple themes, smooth transitions, and a clean UI.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </Card>
      </div>
    </footer>
  );
}
