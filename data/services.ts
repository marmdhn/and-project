export interface ITabs {
  title: string;
  text1: string;
  highlight: string;
  text2: string;
  services: IService[];
}

interface IService {
  title: string;
  description: string;
  portfolio?: IPortfolio[];
  hasPriceList: boolean;
}

interface IPortfolio {
  coverUrl: string;
  title: string;
  description: string;
}

export const tabs: ITabs[] = [
  {
    title: "Website",
    text1: "Kami membantu membangun website yang",
    highlight: "profesional, responsif, cepat diakses, dan SEO-friendly",
    text2: "sehingga bisnis atau personal brand-mu terlihat lebih kredibel.",
    services: [
      {
        title: "Landing Page",
        description:
          "👉 Website satu halaman yang fokus untuk promosi produk/event. Cocok buat kampanye digital, iklan berbayar, atau event khusus.",
        portfolio: [
          {
            title: "Coming Soon",
            coverUrl: "/illustration/coming_soon.png",
            description: "Coming Soon",
          },
          {
            title: "Coming Soon",
            coverUrl: "/illustration/coming_soon.png",
            description: "Coming Soon",
          },
        ],
        hasPriceList: false,
      },
      {
        title: "Invitation Website",
        description:
          "👉 Undangan digital modern untuk wedding, birthday, atau event spesial dengan desain interaktif & shareable.",
        hasPriceList: true,
      },
      {
        title: "Company Profile",
        description:
          "👉 Tampilkan profil bisnis, visi misi, dan layananmu agar terlihat profesional & kredibel di mata klien.",
        hasPriceList: false,
      },
      {
        title: "Portfolio Website",
        description:
          "👉 Cocok untuk freelancer, agency, atau perusahaan kreatif yang ingin memamerkan karya dengan elegan.",
        hasPriceList: false,
      },
      {
        title: "Catalog Website",
        description:
          "👉 Website berisi katalog produk/jasa lengkap dengan detail & foto, memudahkan calon pelanggan untuk memilih.",
        hasPriceList: false,
      },
      {
        title: "Dashboard",
        description:
          "👉 Desain dashboard interaktif untuk sales, project management, sekolah/kampus, HR, accounting, marketing, hingga healthcare.",
        hasPriceList: false,
      },
    ],
  },
  {
    title: "UI/UX Design",
    text1: "Kami merancang tampilan yang",
    highlight:
      "modern, intuitif, dan fungsional untuk website maupun aplikasi.",
    text2:
      "Desain disusun agar pengguna mudah bernavigasi, lebih engage, dan bisnismu makin optimal.",
    services: [
      {
        title: "Mobile App Design",
        description:
          "👉 Desain aplikasi mobile yang modern, simpel, dan nyaman digunakan.",
        hasPriceList: false,
      },
      {
        title: "Website Design",
        description:
          "👉 UI/UX untuk website dengan layout estetik, responsif, dan conversion-focused.",
        hasPriceList: false,
      },
    ],
  },
  {
    title: "Graphic Design",
    text1: "Kami menghadirkan desain yang",
    highlight:
      "menarik, konsisten, dan sesuai identitas brand untuk promosi, branding, maupun presentasi.",
    text2:
      "Desain tepat membuat audiens lebih mudah ingat dan percaya pada brand-mu.",
    services: [
      {
        title: "Poster / Banner / Flyer",
        description: "👉 Desain promosi visual yang menarik perhatian.",
        hasPriceList: false,
      },
      {
        title: "Social Media Content",
        description:
          "👉 Desain feed, story, & carousel yang catchy & sesuai trend.",
        hasPriceList: false,
      },
      {
        title: "Branding Kit",
        description: "👉 Paket identitas visual (logo, kartu nama, ID card).",
        hasPriceList: false,
      },
      {
        title: "Presentation Slide",
        description: "👉 Desain presentasi profesional & engaging.",
        hasPriceList: false,
      },
      {
        title: "Invitation Design",
        description: "👉 Undangan digital/cetak dengan desain unik.",
        hasPriceList: true,
      },
      {
        title: "Catalog Design",
        description: "👉 Desain katalog produk dengan visual menarik.",
        hasPriceList: false,
      },
    ],
  },
  {
    title: "Custom",
    text1: "Kami siap bantu dengan layanan custom",
    highlight:
      "fleksibel — mulai dari pembuatan website, desain visual, editing video, sampai strategi kreatif sesuai request.",
    text2:
      "Butuh website + desain, video profil, atau sekadar ide kreatif? Semua bisa kami atur.",
    services: [
      {
        title: "Solusi Kreatif Fleksibel",
        description:
          "👉 Punya ide unik atau kebutuhan khusus di luar layanan standar? Tenang, kami siap bantu.",
        hasPriceList: false,
      },
    ],
  },
];
