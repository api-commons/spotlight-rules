---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-require-tracing-header
title: Path Require Tracing Header
severity: info
given: $.paths.*
message: Header X-B3-Traceid, X-B3-Spanid or traceparent (w3c) missing
description: MUST use b3 or w3c tracing [233a].
experience:
  - reliability
  - governance
  - observability
spec:
  - paths
topic:
  - tracing
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-require-tracing-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-require-tracing-header' (Path Require Tracing Header).
  Requirement: MUST use b3 or w3c tracing [233a]. This rule is evaluated at the
  JSONPath `$.paths.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  path-require-tracing-header:
    title: Path Require Tracing Header
    reference: https://spotlight-rules.com/spec/rules/openapi/path-require-tracing-header/
    description: MUST use b3 or w3c tracing [233a].
    message: Header X-B3-Traceid, X-B3-Spanid or traceparent (w3c) missing
    severity: info
    given: $.paths.*
    then:
      function: baloise:validate-tracing
    tags:
      - format:openapi
      - spec:paths
      - topic:tracing
      - experience:reliability
      - experience:governance
      - experience:observability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-require-tracing-header' (Path Require Tracing Header).
      Requirement: MUST use b3 or w3c tracing [233a]. This rule is evaluated at
      the JSONPath `$.paths.*` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
