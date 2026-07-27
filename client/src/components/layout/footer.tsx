import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-chart-3" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-0 mb-4">
              <span className="font-black text-base tracking-tight font-mono">CTRL+ALT+</span>
              <span className="font-black text-base tracking-tight font-mono text-primary">MEDIA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Hit reset on the broken media landscape. Alternative media, AI, and bold truth-telling for the next generation.
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
              A 6-week program for grades 6–8. Question everything. Create boldly. Speak truth to power.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground font-mono">
          <p>CTRL+ALT+MEDIA · Hit Reset.</p>
        </div>
      </div>
    </footer>
  );
}
