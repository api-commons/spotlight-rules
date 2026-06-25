---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: property-no-prepositions
title: Property No Prepositions
severity: warn
given: $..properties.*~
message: ""
description: 'Property names SHOULD NOT include prepositions (e.g. "for",
  "during", "at", etc.). It requires the targeted value not to match
  `(^(about|above|across|after|against|among|around|at|before|behind|below|beside|between|down|during|for|from|in|inside|into|near|of|off|on|out|over|through|to|toward|under|up|with|as|but|like|since|than|till|unlike|until|upon|within|without)([A-Z]|$)|.*(About|Above|Across|After|Against|Among|Around|At|Before|Behind|Below|Beside|Between|Down|During|For|From|In|Inside|Into|Near|Of|Off|On|Out|Over|Through|To|Toward|Under|Up|With|As|But|Like|Since|Than|Till|Unlike|Until|Upon|Within|Without)([A-Z]|$)).*`
  (evaluated at `$..properties.*~`). Severity: warn.'
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
