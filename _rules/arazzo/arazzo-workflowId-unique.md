---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflowId-unique
title: Arazzo WorkflowId Unique
severity: info
given: $
message: "{{error}}"
description: Every workflow must have unique "workflowId".
experience:
  - consistency
  - naming
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflowId-unique/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-workflowId-unique' (Arazzo WorkflowId Unique).
  Requirement: Every workflow must have unique \"workflowId\". Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid Arazzo. Return
  only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  arazzo-workflowId-unique:
    title: Arazzo WorkflowId Unique
    reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflowId-unique/
    description: Every workflow must have unique "workflowId".
    message: "{{error}}"
    severity: info
    given: $
    then:
      function: arazzoWorkflowIdUniqueness
    tags:
      - format:arazzo
      - spec:document
      - experience:consistency
      - experience:naming
      - experience:reliability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'arazzo-workflowId-unique' (Arazzo WorkflowId Unique).
      Requirement: Every workflow must have unique \"workflowId\". Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      Arazzo. Return only the complete corrected document, with no commentary."
---
