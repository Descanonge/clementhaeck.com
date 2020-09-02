---
layout: default
title: CV
dated:
  - education:
    name: Education
    items:
      - title: Ph.D Student
        start: 2019
        end: Present
        location: >-
          Laboratoire d'Océanographie et du Climat:
            Expérimentations et Approches Numérique (LOCEAN)
        description: >-
          Under the supervision of Marina Lévy (LOCEAN) and Laurent Bopp (ENS),
          Study of interactions between oceanic currents and diversity of
          phytoplankton from satellite products
      - title: Master of Science (Master 2) - Fluids Mechanics,
        start: 2018
        end: 2019
        location: École Polytechnique and Sorbonne Universités
      - title: Bachelor of Science (Licence 3) - PhyTEM (Physics, Theory, Experiment, Model) 
        start: 2016
        location: École Normale Supérieure Paris-Saclay

  - internships:
    name: Internships
    items:
      - title: Master thesis internship
        start: 2019
        duration: 6 months
        location: LOCEAN
        description: >-
          Under the supervision of Marina Lévy, Study of interactions between
          oceanic currents and diversity of phytoplankton from satellite
          products
      - title: Pre-doctoral research year abroad (ARPE)
        start: 2017
        end: 2018
        location: >-
          IFISC (Institute for Cross-Disciplinary Physics and Complex Systems),
          Universitat de les Illes Balears, Palma de Mallorca, Spain
        description: >-
          Under the supervision of Cristóbal López, I studied numerically the
          application of network theory and dynamical systems tools to the
          advection of tracers in oceanic flows
      - title: Research internship
        start: 2017
        duration: 5 months
        location: >-
          LIFE (Laboratory for Fluid-Structure Interaction) à Universitat Rovira
          i Virgili, Tarragona, Spain
        description: >-
          Under the supervision of Francisco Huera-Huarte and Sukruth Satheesh,
          I studied experimentally the effect of free surface on a flat plate
          translating perpendicular to the flow
      - title: Research internship
        start: 2016
        duration: 1 month
        location: >-
          PMMH (Physic and Mecanics of Heterogeneous Mediums) at ESPCI (École
          Supérieure de Physique et de Chimie Industrielles de la ville de
          Paris), Paris
        description: >-
          Under the supervision of Ramiro Godoy-Diana and Marion Segall, I
          studied experimentally the flow around head of snakes models
          underwater under acceleration to put in evidence morphologic
          differences between species
---

<div class="cv">
  {% for cat in page.dated %}
    <h2>{{ cat.name }}</h2>
    {% for item in cat.items %}
    <ul>
      <li>
        <span class="cv-title">{{ item.title }}</span>
        <span class="cv-date">{{ item.start }}
          {% if item.end %} - {{ item.end }}
          {% elsif item.duration %} ({{ item.duration }})
          {% endif %}
        </span>
        <p class="cv-location">{{ item.location }}</p>
        {% if item.description %}
        <p class="cv-description">{{ item.description }}</p>
        {% endif %}
      </li>
    </ul>
    {% endfor %}
  {% endfor %}

  <h2>Skills</h2>
  <ul>
    <li>
      <emph>Languages:</emph> French (mother tongue),
      English (C2 Certification of Cambrigde)
    </li>
    <li>
      <emph>Programming languages:</emph> Python, Fortran, Bash, Git, Latex, C++
    </li>
  </ul>
</div>
