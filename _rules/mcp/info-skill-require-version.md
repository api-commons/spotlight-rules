---
layout: rule
artifact: mcp
artifact_label: MCP
slug: info-skill-require-version
title: Info Require Version
severity: info
given: $
message: version should be present
description: The `version` property should be present.
experience:
  - versioning
  - data-modeling
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/info-skill-require-version/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'info-skill-require-version' (Info Require Version). Requirement: The
  `version` property should be present. To fix: Ensure `version` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid MCP. Return only the complete corrected
  document, with no commentary."
builtin: false
---
