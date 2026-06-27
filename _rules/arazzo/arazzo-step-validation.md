---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-validation
title: Arazzo Step Validation
severity: info
given: $
message: Every step must have a valid "stepId" and an valid "operationId" or
  "operationPath" or "workflowId".
description: Every step must have a valid "stepId" and an valid "operationId" or
  "operationPath" or "workflowId".
experience:
  - reliability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-validation/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-step-validation' (Arazzo Step Validation).
  Requirement: Every step must have a valid \"stepId\" and an valid
  \"operationId\" or \"operationPath\" or \"workflowId\". Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid Arazzo. Return
  only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  arazzo-step-validation:
    title: Arazzo Step Validation
    reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-validation/
    description: Every step must have a valid "stepId" and an valid "operationId" or
      "operationPath" or "workflowId".
    message: Every step must have a valid "stepId" and an valid "operationId" or
      "operationPath" or "workflowId".
    severity: info
    given: $
    then:
      function: arazzoStepValidation
    tags:
      - format:arazzo
      - spec:document
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'arazzo-step-validation' (Arazzo Step Validation).
      Requirement: Every step must have a valid \"stepId\" and an valid
      \"operationId\" or \"operationPath\" or \"workflowId\". Make the smallest
      change that satisfies the rule, leave all unrelated content, key order,
      comments, and formatting unchanged, and keep the document valid Arazzo.
      Return only the complete corrected document, with no commentary."
---
