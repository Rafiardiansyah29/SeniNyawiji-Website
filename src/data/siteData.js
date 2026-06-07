export const assets = {
  gunungan: "/assets/gunungan-1.png",
  lineGunungan: "/assets/line-art-gunungan.png",
  santri: "/assets/santri-jejer.png",
  wayang: "/assets/wayang.jpg",
  poster: "/assets/poster-mahabbah.png",
  rebana: "/assets/penabuh-rebana.png",
  kitab: "/assets/pembaca-kitab.png",
  dokumentasi: "/assets/dokumentasi-pertunjukan.png",
  dokumentasiFoto: "/assets/dokumentasi-1.jpg",
  mahabah: "/assets/mahabah.jpg",
  perangSuci: "/assets/perangsuci.jpg",
  sangNabi: "/assets/sangnabi.jpg",
  logo: "/assets/font-logo.png",
  stageBg: "/assets/wayang-stage-bg.jpg",
};

export const whatsappNumber = "6281314553169";
export const whatsappText = "Halo Majelis Seni Nyawiji, saya ingin berkonsultasi untuk mengundang pertunjukan Wayang Santri...";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
export const gallerySheetCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvYKRCqoprdPkhmNfmF6h7uKh628SrXS5g0b6fA0Tv0i3fc41p-MAFWzLMO7LTdzigaKzHfYShTSNp/pub?gid=1092339592&single=true&output=csv";

export const profileCardAudio = [
  "/audio/wayang.mp3",
  "/audio/dalang.mp3",
  "/audio/penayagan.mp3",
  "/audio/shalawat.mp3",
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Profil", href: "#profil" },
  { label: "Struktur", href: "#struktur" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export const photos = [
  { src: assets.mahabah, title: "Mahabah", desc: "Mahabbah, Musikalisasi Barzanji & Wayang Santri pertama kali dipentaskan lewat dukungan program Fasilitasi Pemajuan Kebudayaan yang diselenggarakan oleh Balai Pelestarian Kebudayaan (BPK) Wilayah X Yogya-Jateng 2024." },
  { src: assets.perangSuci, title: "Perang Suci", desc: "Perang Suci, Kisah Resolusi Jihad mengangkat gelora perjuangan para santri saat turun ke jalan dalam upaya mempertahankan kemerdekaan Indonesia pada periode Revolusi Fisik 1945 melawan tentara Belanda. Pementasan yang memadukan permainan wayang dan adegan pertarungan silat ini bagian dari peringatan Hari Santri Nasional 2024 yang di diselenggarakan oleh Majelis Wakil Cabang Nahdlatul Ulama (MWCNU) Kecamatan Bantarsari di Lapangan Asem Bantarsari, Kabupaten Cilacap, Jawa Tengah." },
  { src: assets.sangNabi, title: "Sang Nabi", desc: "Sang Nabi, Musikalisasi Barzanji & Wayang Santri bagian dari program Penciptaan Karya Kreatif Inovatif (PKKI) dukungan pendanaan Danaindonesiaraya dari Kementerian Kebudayaan Republik Indonesia. Karya ini bertumpu pada penyaduran kitab Iqd al-Jawahir (Kalung Permata) karya Syekh Ja'far bin Husin bin Abdul Karim Al-Barzanji, menjadi dialog sejumlah tokoh wayang yang dimainkan dalang untuk mengisahkan riwayat hidup Nabi Muhammad SAW." },
];
export const publications = [
  {
    no: "01",
    title: "Musikalisasi Wayang Barzanji, Hadirkan Kisah Nabi dalam Balutan Seni Tradisi",
    media: "RCTI+",
    link: "https://www.rctiplus.com/news/detail/terkini/4527384/musikalisasi-wayang-barzanji-hadirkan-kisah-nabi-dalam-balutan-seni-tradisi",
  },
  {
    no: "02",
    title: "Kisah Nabi Muhammad dalam Balutan Seni Tradisi: Musikalisasi Wayang Barzanji",
    media: "Sejuk",
    link: "https://sejuk.org/2024/09/23/kisah-nabi-muhammad-dalam-balutan-seni-tradisi-musikalisasi-wayang-barzanji/",
  },
  {
    no: "03",
    title: "Angkat Lakon Resolusi Jihad, Kolaborasi Wayang Santri dan Pencak Silat Warnai Peringatan Hari Santri di Cilacap",
    media: "Liputan6.com",
    link: "https://www.liputan6.com/islami/read/5756519/angkat-lakon-resolusi-jihad-kolaborasi-wayang-santri-dan-pencak-silat-warnai-peringatan-hari-santri-di-cilacap",
  },
  {
    no: "04",
    title: "Pementasan Wayang Warnai Peringatan Hari Santri di Cilacap",
    media: "Media Indonesia",
    link: "https://mediaindonesia.com/humaniora/711092/pementasan-wayang-warnai-peringatan-hari-santri-di-cilacap",
  },
];
export const bookingEvents = [
  "Pernikahan & resepsi keluarga",
  "Festival budaya dan hari jadi daerah",
  "Pengajian, haul, maulid, dan acara pesantren",
  "Agenda sekolah, kampus, komunitas, dan lembaga",
];

export const organizationPhotos = {
  ketua: "/assets/ketua.jpg",
  wakilKetua: "/assets/wakilketua.jpg",
};

export const organizationLeaders = [
  { name: "Abdul Aziz Rasjid", role: "Ketua Majelis", photo: organizationPhotos.ketua || assets.santri, note: "Penanggung jawab arah gerak, kemitraan, dan keputusan utama majelis." },
  { name: "Muhammad Kharis", role: "Wakil Ketua", photo: organizationPhotos.wakilKetua || assets.kitab, note: "Mendampingi koordinasi program, agenda pentas, dan komunikasi lintas tim." },
];

export const socialMedia = [
  { platform: "TikTok", handle: "@majelisseninyawiji", href: "https://www.tiktok.com/@majelisseninyawiji?_r=1&_t=ZS-96lHyXpfWsv" },
  { platform: "Instagram", handle: "@majelis.seni.nyawiji", href: "https://www.instagram.com/majelis.seni.nyawiji?igsh=dXlzd2M0ajZxYm0w" },
  { platform: "YouTube", handle: "@majelisseninyawiji", href: "https://youtube.com/@majelisseninyawiji?si=V1kFksD1UwMcJduW" },
];

export const performanceMemberPhotos = {
  ahmadNafisJauhari: "/assets/dalang.jpg",
  fathulMungin: "/assets/barzanji.jpg",
  danisSaputra: "/assets/hadroh.jpg",
  cahwati: "/assets/sinden.jpg",
};

export const performanceMembers = [
  { name: "Dalang", role: "Ahmad Nafis Jauhari", group: "Pakeliran", photo: performanceMemberPhotos.ahmadNafisJauhari || assets.gunungan, imagePosition: "object-[center_18%]" },
  { name: "Hadroh", role: "Tim Hadroh Saljul Qulub", group: "Hadrah", photo: performanceMemberPhotos.danisSaputra || assets.rebana },
  { name: "Barzanji", role: "Tim Barzanji Nyawiji", group: "Barzanji", photo: performanceMemberPhotos.fathulMungin || assets.santri },
  { name: "Sinden", role: "Tim Sinden Nyawiji", group: "Vokal", photo: performanceMemberPhotos.cahwati || assets.kitab },
];
