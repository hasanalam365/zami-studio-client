import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import FullScreenLoading from "../../../Components/FullScreenLoading";
import { useState } from "react";
import { toast } from "react-toastify";

const SuperAllUsers = () => {

  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const [editingId, setEditingId] = useState(null);
  const [companyName, setCompanyName] = useState("");

  /* =========================
     GET USERS
  ========================= */
  const { data: users = [], isPending } = useQuery({
    queryKey: ["superAllUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/super-admin");
      return res.data;
    }
  });

  /* =========================
     UPDATE COMPANY
  ========================= */
  const updateCompany = useMutation({
    mutationFn: async ({ id, company }) => {
      const res = await axiosSecure.patch(`/users/company/${id}`, {
        company
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Company updated");
      queryClient.invalidateQueries(["superAllUsers"]);
      setEditingId(null);
    }
  });

  /* =========================
     BLOCK / UNBLOCK USER
  ========================= */
  const updateStatus = useMutation({
    mutationFn: async ({ id, status }) => {
      const res = await axiosSecure.patch(`/users/status/${id}`, {
        status
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("User status updated");
      queryClient.invalidateQueries(["superAllUsers"]);
    }
  });

  /* =========================
     SAVE COMPANY
  ========================= */
  const handleSaveCompany = (id) => {

    if (!companyName) {
      toast.error("Company name required");
      return;
    }

    updateCompany.mutate({
      id,
      company: companyName
    });
  };

  /* =========================
     BLOCK / UNBLOCK
  ========================= */
  const handleStatus = (id, currentStatus) => {

    const newStatus =
      currentStatus === "active"
        ? "blocked"
        : "active";

    updateStatus.mutate({
      id,
      status: newStatus
    });
  };

  if (isPending) return <FullScreenLoading />;

  return (
    <div className="p-6">

      <h2 className="mb-6 text-2xl font-bold">
        All Companies Users
      </h2>

      <div className="overflow-x-auto">

        <table className="table w-full border">

          <thead>
            <tr className="bg-gray-200">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user, index) => (

              <tr key={user._id}>

                <td>{index + 1}</td>

                <td>{user.name || "N/A"}</td>

                <td>{user.email}</td>

                <td>
                  <span className="px-2 py-1 text-xs text-white bg-blue-500 rounded">
                    {user.role}
                  </span>
                </td>

                {/* STATUS */}
                <td>
                  <span
                    className={`px-2 py-1 text-xs text-white rounded ${
                      user.status === "active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* COMPANY EDIT */}
                <td>

                  {editingId === user._id ? (

                    <input
                      type="text"
                      defaultValue={user.company}
                      onChange={(e) =>
                        setCompanyName(e.target.value)
                      }
                      className="input input-sm input-bordered"
                    />

                  ) : (

                    user.company || "N/A"

                  )}

                </td>

                {/* ACTIONS */}
                <td className="flex gap-2">

                  {/* EDIT COMPANY */}
                  {editingId === user._id ? (

                    <button
                      onClick={() =>
                        handleSaveCompany(user._id)
                      }
                      className="px-3 py-1 text-white bg-green-600 rounded"
                    >
                      Save
                    </button>

                  ) : (

                    <button
                      onClick={() => {
                        setEditingId(user._id);
                        setCompanyName(user.company || "");
                      }}
                      className="px-3 py-1 text-white bg-blue-600 rounded"
                    >
                      Edit
                    </button>

                  )}

                  {/* BLOCK / UNBLOCK */}
                  <button
                    onClick={() =>
                      handleStatus(user._id, user.status)
                    }
                    className={`px-3 py-1 text-white rounded ${
                      user.status === "active"
                        ? "bg-red-600"
                        : "bg-green-600"
                    }`}
                  >
                    {user.status === "active"
                      ? "Block"
                      : "Unblock"}
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SuperAllUsers;