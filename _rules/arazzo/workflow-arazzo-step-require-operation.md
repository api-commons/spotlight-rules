---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: workflow-arazzo-step-require-operation
title: Workflow Arazzo Step Require Operation
severity: info
given: $.workflows[*].steps[*]
message: Step should reference an operationId, operationPath, or workflowId.
description: Each step should reference an operation via operationId,
  operationPath, or a nested workflowId.
experience:
  - reliability
  - consistency
spec:
  - workflows
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/workflow-arazzo-step-require-operation/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'workflow-arazzo-step-require-operation' (Workflow Arazzo Step
  Require Operation). Requirement: Each step should reference an operation via
  operationId, operationPath, or a nested workflowId. To fix: Adjust the
  targeted value so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.workflows[*].steps[*]` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: false
---
