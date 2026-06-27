---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-stepId-unique
title: Arazzo Workflow StepId Unique
severity: info
given: $.workflows[*]
message: "{{error}}"
description: Every step must have unique "stepId".
experience:
  - consistency
  - naming
  - reliability
spec:
  - workflows
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-stepId-unique/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-workflow-stepId-unique' (Arazzo Workflow StepId
  Unique). Requirement: Every step must have unique \"stepId\". This rule is
  evaluated at the JSONPath `$.workflows[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  arazzo-workflow-stepId-unique:
    title: Arazzo Workflow StepId Unique
    reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-stepId-unique/
    description: Every step must have unique "stepId".
    message: "{{error}}"
    severity: info
    given: $.workflows[*]
    then:
      function: arazzoStepIdUniqueness
    tags:
      - format:arazzo
      - spec:workflows
      - experience:consistency
      - experience:naming
      - experience:reliability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'arazzo-workflow-stepId-unique' (Arazzo Workflow StepId
      Unique). Requirement: Every step must have unique \"stepId\". This rule is
      evaluated at the JSONPath `$.workflows[*]` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid Arazzo. Return only
      the complete corrected document, with no commentary."
---
