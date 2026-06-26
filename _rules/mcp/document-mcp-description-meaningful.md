---
layout: rule
artifact: mcp
artifact_label: MCP
slug: document-mcp-description-meaningful
title: Document MCP Description Meaningful
severity: info
given: $.description
message: MCP description should be at least 40 characters.
description: The server description should be specific (at least 40 characters)
  so agents can decide when to use it.
experience:
  - discoverability
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/document-mcp-description-meaningful/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'document-mcp-description-meaningful' (Document MCP Description
  Meaningful). Requirement: The server description should be specific (at least
  40 characters) so agents can decide when to use it. To fix: Adjust the
  targeted value so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.description` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid MCP. Return only the
  complete corrected document, with no commentary."
builtin: false
---
