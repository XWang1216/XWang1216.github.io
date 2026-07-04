---
layout: page
permalink: /publications/
title: publications
description: My publications.
nav: true
nav_order: 2
---

**Legend:**<br>
**EC** = Evolutionary Computation;<br>
**GNO** = Graph Neural Optimization;<br>
**Synergy** = Graph Learning × Evolutionary Computation;<br>
**Cont.** = Continuous Optimization; **Comb.** = Combinatorial Optimization;<br>
**★** = First-author publication.

{% include bib_search.liquid %}

{% bibliography %}

<script>
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  if (!filter) return;

  const query = filter.toLowerCase();

  function applyCustomFilter() {
    const input =
      document.querySelector("input[placeholder='Type to filter']") ||
      document.querySelector("input[type='search']") ||
      document.querySelector("#bibsearch");

    if (input) {
      input.value = filter;
    }

    const entries = document.querySelectorAll(".bibliography li");

    if (!entries.length) return false;

    entries.forEach(function (entry) {
      const text = entry.textContent.toLowerCase();

      if (text.includes(query)) {
        entry.style.display = "";
      } else {
        entry.style.display = "none";
      }
    });

    return true;
  }

  if (!applyCustomFilter()) {
    setTimeout(applyCustomFilter, 300);
    setTimeout(applyCustomFilter, 800);
    setTimeout(applyCustomFilter, 1500);
  }
});
</script>
