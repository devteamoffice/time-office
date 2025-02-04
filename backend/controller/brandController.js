const Brand = require("../models/brand");
const Product = require("../models/product");
const Merchant = require("../models/merchant");
const store = require("../utils/store");
const { MERCHANT_STATUS } = require("../constants");

exports.addBrand = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const isActive = req.body.isActive;

    if (!description || !name) {
      return res
        .status(400)
        .json({ error: "You must enter description & name." });
    }

    const brand = new Brand({ name, description, isActive });

    const brandDoc = await brand.save();

    res.status(200).json({
      success: true,
      message: `Brand has been added successfully!`,
      brand: brandDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchStoreBrands = async (req, res) => {
  try {
    const brands = await Brand.find({
      isActive: true,
    }).populate("merchant", "name");

    res.status(200).json({
      brands,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();

    res.status(200).json({
      brands,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.fetchBrand = async (req, res) => {
  try {
    const brandId = req.params.id;

    const brandDoc = await Brand.findOne({ _id: brandId }).populate(
      "merchant",
      "_id"
    );

    if (!brandDoc) {
      return res.status(404).json({
        message: `Cannot find brand with the id: ${brandId}.`,
      });
    }

    res.status(200).json({
      brand: brandDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.listBrands = async (req, res) => {
  try {
    let brands = null;

    if (req.user.merchant) {
      brands = await Brand.find(
        {
          merchant: req.user.merchant,
        },
        "name"
      );
    } else {
      brands = await Brand.find({}, "name");
    }

    res.status(200).json({
      brands,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    const update = req.body.brand;
    const query = { _id: brandId };
    const { slug } = req.body.brand;

    const foundBrand = await Brand.findOne({
      $or: [{ slug }],
    });

    if (foundBrand && foundBrand._id != brandId) {
      return res.status(400).json({ error: "Slug is already in use." });
    }

    await Brand.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Brand has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.updateBrandAdmin = async (req, res) => {
  try {
    const brandId = req.params.id;
    const update = req.body.brand;
    const query = { _id: brandId };

    // disable brand(brandId) products
    if (!update.isActive) {
      const products = await Product.find({ brand: brandId });
      store.disableProducts(products);
    }

    await Brand.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Brand has been updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    await deactivateMerchant(brandId);
    const brand = await Brand.deleteOne({ _id: brandId });

    res.status(200).json({
      success: true,
      message: `Brand has been deleted successfully!`,
      brand,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

exports.deactivateMerchant = async (brandId) => {
  const brandDoc = await Brand.findOne({ _id: brandId }).populate(
    "merchant",
    "_id"
  );
  if (!brandDoc || !brandDoc.merchant) return;
  const merchantId = brandDoc.merchant._id;
  const query = { _id: merchantId };
  const update = {
    status: MERCHANT_STATUS.Waiting_Approval,
    isActive: false,
    brand: null,
  };
  return await Merchant.findOneAndUpdate(query, update, {
    new: true,
  });
};
