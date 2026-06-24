import { Link } from "wouter";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-chart-3" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold">Creative Media</span>
                <span className="ml-1 text-primary font-medium">Bootcamp</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A program promoting creative media production and media literacy for middle schoolers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tools & Resources
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-muted-foreground hover:text-foreground transition-colors">
                  Create Your Project
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Student Gallery
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  Schedule
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <p className="text-sm text-muted-foreground">
              A 6-week bootcamp for grades 6–8 exploring media literacy, misinformation detection, and hands-on creative media production.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>Creative Media Production Bootcamp</p>
        </div>
      </div>
    </footer>
  );
}
