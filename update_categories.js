const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

const idToCategory = {
  12: "bricks", 13: "bricks", 14: "bricks",
  15: "sheets", 16: "sheets", 17: "sheets",
  18: "fencing", 19: "fencing", 20: "fencing", 21: "fencing",
  22: "nails", 23: "nails",
  24: "liquids", 25: "liquids", 26: "liquids", 27: "liquids",
  28: "tile-adhesive", 29: "tile-adhesive"
};

for (const [id, newCat] of Object.entries(idToCategory)) {
    const rx = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?category:\\s*)"materials"`, 'g');
    content = content.replace(rx, `$1"${newCat}"`);
}

fs.writeFileSync('src/data/products.ts', content);
