---
layout: page
permalink: /projects/
title: publications
description: My publications.
nav: false
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

  if (filter) {
    const input = document.querySelector('input[placeholder="Type to filter"]');

    if (input) {
      input.value = filter;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
    }
  }
});
</script>

{% bibliography %}
