---
layout: page
permalink: /publications/
title: publications
description: My publications.
nav: true
nav_order: 2
---

**Legend:**<br>
**EC** = Evolutionary Computation;  
**GNO** = Graph Neural Optimization;  
**Synergy** = Graph Learning × Evolutionary Computation;  
**Cont.** = Continuous Optimization;  
**Comb.** = Combinatorial Optimization;  
**★** = First-author publication.

{% include bib_search.liquid %}

<script>
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  if (!filter) return;

  function applyFilter() {
    const input =
      document.querySelector("#bibsearch") ||
      document.querySelector("input[type='search']") ||
      document.querySelector("input[placeholder='Type to filter']") ||
      document.querySelector(".bibsearch input");

    if (!input) return false;

    input.value = filter;

    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: filter.slice(-1) || "a" }));

    return true;
  }

  if (!applyFilter()) {
    setTimeout(applyFilter, 300);
    setTimeout(applyFilter, 800);
    setTimeout(applyFilter, 1500);
  }
});
</script>

{% bibliography %}
