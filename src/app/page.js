import React from 'react';

export default function NetManager() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>NetManager RT/RW</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>Sistem Pendataan Warga & Kas Digital</p>
      </header>
      
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h3 style={{ marginTop: 0, color: '#1e3a8a' }}>Tambah Data Warga Baru</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <input type="text" placeholder="Nama Lengkap Warga" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="Nomor Rumah / Alamat" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="No. HP WhatsApp" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button style={{ backgroundColor: '#10b981', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Simpan ke Database Cloud
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginTop: 0, color: '#1e3a8a' }}>Daftar Data Warga Terkumpul</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>Menghubungkan ke server cloud Firebase...</p>
      </div>
    </div>
  );
}
