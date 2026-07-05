import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const SuperAllOrders = () => {

  const axiosSecure = useAxiosSecure();

  const [searchEmail, setSearchEmail] = useState("");
  const [emailQuery, setEmailQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-orders", emailQuery, statusFilter],
    queryFn: async () => {

      const res = await axiosSecure.get(
        `/orders/admin/all?email=${emailQuery}&status=${statusFilter}`
      );

      return res.data;

    },
  });

  const handleSearch = () => {
    setEmailQuery(searchEmail);
  };

  const handleClear = () => {
    setSearchEmail("");
    setEmailQuery("");
    refetch();
  };

  const handleStatusChange = async (id, status) => {

    try {

      const res = await axiosSecure.patch(
        `/orders/admin/status/${id}`,
        { status }
      );

      if (res.data.modifiedCount > 0) {

        toast.success("Status Updated");

        refetch();

      }

    } catch (error) {

      toast.error("Failed to update status");

    }

  };

  if (isLoading) {

    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="loading loading-spinner text-[#5fcf3a]"></span>
      </div>
    );

  }

  return (

    <div className="p-6">

      <Helmet>
        <title>All Orders | Faces Solutions</title>
      </Helmet>

      <h1 className="mb-6 text-3xl font-bold">
        All Orders
      </h1>

      {/* SEARCH + FILTER */}

      <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">

        {/* LEFT SIDE SEARCH */}

        <div className="flex flex-col w-full gap-3 md:flex-row md:w-auto">

          <input
            type="text"
            placeholder="Search user orders by email..."
            className="w-full input input-bordered md:w-72"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="btn bg-[#5fcf3a] text-white border-none"
          >
            Search
          </button>

          <button
            onClick={handleClear}
            className="btn btn-outline"
          >
            Clear
          </button>

        </div>


        {/* RIGHT SIDE FILTER */}

        <div className="w-full md:w-auto">

          <select
            className="w-full select select-bordered md:w-60"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >

            <option value="all">
              All Orders
            </option>

            <option value="pending">
              Pending
            </option>

            <option value="processing">
              Processing
            </option>

            <option value="on hold">
              On Hold
            </option>

            <option value="delivered">
              Delivered
            </option>

          </select>

        </div>

      </div>


      {/* ORDERS TABLE */}

      <div className="overflow-x-auto">

        <table className="table">

          <thead>

            <tr>

              <th>#</th>
              <th>User</th>
              <th>Plan</th>
              <th>Price</th>
              <th>Transaction</th>
              <th>Status</th>
              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order, index) => (

              <tr key={order._id}>

                <td>{index + 1}</td>

                <td>

                  <div className="font-semibold">
                    {order.name}
                  </div>

                  <div className="text-xs opacity-70">
                    {order.email}
                  </div>

                </td>

                <td>
                  {order.plan}
                </td>

                <td>
                  £{order.price}
                </td>

                <td className="text-xs break-all">
                  {order.transactionId}
                </td>

                <td>

                  <select
                    className="select select-sm select-bordered"
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(
                        order._id,
                        e.target.value
                      )
                    }
                  >

                    <option value="pending">
                      Pending
                    </option>

                    <option value="processing">
                      Processing
                    </option>

                    <option value="on hold">
                      On Hold
                    </option>

                    <option value="delivered">
                      Delivered
                    </option>

                  </select>

                </td>

                <td>

                  {new Date(order.createdAt).toLocaleDateString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {orders.length === 0 && (

          <div className="mt-10 text-center text-gray-400">

            No Orders Found

          </div>

        )}

      </div>

    </div>

  );

};

export default SuperAllOrders;