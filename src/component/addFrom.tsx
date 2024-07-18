import React, { useState } from 'react';
import axios from 'axios';

interface AddStudentFormProps {
  onAddComplete: () => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddComplete }) => {
  const [nama, setNama] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [kelas, setKelas] = useState('');
  const API_BASE_URL = 'http://localhost:3000';


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/store-siswa', {
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
        alert('Gagal menambahkan data siswa');
      }
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Terjadi kesalahan saat menambahkan data siswa');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label htmlFor="nama" className="block text-sm font-bold mb-2">Nama:</label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="jurusan" className="block text-sm font-bold mb-2">Jurusan:</label>
        <input
          type="text"
          id="jurusan"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="kelas" className="block text-sm font-bold mb-2">Kelas:</label>
        <input
          type="text"
          id="kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Tambah Siswa
      </button>
    </form>
  );
};

export default AddStudentForm;