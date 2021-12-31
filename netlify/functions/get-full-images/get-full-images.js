module.exports.handler = async function (event, context, callback) {
  const property = event.queryStringParameters.property;
  const category = event.queryStringParameters.category;
  console.log(category);
  let contents = require(`./full-images/${category}-full.json`);
  const propertyImages = contents[property];
  let data = propertyImages ? propertyImages.images : [];
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
