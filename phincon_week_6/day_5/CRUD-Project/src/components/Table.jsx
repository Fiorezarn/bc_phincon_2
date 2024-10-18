import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TableProduct() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { datas, databyid, loading, error } = useSelector(
    (state) => state.product
  );
  const [dataByID, setDataByID] = useState({});

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT" });
  }, [dispatch]);

  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: { id } });
  };

  const editModal = (id) => {
    dispatch({ type: "GET_PRODUCT_BY_ID", payload: { id } });
    setOpen(true);
  };

  useEffect(() => {
    setDataByID(databyid);
    console.log(databyid);
  }, [databyid]);

  const updateSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    const categoryId = e.target.category.value;
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: { id, name, price, stock, categoryId },
    });
    setOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  }
  const data = datas?.products;

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
    },
    {
      name: "Category",
      cell: (row) => {
        return row.Category.name;
      },
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <div className="flex gap-2">
              <button
                className="bg-blue-500 p-2 rounded-md text-white"
                onClick={() => editModal(row.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-700 p-2 rounded-md text-white"
                onClick={() => deleteProduct(row.id)}
              >
                Delete
              </button>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} pagination />
      {open && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <form onSubmit={updateSubmit}>
              <input type="hidden" name="id" defaultValue={databyid?.id} />
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={databyid?.name || ""}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={databyid?.price || ""}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  defaultValue={databyid?.stock || ""}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={databyid?.categoryId || ""}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 bg-gray-400 text-white rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-2 bg-green-600 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TableProduct;
