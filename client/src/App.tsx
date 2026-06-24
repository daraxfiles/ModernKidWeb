import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/layout/sidebar";
import Schedule from "@/pages/schedule";
import Create from "@/pages/create";
import Resources from "@/pages/resources";
import Gallery from "@/pages/gallery";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Redirect to="/resources" />} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/create" component={Create} />
      <Route path="/resources" component={Resources} />
      <Route path="/gallery" component={Gallery} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex h-screen overflow-hidden bg-background">
          <Sidebar />
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <Router />
            </main>
            <footer className="shrink-0 border-t border-border px-6 py-2 flex items-center justify-between text-[11px] text-muted-foreground bg-[hsl(var(--sidebar))]">
              <span>Creative Media Production Bootcamp</span>
              <span className="hidden sm:block">Department of Education and Human Development</span>
            </footer>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
