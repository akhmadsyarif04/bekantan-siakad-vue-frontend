import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agama',
    name: 'agama',
    component: () => import('../views/agama.vue')
  },
  {
    path: '/alatTransfortasi',
    name: 'alatTransfortasi',
    component: () => import('../views/alatTransfortasi.vue')
  },
  {
    path: '/bentukPendidikan',
    name: 'bentukPendidikan',
    component: () => import('../views/bentukPendidikan.vue')
  },
  {
    path: '/evaluasi',
    name: 'evaluasi',
    component: () => import('../views/evaluasi.vue')
  },
  {
    path: '/golongan',
    name: 'golongan',
    component: () => import('../views/golongan.vue')
  },
  {
    path: '/ikatanKerja',
    name: 'ikatanKerja',
    component: () => import('../views/ikatanKerja.vue')
  },
  {
    path: '/jafung',
    name: 'jafung',
    component: () => import('../views/jafung.vue')
  },
  {
    path: '/jalurMasuk',
    name: 'jalurMasuk',
    component: () => import('../views/jalurMasuk.vue')
  },
  {
    path: '/jenisAktivitasMahasiswa',
    name: 'jenisAktivitasMahasiswa',
    component: () => import('../views/jenisAktivitasMahasiswa.vue')
  },
  {
    path: '/jenisKeluar',
    name: 'jenisKeluar',
    component: () => import('../views/jenisKeluar.vue')
  },
  {
    path: '/jenisMk',
    name: 'jenisMk',
    component: () => import('../views/jenisMk.vue')
  },
  {
    path: '/jenisPrestasi',
    name: 'jenisPrestasi',
    component: () => import('../views/jenisPrestasi.vue')
  },
  {
    path: '/jenisSubtansi',
    name: 'jenisSubtansi',
    component: () => import('../views/jenisSubtansi.vue')
  },
  {
    path: '/jenisTinggal',
    name: 'jenisTinggal',
    component: () => import('../views/jenisTinggal.vue')
  },
  {
    path: '/kategoriKegiatan',
    name: 'kategoriKegiatan',
    component: () => import('../views/kategoriKegiatan.vue')
  },
  {
    path: '/kebutuhanKhusus',
    name: 'kebutuhanKhusus',
    component: () => import('../views/kebutuhanKhusus.vue')
  },
  {
    path: '/kelompokMk',
    name: 'kelompokMk',
    component: () => import('../views/kelompokMk.vue')
  },
  {
    path: '/lembagaPengangkat',
    name: 'lembagaPengangkat',
    component: () => import('../views/lembagaPengangkat.vue')
  },
  {
    path: '/levelWilayah',
    name: 'levelWilayah',
    component: () => import('../views/levelWilayah.vue')
  },
  {
    path: '/mhsDaftar',
    name: 'mhsDaftar',
    component: () => import('../views/mhsDaftar.vue')
  },
  {
    path: '/mhsStatus',
    name: 'mhsStatus',
    component: () => import('../views/mhsStatus.vue')
  },
  {
    path: '/negara',
    name: 'negara',
    component: () => import('../views/negara.vue')
  },
  {
    path: '/pekerjaan',
    name: 'pekerjaan',
    component: () => import('../views/pekerjaan.vue')
  },
  {
    path: '/pembiayaan',
    name: 'pembiayaan',
    component: () => import('../views/pembiayaan.vue')
  },
  {
    path: '/pendidikan',
    name: 'pendidikan',
    component: () => import('../views/pendidikan.vue')
  },
  {
    path: '/penghasilan',
    name: 'penghasilan',
    component: () => import('../views/penghasilan.vue')
  },
  {
    path: '/perguruanTinggi',
    name: 'perguruanTinggi',
    component: () => import('../views/perguruanTinggi.vue')
  },
  {
    path: '/sertifikasi',
    name: 'sertifikasi',
    component: () => import('../views/sertifikasi.vue')
  },
  {
    path: '/sms',
    name: 'sms',
    component: () => import('../views/sms.vue')
  },
  {
    path: '/statusAktif',
    name: 'statusAktif',
    component: () => import('../views/statusAktif.vue')
  },
  {
    path: '/statusPegawai',
    name: 'statusPegawai',
    component: () => import('../views/statusPegawai.vue')
  },
  {
    path: '/substansi',
    name: 'substansi',
    component: () => import('../views/substansi.vue')
  },
  {
    path: '/tingkatPrestasi',
    name: 'tingkatPrestasi',
    component: () => import('../views/tingkatPrestasi.vue')
  },
  {
    path: '/wilayah',
    name: 'wilayah',
    component: () => import('../views/wilayah.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
