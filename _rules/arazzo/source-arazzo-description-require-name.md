---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: source-arazzo-description-require-name
title: Source Arazzo Description Require Name
severity: info
given: $.sourceDescriptions[*]
message: Source description should have a name.
description: Each source description should declare a name used to reference it from steps.
experience:
  - consistency
  - documentation
spec:
  - source-descriptions
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/source-arazzo-description-require-name/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'source-arazzo-description-require-name' (Source Arazzo
  Description Require Name). Requirement: Each source description should declare
  a name used to reference it from steps. To fix: Ensure `name` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.sourceDescriptions[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Arazzo. Return only the complete corrected
  document, with no commentary."
builtin: false
---
