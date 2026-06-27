---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-summary
title: Arazzo Workflow Summary
severity: info
given: $.workflows[*]
message: Workflow "summary" should be present and non-empty string.
description: Workflow "summary" should be present and non-empty string.
experience:
  - documentation
spec:
  - workflows
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-summary/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-workflow-summary' (Arazzo Workflow Summary).
  Requirement: Workflow \"summary\" should be present and non-empty string. To
  fix: Ensure `summary` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.workflows[*]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  arazzo-workflow-summary:
    title: Arazzo Workflow Summary
    reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-summary/
    description: Workflow "summary" should be present and non-empty string.
    message: Workflow "summary" should be present and non-empty string.
    severity: info
    given: $.workflows[*]
    then:
      field: summary
      function: truthy
    tags:
      - format:arazzo
      - spec:workflows
      - experience:documentation
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'arazzo-workflow-summary' (Arazzo Workflow Summary).
      Requirement: Workflow \"summary\" should be present and non-empty string. To
      fix: Ensure `summary` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$.workflows[*]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      Arazzo. Return only the complete corrected document, with no commentary."
---
