export const dynamicParams = false;
import type { Metadata } from "next";
import { Envelope, Phone, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CryoMax Industrial for product inquiries, technical support, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-[48ch]">
              Our engineering and sales teams are ready to assist with product selection,
              technical specifications, and custom solutions.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Envelope weight="fill" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{SITE.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Phone weight="fill" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Phone</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{SITE.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <MapPin weight="fill" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Headquarters</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{SITE.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Clock weight="fill" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Business Hours</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monday - Friday: 8:30 AM - 5:30 PM (GMT+8)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden border border-border/30 aspect-[4/3] bg-card/30">
            <img
              src="https://picsum.photos/seed/shanghai-map/800/600"
              alt="Shanghai headquarters location"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin weight="fill" className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Shanghai, China</p>
                <p className="text-xs text-muted-foreground mt-1">Zhangjiang Hi-Tech Park</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
