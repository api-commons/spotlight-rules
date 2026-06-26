---
layout: rule
artifact: mcp
artifact_label: MCP
slug: capability-mcp-capabilities-not-empty
title: Capability MCP Capabilities Not Empty
severity: info
given: $.capabilities
message: capabilities should not be empty.
description: capabilities should declare at least one of tools, resources, or prompts.
experience:
  - discoverability
spec:
  - capabilities
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/capability-mcp-capabilities-not-empty/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'capability-mcp-capabilities-not-empty' (Capability MCP Capabilities Not
  Empty). Requirement: capabilities should declare at least one of tools,
  resources, or prompts. To fix: Adjust the targeted value so it conforms to the
  schema this rule requires. This rule is evaluated at the JSONPath
  `$.capabilities` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid MCP. Return only the complete corrected document, with no
  commentary."
builtin: false
---
