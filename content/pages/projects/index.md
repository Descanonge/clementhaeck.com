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

Compute and manipulate histograms from XArray data using [Boost
Histogram](https://boost-histogram.readthedocs.io/) at its core. This package is
similar to the existing [xhistogram](https://xhistogram.readthedocs.io/) but
gives better performance and additional features such as integer bins or
periodic bins.


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

An aid for data analysis project:
- Obtain your parameters from configuration files or command line arguments. Validate them against a structured specification that is easy to write, expandable, and which allows to document every parameter.
- Declare datasets in a flexible way to manage multiple source files, to read and write data; while eventually depending on parameters.
- Setup Dask either on a local machine, or distributed on a cluster (using dask-jobqueue).

## Fronts-Toolbox

{{< button href="https://github.com/Descanonge/filefinder"
>}}<i class="fa fa-gitlab"></i> Gitlab{{</ button >}}

A collection of front-detection algorithms implemented for Python, accelerated with Numba and supporting Numpy, Dask and Xarray data.

The goal of this package is to offer various methods in such a way that they can be easily read and modified by researchers. It provides a common framework to easily add other algorithms, while benefiting from testing and documentation.

## Earth Observatory Homepage

{{< button href="https://github.com/Descanonge/earth-observatory-homepage"
>}}<i class="fa fa-github"></i> Github{{</ button >}}
{{< button href="https://addons.mozilla.org/en-US/firefox/addon/visibleearthhomepage/"
>}}<i class="fa fa-firefox"></i> Addon{{</ button >}}

A Firefox add-on that sets the homepage to the latest image from [NASA Earth Observatory](https://earthobservatory.nasa.gov/topic/image-of-the-day) in full resolution and full-screen.

## Dateloop

{{< button href="https://github.com/Descanonge/dateloop"
>}}<i class="fa fa-github"></i> Github{{</ button >}}

A simple bash command to create lists of dates. Useful for operations on sets of dates.
```sh
$> dateloop 20010227 20010301 -f %Y-%m-%d
2001-02-27 2001-02-28 2001-03-01
```
