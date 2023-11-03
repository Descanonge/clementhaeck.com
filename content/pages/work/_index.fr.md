---
title: Mon travail
slug: mon-travail
type: docs
---

# Mon travail

## Thèse

Les études de ces deux dernières décennies semblent montrer que les courants océaniques de fines échelles (d'ordre de grandeur entre 1km et 10km) ont une forte influence sur le phytoplancton.
Néanmoins, quantifier exactement leur impact sur l’écosystème dans son ensemble -- c'est à dire sur des régions typiquement de milliers de kilomètres de large -- est difficile.
Pendant ma thèse, j'ai donc essayé de quantifier l'impact des fronts (des structures importantes aux fines échelles) sur le phytoplancton dans une large zone autour du Gulf Stream, en utilisant l'imagerie satellitaire.

{{< figure
    src="jet_combined_s.jpg"
    alt="Images satellite de la température et de la chlorophylle dans les méandres du Gulf Stream"
    caption="Les méandres du Gulf Stream depuis l'espace: Chlorophylle-a (en haut) and température (en bas). Données MODIS-Aqua L2, 2007-04-22."
    class="work-illustration"
>}}

Nous utilisons la température de surface (SST) satellite afin de détecter les fronts.
Nous quantifions ensuite la chlorophylle (toujours satellite) à l'intérieur et à l'extérieur de ces fronts.

Faisons d'abord remarquer l'importance (et la difficulté éventuelle) de séparer les régions aux régimes biogéochimiques différents, ainsi que de considérer les éventuels gradients de large échelle au sein de ces régions.
Nous montrons ensuite l'impact *local* des fronts important dans certaines régions, impact d'autant plus considérable que *l'intensité* des fronts est élevée.
<span title="pif en plus">Néanmoins</span> à l'échelle de toute la bio-région, et en prenant en compte la surface occupée par les fronts, nous mesurons un impact global beaucoup plus faible.

{{< figure
    src="article_recap_thumb.png"
    caption="[Haëck et al. 2023, figure 9.](https://bg.copernicus.org/articles/20/1741/2023/#Ch1.F9)"
    class="work-illustration"
>}}

Par ailleurs, nous avons montré un démarrage du bloom survenant plus tôt dans les fronts qu'en dehors, d'une à deux semaine.

Ces résultats sont présentés dans l'article ["Satellite data reveal earlier and stronger phytoplankton blooms over fronts in the Gulf Stream region"](https://doi.org/10.5194/bg-20-1741-2023), ainsi que dans mon [manuscrit de thèse](https://theses.hal.science/tel-04249198).

## Ouvertures

Je continue à travailler sur la méthodologie mise en place.
Nous avons commencé à l'appliquer à des données sur la composition du phytoplancton, générées par Roy El Hourany[^1].
Elle a également été appliquée dans la zone du courant Californien[^2], dans l'optique (entre autres) d'étendre les résultats ci-dessus à d'autres régions.
Plusieurs pistes d'études sont également considérées: tendances décennales, influence de certains paramètres de la méthodologie (au delà de ce qui a déjà été testé),...

L'ensemble des scripts utilisés sont disponibles sur le dépôt [gitlab.in2p3.fr/clementhaeck/submeso-color](https://gitlab.in2p3.fr/clementhaeck/submeso-color).
Je suis en train de les remanier afin de les rendre plus accessible et plus facilement réutilisables, en deux projets séparés [heterogeneity-index](https://gitlab.in2p3.fr/biofronts/heterogeneity-index) et [data-assistant](https://gitlab.in2p3.fr/biofronts/data-assistant).


[^1]: El Hourany R., Abboud‐Abi Saab M., Faour G., Aumont O., Crépon M., Thiria S.
    “Estimation of Secondary Phytoplankton Pigments from Satellite Observations Using Self-Organizing Maps (SOMs)”.
    *J. Geophys. Res. Oceans* **124.2** (fév. 2019), p. 1357-1378.
    [doi:10.1029/2018jc014450](https://doi.org/10.1029/2018jc014450)

[^2]: Mangolte I., Lévy M., Haëck C., Ohman M.D.
    “Sub-frontal niches of plankton communities driven by transport and trophic interactions at ocean fronts”.
    *Biogeosciences* **20**, (août 2023).
    [doi:10.5194/bg-20-3273-2023](https://doi.org/doi:10.5194/bg-20-3273-2023)
