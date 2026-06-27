---
layout: rule
artifact: plans
artifact_label: Plans
slug: document-require-name
title: Document Require Name
severity: info
given: $
message: name should be present
description: The `name` property should be present.
experience:
  - data-modeling
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/document-require-name/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'document-require-name' (Document Require Name). Requirement:
  The `name` property should be present. To fix: Ensure `name` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Plans. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-name:
    title: Document Require Name
    reference: https://spotlight-rules.com/spec/rules/plans/document-require-name/
    description: The `name` property should be present.
    message: name should be present
    severity: info
    given: $
    then:
      field: name
      function: truthy
    tags:
      - format:plans
      - spec:document
      - experience:data-modeling
      - experience:governance
    prompt: "You are editing a Plans document to satisfy the Spotlight API
      governance rule 'document-require-name' (Document Require Name).
      Requirement: The `name` property should be present. To fix: Ensure `name` is
      present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid Plans. Return only the
      complete corrected document, with no commentary."
---
