---
layout: page
permalink: /publications/
title: publications
description: Publications grouped by research direction.
nav: true
nav_order: 2

toc:
  sidebar: left
  collapse: expanded
---

{% include bib_search.liquid %}

## Graph Neural Combinatorial Optimization

{% bibliography --query @*[category=gnn] %}

## Evolutionary Computation and Heuristics

{% bibliography --query @*[category=ec] %}

## Synergistic Learning and Evolutionary Computation

{% bibliography --query @*[category=synergy] %}

## Other Research

{% bibliography --query @*[category=others] %}
