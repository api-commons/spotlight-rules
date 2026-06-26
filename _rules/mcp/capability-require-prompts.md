---
layout: rule
artifact: mcp
artifact_label: MCP
slug: capability-require-prompts
title: Capability Require Prompts
severity: info
given: $.capabilities
message: prompts should be present
description: The `prompts` property of each capability should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - capabilities
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/capability-require-prompts/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'capability-require-prompts' (Capability Require Prompts). Requirement:
  The `prompts` property of each capability should be present. To fix: Ensure
  `prompts` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.capabilities` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid MCP. Return only the
  complete corrected document, with no commentary."
builtin: false
---
