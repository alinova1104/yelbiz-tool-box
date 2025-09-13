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
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black"></div>
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-hero opacity-20 blur-hero animate-float-elegant"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-hero opacity-15 blur-hero animate-float-elegant" style={{ animationDelay: "4s" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            
            {/* Badge */}
            <div className="mb-12 animate-fade-in-up">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-premium backdrop-blur-glass text-primary text-sm font-bold border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 animate-pulse-glow">
                ✨ {totalTools}+ Premium Developer Tools
              </span>
            </div>
            
            {/* Main Title */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
                <span className="block bg-gradient-hero bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                  Tools
                </span>
                <span className="block text-white/90 -mt-4">
                  Hub
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-2xl md:text-3xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
                Professional developer tools designed for
                <span className="text-transparent bg-gradient-hero bg-clip-text font-semibold"> modern workflows</span>
              </p>
              <p className="text-lg text-white/40 mt-4 max-w-2xl mx-auto">
                Fast, secure, and completely free. No registration required.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="max-w-2xl mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-3xl blur-lg group-focus-within:opacity-40 transition-opacity duration-500"></div>
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/40 h-6 w-6 group-focus-within:text-primary transition-colors duration-300" />
                  <Input
                    type="text"
                    placeholder="Search for tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-14 pr-6 py-6 text-lg bg-gradient-premium backdrop-blur-glass border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-3xl text-white placeholder:text-white/40"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-gradient-hero hover:shadow-luxury transition-all duration-700 hover:scale-110 px-12 py-4 text-lg font-bold rounded-2xl group"
              >
                <span className="relative z-10">Explore Tools</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 bg-gradient-premium backdrop-blur-glass hover:bg-gradient-glass hover:border-primary/30 hover:text-primary transition-all duration-500 px-12 py-4 text-lg font-semibold rounded-2xl hover:scale-105"
              >
                Browse Categories
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-hero rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="animate-slide-up group cursor-pointer">
              <div className="text-4xl md:text-5xl font-black bg-gradient-hero bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">{totalTools}+</div>
              <div className="text-white/60 font-medium">Premium Tools</div>
            </div>
            <div className="animate-slide-up group cursor-pointer" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-black bg-gradient-hero bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">8</div>
              <div className="text-white/60 font-medium">Categories</div>
            </div>
            <div className="animate-slide-up group cursor-pointer" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-black bg-gradient-hero bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-white/60 font-medium">Free Forever</div>
            </div>
            <div className="animate-slide-up group cursor-pointer" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-black bg-gradient-hero bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-white/60 font-medium">Available</div>
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