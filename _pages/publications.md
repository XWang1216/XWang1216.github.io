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

## All Publications

{% bibliography --group_by none %}

## Graph Neural Combinatorial Optimization

{% bibliography --query @*[category=gnn] --group_by none %}

## Evolutionary Computation and Heuristics

{% bibliography --query @*[category=ec] --group_by none %}

## Synergistic Learning and Evolutionary Computation

{% bibliography --query @*[category=synergy] --group_by none %}

## Other Research

{% bibliography --query @*[category=others] --group_by none %}
