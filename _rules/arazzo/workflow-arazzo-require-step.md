---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: workflow-arazzo-require-step
title: Workflow Arazzo Require Step
severity: info
given: $.workflows[*]
message: Workflow should define at least one step.
description: A workflow should define at least one step.
experience:
  - reliability
spec:
  - workflows
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/workflow-arazzo-require-step/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'workflow-arazzo-require-step' (Workflow Arazzo Require Step).
  Requirement: A workflow should define at least one step. To fix: Adjust
  `steps` so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.workflows[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  workflow-arazzo-require-step:
    title: Workflow Arazzo Require Step
    reference: https://spotlight-rules.com/spec/rules/arazzo/workflow-arazzo-require-step/
    description: A workflow should define at least one step.
    message: Workflow should define at least one step.
    given: $.workflows[*]
    severity: info
    then:
      field: steps
      function: schema
      functionOptions:
        schema:
          type: array
          minItems: 1
    tags:
      - format:arazzo
      - spec:workflows
      - experience:reliability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'workflow-arazzo-require-step' (Workflow Arazzo Require
      Step). Requirement: A workflow should define at least one step. To fix:
      Adjust `steps` so it conforms to the schema this rule requires. This rule is
      evaluated at the JSONPath `$.workflows[*]` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid Arazzo. Return only
      the complete corrected document, with no commentary."
---
