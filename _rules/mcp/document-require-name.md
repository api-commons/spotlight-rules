---
layout: rule
artifact: mcp
artifact_label: MCP
slug: document-require-name
title: Document Require Name
severity: info
given: $
message: name should be present
description: The `name` property should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/document-require-name/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'document-require-name' (Document Require Name). Requirement: The `name`
  property should be present. To fix: Ensure `name` is present and non-empty at
  each matching location. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid MCP. Return only the complete corrected document,
  with no commentary."
builtin: false
ruleyaml: >
  document-require-name:
    title: Document Require Name
    reference: https://spotlight-rules.com/spec/rules/mcp/document-require-name/
    description: The `name` property should be present.
    message: name should be present
    severity: info
    given: $
    then:
      field: name
      function: truthy
    tags:
      - format:mcp
      - spec:servers
      - experience:data-modeling
      - experience:discoverability
    prompt: "You are editing a MCP document to satisfy the Spotlight API governance
      rule 'document-require-name' (Document Require Name). Requirement: The
      `name` property should be present. To fix: Ensure `name` is present and
      non-empty at each matching location. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid MCP. Return only the complete
      corrected document, with no commentary."
---
