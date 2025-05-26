---
title: Projects
type: docs
---

# Projects

## Tol-colors

{{< button href="https://github.com/Descanonge/tol_colors"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://pypi.org/project/tol-colors"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

A package which supplies color schemes for lines and maps, all color-blind safe.
They were designed by [Paul Tol](https://personal.sron.nl/~pault/), I merely made it available on PyPi to make it easier to install and use.
For example the default scheme ('bright):
{{< figure 
    src="cset_bright.svg"
    class="work-illustration"
    alt="color samples from the bright color scheme"
>}}

## XArray-histogram

{{< button href="https://github.com/Descanonge/xarray-histogram"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://pypi.org/project/xarray-histogram"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

Compute and manipulate histograms from XArray using [Boost Histogram](https://boost-histogram.readthedocs.io/) at its core.
This package is similar to the existing [xhistogram](https://xhistogram.readthedocs.io/) but at its core uses  instead of Numpy functions.
This gives better performance and additional features such as integer bins or periodic bins.


## FileFinder

{{< button href="https://github.com/Descanonge/filefinder"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://pypi.org/project/filefinder"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

Find files from their filename structure, with a simple yet powerful syntax.
Useful for working with databases with many different files.
For example files with different dates and depth:
```python
finder = Finder('/root_folder/', '%(Y)/SST_%(Y)%(m)%(d)_%(depth:fmt=.1f).nc')
files = finder.get_files()
```

## Data-assistant

{{< button href="https://gitlab.in2p3.fr/biofronts/data-assistant"
>}}<i class="fa fa-gitlab"></i> Gitlab{{</ button >}}

Help jump-start a data analysis project:
- Obtain your parameters from a configuration file or command line arguments. Validate them against a structured specification that is easy to write, expandable, and which allows to document every parameter.
- Declare datasets in a flexible way to manage varying parameters, multiple files, to read/write the data, etc.
- Setup Dask either on a local machine, or distributed on a cluster (using dask-jobqueue).

## Heterogeneity-Index

{{< button href="https://gitlab.in2p3.fr/biofronts/heterogeneity-index"
>}}<i class="fa fa-gitlab"></i> Gitlab{{</ button >}}
{{< button href="https://pypi.org/project/heterogeneity-index"
>}}<i class="fa-brands fa-python"></i> PyPi{{</ button >}}

A Python library to compute the Heterogeneity Index, as defined in [Haëck et al. (2023)](https://doi.org/10.5194/bg-20-1741-2023) and [Liu & Levine (2016)](https://doi.org/10.1002/2015gl066996).

It can be viewed as an example of a complex front detection algorithm implemented in Python but still competitive thanks to Numba. It can run on numpy, dask, or xarray arrays.
As such the project could support other front detection methods.

## VisibleEarth Homepage

{{< button href="https://github.com/Descanonge/visible-earth-home"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

Because having as a homepage the latest image from [NASA VisibleEarth](http://visibleearth.nasa.gov) in full resolution and full-screen, is really nice.

## Dateloop

{{< button href="https://github.com/Descanonge/dateloop"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

A simple bash command to create lists of dates. Useful for operations on sets of dates.
```sh
$> dateloop 20010227 20010301 -f %Y-%m-%d
2001-02-27 2001-02-28 2001-03-01
```
