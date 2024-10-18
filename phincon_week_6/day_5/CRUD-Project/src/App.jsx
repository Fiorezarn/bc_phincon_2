import { useState } from "react";
import TableProduct from "./components/Table";
import { useDispatch } from "react-redux";

function App() {
  const [open, setOpen] = useState(false);
  const dipatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    const categoryId = e.target.category.value;
    dipatch({
      type: "CREATE_PRODUCT",
      payload: { name, price, stock, categoryId },
    });
    e.target.reset();
    setOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-green-600 text-2xl font-bold">
        Inventory Management
      </h1>
      <div className="mt-2">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md bg-green-600 text-white"
        >
          Create New Product
        </button>
        <div className="border-2 p-4 rounded-md mt-4">
          <h1>Product List</h1>
          <TableProduct />
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold mb-4">Create New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
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
    </div>
  );
}

export default App;
