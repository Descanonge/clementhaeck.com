---
title: Projets
slug: projets
type: docs
---

# Projets

Voici quelques projets, plus ou moins reliés à mon travail, et dont certains pourraient je l'espère vous intéresser.

## FileFinder

{{< button href="https://github.com/Descanonge/filefinder"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://pypi.org/project/filefinder"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

Trouvez des fichiers grâce à la structure de leur nom de fichier, avec une syntaxe simple mais puissante.
Utile pour gérer des bases de données constituées de beaucoup de fichiers, pour de multiples dates ou paramètres; par exemple ici la date et la profondeur:
```python
finder = Finder('/root_folder/', '%(Y)/SST_%(Y)%(m)%(d)_%(depth:fmt=.1f).nc')
files = finder.get_files()
```

## Tol-colors

{{< button href="https://github.com/Descanonge/tol_colors"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://pypi.org/project/tol-colors"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

Un paquet qui donne accès à des sets de couleurs pour des lignes ou des cartes, tous adaptés aux personnes daltoniennes.
Ces jeux de couleurs ont été créés par [Paul Tol](https://personal.sron.nl/~pault/), je les ai seulement rendus accessibles sur Pypi.
Ci-dessous un des set de couleurs disponible ('vibrant'):
{{< figure 
    src="scheme_vibrant.png"
    class="work-illustration"
    alt="échantillon de couleurs du set dit 'vibrant'"
>}}

## Data-assistant

{{< button href="https://gitlab.in2p3.fr/biofronts/data-assistant"
>}}<i class="fa fa-gitlab"></i> Gitlab{{</ button >}}

Démarrez un projet d'analyse de données:
- Obtenez vos paramètres à partir d'un fichier de configuration ou depuis la ligne de commande. Validez-les par rapport à une définition structurée facile à rédiger, extensible, et qui permet de documenter chaque paramètre.
- Déclarez des jeux de données de manière flexible afin de gérer des paramètres variables, de multiples fichiers, la lecture/écriture des données, etc.
- Configurez Dask soit sur une machine locale, soit de manière distribuée sur un cluster (en utilisant dask-jobqueue).

## Heterogeneity-Index

{{< button href="https://gitlab.in2p3.fr/biofronts/heterogeneity-index"
>}}<i class="fa fa-gitlab"></i> Gitlab{{</ button >}}

Une bibliothèque Python pour calculer l'Heterogeneity Index -- tel que défini dans [Haëck et al. (2023)](https://doi.org/10.5194/bg-20-1741-2023) et [Liu & Levine (2016)](https://doi.org/10.1002/2015gl066996) -- ainsi que certains diagnostics associés (détection de fronts, statistiques de variables dans et hors des fronts).

On peut considérer ce projet comme un exemple d'algorithme complexe de détection de fronts, implémenté en Python mais restant compétitif grâce à Numba. Il peut fonctionner sur des tableaux numpy, dask ou xarray.
Ce projet pourrait fournir une base à d'autres méthodes de détection de fronts, qui pourraient y être incluses.

## Xarray-histogram

{{< button href="https://github.com/Descanonge/xarray-histogram"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

J'utilise fréquemment des histogrammes comme résultats intermédiaires pour réduire le volume de données à analyser.
J'ai un peu exploré des moyens de construire efficacement des histogrammes sur de grands ensembles de données.
Il s'agit ici d'une tentative d'utiliser [Boost Histogram](https://boost-histogram.readthedocs.io/) et son équivalent Dask [dask-histogram](https://dask-histogram.readthedocs.io/en/stable/).

J'ai constaté des calculs plus rapides qu'avec numpy ou [xhistogram](https://github.com/xgcm/xhistogram), mais je ne suis présentement pas certain si c'est toujours le cas pour des données très volumineuses.

## VisibleEarth Homepage

{{< button href="https://github.com/Descanonge/visible-earth-home"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

De quoi avoir comme page d'accueil la dernière image de [NASA VisibleEarth](http://visibleearth.nasa.gov) en pleine résolution.

## Dateloop

{{< button href="https://github.com/Descanonge/dateloop"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

Une simple commande bash pour créer des ensembles de dates. Utile pour des opérations sur des ensembles de dates.
```sh
$> dateloop 20010227 20010301 -f %Y-%m-%d
2001-02-27 2001-02-28 2001-03-01
```
