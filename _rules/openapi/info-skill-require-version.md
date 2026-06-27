---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-skill-require-version
title: Info Require Version
severity: info
given: $.info
message: Info MUST Have Version
description: Publishing a version for your OpenAPI technical contract helps you
  communicate change with consumers using Semantic or date-based versioning
  published to the info version property.
experience:
  - versioning
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-skill-require-version/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-skill-require-version' (Info Require Version).
  Requirement: Publishing a version for your OpenAPI technical contract helps
  you communicate change with consumers using Semantic or date-based versioning
  published to the info version property. To fix: Ensure `version` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.info` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  info-skill-require-version:
    title: Info Require Version
    reference: https://spotlight-rules.com/spec/rules/openapi/info-skill-require-version/
    description: Publishing a version for your OpenAPI technical contract helps you
      communicate change with consumers using Semantic or date-based versioning
      published to the info version property.
    message: Info MUST Have Version
    severity: info
    given: $.info
    then:
      field: version
      function: truthy
    tags:
      - format:openapi
      - spec:info
      - experience:versioning
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-skill-require-version' (Info Require Version).
      Requirement: Publishing a version for your OpenAPI technical contract helps
      you communicate change with consumers using Semantic or date-based
      versioning published to the info version property. To fix: Ensure `version`
      is present and non-empty at each matching location. This rule is evaluated
      at the JSONPath `$.info` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
