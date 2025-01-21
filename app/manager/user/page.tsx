"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface InputField {
  id: number;
  name: string;
  message: string;
}

export default function DashboardPage() {
  const [inputs, setInputs] = useState<InputField[]>([
    { id: 1, name: "", message: "" },
  ]);
  const [submittedData, setSubmittedData] = useState<InputField[] | null>(null);

  const handleAddInput = () => {
    const newId = inputs.length + 1;
    setInputs([...inputs, { id: newId, name: "", message: "" }]);
  };

  const handleRemoveInput = () => {
    if (inputs.length > 1) {
      setInputs(inputs.slice(0, -1));
    }
  };

  const handleChange = (
    id: number,
    field: keyof InputField,
    value: string
  ) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, [field]: value } : input
      )
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...(prevData || []), ...inputs]); // Save submitted data
    console.log("Submitted Data:", inputs);
  };

  const handleDelete = (id: number) => {
    setSubmittedData((prevData) => prevData?.filter((data) => data.id !== id) || []);
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-primary">Dynamic User Input</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-700/40 shadow-md rounded-lg p-6 w-full max-w-lg space-y-4"
      >
        {inputs.map((input) => (
          <div key={input.id} className="bg-transparent p-4 rounded-md shadow-md mb-4">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Name"
                value={input.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(input.id, "name", e.target.value)
                }
                className="p-2 border text-white bg-gray-900/40 rounded-md focus:shadow-md focus:shadow-white"
                required
              />
              <input
                type="text"
                placeholder="Message"
                value={input.message}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(input.id, "message", e.target.value)
                }
                className="p-2 border border-gray-300 bg-gray-900/40 text-white rounded-md focus:shadow-md focus:shadow-white"
                required
              />
            </div>
          </div>
        ))}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleAddInput}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Tambah
          </button>
          <button
            type="button"
            onClick={handleRemoveInput}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            disabled={inputs.length === 1}
          >
            Kurang
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>

      {submittedData && submittedData.length > 0 && (
        <div className="mt-10 bg-gray-700/40 shadow-md rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-xl font-bold mb-4 text-primary">Submitted Data</h2>
          {submittedData.map((data) => (
            <div key={data.id} className="bg-gray-900/35 p-4 rounded-md shadow-md mb-4">
              <div className="flex flex-col space-y-2">
                <p className="text-primary"><strong className="text-secondary">Name:</strong> {data.name}</p>
                <p className="text-primary"><strong className="text-secondary">Message:</strong> {data.message}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleDelete(data.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
