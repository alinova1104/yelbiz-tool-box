import { 
  Search, Code, FileText, Image, Globe, Calculator, Lock, Zap, 
  Palette, Hash, Type, Scissors, Download, Upload, Copy, 
  RefreshCw, Shield, Network, Database, Smartphone, Cpu, 
  FileImage, FileVideo, Music, Gamepad2, QrCode, Clipboard,
  Link, Timer, Eye, BarChart
} from "lucide-react";
import { CategorySection } from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "Text & Content Tools",
      description: "Metin işleme, formatlama ve analiz araçları",
      categoryKey: "text",
      tools: [
        {
          title: "Word Counter",
          description: "Kelime, karakter ve paragraf sayısını analiz eder. Okuma süresi hesaplar.",
          icon: <Type className="h-5 w-5" />,
          href: "/word-counter"
        },
        {
          title: "Text Case Converter",
          description: "Metni büyük harf, küçük harf, başlık formatı gibi farklı biçimlere çevirir.",
          icon: <Type className="h-5 w-5" />,
          href: "/text-case-converter"
        },
        {
          title: "Lorem Ipsum Generator",
          description: "Tasarım ve geliştirme için placeholder metin oluşturur.",
          icon: <Type className="h-5 w-5" />,
          href: "/lorem-ipsum"
        },
        {
          title: "Text Difference Checker",
          description: "İki metin arasındaki farkları karşılaştırır ve gösterir.",
          icon: <Eye className="h-5 w-5" />,
          href: "/text-diff"
        }
      ]
    },
    {
      title: "Image & Media Tools", 
      description: "Görsel ve medya dosyalarını işleme araçları",
      categoryKey: "media",
      tools: [
        {
          title: "Image Compressor",
          description: "Görüntü kalitesini koruyarak dosya boyutunu küçültür.",
          icon: <FileImage className="h-5 w-5" />,
          href: "/image-compressor"
        },
        {
          title: "Image Converter",
          description: "JPG, PNG, WebP, SVG gibi formatlar arası dönüşüm yapar.",
          icon: <RefreshCw className="h-5 w-5" />,
          href: "/image-converter"
        },
        {
          title: "QR Code Generator",
          description: "URL, metin veya veri için özelleştirilebilir QR kodları oluşturur.",
          icon: <QrCode className="h-5 w-5" />,
          href: "/qr-generator"
        },
        {
          title: "Color Palette Extractor",
          description: "Görüntülerden baskın renkleri çıkarır ve palet oluşturur.",
          icon: <Palette className="h-5 w-5" />,
          href: "/color-extractor"
        }
      ]
    },
    {
      title: "Code & Development",
      description: "Geliştiriciler için kod araçları ve yardımcıları",
      categoryKey: "code",
      tools: [
        {
          title: "JSON Formatter & Validator",
          description: "JSON verilerini düzenler, doğrular ve güzelleştirir.",
          icon: <Code className="h-5 w-5" />,
          href: "/json-formatter"
        },
        {
          title: "Base64 Encoder/Decoder",
          description: "Metinleri ve dosyaları Base64 formatına kodlar veya çözer.",
          icon: <Lock className="h-5 w-5" />,
          href: "/base64"
        },
        {
          title: "URL Encoder/Decoder",
          description: "URL'leri kodlar ve çözer. Özel karakterleri işler.",
          icon: <Link className="h-5 w-5" />,
          href: "/url-encoder"
        },
        {
          title: "Hash Generator",
          description: "MD5, SHA1, SHA256, SHA512 gibi hash değerleri oluşturur.",
          icon: <Hash className="h-5 w-5" />,
          href: "/hash-generator"
        },
        {
          title: "CSS Minifier",
          description: "CSS kodunu sıkıştırır ve optimize eder.",
          icon: <Scissors className="h-5 w-5" />,
          href: "/css-minifier"
        },
        {
          title: "RegEx Tester",
          description: "Düzenli ifadeleri test eder ve eşleşmeleri gösterir.",
          icon: <Search className="h-5 w-5" />,
          href: "/regex-tester"
        }
      ]
    },
    {
      title: "Converter Tools",
      description: "Formatlar arası dönüşüm ve çevirme araçları", 
      categoryKey: "converter",
      tools: [
        {
          title: "Unit Converter",
          description: "Uzunluk, ağırlık, sıcaklık, alan gibi birimleri çevirir.",
          icon: <RefreshCw className="h-5 w-5" />,
          href: "/unit-converter"
        },
        {
          title: "Currency Converter",
          description: "Güncel kurlarla para birimlerini çevirir.",
          icon: <Calculator className="h-5 w-5" />,
          href: "/currency-converter"
        },
        {
          title: "JSON to CSV",
          description: "JSON verilerini CSV formatına dönüştürür.",
          icon: <FileText className="h-5 w-5" />,
          href: "/json-to-csv"
        },
        {
          title: "Timestamp Converter",
          description: "Unix timestamp ve tarih formatları arası dönüşüm.",
          icon: <Timer className="h-5 w-5" />,
          href: "/timestamp-converter"
        }
      ]
    },
    {
      title: "Security & Privacy",
      description: "Güvenlik ve gizlilik araçları",
      categoryKey: "security", 
      tools: [
        {
          title: "Password Generator",
          description: "Güçlü ve güvenli şifreler oluşturur. Özelleştirilebilir kriterler.",
          icon: <Shield className="h-5 w-5" />,
          href: "/password-generator"
        },
        {
          title: "UUID Generator",
          description: "Benzersiz tanımlayıcılar (UUID) oluşturur.",
          icon: <Zap className="h-5 w-5" />,
          href: "/uuid-generator"
        },
        {
          title: "SSL Certificate Checker",
          description: "SSL sertifikalarını kontrol eder ve detaylarını gösterir.",
          icon: <Shield className="h-5 w-5" />,
          href: "/ssl-checker"
        }
      ]
    },
    {
      title: "SEO & Marketing",
      description: "Arama motoru optimizasyonu ve pazarlama araçları",
      categoryKey: "seo",
      tools: [
        {
          title: "Meta Tag Analyzer",
          description: "Web sitesi meta etiketlerini analiz eder ve öneriler sunar.",
          icon: <Globe className="h-5 w-5" />,
          href: "/meta-analyzer"
        },
        {
          title: "Keyword Density Checker", 
          description: "İçerikteki anahtar kelime yoğunluğunu analiz eder.",
          icon: <BarChart className="h-5 w-5" />,
          href: "/keyword-density"
        },
        {
          title: "Backlink Checker",
          description: "Web sitesinin geri bağlantılarını analiz eder.",
          icon: <Link className="h-5 w-5" />,
          href: "/backlink-checker"
        },
        {
          title: "Social Media Preview",
          description: "Sosyal medyada nasıl görüneceğini önizler.",
          icon: <Eye className="h-5 w-5" />,
          href: "/social-preview"
        }
      ]
    },
    {
      title: "File & Document Tools",
      description: "Dosya işleme ve belge yönetim araçları",
      categoryKey: "file",
      tools: [
        {
          title: "PDF Merger",
          description: "Birden fazla PDF dosyasını tek dosyada birleştirir.",
          icon: <FileText className="h-5 w-5" />,
          href: "/pdf-merger"
        },
        {
          title: "PDF Compressor", 
          description: "PDF dosya boyutunu küçültür ve optimize eder.",
          icon: <Scissors className="h-5 w-5" />,
          href: "/pdf-compressor"
        },
        {
          title: "File Hash Checker",
          description: "Dosyaların bütünlüğünü kontrol için hash değeri hesaplar.",
          icon: <Shield className="h-5 w-5" />,
          href: "/file-hash"
        }
      ]
    },
    {
      title: "Network & System",
      description: "Ağ ve sistem analiz araçları",
      categoryKey: "network",
      tools: [
        {
          title: "IP Address Lookup",
          description: "IP adresinin konumunu ve detaylarını gösterir.",
          icon: <Network className="h-5 w-5" />,
          href: "/ip-lookup"
        },
        {
          title: "Domain Whois",
          description: "Domain adı bilgilerini ve kayıt detaylarını sorgular.",
          icon: <Globe className="h-5 w-5" />,
          href: "/whois"
        },
        {
          title: "Website Speed Test",
          description: "Web sitesi hızını test eder ve performans önerileri sunar.",
          icon: <Zap className="h-5 w-5" />,
          href: "/speed-test"
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

  const totalTools = categories.reduce((acc, category) => acc + category.tools.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        <div className="absolute inset-0 backdrop-blur-3xl bg-black/20"></div>
        
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 backdrop-blur-sm">
                🚀 {totalTools}+ Profesyonel Araç
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Developer Tools Hub
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Geliştiriciler ve dijital profesyoneller için kapsamlı araç koleksiyonu. 
              <br className="hidden md:block" />
              <span className="text-primary-glow font-medium">Hızlı, güvenli ve tamamen ücretsiz.</span>
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative mb-12 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Hangi aracı arıyorsunuz?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-base bg-card/50 backdrop-blur-glass border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-2xl"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-premium transition-all duration-500 hover:scale-105 px-8 py-3 text-base font-semibold rounded-xl"
              >
                Araçları Keşfet
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 bg-white/5 hover:bg-white/10 hover:text-primary transition-all duration-300 backdrop-blur-sm px-8 py-3 text-base font-semibold rounded-xl"
              >
                Favorilerim
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{totalTools}+</div>
              <div className="text-muted-foreground">Güçlü Araç</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Kategori</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Ücretsiz</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Erişilebilir</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <main className="container mx-auto px-4 py-20">
        {filteredCategories.length > 0 ? (
          <div className="space-y-20">
            {filteredCategories.map((category, index) => (
              <div key={category.categoryKey} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategorySection
                  title={category.title}
                  description={category.description}
                  tools={category.tools}
                  categoryKey={category.categoryKey}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
              <Calculator className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Araç bulunamadı</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Aradığınız kriterlere uygun araç bulunmuyor. Farklı anahtar kelimeler deneyin veya tüm araçları görüntüleyin.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gradient-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Tools.Yelbiz
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Geliştiriciler ve dijital profesyoneller için tasarlanmış kapsamlı araç koleksiyonu. 
                Modern, hızlı ve güvenilir çözümler.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Popüler Araçlar</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">JSON Formatter</li>
                <li className="hover:text-primary transition-colors cursor-pointer">PDF Merger</li>
                <li className="hover:text-primary transition-colors cursor-pointer">QR Code Generator</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Password Generator</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Kategoriler</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Text & Content</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Image & Media</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Code & Development</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Security & Privacy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">İletişim</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>tools.yelbiz.com.tr</p>
                <p>Professional tools for developers</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Yelbiz Tools. Tüm hakları saklıdır. 
              <span className="text-primary ml-2">Made with ❤️ for developers</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;