---
layout: rule
artifact: mcp
artifact_label: MCP
slug: capability-require-tools
title: Capability Require Tools
severity: info
given: $.capabilities
message: tools should be present
description: The `tools` property of each capability should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - capabilities
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/capability-require-tools/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'capability-require-tools' (Capability Require Tools). Requirement: The
  `tools` property of each capability should be present. To fix: Ensure `tools`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.capabilities` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid MCP. Return only the complete corrected document,
  with no commentary."
builtin: false
---
