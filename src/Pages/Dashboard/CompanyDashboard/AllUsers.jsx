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
      setLoading(false);
    };

    fetchUsers();
  }, [selectedCompany]);

  useEffect(() => {
    const filtered = users.filter((u) =>
      u.email?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-br from-black via-zinc-950 to-black">

      {/* Header */}
      <motion.div className="mb-8">
        <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-red-500 to-white bg-clip-text">
          All Users ({filteredUsers.length})
        </h2>
        <p className="text-gray-400">Manage system users</p>
      </motion.div>

      {/* Controls */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row">

        {isSuperAdmin && (
          <select
            className="px-4 py-3 text-white bg-black border border-red-500/30 rounded-xl"
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select Company</option>
            <option value="Arabian-Essence">Arabian Essence</option>
            <option value="Dubai-Marketing">Dubai Marketing</option>
            <option value="Faces-Solution">Faces Solution</option>
          </select>
        )}

        <input
          type="text"
          placeholder="Search email..."
          className="w-full px-4 py-3 text-white bg-black border border-red-500/30 rounded-xl"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-red-500/20 rounded-2xl bg-black/60">
        <table className="w-full text-sm">
          <thead className="text-left bg-red-600 text-white/90">
            <tr>
              <th className="p-4">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u, i) => (
              <tr key={u._id} className="border-t border-white/10 hover:bg-red-500/10">
                <td className="p-4">{i + 1}</td>
                <td>{u.name}</td>
                <td className="text-gray-300">{u.email}</td>
                <td className="text-red-400 capitalize">{u.role}</td>
                <td>
                  <span className="px-3 py-1 text-xs text-red-400 rounded-full bg-red-500/20">
                    {u.status}
                  </span>
                </td>
                <td className="text-gray-400">
                  {u.createdAt && new Date(u.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="p-6 text-center text-gray-400">
            No users found
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;