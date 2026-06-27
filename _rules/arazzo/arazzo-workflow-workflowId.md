---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-workflowId
title: Arazzo Workflow WorkflowId
severity: info
given: $.workflows[*]
message: Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".
description: Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".
experience:
  - naming
  - consistency
spec:
  - workflows
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-workflowId/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-workflow-workflowId' (Arazzo Workflow WorkflowId).
  Requirement: Workflow \"workflowId\" should follow the pattern
  \"^[A-Za-z0-9_\\-]+$\". To fix: Ensure `workflowId` matches the regular
  expression `^[A-Za-z0-9_\\-]+$`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.workflows[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  arazzo-workflow-workflowId:
    title: Arazzo Workflow WorkflowId
    reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-workflowId/
    description: Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".
    message: Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".
    severity: info
    given: $.workflows[*]
    then:
      field: workflowId
      function: pattern
      functionOptions:
        match: ^[A-Za-z0-9_\-]+$
    tags:
      - format:arazzo
      - spec:workflows
      - experience:naming
      - experience:consistency
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'arazzo-workflow-workflowId' (Arazzo Workflow WorkflowId).
      Requirement: Workflow \"workflowId\" should follow the pattern
      \"^[A-Za-z0-9_\\-]+$\". To fix: Ensure `workflowId` matches the regular
      expression `^[A-Za-z0-9_\\-]+$`; rewrite any value that does not. This rule
      is evaluated at the JSONPath `$.workflows[*]` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid Arazzo. Return only
      the complete corrected document, with no commentary."
---
