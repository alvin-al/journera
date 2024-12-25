import prisma from "@/lib/prisma";

async function main() {
  const newPackage = await prisma.package.createMany({
    data: [
      {
        description:
          "Kalau kamu pengen merasakan nuansa kerajaan yang kental, Kraton Jogja adalah tempat yang wajib kamu kunjungi. Di sini, kamu bisa melihat langsung bagaimana kehidupan keraton yang masih terjaga hingga kini. Arsitektur bangunan yang megah dan penuh sejarah bikin kamu serasa melangkah ke masa lampau. Jangan lewatkan pertunjukan seni tradisional yang sering diadakan di sini, jadi kamu bisa lebih mengenal budaya Jogja secara langsung. Pastinya, ini bakal jadi pengalaman yang berkesan! Setelah puas berkeliling Kraton, lanjutkan petualanganmu ke Tamansari, bekas taman kerajaan yang dulunya tempat bersantai para sultan. Tempat ini punya kolam pemandian yang cantik dan lorong-lorong bawah tanah yang misterius. Cocok banget buat kamu yang suka eksplor tempat bersejarah dengan spot foto yang Instagramable. Selesai dari Tamansari, jangan lupa mampir ke Kotagede, kawasan yang dikenal dengan kerajinan perak. Di sini, kamu bisa melihat langsung proses pembuatan perhiasan perak dan belanja oleh-oleh unik. Buat yang suka sejarah, Museum Sonobudoyo juga layak dikunjungi karena koleksi artefaknya yang lengkap dan informatif. Dan tentu saja, sebelum pulang, sempatkan diri ke Pusat Oleh-Oleh untuk beli bakpia atau gudeg kalengan buat keluarga di rumah.",
        featuredImage:
          "https://journera.s3.ap-southeast-2.amazonaws.com/photos/Journera+Heritage.webp",
        itinerary: [
          "Kraton Jogja",
          "Tamansari",
          "Wisata Kotagede",
          "Museum Sonobudoyo",
          "Pusat Oleh Oleh",
        ],
        name: "Journera Heritage",
        slug: "journera-heritage",
        originalPrice: 550000,
        price: 500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description:
          "Kalau kamu lagi di Jogja, nggak lengkap rasanya kalau belum mampir ke Candi Borobudur. Candi Buddha terbesar di dunia ini menawarkan pemandangan yang spektakuler, terutama saat matahari terbit. Kamu bisa jalan-jalan sambil menikmati relief yang penuh cerita sejarah dan filosofi. Jangan lupa bawa kamera, karena setiap sudut di sini layak diabadikan. Selain itu, suasana tenang dan damai bikin tempat ini cocok banget buat melepas penat sekaligus menambah wawasan. Setelah puas menikmati keindahan Borobudur, saatnya beralih ke petualangan seru di Lava Tour Merapi. Naik jeep menyusuri jalur bekas letusan Gunung Merapi, kamu bakal diajak melihat sisa-sisa erupsi yang mengesankan. Kalau masih pengen eksplor lebih jauh, mampir ke Lost World Castle yang punya spot foto unik dengan latar pemandangan Merapi. Atau, kalau kamu suka tempat yang lebih santai, Bhumi Merapi bisa jadi pilihan dengan taman dan kebun binatang mini yang cocok buat keluarga. Sebelum pulang, jangan lupa mampir ke Pusat Oleh-Oleh buat beli camilan khas Jogja sebagai kenang-kenangan.",
        featuredImage:
          "https://journera.s3.ap-southeast-2.amazonaws.com/photos/Journera+Utara.webp",
        itinerary: [
          "Candi Borobudur",
          "Lava Tour Merapi",
          "Lost World Castle",
          "Bhumi Merapi",
          "Pusat Oleh-oleh",
        ],
        name: "Journera Utara",
        slug: "journera-utara",
        originalPrice: 650000,
        price: 600000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description:
          "Kalau kamu pengen menikmati suasana pantai yang ikonik di Jogja, Pantai Parangtritis adalah jawabannya. Pantai ini terkenal dengan ombaknya yang besar dan pemandangan sunset yang memukau. Kamu bisa jalan-jalan santai di sepanjang pantai atau coba aktivitas seru seperti naik ATV dan bermain layang-layang. Suasana di sini juga makin syahdu dengan cerita-cerita mistis yang bikin penasaran. Pastikan kamu bawa kamera, karena momen matahari terbenam di Parangtritis nggak boleh terlewatkan! Setelah menikmati Parangtritis, lanjutkan petualanganmu ke Pantai Goa Cemara yang menawarkan suasana lebih tenang dengan deretan pohon cemara yang unik. Dekat dari situ, kamu bisa mampir ke Gumuk Pasir untuk merasakan sensasi ala gurun pasir. Seru banget buat sandboarding atau sekadar foto-foto. Kalau pengen tempat yang lebih modern, Obelix Seaview bisa jadi pilihan dengan pemandangan laut yang menawan dari ketinggian. Sebelum pulang, jangan lupa mampir ke Pusat Oleh-Oleh untuk beli camilan khas Jogja buat oleh-oleh. Dari bakpia sampai kerajinan tangan, semuanya bisa kamu temukan di sini.",
        featuredImage:
          "https://journera.s3.ap-southeast-2.amazonaws.com/photos/Journera+Selatan.webp",
        itinerary: [
          "Pantai Parangtritis",
          "Pantai Goa Cemara",
          "Gumuk Pasir",
          "Obelix Seaview",
          "Pusat Oleh-oleh",
        ],
        name: "Journera Selatan",
        originalPrice: 650000,
        slug: "journera-selatan",
        price: 600000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description:
          "Kalau kamu suka dengan sejarah dan arsitektur megah, Candi Prambanan adalah destinasi yang wajib kamu kunjungi. Candi Hindu terbesar di Indonesia ini menawarkan keindahan relief dan bangunan yang bikin takjub. Kamu bisa menikmati suasana magis saat matahari terbenam, di mana candi ini tampak semakin mempesona. Jangan lupa cek jadwal pertunjukan Sendratari Ramayana yang sering diadakan di sini, karena itu adalah pengalaman budaya yang nggak boleh dilewatkan! Setelah puas menjelajah Prambanan, lanjutkan perjalananmu ke Tebing Breksi yang menawarkan pemandangan alam yang menakjubkan dari ketinggian. Tempat ini punya ukiran batu yang keren dan spot foto yang Instagramable. Kalau masih pengen menikmati view dari atas, Heha Skyview menawarkan suasana modern dengan berbagai spot foto unik dan kafe yang cozy. Buat yang suka suasana alam, Hutan Pinus Pengger bisa jadi pilihan dengan suasana teduh dan instalasi seni yang menarik. Sebelum pulang, jangan lupa mampir ke Pusat Oleh-Oleh untuk beli camilan dan kerajinan khas Jogja buat dibawa pulang.",
        featuredImage:
          "https://journera.s3.ap-southeast-2.amazonaws.com/photos/Journera+Timur.webp",
        itinerary: [
          "Candi Prambanan",
          "Tebing Breksi",
          "Heha Skyview",
          "Hutan Pinus Pengger",
          "Pusat Oleh-oleh",
        ],
        name: "Journera Timur",
        slug: "journera-timur",
        originalPrice: 650000,
        price: 600000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description:
          "Kalau kamu suka petualangan dengan pemandangan alam yang memukau, Kalibiru adalah tempat yang harus kamu kunjungi. Terletak di perbukitan Menoreh, Kalibiru menawarkan pemandangan hijau yang asri dan spot foto di atas pohon yang bikin deg-degan tapi seru. Cocok banget buat kamu yang suka tantangan dan pengen mengabadikan momen dengan latar belakang alam yang spektakuler. Selain itu, suasana sejuk dan segar di sini bikin kamu betah berlama-lama. Setelah puas di Kalibiru, lanjutkan perjalananmu ke Studio Gamplong, yang dikenal sebagai mini Hollywood-nya Jogja. Di sini, kamu bisa melihat langsung set-set film yang sering dipakai untuk produksi film Indonesia. Seru banget buat foto-foto sambil belajar sedikit tentang dunia perfilman. Dekat dari situ, Waduk Sermo menawarkan pemandangan danau yang tenang, cocok buat piknik santai. Kalau masih pengen eksplor, Bukit Pulepayung punya spot foto dengan view Waduk Sermo dari ketinggian. Sebelum pulang, jangan lupa mampir ke Pusat Oleh-Oleh untuk beli camilan khas Jogja buat oleh-oleh keluarga di rumah.",
        featuredImage:
          "https://journera.s3.ap-southeast-2.amazonaws.com/photos/Journera+Barat.webp",
        itinerary: [
          "Kalibiru",
          "Studio Gamplong",
          "Waduk Sermo",
          "Bukit Pulepayung",
          "Pusat Oleh Oleh",
        ],
        name: "Journera Barat",
        slug: "journera-barat",
        originalPrice: 700000,
        price: 650000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description:
          "Kalau kamu suka petualangan yang memacu adrenalin, Lava Tour Merapi adalah pilihan yang pas. Naik jeep menyusuri jalur bekas letusan Gunung Merapi, kamu bakal diajak melihat sisa-sisa erupsi yang mengesankan. Selain pemandangan yang dramatis, kamu juga bisa belajar banyak tentang sejarah dan dampak dari salah satu gunung berapi paling aktif di dunia ini. Rasakan sensasi seru dan menantang sambil menikmati udara pegunungan yang segar. Setelah puas dengan petualangan di Merapi, coba deh mampir ke Goa Pindul untuk pengalaman yang lebih santai tapi tetap seru. Di sini, kamu bisa menyusuri sungai bawah tanah dengan tubing, menikmati stalaktit dan stalagmit yang menakjubkan. Kalau masih ingin eksplorasi, Tebing Breksi menawarkan pemandangan alam yang menakjubkan dengan ukiran batu yang keren. Jangan lupa mampir ke Candi Prambanan untuk menikmati keindahan arsitektur dan sejarah yang kaya. Sebelum pulang, pastikan kamu mampir ke Pusat Oleh-Oleh untuk beli camilan dan kerajinan khas Jogja sebagai kenang-kenangan.",
        featuredImage:
          "https://journera.s3.ap-southeast-2.amazonaws.com/photos/Journera+Adventure+1.webp",
        itinerary: [
          "Lava Tour Merapi",
          "Goa Pindul",
          "Tebing Breksi",
          "Candi Prambanan",
          "Pusat Oleh Oleh",
        ],
        name: "Journera Adventure 1",
        slug: "journera-adventure-1",
        originalPrice: 750000,
        price: 700000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description:
          "Kalau kamu lagi nyari tempat yang bisa bikin pikiran fresh, Hutan Pinus Mangunan adalah jawabannya. Dengan deretan pohon pinus yang menjulang tinggi, tempat ini menawarkan suasana teduh dan sejuk yang bikin kamu betah berlama-lama. Ada banyak spot foto keren di sini, jadi pastikan kamera kamu siap menangkap momen. Cocok banget buat kamu yang pengen kabur sejenak dari hiruk pikuk kota dan menikmati ketenangan alam. Setelah menikmati keteduhan hutan, lanjutkan perjalananmu ke Heha Ocean View yang menawarkan pemandangan laut yang menakjubkan dari ketinggian. Tempat ini punya berbagai spot foto unik dan kafe yang cozy buat santai. Kalau pengen main ke pantai, Pantai Mesra dan Pantai Indrayanti bisa jadi pilihan yang sempurna. Pantai Mesra menawarkan suasana yang lebih tenang, sementara Pantai Indrayanti terkenal dengan pasir putihnya yang cantik dan fasilitas yang lengkap. Sebelum pulang, jangan lupa mampir ke Pusat Oleh-Oleh untuk beli camilan khas Jogja dan kerajinan tangan buat oleh-oleh keluarga di rumah.",
        featuredImage:
          "https://journera.s3.ap-southeast-2.amazonaws.com/photos/Journera+Adventure+2.webp",
        itinerary: [
          "Hutan Pinus Mangunan",
          "Heha Ocean View",
          "Pantai Mesra",
          "Pantai Indrayanti",
          "Pusat Oleh Oleh",
        ],
        name: "Journera Adventure 2",
        slug: "journera-adventure-2",
        originalPrice: 800000,
        price: 750000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description:
          "Kalau kamu suka suasana alam yang tenang dan asri, Hutan Pinus Pengger bisa jadi destinasi yang pas buat kamu. Dengan deretan pohon pinus yang menjulang tinggi, tempat ini menawarkan udara segar dan spot foto yang unik, terutama saat malam hari ketika instalasi seni di sini menyala. Cocok banget buat kamu yang pengen menikmati alam sambil tetap eksis di media sosial. Suasana yang damai dan sejuk bikin tempat ini jadi pilihan tepat buat melepas penat. Setelah menikmati keteduhan hutan, coba deh tantangan di Goa Kalisuci dengan cave tubing-nya yang seru. Kamu bisa menyusuri sungai bawah tanah dengan ban, menikmati keindahan stalaktit dan stalagmit yang menakjubkan. Kalau pengen menikmati deburan ombak, Pantai Timang menawarkan sensasi menyeberang dengan gondola tradisional yang menantang adrenalin. Sementara itu, Pantai Sadranan cocok buat snorkeling dengan pemandangan bawah laut yang memukau. Sebelum pulang, pastikan mampir ke Pusat Oleh-Oleh untuk beli camilan khas Jogja dan kerajinan tangan sebagai kenang-kenangan.",
        featuredImage: "",
        itinerary: [
          "Hutan Pinus Pengger",
          "Goa Kalisuci",
          "Pantai Timang",
          "Pantai Sadranan",
          "Pusat Oleh Oleh",
        ],
        name: "Journera Adventure 3",
        slug: "journera-adventure-3",
        originalPrice: 900000,
        price: 850000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });
}

main();
