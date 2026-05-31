export const assets = {
  gunungan: "/assets/gunungan-1.png",
  lineGunungan: "/assets/line-art-gunungan.png",
  santri: "/assets/santri-jejer.png",
  poster: "/assets/poster-mahabbah.png",
  rebana: "/assets/penabuh-rebana.png",
  kitab: "/assets/pembaca-kitab.png",
  dokumentasi: "/assets/dokumentasi-pertunjukan.png",
  dokumentasiFoto: "/assets/dokumentasi-1.jpg",
  logo: "/assets/font-logo.png",
  stageBg: "/assets/wayang-stage-bg.jpg",
};

export const whatsappNumber = "6281314553169";
export const whatsappText = "Halo Majelis Seni Nyawiji, saya ingin berkonsultasi untuk mengundang pertunjukan Wayang Santri...";
export const whatsappUrl = "https://wa.me/6281314553169";
export const gallerySheetCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvYKRCqoprdPkhmNfmF6h7uKh628SrXS5g0b6fA0Tv0i3fc41p-MAFWzLMO7LTdzigaKzHfYShTSNp/pub?gid=1092339592&single=true&output=csv";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Profil", href: "#profil" },
  { label: "Struktur", href: "#struktur" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export const photos = [
  { src: assets.dokumentasiFoto, title: "Mahabah", desc: "Suasana pementasan dan perjumpaan budaya." },
  { src: assets.poster, title: "Perang Suci", desc: "Materi visual untuk agenda seni dan dakwah." },
  { src: assets.santri, title: "Sang Nabi", desc: "Karakter visual bernuansa pesantren." },
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
  ketua: "/assets/rafi.jpg",
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
  abdulAzizRasjid: "/assets/rafi.jpg",
  ahmadNafisJauhari: "/assets/dalang.jpg",
  fathulMungin: "/assets/barzanji.jpg",
  muhammadKharis: "/assets/rafi.jpg",
  zaenalMaarif: "/assets/rafi.jpg",
  muhtadir: "/assets/rafi.jpg",
  marpuji: "/assets/rafi.jpg",
  danisSaputra: "/assets/hadroh.jpg",
  devaSuryaSaputra: "/assets/rafi.jpg",
  diasSaputra: "/assets/rafi.jpg",
  chaerulAnas: "/assets/rafi.jpg",
  zuhrulAnam: "/assets/rafi.jpg",
  cahwati: "/assets/sinden.jpg",
  mHarsyaPambudi: "/assets/rafi.jpg",
};

export const performanceMembers = [
  { name: "Dalang", role: "Ahmad Nafis Jauhari", group: "Pakeliran", photo: performanceMemberPhotos.ahmadNafisJauhari || assets.gunungan },
  { name: "Hadroh", role: "Tim Hadroh", group: "Hadrah", photo: performanceMemberPhotos.danisSaputra || assets.rebana },
  { name: "Barzanji", role: "Tim Barzanji", group: "Barzanji", photo: performanceMemberPhotos.fathulMungin || assets.santri },
  { name: "Sinden", role: "Cahwati", group: "Vokal", photo: performanceMemberPhotos.cahwati || assets.kitab },
];





