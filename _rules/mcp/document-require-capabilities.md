---
layout: rule
artifact: mcp
artifact_label: MCP
slug: document-require-capabilities
title: Document Require Capabilities
severity: info
given: $
message: capabilities should be present
description: The `capabilities` property should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/document-require-capabilities/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'document-require-capabilities' (Document Require Capabilities).
  Requirement: The `capabilities` property should be present. To fix: Ensure
  `capabilities` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid MCP.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-capabilities:
    title: Document Require Capabilities
    reference: https://spotlight-rules.com/spec/rules/mcp/document-require-capabilities/
    description: The `capabilities` property should be present.
    message: capabilities should be present
    severity: info
    given: $
    then:
      field: capabilities
      function: truthy
    tags:
      - format:mcp
      - spec:servers
      - experience:data-modeling
      - experience:discoverability
    prompt: "You are editing a MCP document to satisfy the Spotlight API governance
      rule 'document-require-capabilities' (Document Require Capabilities).
      Requirement: The `capabilities` property should be present. To fix: Ensure
      `capabilities` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid MCP.
      Return only the complete corrected document, with no commentary."
---
