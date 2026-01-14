export default function Profile() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO PROFILE */}
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Profil Yayasan Al Muttaqiin Taki Niode
          </h1>
          <p className="max-w-3xl mx-auto text-green-100 text-lg">
            Lembaga Pendidikan Islam Berbasis Tahfidz Al-Qur’an
          </p>
        </div>
      </section>

      {/* KONTEN UTAMA */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Pondok Pesantren Tahfidzul Qur’an Al-Muttaqiin Taki Niode Kota
            Gorontalo merupakan lembaga pendidikan Islam yang berada di bawah
            naungan Yayasan Al-Muttaqiin Taki Niode. Yayasan ini didirikan pada
            20 Oktober 2010 oleh putra daerah Gorontalo, yaitu Bapak H. Rolan
            Niode dan Bapak H. Pulu Niode, yang merupakan putra dari Alm. Bapak
            Taki Niode, mantan Wali Kota Gorontalo pada masanya.
          </p>

          <p>
            Yayasan Al-Muttaqiin Taki Niode bergerak dalam beberapa bidang,
            yaitu tahfidz Al-Qur’an, pendidikan, panti asuhan, serta kegiatan
            sosial kemasyarakatan. Secara khusus, Pondok Pesantren Tahfidzul
            Qur’an Al-Muttaqiin Taki Niode memfokuskan kegiatan pendidikannya
            pada pengkajian dan penghafalan Al-Qur’an (tahfidzul Qur’an) sebagai
            program utama, disertai dengan pembinaan akhlak, keilmuan, dan
            karakter Islami santri.
          </p>

          <p>
            Pendirian lembaga ini dilatarbelakangi oleh keprihatinan para
            pendiri terhadap kondisi keagamaan di Provinsi Gorontalo yang
            dikenal dengan julukan “Serambi Madinah”, namun pada masa itu masih
            minim lembaga pendidikan Islam yang berbasis Al-Qur’an, khususnya
            yang menjadikan tahfidz Al-Qur’an sebagai program unggulan. Oleh
            karena itu, Yayasan Al-Muttaqiin Taki Niode dan Pondok Pesantren
            Tahfidzul Qur’an Al-Muttaqiin Taki Niode menjadi salah satu pelopor
            pondok pesantren tahfidz Al-Qur’an di Provinsi Gorontalo.
          </p>

          <p>
            Seiring berjalannya waktu, Pondok Pesantren Tahfidzul Qur’an
            Al-Muttaqiin Taki Niode mengalami perkembangan yang sangat pesat,
            baik dari segi jumlah santri maupun dari prestasi yang diraih oleh
            para santri penghafal Al-Qur’an di tingkat kabupaten, provinsi,
            hingga nasional. Selain itu, yayasan juga aktif melaksanakan program
            panti asuhan bagi anak yatim dan dhuafa, serta berbagai kegiatan
            sosial kemasyarakatan sebagai bentuk kepedulian dan pengabdian
            kepada masyarakat.
          </p>

          <p>
            Dalam pelaksanaan pendidikannya, Pondok Pesantren Tahfidzul Qur’an
            Al-Muttaqiin Taki Niode membatasi jumlah santri sebanyak 30 orang
            setiap angkatan. Setiap angkatan memiliki masa pendidikan selama dua
            tahun, dengan target santri mampu menyelesaikan hafalan Al-Qur’an 30
            juz. Meskipun jumlah santri dibatasi, animo masyarakat untuk
            memondokkan putra-putrinya sangat tinggi, yang ditandai dengan
            banyaknya calon santri yang mendaftar meskipun kuota telah
            terpenuhi.
          </p>

          <div className="bg-white border-l-4 border-green-600 p-5 italic rounded shadow">
            “Sesungguhnya Al-Qur’an ini memberi petunjuk kepada (jalan) yang
            paling lurus.”
            <br />
            <span className="not-italic font-semibold">(QS. Al-Isra’: 9)</span>
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Visi</h2>
            <p className="text-gray-700">
              Menjadi lembaga pendidikan Islam yang unggul dalam pembinaan dan
              penghafalan Al-Qur’an serta pembentukan generasi Qur’ani yang
              berakhlak mulia.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Misi</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Menyelenggarakan pendidikan tahfidz Al-Qur’an secara terarah,
                disiplin, dan berkelanjutan.
              </li>
              <li>
                Membina santri dalam pengamalan nilai-nilai Al-Qur’an, akhlak,
                dan kedisiplinan ibadah.
              </li>
              <li>
                Mengembangkan sistem pendidikan pesantren yang berkualitas dan
                berorientasi pada pembinaan karakter Islami.
              </li>
              <li>
                Berperan aktif dalam penguatan pendidikan keagamaan di
                masyarakat.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
