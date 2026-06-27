---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-info-summary
title: Arazzo Info Summary
severity: info
given: $
message: Info "summary" is recommended be present and be a non-empty string.
description: Info "summary" is recommended be present and be a non-empty string.
experience:
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-info-summary/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-info-summary' (Arazzo Info Summary). Requirement: Info
  \"summary\" is recommended be present and be a non-empty string. To fix:
  Ensure `info.summary` is present and non-empty at each matching location. Make
  the smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid Arazzo.
  Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  arazzo-info-summary:
    title: Arazzo Info Summary
    reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-info-summary/
    description: Info "summary" is recommended be present and be a non-empty string.
    message: Info "summary" is recommended be present and be a non-empty string.
    severity: info
    given: $
    then:
      field: info.summary
      function: truthy
    tags:
      - format:arazzo
      - spec:document
      - experience:documentation
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'arazzo-info-summary' (Arazzo Info Summary). Requirement:
      Info \"summary\" is recommended be present and be a non-empty string. To
      fix: Ensure `info.summary` is present and non-empty at each matching
      location. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid Arazzo. Return only the complete corrected document, with
      no commentary."
---
