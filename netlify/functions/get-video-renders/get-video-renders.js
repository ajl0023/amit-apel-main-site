const videos = require("./data/data.json");
module.exports.handler = async function (event, context, callback) {
  console.log(234);
  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(videos),
  };
};
