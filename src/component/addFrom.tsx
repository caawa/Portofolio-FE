import React, { useState } from 'react';
import axios from 'axios';

interface AddStudentFormProps {
  onAddComplete: () => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddComplete }) => {
  const [nama, setNama] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [kelas, setKelas] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/store-siswa', {
        nama,
        jurusan,
        kelas,
      });
      
      if (response.data.success) {
        alert('Data siswa berhasil ditambahkan');
        setNama('');
        setJurusan('');
        setKelas('');
        onAddComplete();
      } else {
        alert('Gagal menambahkan data siswa: ' + response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          alert(`Error: ${error.response.status} - ${error.response.data.message}`);
        } else if (error.request) {
          alert('Tidak ada respons dari server. Cek koneksi Anda.');
        } else {
          alert('Error: ' + error.message);
        }
      } else {
        alert('Terjadi kesalahan yang tidak diketahui');
      }
      console.error('Error menambahkan siswa:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-950  border-2 p-4 rounded-box border-rose-200  mb-4 mx-auto w-1/4 max-lg:w-3/4">
      <div className="mb-4">
      <h1 className='text-2xl text-center font-semibold'>Data Siswa</h1>
        <label htmlFor="nama" className="block text-sm font-semibold mb-2">Nama</label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="jurusan" className="block text-sm font-bold mb-2">Jurusan</label>
        <input
          type="text"
          id="jurusan"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="kelas" className="block text-sm font-bold mb-2">Kelas</label>
        <input
          type="text"
          id="kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
      <button
          type="button"
          className="btn w-28 sm:w-32 bg-neutral-950 border-2 border-rose-200 rounded-full text-rose-200 hover:bg-rose-200 hover:text-slate-950 text-sm sm:text-base"
        >
          Cancel
        </button>
      <button type="submit" className="btn w-28 sm:w-32 bg-rose-200 text-slate-950 rounded-full hover:text-rose-200 hover:border-rose-200 hover:border-2 text-sm sm:text-base">
        Tambahkan
      </button>
      </div>
    </form>
  );
};

export default AddStudentForm;