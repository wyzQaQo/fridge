import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Submit your equipment requirements and our engineering team will provide a customized proposal within 24 hours.",
};

const countries = [
  "United States", "Germany", "United Kingdom", "France", "Spain",
  "Italy", "Netherlands", "Belgium", "Switzerland", "Sweden",
  "Norway", "Denmark", "Finland", "Poland", "Czech Republic",
  "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman",
  "Brazil", "Mexico", "Argentina", "Colombia", "Chile",
  "India", "Indonesia", "Thailand", "Vietnam", "Malaysia",
  "Philippines", "Japan", "South Korea", "Singapore",
  "Australia", "New Zealand", "South Africa", "Nigeria", "Kenya",
  "Russia", "Turkey", "Egypt", "Morocco", "Algeria",
  "Canada", "Other",
];

const productInterests = [
  "Commercial Freeze Dryer",
  "Ultra-Low Temperature Freezer (-80 degree C)",
  "Constant Temperature & Humidity Chamber",
  "Multiple Products",
  "Not Sure / Need Consultation",
];

export default function QuotePage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
              Request a Quote
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fill out the form below and our engineering team will review your requirements
              and respond with a customized proposal within 24 hours.
            </p>
          </div>

          <form className="space-y-6 border border-border/30 rounded-2xl bg-card/40 p-6 lg:p-10">
            {/* Product Interest */}
            <div className="space-y-2">
              <Label htmlFor="product">Product Interest</Label>
              <Select name="product">
                <SelectTrigger id="product" className="rounded-md">
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  {productInterests.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Name + Company */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="Your full name" required className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" name="company" placeholder="Company name" required className="rounded-md" />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" placeholder="your@company.com" required className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" name="phone" placeholder="+1 234 567 8900" className="rounded-md" />
              </div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Select name="country" required>
                <SelectTrigger id="country" className="rounded-md">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Your Requirements *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe your requirements: target application, desired capacity, temperature range, compliance needs, timeline, etc."
                rows={6}
                required
                className="rounded-md resize-none"
              />
            </div>

            {/* Attachment hint */}
            <p className="text-xs text-muted-foreground">
              You can also email specifications, drawings, or RFQ documents directly to
              inquiry@cryomax-industrial.com
            </p>

            <Button type="submit" size="lg" className="w-full rounded-md">
              Submit RFQ
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
