import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import {
  FaArrowDown,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import Markdown from "react-markdown";
import NamePron from "@/components/magicui/name-pron";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Icons } from "@/components/icons";
import Ripple from "@/components/ui/ripple";
import { GetInTouch } from "@/components/get-in-touch";
import { Badge } from "@/components/ui/badge";
import { IconCloud } from "@/components/ui/icon-cloud";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="relative">
        <div className="mx-auto min-h-[85vh] flex items-center justify-center space-y-8">
          {/* Hero content stays centered */}
          <Ripple mainCircleSize={500} />
          <div className="flex-col flex items-center space-y-8">
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="flex items-center"
              yOffset={8}
            >
              <span className="text-3xl font-bold tracking-wider uppercase sm:text-5xl xl:text-7xl/none text-center">
                Hi, I'm {<p> </p>}
                {<NamePron name={DATA.name.split(" ")[0]} />}
              </span>
            </BlurFade>
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="text-lg text-center sm:text-md xl:text-lg"
              yOffset={8}
            >
              <span>
                I'm a computer science and economics student at{" "}
                <span className="text-brown-500 hover:tracking-widest  transition duration-300 ease-in-out transform hover:scale-105">
                  Brown University
                </span>
                . My passions lie in machine learning, software engineering, and
                market theory. I enjoy working on projects that combine my
                technical and creative interests, and I'm always looking for new
                opportunities to learn and grow.
              </span>
            </BlurFade>

            {/* Buttons Container */}
            <div className="flex space-x-4 mt-6">
              {/* GitHub Button */}
              <BlurFade delay={BLUR_FADE_DELAY + 0.2} className="flex">
                <a
                  href="https://github.com/apatankars"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    shimmerSize="0.05em"
                    borderRadius="20px"
                    shimmerDuration="3s"
                    background="#24292e" // GitHub Color
                    className="flex items-center px-4 py-2 dark:text-white  hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    <span className="dark:text-white">GitHub</span>
                  </ShimmerButton>
                </a>
              </BlurFade>

              {/* LinkedIn Button */}
              <BlurFade delay={BLUR_FADE_DELAY + 0.4} className="flex">
                <a
                  href="https://www.linkedin.com/in/armaan-patankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    shimmerSize="0.05em"
                    borderRadius="20px"
                    shimmerDuration="3s"
                    background="#0077B5" // LinkedIn Color
                    className="flex items-center px-4 py-2 dark:text-white  hover:scale-105"
                  >
                    <FaLinkedin className="mr-2" />
                    <span className="dark:text-white">LinkedIn</span>
                  </ShimmerButton>
                </a>
              </BlurFade>

              {/* Resume Button */}
              <BlurFade delay={BLUR_FADE_DELAY + 0.6} className="flex">
                <a
                  href="/resume.pdf" // Update the path to your resume
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                >
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    shimmerSize="0.05em"
                    borderRadius="20px"
                    shimmerDuration="3s"
                    background="#FF5733" // Choose a color that fits your theme
                    className="flex items-center px-4 py-2 dark:text-white  hover:scale-105"
                  >
                    <FaFileAlt className="mr-2" />
                    <span className="dark:text-white">Resume</span>
                  </ShimmerButton>
                </a>
              </BlurFade>

              {/* Email Button */}
              <BlurFade delay={BLUR_FADE_DELAY + 0.8} className="flex">
                <a href="mailto:armaan_patankar@brown.edu" aria-label="Email">
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    shimmerSize="0.05em"
                    borderRadius="20px"
                    shimmerDuration="3s"
                    background="#28a745" // Email Color (Green)
                    className="flex items-center px-4 py-2 dark:text-white hover:scale-105"
                  >
                    <FaEnvelope className="mr-2" />
                    <span className="dark:text-white">Email</span>
                  </ShimmerButton>
                </a>
              </BlurFade>
            </div>
          </div>
        </div>

        {/* Arrow button at the bottom */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <a
            href="#about"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-800 hover:text-gray-600 dark:text-white transition"
            aria-label="Scroll to next section"
          >
            <FaArrowDown size={30} />
          </a>
        </BlurFade>
      </section>
      <section
        id="about"
        className="scroll-mt-20 py-8 flex flex-col items-center"
      >
        <div className="inline-block rounded-lg bg-foreground text-center text-background px-3 py-1 text-sm mb-4">
          My Expereince
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl">
            Check out my experience
          </h2>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-5">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-[100%] lg: max-w-[80%] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3 items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              My Skills
            </h2>
            <div className="max-w-[300px] flex flex-col items-center justify-center mx-auto">
              <IconCloud iconSlugs={slugs} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge
                    key={skill}
                    className="flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <GetInTouch />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
