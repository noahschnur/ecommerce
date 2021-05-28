const router = require("express").Router();
const { Category, Product } = require("../../models");

// get all catagories
router.get("/", (req, res) => {
  Category.findAll({})
    .then((dbCategoryData) => {
      console.log(dbCategoryData);
      res.render(dbCategoryData);
    })
    .then(
      Product.findAll({
        where: {
          id: req.params.id,
        },
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .then(
      Product.findAll({
        where: {
          id: req.params.id,
        },
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
