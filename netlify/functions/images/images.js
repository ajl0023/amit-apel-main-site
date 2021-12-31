module.exports.handler = async function (event, context, callback) {
  const category = event.queryStringParameters.category;
  let contents;
  if (category) {
    contents = require(`./thumbs-images/${category}-thumbs.json`);
    console.log(contents);
  }

  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(contents),
  };
};
