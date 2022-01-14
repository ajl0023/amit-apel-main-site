const videos = require("./data/data.json");
module.exports.handler = async function (event, context, callback) {
  const property = event.queryStringParameters.key;
  if (property) {
    const video = videos.find((video) => {
      return video.key === property;
    });
    return {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin": "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(video),
    };
  } else {
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
  }
};
