const express = require("express");
const { Op } = require("sequelize");
const Bulletin = require("../models/bulletin");
const router = express.Router();

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
//게시글 수정
//  'http://localhost:3001/bulletin/update'
router.post("/update", async (req, res) => {
  try {
    Bulletin.update(
      {
        title: req.body.title,
        content: req.body.content,
        create_date: new Date(),
      },
      {
        where: {
          bulletin_id: req.body.id,
        },
      }
    );
    return res.status(200).send("success");
  } catch (err) {
    return new Error(err);
  }
});

//hot버튼 누르기
//'http://localhost:3001/bulletin/clickHot'
router.post("/clickHot", async (req, res) => {
  try {
    await Bulletin.increment(
      { hot: 1 },
      { where: { bulletin_id: req.body.id } }
    );
    const hot = await Bulletin.findOne({
      attributes: ["hot"],
      where: {
        bulletin_id: req.body.id,
      },
    });
    return res.status(200).json(hot);
  } catch (err) {
    return new Error(err);
  }
});

// 모바일 게시글 검색
// 'http://localhost:3001/bulletin/search'
// SQL의 LIKE문 사용해서 제목 검색
router.post("/search", async (req, res, next) => {
  try {
    const data = await Bulletin.findAll({
      where: {
        title: {
          [Op.like]: "%" + req.body.title + "%",
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
//모바일 게시글 조회
// 'http://localhost:3001/bulletin/inquery'
router.post("/inquery", async (req, res) => {
  try {
    const data = await Bulletin.findAll({
      order: [["bulletin_id", "DESC"]],
    });
    return res.status(200).json(data);
  } catch (err) {
    console.trace(err);
    return res.status(404);
  }
});

//모바일 게시글 조회수
// 'http://localhost:3001/bulletin/watch'
router.post("/watch", async (req, res) => {
  try {
    await Bulletin.increment(
      { views: 1 },
      { where: { bulletin_id: req.body.id } }
    );
    return res.status(200).send("watch success");
  } catch (err) {
    console.trace(err);
    return res.status(404);
  }
});

// 모바일 게시글 삭제
// 'http://localhost:3001/bulletin/delete'
// PK으로 삭제
router.delete("/delete", async (req, res, next) => {
  try {
    await Bulletin.destroy({
      where: {
        bulletin_id: req.body.bulletin_id,
      },
    });
    return res.status(200).send("success");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
