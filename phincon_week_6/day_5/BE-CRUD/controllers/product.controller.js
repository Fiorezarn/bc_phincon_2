const { Product, Category } = require("@/models");
const {
  successResponseData,
  successResponse,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/responseHelpers");
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: "Category",
        },
      ],
    });
    return res.status(200).send({
      status: 200,
      message: "Success get all products!",
      products,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, stock, categoryId } = req.body;
    const product = await Product.create({
      name: name,
      price: price,
      stock: stock,
      categoryId: categoryId,
    });
    return successResponseData(res, "Success create product!", product);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock, categoryId } = req.body;
    const product = await findById(id);
    if (!product) {
      return res.status(404).send({
        status: 404,
        message: "Product not found!",
      });
    }
    await Product.update(
      {
        name: name,
        price: price,
        stock: stock,
        categoryId: categoryId,
      },
      {
        where: { id: id },
      }
    );
    return successResponse(res, "Success update product!", 200);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const findById = async (id) => {
  try {
    const product = await Product.findOne({
      include: [
        {
          model: Category,
          as: "Category",
        },
      ],
      where: { id: id },
    });
    return product;
  } catch (error) {
    return error;
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await findById(id);
    if (!product) {
      return res.status(404).send({
        status: 404,
        message: "Product not found!",
      });
    }
    return res.status(200).send({
      status: 200,
      message: "Success get product!",
      product,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await findById(id);
    if (!product) {
      return res.status(404).send({
        status: 404,
        message: "Product not found!",
      });
    }
    await Product.destroy({ where: { id: id } });
    return successResponse(res, "Success delete product!", 200);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
