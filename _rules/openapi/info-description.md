---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-description
title: Info Description
severity: info
given: $
message: Info "description" must be present and non-empty string.
description: Info "description" must be present and non-empty string.
experience:
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-description' (Info Description). Requirement: Info
  \"description\" must be present and non-empty string. To fix: Ensure
  `info.description` is present and non-empty at each matching location. Make
  the smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  info-description:
    title: Info Description
    reference: https://spotlight-rules.com/spec/rules/openapi/info-description/
    description: Info "description" must be present and non-empty string.
    message: Info "description" must be present and non-empty string.
    severity: info
    given: $
    then:
      field: info.description
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-description' (Info Description). Requirement: Info
      \"description\" must be present and non-empty string. To fix: Ensure
      `info.description` is present and non-empty at each matching location. Make
      the smallest change that satisfies the rule, leave all unrelated content,
      key order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
