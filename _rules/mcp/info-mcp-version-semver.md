---
layout: rule
artifact: mcp
artifact_label: MCP
slug: info-mcp-version-semver
title: Info MCP Version Semver
severity: info
given: $.version
message: MCP version should be semantic.
description: The server version should be semantic (e.g. 1.0.0).
experience:
  - versioning
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/info-mcp-version-semver/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'info-mcp-version-semver' (Info MCP Version Semver). Requirement: The
  server version should be semantic (e.g. 1.0.0). To fix: Ensure the targeted
  value matches the regular expression `^\\d+\\.\\d+\\.\\d+`; rewrite any value
  that does not. This rule is evaluated at the JSONPath `$.version` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid MCP.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-mcp-version-semver:
    title: Info MCP Version Semver
    reference: https://spotlight-rules.com/spec/rules/mcp/info-mcp-version-semver/
    description: The server version should be semantic (e.g. 1.0.0).
    message: MCP version should be semantic.
    given: $.version
    severity: info
    then:
      function: pattern
      functionOptions:
        match: ^\d+\.\d+\.\d+
    tags:
      - format:mcp
      - spec:document
      - experience:versioning
    prompt: "You are editing a MCP document to satisfy the Spotlight API governance
      rule 'info-mcp-version-semver' (Info MCP Version Semver). Requirement: The
      server version should be semantic (e.g. 1.0.0). To fix: Ensure the targeted
      value matches the regular expression `^\\d+\\.\\d+\\.\\d+`; rewrite any
      value that does not. This rule is evaluated at the JSONPath `$.version` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid MCP. Return only the complete corrected document, with no
      commentary."
---
