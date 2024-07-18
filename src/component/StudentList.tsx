import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateStudentForm from './updateForm';
import AddStudentForm  from './addFrom'
import '../App.css';

interface Student {
  id: number;
  nama: string;
  jurusan: string;
  kelas: string;
}

const StudentList: React.FC = () => {
  const [siswaData, setSiswaData] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [isAddingStudent, setIsAddingStudent] = useState<boolean>(false);


  useEffect(() => {
    fetchSiswa();
  }, []);

  const fetchSiswa = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-siswa');
      console.log('API Response:', response.data);
      if (response.data.success) {
        setSiswaData(response.data.data);
      } else {
        setError('Gagal mengambil data siswa');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      if (axios.isAxiosError(error)) {
        setError(`Network error: ${error.message}`);
      } else {
        setError('Terjadi kesalahan yang tidak diketahui');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      try {
        const response = await axios.post('http://localhost:3000/delete-siswa', { id });
        if (response.data.success) {
          fetchSiswa();
        } else {
          setError('Gagal menghapus data');
        }
      } catch (error) {
        console.error('Error deleting data:', error);
        setError('Terjadi kesalahan saat menghapus data');
      }
    }
  };

  const handleUpdate = (student: Student) => {
    setEditingStudent(student);
  };

  const handleUpdateComplete = () => {
    setEditingStudent(null);
    fetchSiswa();
  };


  const handleAddStudent = () => {
    setIsAddingStudent(true);
  };

  const handleAddComplete = () => {
    setIsAddingStudent(false);
    fetchSiswa();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!siswaData || siswaData.length === 0) return <div>Tidak ada data siswa</div>;

  return (
    <div id='crud' className="flex items-center justify-center min-h-screen bg-neutral-950">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-rose-200">CRUD React</h2>
        
        {isAddingStudent ? (
          <AddStudentForm onAddComplete={handleAddComplete} />
        ) : (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleAddStudent}
              className="btn bg-rose-200 text-slate-950 rounded-full hover:bg-rose-300 hover:text-slate-800 px-6 py-2 text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Tambah Data
            </button>
          </div>
        )}

        {editingStudent ? (
          <UpdateStudentForm
            student={editingStudent}
            onUpdate={handleUpdateComplete}
            onCancel={() => setEditingStudent(null)}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siswaData.map((siswa) => (
              <div key={siswa.id} className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden border-2 border-rose-200 hover:border-rose-300 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-rose-200">{siswa.nama}</h3>
                  <p className="text-gray-300 mb-1">Jurusan: {siswa.jurusan}</p>
                  <p className="text-gray-300 mb-4">Kelas: {siswa.kelas}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleDelete(siswa.id)}
                      className="btn bg-neutral-800 border-2 border-rose-200 text-rose-200 rounded-full hover:bg-neutral-700 px-4 py-2 text-sm transition duration-300 ease-in-out"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => handleUpdate(siswa)}
                      className="btn bg-rose-200 text-slate-950 rounded-full hover:bg-rose-300 px-4 py-2 text-sm transition duration-300 ease-in-out"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;