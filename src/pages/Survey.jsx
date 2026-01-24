import { useEffect, useState } from "react";
import { getVolunteerAssignList } from "../services/api";

/* ---------------- Pagination Helper ---------------- */
function getPaginationPages(currentPage, totalPages) {
  const pages = [];

  if (totalPages <= 7) {
    return [...Array(totalPages)].map((_, i) => i + 1);
  }

  pages.push(1, 2);

  if (currentPage > 4) pages.push("...");

  if (currentPage > 3 && currentPage < totalPages - 2) {
    pages.push(currentPage - 1, currentPage, currentPage + 1);
  }

  if (currentPage <= 3) pages.push(3, 4);

  if (currentPage < totalPages - 3) pages.push("...");

  pages.push(totalPages - 1, totalPages);

  return [...new Set(pages)];
}

export default function Survey() {
  const ITEMS_PER_PAGE = 10;

  const [voters, setVoters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  /* ------------------ API ------------------ */
  useEffect(() => {
    async function fetchAssignedVoters() {
      try {
        const response = await getVolunteerAssignList();
        setVoters(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAssignedVoters();
  }, []);

  /* ------------------ SEARCH FILTER ------------------ */
  const filteredVoters = voters.filter((item) =>
    Object.values(item).some((value) =>
      String(value ?? "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  /* ------------------ PAGINATION ------------------ */
  const totalPages = Math.ceil(filteredVoters.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedVoters = filteredVoters.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const pages = getPaginationPages(currentPage, totalPages);

  if (loading) {
    return <p className="text-center">লোড হচ্ছে...</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-6">Assigned Voters</h2>

      {voters.length === 0 ? (
        <p className="text-gray-500 text-center">
          কোনো ভোটার অ্যাসাইন করা নেই
        </p>
      ) : (
        <>
          {/* 🔍 Search */}
          <div className="mb-4 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search voter name / voter no / lane..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 📋 Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Serial</th>
                  <th className="border px-4 py-2">Voter Name</th>
                  <th className="border px-4 py-2">Voter No</th>
                  <th className="border px-4 py-2">Address</th>
                  <th className="border px-4 py-2">Lane Name</th>
                  <th className="border px-4 py-2 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {paginatedVoters.length > 0 ? (
                  paginatedVoters.map((voter, index) => (
                    <tr key={voter.assign_id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">
                        {startIndex + index + 1}
                      </td>
                      <td className="border px-4 py-2">
                        {voter.voter_name || "—"}
                      </td>
                      <td className="border px-4 py-2">
                        {voter.voter_no || "—"}
                      </td>
                      <td className="border px-4 py-2">
                        {voter.address || "—"}
                      </td>
                      <td className="border px-4 py-2">
                        {voter.lane_name || "—"}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <button
                          onClick={() => handleSurvey(voter)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Survey
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-6 text-gray-500"
                    >
                      কোনো ভোটার পাওয়া যায়নি
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 🔢 Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border disabled:opacity-50"
              >
                Previous
              </button>

              {pages.map((page, index) =>
                page === "..." ? (
                  <span key={index} className="px-2 text-gray-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded border ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ------------------ Survey Action ------------------ */
function handleSurvey(voter) {
  console.log("Survey clicked for:", voter);
}
