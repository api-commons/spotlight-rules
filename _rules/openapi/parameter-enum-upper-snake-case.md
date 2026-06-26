---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-enum-upper-snake-case
title: Parameter Enum Upper Snake Case
severity: info
given: $.components.parameters.*.enum.*
message: Parameters Enums MUST Must Be Upper Snake Case
description: Keeping parameters enumerator casing consistent across APIs helps
  reduce confusion by consumers, and can keep aligned with services and
  applications putting an API to work.
experience:
  - naming
  - consistency
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-enum-upper-snake-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-enum-upper-snake-case' (Parameter Enum Upper Snake
  Case). Requirement: Keeping parameters enumerator casing consistent across
  APIs helps reduce confusion by consumers, and can keep aligned with services
  and applications putting an API to work. To fix: Ensure the targeted value
  does NOT match the regular expression `^[A-Z]+(?:_[A-Z]+)*$`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.components.parameters.*.enum.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
