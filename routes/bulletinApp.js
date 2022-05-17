const express = require("express");
const { Op } = require("sequelize");
const Bulletin = require("../models/bulletin");
const router = express.Router();

// 'http://localhost:3001/bulletin' = '/'

// 모바일 게시글 조회
// 'http://localhost:3001/bulletin/search'
router.post("/search", async (req, res, next) => {
  try {
    const data = await Bulletin.findAll({
      where: {
        title: {
          [Op.like]: "%" + req.body.title + "%", // SQL의 LIKE문 사용해서 제목 검색
        },
      },
      order: [["bulletin_id", "DESC"]],
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 모바일 게시글 작성
// 'http://localhost:3001/bulletin/create'
router.post("/create", async (req, res, next) => {
  try {
    const data = await Bulletin.create({
      title: req.body.title,
      content: req.body.content,
      create_date: Date.now(),
      std_id: req.body.std_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 모바일 게시글 삭제
// 'http://localhost:3001/bulletin/delete'
// PK, 학번으로 삭제
router.delete("/delete", async (req, res, next) => {
  try {
    const data = await Bulletin.destroy({
      where: {
        bulletin_id: req.body.bulletin_id,
        std_id: req.body.std_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
