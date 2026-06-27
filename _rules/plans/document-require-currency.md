---
layout: rule
artifact: plans
artifact_label: Plans
slug: document-require-currency
title: Document Require Currency
severity: info
given: $
message: currency should be present
description: The `currency` property should be present.
experience:
  - governance
  - usability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/document-require-currency/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'document-require-currency' (Document Require Currency).
  Requirement: The `currency` property should be present. To fix: Ensure
  `currency` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid Plans.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-currency:
    title: Document Require Currency
    reference: https://spotlight-rules.com/spec/rules/plans/document-require-currency/
    description: The `currency` property should be present.
    message: currency should be present
    severity: info
    given: $
    then:
      field: currency
      function: truthy
    tags:
      - format:plans
      - spec:document
      - experience:governance
      - experience:usability
    prompt: "You are editing a Plans document to satisfy the Spotlight API
      governance rule 'document-require-currency' (Document Require Currency).
      Requirement: The `currency` property should be present. To fix: Ensure
      `currency` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      Plans. Return only the complete corrected document, with no commentary."
---
