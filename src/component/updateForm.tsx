import React, { useState } from 'react';
import axios from 'axios';

interface UpdateStudentFormProps {
  student: {
    id: number;
    nama: string;
    jurusan: string;
    kelas: string;
  };
  onUpdate: () => void;
  onCancel: () => void;
}

const UpdateStudentForm: React.FC<UpdateStudentFormProps> = ({ student, onUpdate, onCancel }) => {
  const [nama, setNama] = useState(student.nama);
  const [jurusan, setJurusan] = useState(student.jurusan);
  const [kelas, setKelas] = useState(student.kelas);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/update-siswa', {
        id: student.id,
        nama,
        jurusan,
        kelas,
      });
      if (response.data.success) {
        onUpdate();
      } else {
        console.error('Failed to update student');
      }
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border-2 p-4 rounded-box text-white border-rose-200  mb-4 mx-auto w-1/4 max-lg:w-3/4">
      <div>
      <h1 className='text-2xl text-center font-semibold'>Update Data Siswa</h1>
        <label htmlFor="nama" className="block text-sm font-medium">Nama</label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="jurusan" className="block text-sm font-medium text-gray-700">Jurusan</label>
        <input
          type="text"
          id="jurusan"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="kelas" className="block text-sm font-medium text-gray-700">Kelas</label>
        <input
          type="text"
          id="kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="btn w-28 sm:w-32 bg-neutral-950 border-2 border-rose-200 rounded-full text-rose-200 hover:bg-rose-200 hover:text-slate-950 text-sm sm:text-base"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn w-20 sm:w-24 bg-rose-200 text-slate-950 rounded-full hover:text-rose-200 hover:border-rose-200 hover:border-2 text-sm sm:text-base"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateStudentForm;