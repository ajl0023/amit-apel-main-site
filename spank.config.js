const categories = {
  developments: ["maliview", "aviator"],
  design: ["furniture", "sculptures"],
  architecture: [
    "private-homes",
    "multi-family",
    "hospitality",
    "mixed-use",
    "commercial",
  ],
  "apel-design": [
    "meet-amit-apel",
    "meet-the-team",
    "contact-us",
    "malibu-rebuild",
    "press",
    "what-we-do",
  ],
};
const routes = [];
for (const category in categories) {
  if (Object.hasOwnProperty.call(categories, category)) {
    const categoryArr = categories[category];
    routes.push(`/${category}`);
    const formatted = categoryArr.map((page) => {
      return `/${category}/${page}`;
    });
    routes.push(...formatted);
  }
}

routes.push("/");

module.exports = {
  sitemap: [...routes],
};
