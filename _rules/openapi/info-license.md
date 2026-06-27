---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-license
title: Info License
severity: info
given: $
message: Info object must have "license" object.
description: Info object must have "license" object.
experience:
  - documentation
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-license/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-license' (Info License). Requirement: Info object must
  have \"license\" object. To fix: Ensure `info.license` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
ruleyaml: >
  info-license:
    title: Info License
    reference: https://spotlight-rules.com/spec/rules/openapi/info-license/
    description: Info object must have "license" object.
    message: Info object must have "license" object.
    severity: info
    given: $
    then:
      field: info.license
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:documentation
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-license' (Info License). Requirement: Info object must
      have \"license\" object. To fix: Ensure `info.license` is present and
      non-empty at each matching location. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
