---
layout: rule
artifact: plans
artifact_label: Plans
slug: document-require-description
title: Document Require Description
severity: info
given: $
message: description should be present
description: The `description` property should be present.
experience:
  - documentation
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/document-require-description/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'document-require-description' (Document Require Description).
  Requirement: The `description` property should be present. To fix: Ensure
  `description` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid Plans.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-description:
    title: Document Require Description
    reference: https://spotlight-rules.com/spec/rules/plans/document-require-description/
    description: The `description` property should be present.
    message: description should be present
    severity: info
    given: $
    then:
      field: description
      function: truthy
    tags:
      - format:plans
      - spec:document
      - experience:documentation
      - experience:governance
    prompt: "You are editing a Plans document to satisfy the Spotlight API
      governance rule 'document-require-description' (Document Require
      Description). Requirement: The `description` property should be present. To
      fix: Ensure `description` is present and non-empty at each matching
      location. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid Plans. Return only the complete corrected document, with
      no commentary."
---
