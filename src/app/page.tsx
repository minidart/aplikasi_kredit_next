import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
      <div className="container">
        <div className="card">
          <div className="card-image">
            <h2 className="card-heading">
              Pengajuan Kredit UMKM
              <small>Halaman ini digunakan untuk pengajuan kredit bagi pemilik UMKM</small>
            </h2>
          </div>
          <form className="card-form">
            <div className="input">
              <input type="text" className="input-field" required/>
              <label className="input-label">Nama Lengkap (wajib)</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" required/>
              <label className="input-label">NIK (wajib)</label>
            </div>
            <div className="input">
              <input type="tel" className="input-field" required/>
              <label className="input-label">Nomor HP (wajib)</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" required/>
              <label className="input-label">Tempat, Tanggal Lahir (wajib)</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" required/>
              <label className="input-label">Alamat (wajib)</label>
            </div>
            <div className="input">
              <input type="text" className="input-field"/>
              <label className="input-label">Jenis Usaha</label>
            </div>
            <div className="input">
              <input type="text" className="input-field"/>
              <label className="input-label">Jaminan</label>
            </div>
            <div className="input">
              <input type="text" className="input-field"/>
              <label className="input-label">Besar Pinjaman</label>
            </div>
            <div className="input">
              <input type="text" className="input-field"/>
              <label className="input-label">Jangka Waktu Pinjaman</label>
            </div>
            <div className="action">
              <button className="action-button">Kirim</button>
            </div>
          </form>
        </div>
      </div>
  );
}
