import { Link } from "wouter";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-semibold">Creative Media</span>
                <span className="ml-1 text-muted-foreground">Bootcamp</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A Clemson University research study promoting creative media production and media literacy for middle schoolers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About the Study
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  Daily Schedule
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
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tools & Software
                </Link>
              </li>
              <li>
                <Link href="/modules" className="text-muted-foreground hover:text-foreground transition-colors">
                  Learning Modules
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/create" className="text-muted-foreground hover:text-foreground transition-colors">
                  Start Your Project
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>Creative Media Production Bootcamp</p>
        </div>
      </div>
    </footer>
  );
}
