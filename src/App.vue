<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/agama">Agama</router-link> |
      <router-link to="/alatTransfortasi">Alat Transfortasi</router-link> |
      <router-link to="/bentukPendidikan">Bentuk Pendidikan</router-link> |
      <router-link to="/evaluasi">Evaluasi</router-link> |
      <router-link to="/golongan">golongan</router-link> |
      <router-link to="/ikatanKerja">ikatan kerja</router-link > |
      <router-link to="/jafung">jafung</router-link> |
      <router-link to="/jalurMasuk">jalur masuk</router-link> |
      <router-link to="/jenisAktivitasMahasiswa">jenis aktivitas mahasiswa</router-link> |
      <router-link to="/jenisKeluar">jenis keluar</router-link> |
      <router-link to="/jenisMk">jenis MK</router-link> |
      <router-link to="/jenisPrestasi">jenis prestasi</router-link> |
      <router-link to="/jenisSubtansi">jenis subtansi</router-link> |
      <router-link to="/jenisTinggal">jenis tinggal</router-link> |
      <router-link to="/kategoriKegiatan">kategori kegiatan</router-link> |
      <router-link to="/kebutuhanKhusus">kebutuhan khusus</router-link> |
      <router-link to="/kelompokMk">kelompok mk</router-link> |
      <router-link to="/lembagaPengangkat">lembaga pengangkat</router-link> |
      <router-link to="/levelWilayah">level wilayah</router-link> |
      <router-link to="/mhsDaftar">mhs daftar</router-link> |
      <router-link to="/mhsStatus">mhs status</router-link> |
      <router-link to="/negara">negara</router-link> |
      <router-link to="/pekerjaan">pekerjan</router-link> |
      <router-link to="/pembiayaan">pembiayaan</router-link> |
      <router-link to="/pendidikan">pendidikan</router-link> |
      <router-link to="/penghasilan">penghasilan</router-link> |
      <router-link to="/perguruanTinggi">perguruan tinggi</router-link> |
      <router-link to="/sertifikasi">sertifikasi</router-link> |
      <router-link to="/sms">sms</router-link> |
      <router-link to="/statusAktif">status aktif</router-link> |
      <router-link to="/statusPegawai">status pegawai</router-link> |
      <router-link to="/substansi">substansi</router-link> |
      <router-link to="/tingkatPrestasi">tingkat prestasi</router-link> |
      <router-link to="/wilayah">wilayah</router-link> |

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
