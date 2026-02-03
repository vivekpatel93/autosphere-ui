
import React, { useEffect, useState } from "react";

const PAGE_SIZE = 4;

function CarSlider() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(0); // Spring uses 0-based pages
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCars();
  }, [page]);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/car/findAll?page=${page}&size=${PAGE_SIZE}`
      );

      const data = await response.json();

      setCars(data.content);          // Page<CarResponseDTO>
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch cars", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-10">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Available Cars
      </h2>

      {/* Cards */}
      {loading ? (
        <p className="text-center">Loading cars...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.vinNumber}
              className="bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <img
                src={car.imageUrl}
                alt={car.model}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3 className="mt-3 font-semibold">
                {car.companyName} {car.model}
              </h3>

              <p className="text-sm text-gray-400">
                Type: {car.carType}
              </p>

              <p className="text-sm text-gray-400">
                Mileage: {car.mileage} km/l
              </p>

              <p className="text-sm text-gray-400">
                Seats: {car.seatCapacity}
              </p>

              <p className="mt-2 font-semibold text-blue-400">
                ₹ {car.price.toLocaleString()}
              </p>

              <button className="mt-3 w-full px-3 py-1 bg-blue-600 rounded text-sm hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40"
        >
          Previous
        </button>

        <span className="text-sm text-gray-400">
          Page {page + 1} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages - 1}
          className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CarSlider;
