---
layout: page
permalink: /publications/
title: publications
description: Publications grouped by research direction.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

## Graph Neural Combinatorial Optimization

{% bibliography --query @*[category=gnn] --group_by none %}

## Evolutionary Computation and Heuristics

{% bibliography --query @*[category=ec] --group_by none %}

## Synergistic Learning and Evolutionary Computation

{% bibliography --query @*[category=synergy] --group_by none %}

## Other Research

{% bibliography --query @*[category=others] --group_by none %}
