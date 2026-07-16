# Teona Hotel Web Sitesi

Teona Hotel'in çok dilli kurumsal web sitesi. Uygulama Next.js App Router, React,
Tailwind CSS ve `next-intl` ile hazırlanmıştır.

## Yerel geliştirme

```bash
npm install --prefix client
npm run dev
```

Site varsayılan olarak `http://localhost:3000/tr` adresinde açılır. Üretim kontrolü:

```bash
npm run build
npm run start
```

## Ortam değişkenleri

İletişim formu için `client/.env.local` oluşturup `client/.env.example` içindeki SMTP
değerlerini doldurun. Ortam değişkenleri olmadan site çalışır; yalnızca form gönderimi
devre dışı kalır.

## İçerik ve görseller

- Otel bilgileri `client/lib/site.js` ve `client/messages/*.json` dosyalarında tutulur.
- Web için hazırlanmış marka varlıkları `client/public/teona/` altındadır.
- Mevcut görseller Teona Hotel tanıtım PDF'sinden alınmıştır. Gerçek tesis çekimleri
  temin edildiğinde aynı dosya adları korunarak kolayca güncellenebilir.
- Oda kaynağı: 42 standart oda (15-20 m²) ve 2 süit oda (25 m²), toplam 44 oda.

## Desteklenen diller

Türkçe (`tr`), İngilizce (`en`), Almanca (`de`) ve Rusça (`ru`).
