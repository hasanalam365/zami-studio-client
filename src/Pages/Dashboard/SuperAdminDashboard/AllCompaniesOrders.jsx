import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const AllCompaniesOrders = () => {

  const axiosSecure = useAxiosSecure();

  const [page, setPage] = useState(1);
  const [company, setCompany] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const { data = {}, refetch } = useQuery({
    queryKey: ["allOrders", page, company],
    queryFn: async () => {

      const res = await axiosSecure.get(
        `/super-admin/orders/all?page=${page}&company=${company}`
      );

      return res.data;

    }
  });

  const orders = data?.orders || [];
  const companies = data?.companies || [];
  const totalPages = data?.totalPages || 1;

  /* ======================
     EDIT ORDER
  ======================*/

  const handleEdit = (order) => {

    setEditingId(order._id);

    setFormData({
      customerName: order.customerName,
      email: order.email,
      status: order.status,
      company: order.company,
      amount: order.amount
    });

  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSave = async (id) => {

    await axiosSecure.patch(
      `/super-admin/orders/update/${formData.company}/${id}`,
      formData
    );

    setEditingId(null);

    refetch();

  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (

    <div className="p-6">

      <h2 className="mb-5 text-2xl font-bold">
        All Companies Orders
      </h2>

      {/* FILTER */}

      <select
        className="p-2 mb-4 border"
        onChange={(e) => {
          setCompany(e.target.value);
          setPage(1);
        }}
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
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Company</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order, index) => (

              <tr key={order._id}>

                <td>{(page - 1) * 10 + index + 1}</td>

                {/* CUSTOMER */}

                <td>

                  {editingId === order._id ? (

                    <div className="flex flex-col gap-1">

                      <input
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        className="input input-bordered input-sm"
                      />

                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input input-bordered input-sm"
                      />

                    </div>

                  ) : (

                    <div className="flex flex-col">
                      <span className="font-semibold">{order.customerName}</span>
                      <span className="text-sm text-gray-500">{order.email}</span>
                    </div>

                  )}

                </td>

                {/* AMOUNT */}

                <td>

                  {editingId === order._id ? (

                    <input
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="input input-bordered input-sm"
                    />

                  ) : (

                    `৳ ${order.amount}`

                  )}

                </td>

                {/* STATUS */}

                <td>

                  {editingId === order._id ? (

                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="select select-sm"
                    >

                      <option value="pending">pending</option>
                      <option value="processing">processing</option>
                      <option value="completed">completed</option>
                      <option value="cancelled">cancelled</option>

                    </select>

                  ) : (

                    <span className="badge badge-info">
                      {order.status}
                    </span>

                  )}

                </td>

                {/* COMPANY */}

                <td>

                  {editingId === order._id ? (

                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input input-bordered input-sm"
                    />

                  ) : (

                    order.company

                  )}

                </td>

                {/* ACTION */}

                <td className="flex gap-2">

                  {editingId === order._id ? (

                    <>

                      <button
                        className="btn btn-success btn-xs"
                        onClick={() => handleSave(order._id)}
                      >
                        Save
                      </button>

                      <button
                        className="btn btn-error btn-xs"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>

                    </>

                  ) : (

                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => handleEdit(order)}
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

export default AllCompaniesOrders;