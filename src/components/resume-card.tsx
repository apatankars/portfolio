"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { FiExternalLink } from "react-icons/fi";
import React from "react";
import getTechBadgeClasses from "./badge-style";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Card className="flex bg-white border border-gray-300 rounded-lg p-4 opacity-100 transform transition-transform duration-300 ease-out hover:translate-y-[-0.25rem] hover:shadow-lg dark:bg-black dark:border-black">
      {" "}
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h1 className="inline-flex items-center justify-center tracking-wide font-semibold leading-none text-md sm:text-lg dark:text-white">
              {title}
              <a
                href={href}
                className="text-muted-foreground dark:text-muted-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink
                  className="ml-1
                "
                />
              </a>
            </h1>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right dark:text-white">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-md dark:text-white">
              | {subtitle}
            </div>
          )}
        </CardHeader>
        {description && (
          <div className="mt-2 text-xs sm:text-sm dark:text-white">
            {description}
          </div>
        )}
        <div className="flex flex-wrap gap-1 mt-2">
          {badges?.map((badge) => {
            const classNames = getTechBadgeClasses(badge);
            return (
              <Badge key={badge} className={`text-sm`}>
                {badge}
              </Badge>
            );
          })}
        </div>
      </div>
    </Card>
    // </Link>
  );
};
