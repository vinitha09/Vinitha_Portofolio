import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const technologies = [
  "React",
  "JavaScript",
  "Vite",
  "CSS",
  "WebGL",
  "Python",
  "FastAPI",
  "Pydantic",
  "NASA POWER",
  "NASA imagery",
  "OpenStreetMap Nominatim",
  "HTTPX",
  "NumPy",
  "SciPy",
  "SoundFile",
  "Pillow",
  "OpenCV",
  "Pytest",
];

export default function Hackathon() {
  return (
    <section id="hackathon" className="container-mono py-24 md:py-32">
      <SectionHeading
        eyebrow="NASA Space Apps Challenge"
        title="Hackathon"
        description="Building accessible ways to experience NASA imagery."
      />
      <article className="reveal overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid md:grid-cols-[220px_1fr]">
          <div className="flex min-h-44 items-center justify-center overflow-hidden border-b border-border bg-white md:min-h-full md:border-b-0 md:border-r">
            <img
              src="/nasa-space-apps-challenge.png"
              alt="NASA International Space Apps Challenge"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="mb-2 text-xs text-muted-foreground">Earthify — Earth Jukebox Challenge</p>
            <h3 className="mb-4 text-2xl font-semibold">Turning NASA imagery into an accessible experience</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              I participated in the NASA Space Apps Challenge and developed Earthify for blind and low-vision
              people who cannot visually explore NASA's beautiful images. The project turns satellite imagery
              and environmental data into a more accessible sensory experience.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 text-sm">
              <a
                href="https://earthify.pages.dev/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Visit Earthify
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/vinitha09/Earthify"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                View code
              </a>
              <a
                href="https://drive.google.com/file/d/1BR1IOEvJJXOLQRiVtaD60BThJLRImg9M/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                Certificate
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1sS6krXcrPC2Bt3duNOZkVyGYpUxGK-UI/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                Certificate 2
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
