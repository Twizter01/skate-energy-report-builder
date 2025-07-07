import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface ReportSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ReportSection = ({ title, children, className = "" }: ReportSectionProps) => {
  return (
    <Card className={`p-6 mb-6 ${className}`}>
      <h2 className="text-2xl font-semibold text-primary mb-4 border-b border-border pb-2">
        {title}
      </h2>
      <div className="text-foreground leading-relaxed">
        {children}
      </div>
    </Card>
  );
};

export default ReportSection;