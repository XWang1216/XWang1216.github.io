document.addEventListener("DOMContentLoaded", () => {
  const labels = {
    "EC": "Evolutionary Computation",
    "GNO": "Graph Neural Optimization",
    "Synergy": "Learning & Evolutionary Optimization",
    "Cont.": "Continuous Optimization",
    "Comb.": "Combinatorial Optimization"
  };

  document.querySelectorAll(".bibliography .abbr").forEach(column => {
    const source = column.querySelector("abbr, .badge") || column;
    const raw = source.textContent.trim();
    const firstAuthor = raw.includes("★");

    const parts = raw
      .replace(/★/g, "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    if (!parts.length) return;

    const tags = document.createElement("div");
    tags.className = "pub-tags";

    function addTag(text, type) {
      const tag = document.createElement("span");
      tag.className = `pub-tag pub-tag-${type}`;
      tag.textContent = text;
      tags.appendChild(tag);
    }

    // Journal or conference
    parts.forEach(part => {
      if (!labels[part] && part !== "Other") {
        addTag(part, "venue");
      }
    });

    // Research topics
    parts.forEach(part => {
      if (labels[part]) {
        addTag(labels[part], "topic");
      }
    });

    if (firstAuthor) {
      addTag("First Author", "first");
    }

    const item = column.closest("li");
    if (!item) return;

    const links = item.querySelector(".links");
    const periodical = item.querySelector(".periodical");

    if (links) {
      links.before(tags);
    } else if (periodical) {
      periodical.after(tags);
    } else {
      item.appendChild(tags);
    }

    column.classList.add("pub-abbr-hidden");
  });
});
