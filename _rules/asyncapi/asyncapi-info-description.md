---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-info-description
title: Asyncapi Info Description
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
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-info-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-info-description' (Asyncapi Info Description).
  Requirement: Info \"description\" must be present and non-empty string. To
  fix: Ensure `info.description` is present and non-empty at each matching
  location. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
ruleyaml: >
  asyncapi-info-description:
    title: Asyncapi Info Description
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-info-description/
    description: Info "description" must be present and non-empty string.
    message: Info "description" must be present and non-empty string.
    severity: info
    given: $
    then:
      field: info.description
      function: truthy
    tags:
      - format:asyncapi
      - spec:document
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-info-description' (Asyncapi Info Description).
      Requirement: Info \"description\" must be present and non-empty string. To
      fix: Ensure `info.description` is present and non-empty at each matching
      location. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid AsyncAPI. Return only the complete corrected document,
      with no commentary."
---
