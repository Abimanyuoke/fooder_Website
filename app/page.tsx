"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";  // Gunakan 'next/navigation' di Next.js 13

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Lakukan validasi form
    if (!email || !password) {
      setError("Email dan Password harus diisi");
      return;
    }

    // Cek kredensial login (bisa diganti dengan autentikasi nyata)
    if (email === "abim@gmail.com" && password === "123") {
      router.push("/manager/dashboard"); // Arahkan ke halaman dashboard setelah login berhasil
    } else {
      setError("Email atau Password salah");
    }
  };

  return (
    <main className="container mx-auto flex justify-center items-center bg-slate-900 h-screen">
      <section className="overflow-hidden">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">Login to Manager Dashboard</h2>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}