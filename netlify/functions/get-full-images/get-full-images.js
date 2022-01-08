module.exports.handler = async function (event, context, callback) {
  const property = event.queryStringParameters.property;
  const category = event.queryStringParameters.category;

  let contents = require(`./full-images/${category}-full.json`);

  let data;
  const masterCategories = [
    "commercial",
    "private-homes",
    "mixed-use",
    "hospitality",
  ];
  if (category === "private-homes") {
    let privateHomesCategory = event.queryStringParameters.subCategory;

    data = contents[privateHomesCategory].properties[property].images;
  } else if (masterCategories.includes(category)) {
    data = contents[category].properties[property].images;
  } else {
    const propertyImages = contents[property];
    data = propertyImages ? propertyImages.images : [];
  }
  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(data),
  };
};
