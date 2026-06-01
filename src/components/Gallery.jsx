import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Newspaper } from "lucide-react";
import { gallerySheetCsvUrl, photos, publications } from "../data/siteData";

function parseCsv(csvText) {
  const rows = [];
  let currentRow = [];
  let currentValue = "";
  let insideQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index];
    const nextChar = csvText[index + 1];

    if (char === '"' && nextChar === '"') {
      currentValue += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      currentRow.push(currentValue);
      currentValue = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") index += 1;
      currentRow.push(currentValue);
      rows.push(currentRow);
      currentRow = [];
      currentValue = "";
    } else {
      currentValue += char;
    }
  }

  if (currentValue || currentRow.length) {
    currentRow.push(currentValue);
    rows.push(currentRow);
  }

  const [headers = [], ...dataRows] = rows;
  return dataRows.map((row) => {
    return headers.reduce((item, header, index) => {
      item[header.trim()] = (row[index] || "").trim();
      return item;
    }, {});
  });
}

function isActiveRow(row) {
  return row.isActive === "" || row.isActive.toLowerCase() === "true";
}

function isPlaceholderUrl(url) {
  return url.includes("contoh.com");
}

function getSheetItems(rows) {
  const activeRows = rows.filter(isActiveRow);
  const sheetPhotos = activeRows
    .filter((row) => row.type.toLowerCase() === "dokumentasi")
    .filter((row) => row.title && row.description && row.imageUrl && !isPlaceholderUrl(row.imageUrl))
    .map((row) => ({
      src: row.imageUrl,
      title: row.title,
      desc: row.description,
      sortOrder: Number(row.sortOrder) || 999,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const sheetPublications = activeRows
    .filter((row) => row.type.toLowerCase() === "liputan")
    .filter((row) => row.title && row.media && row.link && !isPlaceholderUrl(row.link))
    .map((row) => ({
      title: row.title,
      media: row.media,
      link: row.link,
      sortOrder: Number(row.sortOrder) || 999,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return { sheetPhotos, sheetPublications };
}

export default function Gallery({ copy }) {
  const [sheetRows, setSheetRows] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch(gallerySheetCsvUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Gagal membaca Google Sheets.");
        return response.text();
      })
      .then((csvText) => {
        if (isMounted) setSheetRows(parseCsv(csvText));
      })
      .catch(() => {
        if (isMounted) setSheetRows([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const { sheetPhotos, sheetPublications } = useMemo(() => getSheetItems(sheetRows), [sheetRows]);
  const localizedPhotos = useMemo(() => photos.map((photo, index) => ({
    ...photo,
    title: copy.photos[index]?.[0] || photo.title,
    desc: copy.photos[index]?.[1] || photo.desc,
  })), [copy]);
  const galleryPhotos = useMemo(() => [...localizedPhotos, ...sheetPhotos].slice(0, 3), [localizedPhotos, sheetPhotos]);
  const galleryPublications = useMemo(() => {
    return [...publications, ...sheetPublications].map((item, index) => ({
      ...item,
      no: String(index + 1).padStart(2, "0"),
    }));
  }, [sheetPublications]);

  return (
    <section id="galeri" className="section-shell">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/35" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div>
            <p className="section-kicker">{copy.gallery.kicker}</p>
            <h2 className="section-title mx-auto max-w-none sm:whitespace-nowrap">{copy.gallery.title}</h2>
          </div>
          <div className="mt-6 h-px w-28 bg-gold/55 shadow-gold" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((photo, index) => (
            <article key={`${photo.title}-${index}`} className="group luxury-card flex h-full flex-col overflow-hidden rounded-[1.5rem] transition duration-500 hover:border-gold/55" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden bg-moss/60">
                <img src={photo.src} alt={photo.title} className="relative h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/18 via-transparent to-bone/5" />
              </div>
              <div className="flex flex-1 flex-col border-t border-gold/15 p-6">
                <h3 className="font-display text-xl font-bold text-bone">{photo.title}</h3>
                <p className="mt-2 text-sm leading-6 text-bone/60">{photo.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="premium-frame mt-20 overflow-hidden rounded-[1.75rem] p-5 sm:p-7">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">{copy.gallery.publicationKicker}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-bone sm:text-3xl">{copy.gallery.publicationTitle}</h3>
            </div>
            <p className="max-w-md text-sm leading-7 text-bone/58">
              {copy.gallery.publicationBody}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {galleryPublications.map((item) => (
              <article key={`${item.no}-${item.title}`} className="group luxury-card flex h-full flex-col rounded-[1.25rem] p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/25 bg-night/70 text-gold shadow-gold">{item.no}</span>
                  <div className="rounded-2xl border border-gold/15 bg-night/45 px-4 py-3 text-right text-gold">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-bone/45">{copy.common.media}</p>
                    <p className="mt-1 text-lg font-bold">{item.media}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="mb-2 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-teal">
                    <Newspaper size={16} />
                    {copy.common.publication}
                  </p>
                  <h4 className="font-display text-xl font-bold leading-snug text-bone">{item.title}</h4>
                </div>
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-teal/45 bg-teal/10 px-5 py-3 text-sm font-bold text-teal transition hover:bg-teal hover:text-night">
                  {copy.common.readNews}
                  <ExternalLink size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
