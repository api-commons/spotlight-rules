---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-no-prepositions
title: Schema Property No Prepositions
severity: info
given: $..properties.*~
message: Property names SHOULD NOT include prepositions (e.g.
description: Property names SHOULD NOT include prepositions (e.g. "for",
  "during", "at", etc.).
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-no-prepositions/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-no-prepositions' (Schema Property No
  Prepositions). Requirement: Property names SHOULD NOT include prepositions
  (e.g. \"for\", \"during\", \"at\", etc.). To fix: Ensure the targeted value
  does NOT match the regular expression
  `(^(about|above|across|after|against|among|around|at|before|behind|below|besi\
  de|between|down|during|for|from|in|inside|into|near|of|off|on|out|over|throug\
  h|to|toward|under|up|with|as|but|like|since|than|till|unlike|until|upon|withi\
  n|without)([A-Z]|$)|.*(About|Above|Across|After|Against|Among|Around|At|Befor\
  e|Behind|Below|Beside|Between|Down|During|For|From|In|Inside|Into|Near|Of|Off\
  |On|Out|Over|Through|To|Toward|Under|Up|With|As|But|Like|Since|Than|Till|Unli\
  ke|Until|Upon|Within|Without)([A-Z]|$)).*`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$..properties.*~` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
