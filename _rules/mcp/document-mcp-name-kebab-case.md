---
layout: rule
artifact: mcp
artifact_label: MCP
slug: document-mcp-name-kebab-case
title: Document MCP Name Kebab Case
severity: info
given: $.name
message: MCP server name should be kebab-case.
description: MCP server name should be lower kebab-case.
experience:
  - naming
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/document-mcp-name-kebab-case/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'document-mcp-name-kebab-case' (Document MCP Name Kebab Case).
  Requirement: MCP server name should be lower kebab-case. To fix: Ensure the
  targeted value matches the regular expression `^[a-z0-9]+(?:-[a-z0-9]+)*$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.name` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid MCP. Return only the complete corrected document, with no
  commentary."
builtin: false
---
