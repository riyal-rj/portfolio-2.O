import { Reveal } from "./Reveal";
import { EntityLogo } from "./EntityLogo";
import { MapPin, Calendar, Sparkles } from "lucide-react";
import logoCloudKaptan from "@/assets/logos/cloudkaptan.png";
import logoIndependent from "@/assets/logos/independent.png";

interface Item {
  when: string;
  role: string;
  org: string;
  location: string;
  summary: string;
  achievements: string[];
  logo?: string;
  fallback: string;
}

const ITEMS: Item[] = [
  {
    when: "Nov 2025 — Present",
    role: "Software Engineer Trainee",
    org: "CloudKaptan Consultancy Services",
    location: "Kolkata, India",
    summary:
      "Building enterprise contract lifecycle workflows on DocuSign CLM with version-controlled, multi-environment deployments.",
    achievements: [
      "Implemented automated CLM workflows that streamlined contract approval cycles across regions.",
      "Owned multi-environment release pipelines with version control and rollback safety.",
      "Collaborated cross-functionally to translate client requirements into scalable CLM blueprints.",
    ],
    logo: logoCloudKaptan,
    fallback: "CK",
  },
  {
    when: "Jun 2025 — Aug 2025",
    role: "Software Support Engineer · Intern",
    org: "Soefia Education Incorporated",
    location: "Remote · USA",
    summary:
      "Supported a production multi-tenant AWS architecture and hardened backend reliability for a learning platform.",
    achievements: [
      "Operated multi-tenant infra on ECS, S3, Amplify and Secrets Manager with zero customer-impacting outages.",
      "Authored pytest suites covering critical API edge-cases, lifting backend confidence pre-release.",
      "Triaged and resolved 30+ production bugs through structured reporting and root-cause analysis.",
    ],
    logo: logoIndependent,
    fallback: "SE",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-12 border-b border-border pb-8 md:mb-16 md:pb-10">
            <p className="eyebrow mb-4">05 — Trajectory</p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-7xl">
              A short <span className="display-wonk text-accent">history</span>.
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}
        <ol className="relative space-y-8 md:space-y-12">
          {/* vertical rail */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[27px]"
          />

          {ITEMS.map((it, i) => (
            <Reveal key={it.role} delay={i * 0.06}>
              <li className="group relative pl-14 md:pl-20">
                {/* Logo / timeline dot */}
                <div className="absolute left-0 top-0 flex items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 -m-1 rounded-full bg-canvas-warm/60 transition-opacity group-hover:opacity-100"
                  />
                  <EntityLogo
                    src={it.logo}
                    alt={`${it.org} logo`}
                    fallback={it.fallback}
                    size="md"
                    className="relative"
                  />
                </div>

                <article className="rounded-lg border border-border bg-background/40 p-5 transition-all duration-300 hover:border-foreground/30 hover:bg-canvas-warm/40 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] md:p-7">
                  {/* Header row */}
                  <header className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft md:text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" aria-hidden />
                        {it.when}
                      </span>
                      <span aria-hidden className="text-border">/</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" aria-hidden />
                        {it.location}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
                        {it.role}
                      </h3>
                      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-accent md:text-xs">
                        {it.org}
                      </p>
                    </div>
                  </header>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
                    {it.summary}
                  </p>

                  {/* Achievements */}
                  <ul className="mt-5 space-y-2.5">
                    {it.achievements.map((a, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85 md:text-[15px]"
                      >
                        <Sparkles
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                          aria-hidden
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
