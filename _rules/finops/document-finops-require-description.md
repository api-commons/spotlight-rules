---
layout: rule
artifact: finops
artifact_label: FinOps
slug: document-finops-require-description
title: Document FinOps Require Description
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
reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-description/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'document-finops-require-description' (Document FinOps Require
  Description). Requirement: The `description` property should be present. To
  fix: Ensure `description` is present and non-empty at each matching location.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  FinOps. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-finops-require-description:
    title: Document FinOps Require Description
    reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-description/
    description: The `description` property should be present.
    message: description should be present
    severity: info
    given: $
    then:
      field: description
      function: truthy
    tags:
      - format:finops
      - spec:document
      - experience:documentation
      - experience:governance
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'document-finops-require-description' (Document FinOps
      Require Description). Requirement: The `description` property should be
      present. To fix: Ensure `description` is present and non-empty at each
      matching location. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid FinOps. Return only the complete corrected document,
      with no commentary."
---
