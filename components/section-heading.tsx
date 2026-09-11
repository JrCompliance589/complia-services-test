import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-heading",
        align === "center" && "section-heading-center",
        light && "section-heading-light",
      )}
    >
      <p className="eyebrow">
        <span aria-hidden="true" /> {eyebrow}
      </p>
      <h2>{title}</h2>
      {text && <p className="section-heading-copy">{text}</p>}
    </div>
  );
}
