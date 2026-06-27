---
layout: rule
artifact: mcp
artifact_label: MCP
slug: info-require-protocol-version
title: Info Require Protocol Version
severity: info
given: $
message: protocolVersion should be present
description: The `protocolVersion` property should be present.
experience:
  - versioning
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/info-require-protocol-version/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'info-require-protocol-version' (Info Require Protocol Version).
  Requirement: The `protocolVersion` property should be present. To fix: Ensure
  `protocolVersion` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid MCP.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-require-protocol-version:
    title: Info Require Protocol Version
    reference: https://spotlight-rules.com/spec/rules/mcp/info-require-protocol-version/
    description: The `protocolVersion` property should be present.
    message: protocolVersion should be present
    severity: info
    given: $
    then:
      field: protocolVersion
      function: truthy
    tags:
      - format:mcp
      - spec:servers
      - experience:versioning
      - experience:consistency
    prompt: "You are editing a MCP document to satisfy the Spotlight API governance
      rule 'info-require-protocol-version' (Info Require Protocol Version).
      Requirement: The `protocolVersion` property should be present. To fix:
      Ensure `protocolVersion` is present and non-empty at each matching location.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid MCP. Return only the complete corrected document, with no
      commentary."
---
