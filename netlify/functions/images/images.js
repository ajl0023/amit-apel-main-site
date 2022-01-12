module.exports.handler = async function (event, context, callback) {
  const category = event.queryStringParameters.category;
  let contents;
  let subCategory = event.queryStringParameters.sub_category;
  const masterCategories = [
    "commercial",
    "private-homes",
    "mixed-use",
    "hospitality",
  ];
  if (category === "private-homes" && !subCategory) {
    contents = require(`./thumbs-images/${category}-thumbs.json`);
  } else if (category && !subCategory && !masterCategories.includes(category)) {
    contents = require(`./thumbs-images/${category}-thumbs.json`);
  } else {
    if (masterCategories.includes(category) && subCategory) {
      let images = require(`./category-images-full/${category}-master.json`);

      contents = images[subCategory].thumbs;
    } else {
      let images = require(`./category-images-full/${category}-master.json`);

      contents = images[category].thumbs;
    }
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
