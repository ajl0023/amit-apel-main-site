const fs = require("fs");
const acorn = require("acorn");
const walk = require("acorn-walk");
const requireFromString = require("require-from-string");
export default function preprocessFetch() {
  return {
    async script({ content, attributes }) {
      if (attributes.role !== "build-vars") return;
      const tree = acorn.parse(content, { sourceType: "module" });
      let start, end;

      walk.simple(tree, {
        FunctionDeclaration(node) {
          if (node.id.name === "buildTime") {
            start = node.body.start;
            end = node.body.end;
          }
        },
      });
    },
  };
}
