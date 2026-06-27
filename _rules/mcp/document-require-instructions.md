---
layout: rule
artifact: mcp
artifact_label: MCP
slug: document-require-instructions
title: Document Require Instructions
severity: info
given: $
message: instructions should be present
description: The `instructions` property should be present.
experience:
  - documentation
  - usability
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/document-require-instructions/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'document-require-instructions' (Document Require Instructions).
  Requirement: The `instructions` property should be present. To fix: Ensure
  `instructions` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid MCP.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-instructions:
    title: Document Require Instructions
    reference: https://spotlight-rules.com/spec/rules/mcp/document-require-instructions/
    description: The `instructions` property should be present.
    message: instructions should be present
    severity: info
    given: $
    then:
      field: instructions
      function: truthy
    tags:
      - format:mcp
      - spec:servers
      - experience:documentation
      - experience:usability
    prompt: "You are editing a MCP document to satisfy the Spotlight API governance
      rule 'document-require-instructions' (Document Require Instructions).
      Requirement: The `instructions` property should be present. To fix: Ensure
      `instructions` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid MCP.
      Return only the complete corrected document, with no commentary."
---
