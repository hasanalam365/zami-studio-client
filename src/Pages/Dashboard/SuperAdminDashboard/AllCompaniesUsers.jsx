import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const AllCompaniesUsers = () => {

  const axiosSecure = useAxiosSecure();

  const [page, setPage] = useState(1);
  const [company, setCompany] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const { data = {}, refetch } = useQuery({
    queryKey: ["allUsers", page, company],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/super-admin/users/all?page=${page}&company=${company}`
      );
      return res.data;
    }
  });

  const users = data?.users || [];
  const companies = data?.companies || [];
  const totalPages = data?.totalPages || 1;

  /* =============================
     EDIT START
  ==============================*/

  const handleEdit = (user) => {

    setEditingId(user._id);

    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      company: user.company
    });

  };

  /* =============================
     INPUT CHANGE
  ==============================*/

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  /* =============================
     SAVE UPDATE
  ==============================*/

  const handleSave = async (id) => {

    await axiosSecure.patch(
      `/super-admin/users/update/${formData.company}/${id}`,
      formData
    );

    setEditingId(null);

    refetch();

  };

  /* =============================
     CANCEL EDIT
  ==============================*/

  const handleCancel = () => {
    setEditingId(null);
  };

  return (

    <div className="p-6">

      <h2 className="mb-5 text-2xl font-bold">
        All Companies Users
      </h2>

      {/* FILTER */}

      <select
        className="p-2 mb-4 border"
        onChange={(e) => setCompany(e.target.value)}
      >

        <option value="">All Companies</option>

        {companies.map((c) => (
          <option key={c}>{c}</option>
        ))}

      </select>

      {/* TABLE */}

      <div className="overflow-x-auto">

        <table className="table">

          <thead>

            <tr>
              <th>#</th>
              <th>User</th>
            
              <th>Role</th>
              <th>Status</th>
              <th>Company</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user, index) => (

              <tr key={user._id}>

                <td>{index + 1}</td>

               {/* NAME + EMAIL */}

<td>

  {editingId === user._id ? (

    <div className="flex flex-col gap-1">

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="input input-bordered input-sm"
      />

      <input
        name="email"
        value={formData.email}
        
        className="input input-bordered input-sm"
      />

    </div>

  ) : (

    <div className="flex flex-col">
      <span className="font-semibold">{user.name}</span>
      <span className="text-sm text-gray-500">{user.email}</span>
    </div>

  )}

</td>

                {/* ROLE */}

                <td>

                  {editingId === user._id ? (

                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="select select-sm"
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>

                  ) : (

                    user.role

                  )}

                </td>

                {/* STATUS */}

                <td>

                  {editingId === user._id ? (

                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="select select-sm"
                    >
                      <option value="active">active</option>
                      <option value="blocked">blocked</option>
                    </select>

                  ) : (

                    user.status

                  )}

                </td>

                {/* COMPANY */}

                <td>

                  {editingId === user._id ? (

                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input input-bordered input-sm"
                    />

                  ) : (

                    user.company

                  )}

                </td>

                {/* ACTION */}

                <td className="flex gap-2">

                  {editingId === user._id ? (

                    <>
                      <button
                        className="btn btn-success btn-xs"
                        onClick={() => handleSave(user._id)}
                      >
                        Save
                      </button>

                      <button
                        className="text-white btn btn-error btn-xs"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </>

                  ) : (

                    <button
                      className="btn bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] text-white btn-xs"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      <div className="flex gap-2 mt-6">

        {[...Array(totalPages).keys()].map((p) => (

          <button
            key={p}
            className={`btn btn-sm ${page === p + 1 ? "btn-primary" : ""}`}
            onClick={() => setPage(p + 1)}
          >
            {p + 1}
          </button>

        ))}

      </div>

    </div>

  );

};

export default AllCompaniesUsers;