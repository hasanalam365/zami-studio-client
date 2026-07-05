import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [search, setSearch] = useState("");

  const isSuperAdmin = user?.role === "super-admin";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        let res;

        if (isSuperAdmin) {
          if (!selectedCompany) {
            setUsers([]);
            setFilteredUsers([]);
            setLoading(false);
            return;
          }

          res = await axiosSecure.get("/users/super-admin", {
            params: { company: selectedCompany },
          });
        } else {
          res = await axiosSecure.get("/users");
        }

        setUsers(res.data);
        setFilteredUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [axiosSecure, selectedCompany, isSuperAdmin]);

  useEffect(() => {
    const filtered = users.filter((u) =>
      u.email?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="loading loading-spinner text-[#5fcf3a]"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#5fcf3a] to-[#2f9e1f] bg-clip-text">
          All Users ({filteredUsers.length})
        </h2>
        <p className="mt-2 text-gray-600">
          Manage and monitor all registered users.
        </p>
      </motion.div>

      {/* Super Admin Company Dropdown */}
      {isSuperAdmin && (
        <div className="mb-6">
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="px-4 py-2 border border-green-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5fcf3a]"
          >
            <option value="">Select Company</option>
            <option value="Arabian-Essence">Arabian-Essence</option>
            <option value="Dubai-Marketing">Dubai-Marketing</option>
            <option value="Faces-Solution">Faces-Solution</option>
          </select>
        </div>
      )}

      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-green-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5fcf3a]"
        />
      </div>

      {/* Table Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-x-auto bg-white shadow-xl rounded-3xl"
      >
        <table className="min-w-full text-sm text-left">
          <thead className="text-white bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86]">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created At</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u, index) => (
              <tr
                key={u._id}
                className="transition border-b hover:bg-green-50"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{u.name || "—"}</td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4 capitalize">{u.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      u.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {u.createdAt
                    ? new Date(u.createdAt).toLocaleDateString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No users found.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AllUsers;