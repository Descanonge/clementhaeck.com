---
title: Projets
slug: projets
type: docs
---

# Projets

## Tol-colors

{{< button href="https://github.com/Descanonge/tol_colors"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://pypi.org/project/tol-colors"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

Un paquet qui donne accès à des sets de couleurs pour des lignes ou des cartes, tous adaptés aux personnes daltoniennes.
Ces jeux de couleurs ont été créés par [Paul Tol](https://personal.sron.nl/~pault/), je les ai seulement rendus accessibles sur Pypi.
Ci-dessous le set de couleur par défaut ('bright'):
{{< figure 
    src="cset_bright.svg"
    class="work-illustration"
    alt="échantillon de couleurs du set dit bright"
>}}

## Xarray-histogram

{{< button href="https://github.com/Descanonge/xarray-histogram"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://pypi.org/project/xarray-histogram"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

Ce paquet est semblable à [xhistogram](https://xhistogram.readthedocs.io/) mais utilise [Boost Histogram](https://boost-histogram.readthedocs.io/) plutôt que des fonctions Numpy.
Cela permet de meilleures performances et des fonctionnalités supplémentaires comme des bins entiers ou périodiques.

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

## Data-assistant

{{< button href="https://gitlab.in2p3.fr/biofronts/data-assistant"
>}}<i class="fa fa-gitlab"></i> Gitlab{{</ button >}}

Une aide pour des projets d'analyse:
- Obtenez vos paramètres à partir de fichiers de configuration ou depuis la ligne de commande. Validez-les par rapport à une définition structurée facile à rédiger, extensible, et qui permet de documenter chaque paramètre.
- Déclarez des jeux de données de manière flexible afin de gérer de multiples fichiers, la lecture/écriture des données, le tout pouvant dépendre de paramètres.
- Configurez Dask soit sur une machine locale, soit de manière distribuée sur un cluster (en utilisant dask-jobqueue).

## Heterogeneity-Index

{{< button href="https://gitlab.in2p3.fr/biofronts/heterogeneity-index"
>}}<i class="fa fa-gitlab"></i> Gitlab{{</ button >}}
{{< button href="https://pypi.org/project/heterogeneity-index"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

Une bibliothèque Python pour calculer l'Heterogeneity Index, tel que défini dans [Haëck et al. (2023)](https://doi.org/10.5194/bg-20-1741-2023) et [Liu & Levine (2016)](https://doi.org/10.1002/2015gl066996).

On peut considérer ce projet comme un exemple d'algorithme complexe de détection de fronts, implémenté en Python mais restant compétitif grâce à Numba. Il peut fonctionner sur des tableaux numpy, dask ou xarray.
Ce projet pourrait fournir une base à d'autres méthodes de détection de fronts, qui pourraient y être incluses.

## VisibleEarth Homepage

{{< button href="https://github.com/Descanonge/earth-observatory-homepage"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

Une extension Firefox qui met en page d'accueil la dernière image de [NASA Earth Observatory](https://earthobservatory.nasa.gov/topic/image-of-the-day) en pleine résolution.

## Dateloop

{{< button href="https://github.com/Descanonge/dateloop"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

Une simple commande bash pour créer des ensembles de dates. Utile pour des opérations sur des ensembles de dates.
```sh
$> dateloop 20010227 20010301 -f %Y-%m-%d
2001-02-27 2001-02-28 2001-03-01
```
