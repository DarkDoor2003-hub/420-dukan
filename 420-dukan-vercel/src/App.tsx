import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  BadgeCheck,
  Building2,
  FileText,
  Megaphone,
  Facebook,
  MessageCircle,
  Share2,
  ShoppingBag,
  PenTool,
  Layers,
  Check,
  ExternalLink,
} from "lucide-react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Us" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      desc: "Result-driven campaigns across search, social, and display to grow your brand visibility and sales.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      desc: "Strategy, scheduling, and performance marketing for Facebook, Instagram, and YouTube to build loyal audiences.",
    },
    {
      icon: Layers,
      title: "Facebook Page Management & Marketing",
      desc: "Professional page setup, ready-to-publish content, community management, and paid promotion.",
    },
    {
      icon: ShoppingBag,
      title: "Online Business Solutions",
      desc: "From product listing to order management — practical tools and guidance for running your online store.",
    },
    {
      icon: PenTool,
      title: "Content Creation & Management",
      desc: "Bengali & English content, graphics, and short videos tailored for local market engagement.",
    },
  ];

  return (
    <div
      data-safe-area-inset-root
      className="min-h-screen w-full bg-[var(--bg)] text-[var(--ink)] overflow-x-clip"
      style={{
        boxSizing: "border-box",
        paddingTop: "var(--safe-area-inset-top)",
      }}
    >
      {/* Header */}
      <header
        data-safe-area-sticky-top
        className={`sticky z-50 w-full border-b backdrop-blur-xl transition-all ${
          scrolled
            ? "bg-[var(--surface)]/90 border-[var(--line)] shadow-[0_1px_0_0_var(--line),0_8px_24px_-16px_rgba(0,0,0,0.12)]"
            : "bg-[var(--bg)]/70 border-transparent"
        }`}
        style={{ top: "var(--safe-area-inset-top)" }}
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 h-[64px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-[10px] bg-[var(--ink)] text-[var(--bg)] grid place-items-center font-black tracking-tighter text-[13px]">
              420
            </div>
            <span className="font-[700] tracking-[0.12em] text-[14px]">420 DUKAN</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--line)] text-[10px] font-medium tracking-widest uppercase text-[var(--accent)]">
              <BadgeCheck className="w-3.5 h-3.5" />
              Online Services
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-[13px] font-medium tracking-[0.02em] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-[var(--ink)] text-[var(--bg)] text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--line)] bg-[var(--surface)]">
            <div className="px-5 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[15px] font-medium border-b border-[var(--line)] last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex justify-center items-center h-11 rounded-full bg-[var(--ink)] text-[var(--bg)] font-medium"
              >
                Contact 420 DUKAN
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 pt-10 sm:pt-16 lg:pt-20 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-6 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] shadow-sm text-[11px] tracking-widest uppercase font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Malancha • Dhaka Division • Serving Bangladesh
            </div>

            <h1 className="mt-6 text-[36px] sm:text-[54px] lg:text-[68px] leading-[0.92] tracking-[-0.03em] font-[750]">
              Your Trusted Partner
              <span className="block font-[300] italic tracking-[-0.02em] text-[var(--ink-soft)]">
                for Digital Growth.
              </span>
            </h1>

            <p className="mt-6 max-w-[56ch] text-[16px] sm:text-[18px] leading-[1.6] text-[var(--ink-soft)]">
              <span className="font-semibold text-[var(--ink)]">420 DUKAN</span> is an
              online services firm based in MATABPUR, PARAGRAM, Dhaka. We help small businesses build,
              market, and manage their presence online — transparently and effectively.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[var(--accent)] text-white text-[14px] font-medium hover:bg-[var(--accent-2)] transition-colors"
              >
                Explore Services <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] text-[14px] font-medium hover:bg-[var(--surface-2)] transition-colors"
              >
                <FileText className="w-4 h-4" />
                About 420 DUKAN
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 max-w-[480px] border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)]">
              <div className="p-4 sm:p-5 border-r border-[var(--line)]">
                <div className="text-[11px] uppercase tracking-widest text-[var(--ink-muted)] font-medium">
                  Location
                </div>
                <div className="mt-1 text-[13px] font-semibold">MATABPUR, PARAGRAM</div>
              </div>
              <div className="p-4 sm:p-5 border-r border-[var(--line)]">
                <div className="text-[11px] uppercase tracking-widest text-[var(--ink-muted)] font-medium">
                  Services
                </div>
                <div className="mt-1 text-[13px] font-semibold">5+ Core Services</div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-[11px] uppercase tracking-widest text-[var(--ink-muted)] font-medium">
                  Support
                </div>
                <div className="mt-1 text-[13px] font-semibold leading-tight">
                  Bengali + English
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:sticky lg:top-[88px] w-full">
            <div className="relative rounded-[24px] bg-[var(--surface)] border border-[var(--line)] p-6 sm:p-7 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.18)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-semibold text-[var(--accent)]">
                    <Building2 className="w-4 h-4" />
                    Business Profile
                  </div>
                  <h3 className="mt-3 text-[22px] leading-[1.1] font-semibold tracking-tight">
                    420 DUKAN
                  </h3>
                  <p className="mt-1 text-[13px] text-[var(--ink-soft)] leading-[1.5]">
                    ONLINE SERVICES / Digital Marketing & Online Services
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[var(--accent-soft)] border border-[var(--line)] grid place-items-center">
                  <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />
                </div>
              </div>

              <div className="mt-6 space-y-3 text-[13px]">
                <div className="flex gap-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center flex-none">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-[1.5]">
                    <div className="font-medium">MATABPUR, PARAGRAM, Dhaka 1320, Bangladesh</div>
                    <div className="text-[var(--ink-soft)]">Malancha, Dhaka Division</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-6 w-6 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center flex-none">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a href="tel:01876453018" className="font-medium hover:underline">
                    01876453018
                  </a>
                  <span className="text-[var(--ink-muted)]">• Mobile</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-6 w-6 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center flex-none">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a href="mailto:420dukan@gmail.com" className="font-medium hover:underline">
                    420dukan@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-[14px] bg-[var(--bg-soft)] border border-[var(--line)] p-4">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-[var(--ink-muted)]">
                  <BadgeCheck className="w-4 h-4" />
                  Consistent Business Info
                </div>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-[var(--ink-soft)]">
                  Same business name, address and contact details on our website, page and listings —
                  so customers always reach the real 420 DUKAN.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[12px] border border-[var(--line)] bg-[var(--bg)] p-3">
                  <div className="text-[20px] font-semibold leading-none">100%</div>
                  <div className="mt-1 text-[11px] text-[var(--ink-soft)] leading-tight">
                    Transparent Work
                    <br />
                    & Fair Pricing
                  </div>
                </div>
                <div className="rounded-[12px] border border-[var(--line)] bg-[var(--bg)] p-3">
                  <div className="text-[20px] font-semibold leading-none">5+</div>
                  <div className="mt-1 text-[11px] text-[var(--ink-soft)] leading-tight">
                    Core Services
                    <br />
                    for SMBs
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="mt-4 flex items-center gap-2 text-[11px] text-[var(--ink-muted)] px-2">
              <span className="h-px flex-1 bg-[var(--line)]" />
              Paragram • Dhaka • Bangladesh
              <span className="h-px flex-1 bg-[var(--line)]" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="lg:w-[38%]">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-muted)]">
                <span className="h-px w-8 bg-[var(--line-strong)]" />
                About Us
              </div>
              <h2 className="mt-4 text-[28px] sm:text-[38px] leading-[1.05] tracking-[-0.02em] font-semibold">
                Built for real businesses in Bangladesh, by locals who understand.
              </h2>
              <div className="mt-6 h-px w-full bg-[var(--line)]" />
              <p className="mt-6 text-[14px] leading-[1.7] text-[var(--ink-soft)]">
                We started 420 DUKAN to solve a simple problem: small online sellers need affordable,
                honest digital marketing without fake promises. Every project is handled directly from
                our office in PARAGRAM.
              </p>
            </div>

            <div className="lg:w-[62%]">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-[20px] border border-[var(--line)] bg-[var(--bg)] p-6">
                  <div className="h-9 w-9 rounded-full bg-[var(--accent-soft)] grid place-items-center border border-[var(--line)]">
                    <Building2 className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h4 className="mt-4 font-semibold">Local Business, Real Office</h4>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--ink-soft)]">
                    An online services business based in Matabpur, Paragram — serving small businesses across Bangladesh.
                    Business nature: ONLINE SERVICES.
                  </p>
                  <div className="mt-4 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] p-3 font-mono text-[11px] leading-[1.5]">
                    <div className="flex justify-between"><span className="text-[var(--ink-muted)]">Name:</span> <span className="font-semibold">420 DUKAN</span></div>
                    <div className="flex justify-between mt-1"><span className="text-[var(--ink-muted)]">Nature:</span> <span className="font-semibold">ONLINE SERVICES</span></div>
                    <div className="flex justify-between mt-1"><span className="text-[var(--ink-muted)]">Location:</span> <span className="font-semibold">Dhaka 1320</span></div>
                  </div>
                </div>

                <div className="rounded-[20px] border border-[var(--line)] bg-[var(--ink)] text-[var(--bg)] p-6 relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                  <h4 className="font-semibold text-[15px]">What We Do</h4>
                  <p className="mt-3 text-[13px] leading-[1.6] text-white/70">
                    We manage your entire online presence — from Facebook Page setup and content to paid ads and customer messaging — so you can focus on products.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-[13px]">
                    {[
                      "Facebook Page & Ads Management",
                      "Transparent Pricing, No Hidden Fees",
                      "Bengali + English Support",
                      "Based in Dhaka Division",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="h-5 w-5 rounded-full bg-white/10 grid place-items-center flex-none">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-white/85">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-[20px] border border-[var(--line)] bg-[var(--bg-soft)] p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-[var(--surface)] border border-[var(--line)] grid place-items-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold">Talk to Us Directly</div>
                    <div className="text-[12px] text-[var(--ink-soft)]">Call or message us — we reply within a few hours</div>
                  </div>
                </div>
                <div className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] self-start sm:self-auto">
                  Matabpur, Paragram • Dhaka
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 py-14 sm:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-muted)]">
                <span className="h-px w-8 bg-[var(--line-strong)]" />
                Our Services
              </div>
              <h2 className="mt-4 text-[30px] sm:text-[44px] leading-[0.95] tracking-[-0.02em] font-semibold max-w-[14ch]">
                Everything you need to sell online.
              </h2>
            </div>
            <p className="max-w-[36ch] text-[14px] leading-[1.6] text-[var(--ink-soft)]">
              Five focused services for small businesses, startups, and personal brands in Bangladesh.
              No packages full of fluff — only what works.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-12 gap-4 auto-rows-[1fr]">
            {services.map((s, i) => {
              const isLarge = i === 0 || i === 2;
              return (
                <div
                  key={s.title}
                  className={`group rounded-[22px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--line-strong)] transition-colors ${
                    isLarge ? "md:col-span-7" : "md:col-span-5"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="h-10 w-10 rounded-[12px] bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center group-hover:bg-[var(--accent-soft)] transition-colors">
                        <s.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono tracking-widest text-[var(--ink-muted)]">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[18px] font-semibold tracking-tight leading-[1.2]">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--ink-soft)]">{s.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[12px] font-medium">
                    <span className="h-6 w-6 rounded-full bg-[var(--ink)] text-[var(--bg)] grid place-items-center">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[var(--ink-soft)] group-hover:text-[var(--ink)] transition-colors">
                      Included in 420 DUKAN standard service
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="border-y border-[var(--line)] bg-[var(--surface-2)]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 py-14 sm:py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="text-[26px] sm:text-[34px] leading-[1.05] tracking-[-0.02em] font-semibold">
                Why businesses trust 420 DUKAN for their online growth
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    t: "Local & Accountable",
                    d: "We are physically in MATABPUR, PARAGRAM. Visit us in person if you like. No virtual office, no fake address.",
                  },
                  {
                    t: "Built for Facebook Ecosystem",
                    d: "Pages, content and ad accounts managed properly — set up cleanly from day one, so your business runs without interruptions.",
                  },
                  {
                    t: "Honest Communication",
                    d: "We work on WhatsApp/Phone 01876453018. Clear deliverables, weekly reporting, no long-term lock-in.",
                  },
                  {
                    t: "Affordable for Small Sellers",
                    d: "Pricing made for Bangladeshi online shops — start small, scale when you see results.",
                  },
                ].map((item) => (
                  <div key={item.t} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-[var(--surface)] border border-[var(--line)] grid place-items-center flex-none">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-medium text-[14px]">{item.t}</div>
                      <div className="mt-1 text-[13px] leading-[1.6] text-[var(--ink-soft)]">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.14)]">
                <div className="rounded-[16px] bg-[var(--bg)] border border-[var(--line)] overflow-hidden">
                  <div className="h-12 border-b border-[var(--line)] flex items-center justify-between px-5">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="text-[11px] font-mono text-[var(--ink-muted)] flex items-center gap-1">
                      420dukan.com <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="inline-flex px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[10px] font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--line)]">
                      Business Profile
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="col-span-2 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] p-4">
                        <div className="text-[11px] uppercase tracking-widest text-[var(--ink-muted)] font-medium">
                          Business Details
                        </div>
                        <div className="mt-3 space-y-2 text-[12px] font-mono leading-[1.4]">
                          <div className="flex justify-between gap-2"><span className="text-[var(--ink-muted)]">Business:</span><span className="font-semibold">420 DUKAN</span></div>
                          <div className="flex justify-between gap-2"><span className="text-[var(--ink-muted)]">Nature:</span><span className="font-semibold">ONLINE SERVICES</span></div>
                          <div className="flex justify-between gap-2"><span className="text-[var(--ink-muted)]">Address:</span><span className="font-semibold text-right max-w-[16ch]">MATABPUR, PARAGRAM, Dhaka 1320</span></div>
                          <div className="flex justify-between gap-2"><span className="text-[var(--ink-muted)]">Mobile:</span><span className="font-semibold">01876453018</span></div>
                          <div className="flex justify-between gap-2"><span className="text-[var(--ink-muted)]">Email:</span><span className="font-semibold">420dukan@gmail.com</span></div>
                        </div>
                      </div>
                      <div className="rounded-[12px] bg-[var(--ink)] text-[var(--bg)] p-4 flex flex-col justify-between">
                        <div className="h-8 w-8 rounded-[10px] bg-white/10 grid place-items-center font-black text-[12px]">420</div>
                        <div className="mt-4">
                          <div className="text-[12px] font-medium">Since 2026</div>
                          <div className="text-[11px] text-white/60 leading-[1.3] mt-1">Dhaka • Bangladesh</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 rounded-[12px] border border-dashed border-[var(--line-strong)] bg-[var(--surface-2)] p-3 flex items-center gap-2 text-[11px] text-[var(--ink-soft)]">
                      <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                      Same name, address & contact on every channel
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mx-2 rounded-[12px] bg-[var(--warn)] border border-[var(--line)] px-4 py-3 flex gap-3">
                <div className="h-6 w-6 rounded-full bg-amber-200/70 grid place-items-center flex-none">
                  <BadgeCheck className="w-4 h-4 text-amber-900" />
                </div>
                <p className="text-[12px] leading-[1.5] text-[var(--ink-soft)]">
                  <span className="font-semibold text-[var(--ink)]">Please note:</span> This website is operated by 420 DUKAN, Matabpur, Paragram, Dhaka 1320. For any question, call or WhatsApp 01876453018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-[var(--ink-muted)]">
              <span className="h-px w-8 bg-[var(--line-strong)]" />
              Contact
            </div>
            <h2 className="mt-4 text-[28px] sm:text-[40px] leading-[0.95] tracking-[-0.02em] font-semibold">
              Visit us in
              <br />
              PARAGRAM, Dhaka.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-[16px] border border-[var(--line)] bg-[var(--surface)] p-5 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center flex-none">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-widest font-semibold text-[var(--ink-muted)]">
                    Business Address
                  </div>
                  <div className="mt-1.5 text-[15px] font-medium leading-[1.4]">MATABPUR, PARAGRAM, Dhaka 1320, Bangladesh</div>
                  <div className="mt-1 text-[13px] text-[var(--ink-soft)]">Malancha, Dhaka Division, Bangladesh</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:01876453018"
                  className="rounded-[16px] border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--line-strong)] transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--ink)]" />
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-widest font-semibold text-[var(--ink-muted)]">
                    Mobile
                  </div>
                  <div className="mt-1 font-mono text-[15px] font-semibold">01876453018</div>
                </a>

                <a
                  href="mailto:420dukan@gmail.com"
                  className="rounded-[16px] border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--line-strong)] transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--ink)]" />
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-widest font-semibold text-[var(--ink-muted)]">
                    Email
                  </div>
                  <div className="mt-1 text-[13px] font-semibold break-all">420dukan@gmail.com</div>
                </a>
              </div>

              <div className="rounded-[14px] bg-[var(--ink)] text-[var(--bg)] p-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/10 grid place-items-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[12px] leading-[1.5]">
                  <span className="font-semibold">Official hours:</span> Sat-Thu, 10am-8pm (BST) • Quick reply on WhatsApp
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="rounded-[22px] border border-[var(--line)] bg-[var(--surface)] p-2">
              {/* Map Placeholder */}
              <div className="relative rounded-[16px] overflow-hidden border border-[var(--line)] bg-[var(--bg-soft)] aspect-[4/3] sm:aspect-[16/11]">
                <iframe
                  title="420 DUKAN location — Matabpur, Paragram, Dhaka 1320"
                  src="https://maps.google.com/maps?q=Paragram%2C%20Dhaka%201320%2C%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />

                <div className="absolute left-3 top-3 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] shadow-sm flex items-center gap-2 text-[11px] font-medium">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  Dhaka 1320 • Bangladesh
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end gap-3">
                  <div className="px-3 py-2 rounded-[10px] bg-[var(--surface)]/90 backdrop-blur border border-[var(--line)] text-[11px] leading-[1.4] max-w-[58%]">
                    <div className="font-semibold">Find Us Here</div>
                    <div className="text-[var(--ink-soft)]">Exact pin: MATABPUR, PARAGRAM, Dhaka 1320</div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=MATABPUR+PARAGRAM+Dhaka+1320+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-4 rounded-full bg-[var(--ink)] text-[var(--bg)] text-[12px] font-medium inline-flex items-center gap-1.5 hover:opacity-90"
                  >
                    Open Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h4 className="font-semibold tracking-tight">Send a message to 420 DUKAN</h4>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[var(--ink-soft)]">
                  For a service inquiry, contact us directly. We reply within a few hours.
                </p>
                <form action="https://formsubmit.co/tusert257@gmail.com" method="POST" className="mt-5">
                  <input type="hidden" name="_subject" value="New inquiry from the 420 DUKAN website" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://420dukan.shop/#contact" />
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label className="block rounded-[12px] border border-[var(--line)] bg-[var(--bg)] px-4 py-3">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--ink-muted)]">Your Name</span>
                      <input required name="name" type="text" placeholder="Enter full name" className="mt-1 w-full bg-transparent text-[13px] outline-none placeholder:text-[var(--ink-muted)]" />
                    </label>
                    <label className="block rounded-[12px] border border-[var(--line)] bg-[var(--bg)] px-4 py-3">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--ink-muted)]">Phone / WhatsApp</span>
                      <input required name="phone" type="tel" placeholder="01XXXXXXXXX" className="mt-1 w-full bg-transparent text-[13px] outline-none placeholder:text-[var(--ink-muted)]" />
                    </label>
                    <label className="block sm:col-span-2 rounded-[12px] border border-[var(--line)] bg-[var(--bg)] px-4 py-3">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--ink-muted)]">Message</span>
                      <textarea required name="message" rows={3} placeholder="How can 420 DUKAN help you?" className="mt-1 w-full bg-transparent text-[13px] outline-none resize-none placeholder:text-[var(--ink-muted)]" />
                    </label>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button type="submit" className="flex-1 h-11 rounded-full bg-[var(--ink)] text-[var(--bg)] inline-flex items-center justify-center gap-2 text-[13px] font-medium hover:opacity-90 transition-opacity">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </button>
                    <a
                      href="tel:01876453018"
                      className="h-11 px-6 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] inline-flex items-center justify-center gap-2 text-[13px] font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </div>
                  <div className="mt-3 text-[11px] text-[var(--ink-muted)] text-center">
                    Your message is delivered straight to our inbox — we reply within a few hours
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 py-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-[10px] bg-[var(--ink)] text-[var(--bg)] grid place-items-center font-black tracking-tighter text-[13px]">
                  420
                </div>
                <span className="font-[700] tracking-[0.12em] text-[14px]">420 DUKAN</span>
              </div>
              <p className="mt-4 max-w-[38ch] text-[13px] leading-[1.6] text-[var(--ink-soft)]">
                Digital Marketing & Online Services based in MATABPUR, PARAGRAM, Dhaka 1320, Bangladesh.
                Digital marketing, page management, content and online business support.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] text-[11px] font-mono">
                  MATABPUR, PARAGRAM
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] text-[11px] font-mono">
                  Dhaka 1320
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[var(--accent-soft)] border border-[var(--line)] text-[11px] font-medium text-[var(--accent)]">
                  ONLINE SERVICES
                </span>
              </div>
              <div className="mt-5 flex items-center gap-2.5">
                <a href="https://www.facebook.com/420dukan4u" target="_blank" rel="noopener noreferrer" aria-label="420 DUKAN on Facebook" className="h-9 w-9 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center hover:border-[var(--line-strong)] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://wa.me/8801876453018" target="_blank" rel="noopener noreferrer" aria-label="420 DUKAN on WhatsApp" className="h-9 w-9 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center hover:border-[var(--line-strong)] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="mailto:420dukan@gmail.com" aria-label="Email 420 DUKAN" className="h-9 w-9 rounded-full bg-[var(--bg-soft)] border border-[var(--line)] grid place-items-center hover:border-[var(--line-strong)] transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <span className="ml-1 text-[12px] text-[var(--ink-soft)]">Follow us on Facebook</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-[13px]">
              <div>
                <div className="font-semibold tracking-wide text-[11px] uppercase text-[var(--ink-muted)]">Business</div>
                <ul className="mt-3 space-y-2 text-[var(--ink-soft)]">
                  <li><a href="#about" className="hover:text-[var(--ink)]">About</a></li>
                  <li><a href="#services" className="hover:text-[var(--ink)]">Services</a></li>
                  <li><a href="#why-us" className="hover:text-[var(--ink)]">Why Us</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold tracking-wide text-[11px] uppercase text-[var(--ink-muted)]">Contact</div>
                <ul className="mt-3 space-y-2 text-[var(--ink-soft)]">
                  <li>MATABPUR, PARAGRAM</li>
                  <li>Dhaka 1320</li>
                  <li><a href="tel:01876453018" className="hover:text-[var(--ink)]">01876453018</a></li>
                  <li><a href="mailto:420dukan@gmail.com" className="hover:text-[var(--ink)]">420dukan@gmail.com</a></li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-semibold tracking-wide text-[11px] uppercase text-[var(--ink-muted)]">Business Info</div>
                <ul className="mt-3 space-y-2 text-[var(--ink-soft)]">
                  <li>Name: 420 DUKAN</li>
                  <li>Nature: Online Services</li>
                  <li>Matabpur, Paragram, Dhaka 1320</li>
                  <li>Hours: Sat–Thu, 10am–8pm (BST)</li>
                  <li><a href="https://www.facebook.com/420dukan4u" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] underline underline-offset-2">Facebook Page</a></li>
                  <li><a href="/privacy" className="hover:text-[var(--ink)] underline underline-offset-2">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-[var(--ink)] underline underline-offset-2">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <p className="text-[12px] leading-[1.6] text-[var(--ink-soft)]">
              © 420 DUKAN — Matabpur, Paragram, Dhaka 1320, Bangladesh
            </p>
            <div className="flex gap-4 text-[12px] text-[var(--ink-soft)]">
              <a href="/privacy" className="hover:text-[var(--ink)]">Privacy Policy</a>
              <a href="/terms" className="hover:text-[var(--ink)]">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[var(--ink-muted)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Matabpur, Paragram • Malancha, Dhaka Division, Bangladesh
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp chat button */}
      <a
        href="https://wa.me/8801876453018?text=Hello%20420%20DUKAN%2C%20I%20have%20an%20inquiry"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with 420 DUKAN on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 h-12 pl-3.5 pr-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] hover:opacity-90 transition-opacity"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[13px] font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
