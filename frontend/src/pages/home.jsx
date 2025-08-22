import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-yellow-300 shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-white">🥛 MilkCo</h1>
          <nav>
            <ul className="flex space-x-6 text-white font-medium">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/collection" className="hover:underline">Collection</a></li>
              <li><a href="/sales" className="hover:underline">Sales</a></li>
              <li><a href="/profile" className="hover:underline">Profile</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MilkCo Management System 🥛
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Manage your milk collection, sales, and farmers efficiently.
        </p>

        {/* Quick Links / Actions */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/collection" className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded shadow-md transition">
            Milk Collection
          </a>
          <a href="/sales" className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded shadow-md transition">
            Sales Records
          </a>
          <a href="/profile" className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded shadow-md transition">
            Farmer Profile
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center text-gray-700">
        © 2025 MilkCo. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
