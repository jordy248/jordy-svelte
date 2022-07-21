---
title: Bayesian Multilevel Models
slug: bayesian-oysters
date: 2020-12-13T00:00:00+00:00
updated:
tags: bayes, hierarchical models, mixed models, random effect, oyster
description: Bayesian hierarchical analysis of plastic exposure to juvenile oysters.
image: ben-stern-4n96lyJd2Xs-unsplash.jpg
imageCredit: Photo by Ben Stern on Unsplash
imageURL: https://unsplash.com/photos/4n96lyJd2Xs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
---

<script>
  import Math from "$lib/math/index.svelte";
</script>

Multilevel models (also known as linear mixed models) are commonly used to model both fixed and linear effects. In the classical statistical sense, fixed effects are parameters that do not vary (there's some fixed coefficient that describes the true relationship between the parameter and independent variable for the population), while random effects are treated as random variables. The definitions of fixed and random effects can shift, [as Andrew Gelman notes](https://statmodeling.stat.columbia.edu/2005/01/25/why_i_dont_use/).

Multilevel models are particular useful when the data have a hierarchical organization. (For instance, students may be grouped under teachers, who are in turn grouped under schools, which are in turn grouped under districts, which in turn...)

Multilevel models split the difference between aggregating the data within the groups and fitting separate models unique to each group.

In this way, we can see that multilevel models are similar to Bayesian hierarchical models, although classical multilevel models don't put proper priors on the distributions for the unobserved variables.

We can explore these similarities by applying a Bayesian hierarchical approach to a classical multilevel approach.

Specifically, we'll apply a Bayesian hierarchical approach to the data from ["The world is your oyster: low-dose, long-term microplastic exposure of juvenile oysters,"](https://www.cefas.co.uk/data-and-publications/dois/microplastic-effect-data-the-world-is-your-oyster-low-dose-long-term-microplastic-exposure-of-juvenile-oysters/) a study by the Centre for Environment Fisheries and Aquaculture Science [(Cefas)](https://www.cefas.co.uk).

Oysters are superheroes of the sea. These bold bivalves [can filter](https://www.cbf.org/about-the-bay/more-than-just-the-bay/chesapeake-wildlife/eastern-oysters/oyster-fact-sheet.html) up to 50 gallons of water per day, purifying waterways. Unfortunately, wild oyster populations have crashed due to overharvesting -- and their filter-feeding makes them particularly vulnerable to ever-increasing levels of pollutants and plastics in our seas.

To better understand the affects of microplastics on oysters, researchers at Cefas conducted a study exposing juvenile oysters (_Crassostrea gigas_) to 4 different concentrations of <Math equation="V=\frac{1}{3}\pi r^2 h" inline="true" />