import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Input,
} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HelpCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  GraduationCap,
  Loader2,
  AlertCircle,
  ChevronRight,
  Clock,
  MessageSquare,
} from "lucide-react";
import { faqs } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    },
  });

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: "", email: "", message: "", role: "student" },
  });

  const onSubmit = (data: InsertContact) => contactMutation.mutate(data);

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-border/60">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 font-mono text-xs tracking-widest uppercase">
            Help & Support
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-5">
            Questions?<br />
            <span className="gradient-text">We've Got Answers.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Everything you need to know about CTRL+ALT+MEDIA.
            Can't find what you're looking for? Send us a message.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">

          {/* LEFT: FAQ list */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-1.5">
              <HelpCircle className="h-3 w-3" />
              Common Questions
            </p>

            <div className="space-y-2" data-testid="card-faq">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-testid={`accordion-faq-${i}`}
                  >
                    <span className="font-semibold text-foreground leading-snug pr-2">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 mt-0.5"
                    >
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Quick info cards */}
            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              {[
                { icon: Clock, label: "Session Length", value: "~1 hour" },
                { icon: GraduationCap, label: "Grade Level", value: "Grades 6–8" },
                { icon: MapPin, label: "Location", value: "Afterschool" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl border border-border bg-card text-center">
                  <item.icon className="h-5 w-5 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-bold text-sm mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="lg:sticky lg:top-24" id="contact">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-1.5">
              <MessageSquare className="h-3 w-3" />
              Get in Touch
            </p>

            <div className="rounded-2xl border border-border bg-card p-6" data-testid="card-contact-form">
              <div className="flex items-center gap-2 mb-5">
                <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                <h3 className="font-bold">Contact Us</h3>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="h-14 w-14 rounded-full bg-[hsl(var(--accent)/0.15)] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-7 w-7 text-[hsl(var(--accent))]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">I am a…</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-role">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="parent">Parent / Guardian</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" className="min-h-[100px] resize-none" {...field} data-testid="textarea-message" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {contactMutation.isError && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        Failed to send message. Please try again.
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? (
                        <><Loader2 className="h-4 w-4 animate-spin" />Sending…</>
                      ) : (
                        <><Send className="h-4 w-4" />Send Message</>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            {/* About program pill */}
            <div className="mt-4 p-4 rounded-xl border border-border bg-card flex items-start gap-3" data-testid="card-program">
              <GraduationCap className="h-5 w-5 text-[hsl(var(--primary))] shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is an approved educational research program supervised by trained researchers from the Department of Education and Human Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
