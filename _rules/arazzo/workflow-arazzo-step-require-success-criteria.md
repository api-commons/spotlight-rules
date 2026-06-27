---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: workflow-arazzo-step-require-success-criteria
title: Workflow Arazzo Step Require Success Criteria
severity: info
given: $.workflows[*].steps[*]
message: Step should declare successCriteria.
description: Steps should declare successCriteria so the workflow can assert
  each step succeeded.
experience:
  - reliability
spec:
  - workflows
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/workflow-arazzo-step-require-success-criteria/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'workflow-arazzo-step-require-success-criteria' (Workflow
  Arazzo Step Require Success Criteria). Requirement: Steps should declare
  successCriteria so the workflow can assert each step succeeded. To fix: Ensure
  `successCriteria` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.workflows[*].steps[*]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid Arazzo. Return
  only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  workflow-arazzo-step-require-success-criteria:
    title: Workflow Arazzo Step Require Success Criteria
    reference: https://spotlight-rules.com/spec/rules/arazzo/workflow-arazzo-step-require-success-criteria/
    description: Steps should declare successCriteria so the workflow can assert
      each step succeeded.
    message: Step should declare successCriteria.
    given: $.workflows[*].steps[*]
    severity: info
    then:
      field: successCriteria
      function: truthy
    tags:
      - format:arazzo
      - spec:workflows
      - experience:reliability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'workflow-arazzo-step-require-success-criteria' (Workflow
      Arazzo Step Require Success Criteria). Requirement: Steps should declare
      successCriteria so the workflow can assert each step succeeded. To fix:
      Ensure `successCriteria` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$.workflows[*].steps[*]` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      Arazzo. Return only the complete corrected document, with no commentary."
---
