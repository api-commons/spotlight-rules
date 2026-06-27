---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: source-arazzo-description-require-url
title: Source Arazzo Description Require URL
severity: info
given: $.sourceDescriptions[*]
message: Source description should have a url.
description: Each source description should declare a url to the referenced
  OpenAPI/Arazzo document.
experience:
  - discoverability
spec:
  - source-descriptions
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/source-arazzo-description-require-url/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'source-arazzo-description-require-url' (Source Arazzo
  Description Require URL). Requirement: Each source description should declare
  a url to the referenced OpenAPI/Arazzo document. To fix: Ensure `url` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.sourceDescriptions[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Arazzo. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  source-arazzo-description-require-url:
    title: Source Arazzo Description Require URL
    reference: https://spotlight-rules.com/spec/rules/arazzo/source-arazzo-description-require-url/
    description: Each source description should declare a url to the referenced
      OpenAPI/Arazzo document.
    message: Source description should have a url.
    given: $.sourceDescriptions[*]
    severity: info
    then:
      field: url
      function: truthy
    tags:
      - format:arazzo
      - spec:source-descriptions
      - experience:discoverability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'source-arazzo-description-require-url' (Source Arazzo
      Description Require URL). Requirement: Each source description should
      declare a url to the referenced OpenAPI/Arazzo document. To fix: Ensure
      `url` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.sourceDescriptions[*]` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid Arazzo. Return only
      the complete corrected document, with no commentary."
---
