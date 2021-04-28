const router = require("express").Router();
const { ProductTag, Tag, Product } = require("../../models");

// The `/api/productTag` endpoint

// find all productTags
// be sure to include its associated Product data
router.get("/", async (req, res) => {
  try {
    const productTagData = await ProductTag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const productTagData = await ProductTag.findByPk(req.params.id, {
      include: [{ model: ProductTag }],
    });

    if (!productTagData) {
      res.status(400).json({ message: "No Tag with that ID." });
      return;
    }
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", (req, res) => {

});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {

});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
    
});

module.exports = router;
