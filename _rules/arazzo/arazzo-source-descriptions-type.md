---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-source-descriptions-type
title: Arazzo Source Descriptions Type
severity: info
given: $.sourceDescriptions[*]
message: Source Description "type" should be present.
description: Source Description "type" should be present.
experience:
  - reliability
  - consistency
spec:
  - source-descriptions
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-source-descriptions-type/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-source-descriptions-type' (Arazzo Source Descriptions
  Type). Requirement: Source Description \"type\" should be present. To fix:
  Ensure `type` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.sourceDescriptions[*]` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: true
---
