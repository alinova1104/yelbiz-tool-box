import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  href: string;
}

export const ToolCard = ({ title, description, icon, category, href }: ToolCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-gradient-secondary hover:bg-gradient-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-elegant cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
        </div>
        <CardTitle className="text-lg group-hover:text-primary-glow transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </CardDescription>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-colors"
        >
          Aracı Kullan
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};