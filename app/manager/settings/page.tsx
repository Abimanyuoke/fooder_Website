"use client"

import { useState, ChangeEvent, FormEvent } from 'react';
import { AlertSuccess } from '@/components/alert';

export default function Settings() {
  const [selectedLanguage, setSelectedLanguage] = useState('id');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    console.log("Bahasa diubah ke:", event.target.value);
  };

  const handleNotificationsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNotificationsEnabled(event.target.checked);
    console.log("Notifikasi diubah ke:", event.target.checked ? "Aktif" : "Nonaktif");
  };

  const handleNamaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNama(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Data Disimpan:", { nama, email, selectedLanguage, notificationsEnabled });
    // Logika penyimpanan data
  };

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertContent, setAlertContent] = useState<React.ReactNode | null>(null);
    const [timerWidth, setTimerWidth] = useState(100);
  
    const handleAlert = (content: React.ReactNode) => {
      setAlertContent(content);
      setIsAlertOpen(true);
      setTimerWidth(100);
  
      const duration = 2000; // Total duration for the alert in ms
      const interval = 100; // Interval to update the timer
      const decrement = (interval / duration) * 100; // Percentage to decrement
  
      const intervalId = setInterval(() => {
        setTimerWidth((prev) => {
          if (prev <= 0) {
            clearInterval(intervalId);
            setIsAlertOpen(false);
            setAlertContent(null);
            return 0;
          }
          return prev - decrement;
        });
      }, interval);
    };

  return (
    <div className="bg-slate-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8"> {/* Latar belakang gelap dan padding */}
      <div className="max-w-md mx-auto bg-slate-800 rounded-lg shadow-md p-6"> {/* Card container */}
        <h1 className="text-2xl font-bold mb-6 text-gray-100">Pengaturan</h1> {/* Judul */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4"> {/* Spasi antar bagian */}
            <h2 className="text-lg font-medium mb-2 text-gray-100">Akun</h2>
            <div className="mb-2">
              <label htmlFor="nama" className="block text-gray-300 font-medium mb-1">Nama:</label> {/* Label */}
              <input type="text" id="nama" value={nama} onChange={handleNamaChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" /> {/* Input dengan style */}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-1">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 text-gray-100">Bahasa</h2>
            <select value={selectedLanguage} onChange={handleLanguageChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2 text-gray-100">Layanan</h2>
            <div className="flex items-center">
              <label htmlFor="notifikasi" className="w-48 font-medium text-gray-300">Aktifkan Notifikasi:</label>
              <input type="checkbox" id="notifikasi" checked={notificationsEnabled} onChange={handleNotificationsChange} className="rounded text-blue-500 focus:ring-blue-500 h-5 w-5" /> {/* Styling checkbox */}
            </div>
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white rounded-md hover:bg-slate-700 hover:translate-y-1 shadow-sm shadow-white transition-all duration-300 py-4"  onClick={() => {
                          handleAlert(<AlertSuccess title="Success">Berhasil Disimpan</AlertSuccess>);
                        }}> {/* Tombol full width */}
            Simpan Perubahan
          </button>
        </form>
      </div>


      {isAlertOpen &&(
        <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-50">
          <div className="p-4 rounded-md shadow-lg text-center max-w-sm w-full relative">
            <div className="mb-4">{alertContent}</div>
            <div className="max-w-sm w-full h-1 bg-gray-300 rounded overflow-hidden">
              <div className="h-full bg-yellow-500 transition-all duration-100"
              style={{width:`${timerWidth}%`}}>

              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}