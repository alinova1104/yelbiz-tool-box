import { Search, Code, FileText, Image, Globe, Calculator, Lock, Zap } from "lucide-react";
import { CategorySection } from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "JSON Araçları",
      description: "JSON verilerinizi düzenlemek, doğrulamak ve dönüştürmek için güçlü araçlar",
      categoryKey: "json",
      tools: [
        {
          title: "JSON Formatter",
          description: "JSON verilerinizi düzenler ve güzelleştirir. Hataları tespit eder ve okunabilir hale getirir.",
          icon: <Code className="h-5 w-5" />,
          href: "/json-formatter"
        },
        {
          title: "JSON Validator",
          description: "JSON formatınızın geçerli olup olmadığını kontrol eder ve hataları gösterir.",
          icon: <FileText className="h-5 w-5" />,
          href: "/json-validator"
        },
        {
          title: "JSON to CSV",
          description: "JSON verilerinizi CSV formatına dönüştürür. Veri analizi için ideal.",
          icon: <FileText className="h-5 w-5" />,
          href: "/json-to-csv"
        }
      ]
    },
    {
      title: "SEO Araçları",
      description: "Web sitenizin arama motorlarında daha iyi performans göstermesi için araçlar",
      categoryKey: "seo",
      tools: [
        {
          title: "Meta Tag Analyzer",
          description: "Web sitenizin meta etiketlerini analiz eder ve SEO önerilerinde bulunur.",
          icon: <Globe className="h-5 w-5" />,
          href: "/meta-analyzer"
        },
        {
          title: "Keyword Density Checker",
          description: "İçerikteki anahtar kelime yoğunluğunu kontrol eder ve optimize eder.",
          icon: <Search className="h-5 w-5" />,
          href: "/keyword-density"
        },
        {
          title: "URL Analyzer",
          description: "URL yapınızı analiz eder ve SEO dostu öneriler sunar.",
          icon: <Globe className="h-5 w-5" />,
          href: "/url-analyzer"
        }
      ]
    },
    {
      title: "PDF Araçları",
      description: "PDF dosyalarınızı işlemek, dönüştürmek ve optimize etmek için araçlar",
      categoryKey: "pdf",
      tools: [
        {
          title: "PDF Merger",
          description: "Birden fazla PDF dosyasını tek bir dosyada birleştirir.",
          icon: <FileText className="h-5 w-5" />,
          href: "/pdf-merger"
        },
        {
          title: "PDF Compressor",
          description: "PDF dosyalarınızı sıkıştırarak boyutunu küçültür.",
          icon: <FileText className="h-5 w-5" />,
          href: "/pdf-compressor"
        },
        {
          title: "PDF to Image",
          description: "PDF sayfalarını yüksek kaliteli görüntülere dönüştürür.",
          icon: <Image className="h-5 w-5" />,
          href: "/pdf-to-image"
        }
      ]
    },
    {
      title: "Geliştirici Araçları",
      description: "Yazılım geliştirme sürecinizi hızlandıracak pratik araçlar",
      categoryKey: "dev",
      tools: [
        {
          title: "Base64 Encoder/Decoder",
          description: "Metinleri Base64 formatına kodlar veya çözer.",
          icon: <Lock className="h-5 w-5" />,
          href: "/base64"
        },
        {
          title: "Hash Generator",
          description: "MD5, SHA1, SHA256 gibi hash değerleri oluşturur.",
          icon: <Zap className="h-5 w-5" />,
          href: "/hash-generator"
        },
        {
          title: "Color Palette Generator",
          description: "Uyumlu renk paletleri oluşturur ve renk kodlarını dönüştürür.",
          icon: <Image className="h-5 w-5" />,
          href: "/color-palette"
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    tools: category.tools.filter(tool =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.tools.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-glow">
              Developer Tools Hub
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              JSON'dan PDF'ye, SEO'dan geliştirici araçlarına kadar ihtiyacınız olan tüm online araçlar tek bir yerde
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Araç ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-base bg-card border-border focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                Araçları Keşfet
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Favorilerim
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Tools Categories */}
      <main className="container mx-auto px-4 py-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <CategorySection
              key={category.categoryKey}
              title={category.title}
              description={category.description}
              tools={category.tools}
              categoryKey={category.categoryKey}
            />
          ))
        ) : (
          <div className="text-center py-20">
            <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Araç bulunamadı</h3>
            <p className="text-muted-foreground">
              Aradığınız kriterlere uygun araç bulunmuyor. Farklı anahtar kelimeler deneyin.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Tools.Yelbiz</h3>
              <p className="text-sm text-muted-foreground">
                Geliştiriciler ve dijital profesyoneller için kapsamlı araç koleksiyonu.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Popüler Araçlar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>JSON Formatter</li>
                <li>PDF Merger</li>
                <li>SEO Analyzer</li>
                <li>Base64 Encoder</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kategoriler</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>JSON Araçları</li>
                <li>SEO Araçları</li>
                <li>PDF Araçları</li>
                <li>Developer Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <p className="text-sm text-muted-foreground">
                tools.yelbiz.com.tr
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Yelbiz Tools. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;