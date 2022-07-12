---
title: Bayesian Multilevel Models
slug: bayesian-oysters
date: 2020-12-13T00:00:00+00:00
tags: bayes, hierarchical models, mixed models, random effect, oyster
photo: ben-stern-4n96lyJd2Xs-unsplash.jpg
photoCredit: Photo by Ben Stern on Unsplash
photoURL: https://unsplash.com/photos/4n96lyJd2Xs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
---

# {title}

Multilevel models (also known as linear mixed models) are commonly used to model both fixed and linear effects. In the classical statistical sense, fixed effects are parameters that do not vary (there's some fixed coefficient that describes the true relationship between the parameter and independent variable for the population), while random effects are treated as random variables.The definitions of fixed and random effects can shift, [as Andrew Gelman notes](https://statmodeling.stat.columbia.edu/2005/01/25/why_i_dont_use/).

Multilevel models are particular useful when the data have a hierarchical organization. (For instance, students may be grouped under teachers, who are in turn grouped under schools, which are in turn grouped under districts, which in turn...)

Multilevel models split the difference between aggregating the data within the groups and fitting separate models unique to each group.

In this way, we can see that multilevel models are similar to Bayesian hierarchical models, although classical multilevel models don't put proper priors on the distributions for the unobserved variables.

We can explore these similarities by applying a Bayesian hierarchical approach to a classical multilevel approach.

Specifically, we'll apply a Bayesian hierarchical approach to the data from ["The world is your oyster: low-dose, long-term microplastic exposure of juvenile oysters,"](https://www.cefas.co.uk/data-and-publications/dois/microplastic-effect-data-the-world-is-your-oyster-low-dose-long-term-microplastic-exposure-of-juvenile-oysters/) a study by the [Centre for Environment Fisheries and Aquaculture Science (Cefas)](https://www.cefas.co.uk).

Oysters are superheroes of the sea. These bold bivalves can [filter up to 50 gallons of water per day](https://www.cbf.org/about-the-bay/more-than-just-the-bay/chesapeake-wildlife/eastern-oysters/oyster-fact-sheet.html), purifying waterways. Unfortunately, wild oyster populations have crashed due to overharvesting -- and their filter-feeding makes them particularly vulnerable to ever-increasing levels of pollutants and plastics in our seas.

To better understand the affects of microplastics on oysters, researchers at Cefas conducted a study exposing juvenile oysters (_Crassostrea gigas_) to 4 different concentrations of $6\mu m$ polystyrene microbeads (control $0$, $10^{4}$, $10^{5}$, and $10^{6}$ particles per liter). These concentrations were chosen to represent predicted short-term and long-term environmental scenarios, based on a review of existing literature.

Each of the four treatments was replicated 12 times (for 48 total tanks). Each tank contained two glass rods, each of which had 15 oysters attached (for 30 total oysters per tank).

The study ran for 80 days, with measurements taken on days 10, 20, 40, and 80. For each measurement, oysters were weighed and measured. 15 oysters were sampled to measure condition index (CI), and an additional 10 oysters were sampled to measure lysomal membrane stability (LMS).
