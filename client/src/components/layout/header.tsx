import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/modules", label: "Modules" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Tools & Resources" },
];

export function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = location === "/";
  const isDarkPage = location === "/create";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = (isHome && !scrolled) || isDarkPage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent"
          : "bg-[hsl(var(--background)/0.92)] backdrop-blur-md border-b border-[hsl(var(--border))]"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] group-hover:scale-105 transition-transform shadow-lg">
            <Clapperboard className="h-4 w-4 text-white" />
          </div>
          <span className={cn(
            "font-bold text-sm group-hover:text-[hsl(var(--primary))] transition-colors hidden sm:block",
            isTransparent ? "text-white" : "text-[hsl(var(--foreground))]"
          )}>
            Creative Media <span className="text-[hsl(var(--primary))]">Bootcamp</span>
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-sm transition-colors",
                  location === link.href
                    ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.1)]"
                    : isTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-black/5"
                )}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/create" className="hidden md:block">
            <Button
              size="sm"
              className={cn(
                "rounded-full px-5 font-semibold text-sm transition-all",
                isTransparent
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--foreground)/0.88)]"
              )}
              data-testid="button-cta-create"
            >
              Create Your Project
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isTransparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-black/5"
                )}
                data-testid="button-mobile-menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-[hsl(var(--background))] border-[hsl(var(--border))]"
              aria-describedby={undefined}
            >
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-2 mt-10" data-testid="nav-mobile">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                    <Button
                      variant={location === link.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
                <div className="border-t border-[hsl(var(--border))] my-3" />
                <Link href="/create" onClick={() => setOpen(false)}>
                  <Button className="w-full rounded-full" data-testid="button-mobile-create">
                    Create Your Project
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
