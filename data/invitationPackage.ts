interface InvitationPackage {
  exclusive: boolean;
  title: string;
  themes: {
    text: string;
    availableStatus: boolean;
  }[];
  content: {
    text: string;
    children?: {
      text: string;
      availableStatus: boolean;
    }[];
    availableStatus: boolean;
  }[];
  others: string[];
  adminAccess: {
    status: boolean;
    features: { text: string; availableStatus: boolean }[];
  };
  additionalInfo: {
    webUrl: string[];
    notes: string[];
  };
}

export const InvitationPackageData: InvitationPackage[] = [
  {
    exclusive: false,
    title: "Standar A",
    themes: [
      {
        text: "Elegant & Minimalist",
        availableStatus: true,
      },
      {
        text: "Floral & Pastel",
        availableStatus: true,
      },
      {
        text: "Glam & Luxury",
        availableStatus: false,
      },
      {
        text: "Nature / Rustic",
        availableStatus: false,
      },
      {
        text: "Illustrasi / Kartun",
        availableStatus: false,
      },
      {
        text: "Tradisional / Cultural",
        availableStatus: false,
      },
    ],
    content: [
      { text: "Cover", availableStatus: true },
      { text: "Pembuka", availableStatus: true },
      { text: "Profil dan Foto Mempelai", availableStatus: true },
      {
        text: "Informasi Acara*",
        availableStatus: true,
        children: [
          { text: "Nama Acara", availableStatus: true },
          { text: "Tanggal dan Waktu", availableStatus: true },
          { text: "Countdown Waktu", availableStatus: true },
          { text: "Save Google Calendar", availableStatus: false },
          { text: "Lokasi", availableStatus: true },
          { text: "Google Maps", availableStatus: true },
        ],
      },
      { text: "Kartu Akses Masuk (QR Code)", availableStatus: false },
      { text: "Unduh Kartu Akses Masuk", availableStatus: false },
      { text: "Dress Code", availableStatus: false },
      { text: "Love Story Timeline", availableStatus: true },
      { text: "Video Frame (1 Video)", availableStatus: true },
      { text: "Photo Gallery (10 Foto)", availableStatus: true },
      { text: "RSVP", availableStatus: true },
      { text: "Ucapan dari Tamu", availableStatus: true },
      { text: "Wedding Gift (E-Amplop dan Alamat)", availableStatus: true },
      { text: "Penutup / Thank You", availableStatus: true },
    ],
    others: ["Autoplay Music", "Custom Quotes"],
    adminAccess: {
      status: false,
      features: [
        {
          text: "Lihat Ucapan Hanya pada Link Undangan",
          availableStatus: true,
        },
      ],
    },
    additionalInfo: {
      webUrl: ["Satu link bisa untuk semua tamu", "Masa aktif 3 bulan"],
      notes: [
        "Maksimal 2 acara dengan 1 tanggal (waktu bisa berbeda)",
        "1 Lokasi Google Maps",
      ],
    },
  },
  {
    exclusive: false,
    title: "Standar B",
    themes: [
      { text: "Elegant & Minimalist", availableStatus: true },
      { text: "Floral & Pastel", availableStatus: true },
      { text: "Glam & Luxury", availableStatus: true },
      { text: "Nature / Rustic", availableStatus: true },
      { text: "Illustrasi / Kartun", availableStatus: true },
      { text: "Tradisional / Cultural", availableStatus: true },
    ],
    content: [
      { text: "Cover", availableStatus: true },
      { text: "Pembuka", availableStatus: true },
      { text: "Profil dan Foto Mempelai", availableStatus: true },
      {
        text: "Informasi Acara",
        availableStatus: true,
        children: [
          { text: "Nama Acara", availableStatus: true },
          { text: "Tanggal dan Waktu", availableStatus: true },
          { text: "Countdown Waktu", availableStatus: true },
          { text: "Save Google Calendar", availableStatus: true },
          { text: "Lokasi", availableStatus: true },
          { text: "Google Maps", availableStatus: true },
        ],
      },
      { text: "Kartu Akses Masuk (QR Code)", availableStatus: true },
      { text: "Unduh Kartu Akses Masuk", availableStatus: true },
      { text: "Dress Code", availableStatus: true },
      { text: "Love Story Timeline", availableStatus: true },
      { text: "Video Frame (1 Video)", availableStatus: true },
      { text: "Photo Gallery (10 Foto)", availableStatus: true },
      { text: "RSVP", availableStatus: true },
      { text: "Ucapan dari Tamu", availableStatus: true },
      { text: "Wedding Gift (E-Amplop dan Alamat)", availableStatus: true },
      { text: "Penutup / Thank You", availableStatus: true },
    ],
    others: ["Autoplay Music", "Custom Quotes"],
    adminAccess: {
      status: true,
      features: [
        {
          text: "Lihat Ucapan Hanya pada Link Undangan",
          availableStatus: true,
        },
        { text: "Lihat Rekap RSVP", availableStatus: true },
        { text: "Unduh Excel/PDF Hasil RSVP", availableStatus: true },
        {
          text: "Kelola Daftar Tamu Undangan (Unlimited)",
          availableStatus: true,
        },
        { text: "Generate Link Undangan per Tamu", availableStatus: true },
        {
          text: "Unduh Excel/PDF Daftar Tamu & Link Undangan",
          availableStatus: true,
        },
        { text: "Template/Custom Teks Pengantar Chat", availableStatus: true },
        { text: "Kirim Otomatis Undangan ke WhatsApp", availableStatus: true },
        {
          text: "Lihat Daftar Hadir Tamu hasil Scan QR",
          availableStatus: true,
        },
        { text: "Unduh Excel/PDF Hasil Scan QR", availableStatus: true },
        { text: "Masa aktif 3 bulan", availableStatus: true },
      ],
    },
    additionalInfo: {
      webUrl: ["Link berdasarkan nama tamu", "Masa aktif 3 bulan"],
      notes: [
        "Maksimal 2 acara dengan 1 tanggal (waktu bisa berbeda)",
        "1 Lokasi-Google Maps",
      ],
    },
  },
  {
    exclusive: false,
    title: "Standar C",
    themes: [
      { text: "Elegant & Minimalist", availableStatus: true },
      { text: "Floral & Pastel", availableStatus: true },
      { text: "Glam & Luxury", availableStatus: true },
      { text: "Nature / Rustic", availableStatus: true },
      { text: "Illustrasi / Kartun", availableStatus: true },
      { text: "Tradisional / Cultural", availableStatus: true },
    ],
    content: [
      { text: "Cover", availableStatus: true },
      { text: "Pembuka", availableStatus: true },
      { text: "Profil dan Foto Mempelai", availableStatus: true },
      {
        text: "Informasi Acara",
        availableStatus: true,
        children: [
          { text: "Nama Acara", availableStatus: true },
          { text: "Tanggal dan Waktu", availableStatus: true },
          { text: "Countdown Waktu", availableStatus: true },
          { text: "Save Google Calendar", availableStatus: true },
          { text: "Lokasi", availableStatus: true },
          { text: "Google Maps", availableStatus: true },
        ],
      },
      { text: "Kartu Akses Masuk (QR Code)", availableStatus: true },
      { text: "Unduh Kartu Akses Masuk", availableStatus: true },
      { text: "Dress Code", availableStatus: true },
      { text: "Love Story Timeline", availableStatus: true },
      { text: "Video Frame (1 Video)", availableStatus: true },
      { text: "Photo Gallery (10 Foto)", availableStatus: true },
      { text: "RSVP", availableStatus: true },
      { text: "Ucapan dari Tamu", availableStatus: true },
      { text: "Wedding Gift (E-Amplop dan Alamat)", availableStatus: true },
      { text: "Penutup / Thank You", availableStatus: true },
    ],
    others: ["Autoplay Music", "Custom Quotes"],
    adminAccess: {
      status: true,
      features: [
        { text: "Lihat Rekap RSVP dan Ucapan", availableStatus: true },
        { text: "Unduh Excel/PDF Hasil RSVP", availableStatus: true },
        {
          text: "Kelola Daftar Tamu Undangan (Unlimited)",
          availableStatus: true,
        },
        { text: "Generate Link Undangan per Tamu", availableStatus: true },
        {
          text: "Unduh Excel/PDF Daftar Tamu & Link Undangan",
          availableStatus: true,
        },
        { text: "Template/Custom Teks Pengantar Chat", availableStatus: true },
        { text: "Kirim Otomatis Undangan ke WhatsApp", availableStatus: true },
        {
          text: "Lihat Daftar Hadir Tamu hasil Scan QR",
          availableStatus: true,
        },
        { text: "Unduh Excel/PDF Hasil Scan QR", availableStatus: true },
        { text: "Masa aktif 3 bulan", availableStatus: true },
      ],
    },
    additionalInfo: {
      webUrl: ["Link berdasarkan nama tamu", "Masa aktif 3 bulan"],
      notes: [
        "Maksimal 2 acara dengan 1 tanggal (waktu bisa berbeda)",
        "Maksimal 2 Lokasi-Google Maps",
      ],
    },
  },
  {
    exclusive: false,
    title: "Premium A",
    themes: [
      { text: "Elegant & Minimalist", availableStatus: true },
      { text: "Floral & Pastel", availableStatus: true },
      { text: "Glam & Luxury", availableStatus: true },
      { text: "Nature / Rustic", availableStatus: true },
      { text: "Illustrasi / Kartun", availableStatus: true },
      { text: "Tradisional / Cultural", availableStatus: true },
      { text: "Custom Warna", availableStatus: true },
    ],
    content: [
      { text: "Cover", availableStatus: true },
      { text: "Pembuka", availableStatus: true },
      { text: "Profil dan Foto Mempelai", availableStatus: true },
      {
        text: "Informasi Acara",
        availableStatus: true,
        children: [
          { text: "Nama Acara", availableStatus: true },
          { text: "Tanggal dan Waktu", availableStatus: true },
          { text: "Countdown Waktu", availableStatus: true },
          { text: "Save Google Calendar", availableStatus: true },
          { text: "Lokasi", availableStatus: true },
          { text: "Google Maps", availableStatus: true },
        ],
      },
      { text: "Kartu Akses Masuk (QR Code)", availableStatus: true },
      { text: "Unduh Kartu Akses Masuk", availableStatus: true },
      { text: "Dress Code (Optional)", availableStatus: true },
      { text: "Love Story Timeline", availableStatus: true },
      { text: "Video Frame (1 Video)", availableStatus: true },
      { text: "Photo Gallery (15 Foto)", availableStatus: true },
      { text: "RSVP", availableStatus: true },
      { text: "Ucapan dari Tamu", availableStatus: true },
      { text: "Wedding Gift (E-Amplop dan Alamat)", availableStatus: true },
      { text: "Penutup / Thank You", availableStatus: true },
    ],
    others: ["Autoplay Music", "Custom Quotes"],
    adminAccess: {
      status: true,
      features: [
        { text: "Lihat Rekap RSVP dan Ucapan", availableStatus: true },
        { text: "Unduh Excel/PDF Hasil RSVP", availableStatus: true },
        {
          text: "Kelola Daftar Tamu Undangan (Unlimited)",
          availableStatus: true,
        },
        { text: "Generate Link Undangan per Tamu", availableStatus: true },
        {
          text: "Unduh Excel/PDF Daftar Tamu & Link Undangan",
          availableStatus: true,
        },
        { text: "Template/Custom Teks Pengantar Chat", availableStatus: true },
        { text: "Kirim Otomatis Undangan ke WhatsApp", availableStatus: true },
        {
          text: "Lihat Daftar Hadir Tamu hasil Scan QR",
          availableStatus: true,
        },
        { text: "Unduh Excel/PDF Hasil Scan QR", availableStatus: true },
        { text: "Masa aktif 6 bulan", availableStatus: true },
      ],
    },
    additionalInfo: {
      webUrl: ["Link berdasarkan nama tamu", "Masa aktif 6 bulan"],
      notes: [
        "Maksimal 2 acara dengan 1 tanggal (waktu bisa berbeda)",
        "Maksimal 2 Lokasi-Google Maps",
        "Dapat membagi sesi tamu undangan",
      ],
    },
  },
  {
    exclusive: false,
    title: "Premium B",
    themes: [
      { text: "Elegant & Minimalist", availableStatus: true },
      { text: "Floral & Pastel", availableStatus: true },
      { text: "Glam & Luxury", availableStatus: true },
      { text: "Nature / Rustic", availableStatus: true },
      { text: "Illustrasi / Kartun", availableStatus: true },
      { text: "Tradisional / Cultural", availableStatus: true },
      { text: "Custom Warna", availableStatus: true },
    ],
    content: [
      { text: "Cover", availableStatus: true },
      { text: "Pembuka", availableStatus: true },
      { text: "Profil dan Foto Mempelai", availableStatus: true },
      {
        text: "Informasi Acara",
        availableStatus: true,
        children: [
          { text: "Nama Acara", availableStatus: true },
          { text: "Tanggal dan Waktu", availableStatus: true },
          { text: "Countdown Waktu", availableStatus: true },
          { text: "Save Google Calendar", availableStatus: true },
          { text: "Lokasi", availableStatus: true },
          { text: "Google Maps", availableStatus: true },
        ],
      },
      { text: "Kartu Akses Masuk (QR Code)", availableStatus: true },
      { text: "Unduh Kartu Akses Masuk", availableStatus: true },
      { text: "Dress Code (Optional)", availableStatus: true },
      { text: "Love Story Timeline", availableStatus: true },
      { text: "Video Frame (1 Video)", availableStatus: true },
      { text: "Photo Gallery (15 Foto)", availableStatus: true },
      { text: "RSVP", availableStatus: true },
      { text: "Ucapan dari Tamu", availableStatus: true },
      { text: "Wedding Gift (E-Amplop dan Alamat)", availableStatus: true },
      { text: "Penutup / Thank You", availableStatus: true },
    ],
    others: ["Autoplay Music", "Custom Quotes"],
    adminAccess: {
      status: true,
      features: [
        { text: "Lihat Rekap RSVP dan Ucapan", availableStatus: true },
        { text: "Unduh Excel/PDF Hasil RSVP", availableStatus: true },
        {
          text: "Kelola Daftar Tamu Undangan (Unlimited)",
          availableStatus: true,
        },
        { text: "Generate Link Undangan per Tamu", availableStatus: true },
        {
          text: "Unduh Excel/PDF Daftar Tamu & Link Undangan",
          availableStatus: true,
        },
        { text: "Template/Custom Teks Pengantar Chat", availableStatus: true },
        { text: "Kirim Otomatis Undangan ke WhatsApp", availableStatus: true },
        {
          text: "Lihat Daftar Hadir Tamu hasil Scan QR",
          availableStatus: true,
        },
        { text: "Unduh Excel/PDF Hasil Scan QR", availableStatus: true },
        { text: "Masa aktif 6 bulan", availableStatus: true },
      ],
    },
    additionalInfo: {
      webUrl: ["Link berdasarkan nama tamu", "Masa aktif 6 bulan"],
      notes: [
        "Maksimal 2 acara dengan 1 tanggal (waktu bisa berbeda)",
        "Maksimal 2 Lokasi-Google Maps",
        "Dapat membagi sesi tamu undangan",
      ],
    },
  },
];
