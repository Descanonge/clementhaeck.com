---
title: Mon travail
slug: mon-travail
type: docs
---

# Mon travail

Les études de ces deux dernières décennies semblent montrer que les courants océaniques de fines échelles (d'ordre de grandeur entre 1km et 10km) ont une forte influence sur le phytoplancton.
Néanmoins, quantifier exactement leur impact sur l’écosystème dans son ensemble -- c'est à dire sur des régions typiquement de milliers de kilomètres de large -- est difficile.

## Thèse

Pendant ma thèse, j'ai donc essayé de quantifier l'impact des fronts (des structures importantes aux fines échelles) sur le phytoplancton dans une large zone autour du Gulf Stream, en utilisant l'imagerie satellitaire.

{{< figure
    src="jet_combined_s.jpg"
    alt="Images satellite de la température et de la chlorophylle dans les méandres du Gulf Stream"
    caption="Les méandres du Gulf Stream depuis l'espace: Chlorophylle-a (en haut) and température (en bas). Données MODIS-Aqua L2, 2007-04-22."
    class="work-illustration"
>}}

Nous détectons les fronts en calculant un 'Heterogeneity Index' à partir de la température de surface de la mer satellite (Haëck et al. 2023[^1], Liu & Levine 2016[^2]).

Ensuite, nous avons quantifié la chlorophylle (également à partir de données satellites) à l'intérieur et à l'extérieur de ces fronts. Ce travail a été rendu difficile par la présence de régions de régimes biogéochimiques différents, et de gradients à grande échelle au sein de ces régions.

Nous montrons l'importance de distinguer l'impact des fronts mesurés *localement*, et *régionalement* en tenant compte de la surface impactée. Nous observons égalment que l'impact des fronts dépend de leur intensité.
Enfin, nous avons pu mesurer un début de bloom plus précoce dans les fronts, d'une à deux semaines.

{{< figure
    src="article_recap_thumb.png"
    caption="[Haëck et al. 2023, figure 9.](https://bg.copernicus.org/articles/20/1741/2023/#Ch1.F9)"
    class="work-illustration"
>}}

Ces résultats sont présentés dans l'article: ["Satellite data reveal earlier and stronger phytoplankton blooms over fronts in the Gulf Stream region"](https://doi.org/10.5194/bg-20-1741-2023), ainsi que dans mon [manuscrit de thèse](https://theses.hal.science/tel-04249198).

## Présent

Je continue à travailler sur la méthodologie mise en place.
Nous avons commencé à l'appliquer à des données sur la composition du phytoplancton, générées par Roy El Hourany[^3].
Elle a également été appliquée dans la zone du courant Californien[^4], dans l'optique (entre autres) d'étendre les résultats ci-dessus à d'autres régions.
Dans le cadre du projet [4DMED-Sea](http://ricerca.ismar.cnr.it/4DMED/Phyto_c1.html#), cette méthodologie sera appliquée à la mer mediterranée.
Plusieurs autres pistes d'études sont également considérées: tendances décennales, influence de certains paramètres de la méthodologie (au delà de ce qui a déjà été testé),...

Quand bien même les codes utilisés sont déjà disponibles publiquement (<a  href="https://gitlab.in2p3.fr/clementhaeck/submeso-color">gitlab.in2p3.fr/clementhaeck/submeso-color</a>), je travaille à les rendre plus accessibles et plus facilement réutilisables. Ils sont séparés en deux projets: <a href="{{< relref "/pages/projects#heterogeneity-index" >}}">heterogeneity-index</a> et <a href="{{< relref "/pages/projects#data-assistant" >}}">data-assistant</a>.

[^1]: Haëck C., Lévy M., Mangolte I., Bopp L.
    “Satellite Data Reveal Earlier and Stronger Phytoplankton Blooms over Fronts in the Gulf Stream Region”.
    *Biogeosciences* **20.9** (may 2023).
    [doi:10.5194/bg-20-1741-2023](https://doi.org/10.5194/bg-20-1741-2023)
    
[^2]: Liu X., Levine N. M.
    “Enhancement of Phytoplankton Chlorophyll by Submesoscale Frontal Dynamics in the North Pacific Subtropical Gyre”.
    *Geophys. Res. Lett.* **43.4** (2016).
    [doi:10.1002/2015gl066996](https://doi.org/10.1002/2015gl066996)

[^3]: El Hourany R., Abboud‐Abi Saab M., Faour G., Aumont O., Crépon M., Thiria S.
    “Estimation of Secondary Phytoplankton Pigments from Satellite Observations Using Self-Organizing Maps (SOMs)”.
    *J. Geophys. Res. Oceans* **124.2** (feb. 2019), p. 1357-1378.
    [doi:10.1029/2018jc014450](https://doi.org/10.1029/2018jc014450)

[^4]: Mangolte I., Lévy M., Haëck C., Ohman M.D.
    “Sub-frontal niches of plankton communities driven by transport and trophic interactions at ocean fronts”.
    *Biogeosciences* **20.15**, (aug. 2023).
    [doi:10.5194/bg-20-3273-2023](https://doi.org/10.5194/bg-20-3273-2023)
