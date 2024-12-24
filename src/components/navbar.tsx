"use client";
import { useEffect, useState } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  // State to manage the visibility of the navbar
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure the code runs only on the client side

    // Select the "work" section by its ID
    const workSection = document.getElementById("work");
    const projectSection = document.getElementById("projects");
    const getInTouchSection = document.getElementById("contact");

    if (!workSection || !projectSection || !getInTouchSection) return;

    // Callback function for IntersectionObserver
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When "work" section enters the viewport, show the navbar
          setIsVisible(true);
        } else {
          // Optionally, hide the navbar when "work" section is out of view
          // Uncomment the next line if you want the navbar to hide again
          setIsVisible(false);
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      threshold: 0.1, // 10% of the "work" section is visible
    });

    // Start observing the "work" section
    observer.observe(workSection);
    observer.observe(projectSection);
    observer.observe(getInTouchSection);

    // Cleanup the observer on component unmount
    return () => {
      observer.unobserve(workSection);
      observer.unobserve(projectSection);
      observer.unobserve(getInTouchSection);
    };
  }, []);

  return (
    <>
      {/* Floating Mode Toggle Button */}
      {!isVisible && (
        <div className="fixed top-4 right-4 z-40">
          <ModeToggle />
        </div>
      )}

      {/* Navbar */}
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          <Separator orientation="vertical" className="h-full py-2" />
          {/* Mode Toggle Inside Navbar */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </>
  );
}
