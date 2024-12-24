import { Badge } from "lucide-react";

interface ExperienceCardProps {
  organization: string;
  position: string;
  startDate: string;
  endDate: string | null;
  organizationUrl: string;
  description: string;
  location: string;
  skills: readonly string[];
}

const ExperienceCard = ({
  organization,
  position,
  startDate,
  endDate,
  organizationUrl,
  description,
  location,
  skills,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-2">
        <a href={organizationUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-semibold">{organization}</h3>
        </a>
        <span className="text-sm text-muted">{location}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <h4 className="text-sm font-semibold">{position}</h4>
        <span className="text-sm text-muted">
          {startDate} - {endDate || "Present"}
        </span>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex flex-wrap gap-x-2">
        {skills.map((skill, index) => (
          <Badge className="text-xs" key={index}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
