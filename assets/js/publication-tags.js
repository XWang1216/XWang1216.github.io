document.addEventListener("DOMContentLoaded", () => {
  const labels = {
    EC: "Evolutionary Computation",
    GNO: "Graph Neural Optimization",
    Synergy: "Learning & Evolutionary Optimization",
    "Cont.": "Continuous Optimization",
    "Comb.": "Combinatorial Optimization",
  };

  document.querySelectorAll(".bibliography .abbr").forEach((column) => {
    const source = column.querySelector("abbr, .badge") || column;
    const raw = source.textContent.trim();
    const firstAuthor = raw.includes("★");

    const parts = raw
      .replace(/★/g, "")
      .split(",")
      .map((s) => s.trim())
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

    // Research topics
    parts.forEach((part) => {
      if (labels[part]) {
        addTag(labels[part], "topic");
      }
    });

    const item = column.closest("li");
    if (!item) return;

    const title = item.querySelector(".title");

    if (title) {
      title.appendChild(document.createTextNode(" "));
      title.appendChild(tags);
    }

    // Hide old abbreviation badges, but keep publication thumbnails
column.querySelectorAll("abbr.badge").forEach((badge) => {
  badge.style.setProperty("display", "none", "important");
});
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bibliography .links").forEach((links) => {
    const doi = Array.from(links.querySelectorAll("a")).find(
      (link) => link.textContent.trim().toLowerCase() === "doi" || /doi\.org\//i.test(link.href)
    );

    if (!doi) return;

    doi.textContent = "[paper]";
    doi.className = "pub-paper-link";

    links.replaceChildren(doi);
  });
});
// Highlight IEEE Transactions journal names
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bibliography .periodical em").forEach((journal) => {
    if (/^IEEE Transactions\b/i.test(journal.textContent.trim())) {
      journal.classList.add("ieee-trans-journal");
    }
  });
});


/* Add code links to publications */

document.addEventListener("DOMContentLoaded", () => {
  const repositories = [
    {
      keywords: ["identifying", "decision variables"],
      url: "https://github.com/XWang1216/MOEA-NZD",
    },
    {
      keywords: ["adaptive merging", "offspring generation"],
      url: "https://github.com/XWang1216/AC-MMEA",
    },
    {
      keywords: ["enhanced competitive swarm optimizer", "sparse operator"],
      url: "https://github.com/XWang1216/S-ECSO",
    },
    {
      keywords: ["cluster based competitive particle swarm optimizer"],
      url: "https://github.com/XWang1216/ST-CCPSO",
    },
    {
      keywords: ["size imbalanced dual population"],
      url: "https://github.com/XWang1216/MMEA-IDC",
    },
  ];

  const normalize = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  document.querySelectorAll(".bibliography li").forEach((item) => {
    const title = item.querySelector(".title");
    if (!title) return;

    const text = normalize(title.textContent);

    const repository = repositories.find((repo) =>
      repo.keywords.every((keyword) => text.includes(keyword))
    );

    if (!repository) return;

    const links = item.querySelector(".links");
    if (!links || links.querySelector(".pub-code-link")) return;

    const codeLink = document.createElement("a");
    codeLink.href = repository.url;
    codeLink.textContent = "[code]";
    codeLink.className = "pub-code-link";
    codeLink.target = "_blank";
    codeLink.rel = "noopener noreferrer";

    links.appendChild(codeLink);
  });
});

