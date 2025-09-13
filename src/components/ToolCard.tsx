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
    <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-glass border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-premium cursor-pointer">
      <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative pb-3 z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-primary/20">
            {icon}
          </div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] opacity-70 group-hover:opacity-100 transition-opacity">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary-glow transition-all duration-300 leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative pt-0 z-10">
        <CardDescription className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
          {description}
        </CardDescription>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 font-medium backdrop-blur-sm"
        >
          <span>Aracı Kullan</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
};