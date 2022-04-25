var express = require("express");
var router = express.Router();
const fs = require("fs");
const p = require("path");
const FormData = require("form-data");
const { Readable } = require("stream");
const { XMLHttpRequest } = require("xmlhttprequest");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("결과지 처리하기 위한 라우터에요.");
});

router.get("/register", function (request, response, next) {
  const { path } = request.query;

  if (!fs.existsSync(path)) {
    response.send("입력하신 경로가 없습니다.");
  }

  const files = fs.readdirSync(path);

  if (files.length === 0) {
    response.send("파일이 없습니다.");
  }

  for (const fileName of files) {
    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST", "http://192.168.2.87/api/pdf/extract", false);
    xmlHttpRequest.setRequestHeader("Content-Type", "multipart/form-data");
    const formData = new FormData();

    const readFile = fs.readFileSync(p.join(path, fileName));
    formData.append("files", readFile, { filename: encodeURI(fileName) });
    formData.append("hosId", "6971FF5BCF0B87E16CD3925FA91F629012FDEC5883BB6EB3F153AB8FAFEC54AB");
    formData.append("clientIp", "0.0.0.0");
    formData.append("adminName", "ksh.peernine");
    const result = xmlHttpRequest.send(JSON.stringify(formData));
    console.log("결과", result);
  }

  response.send("성공");
});

module.exports = router;
