---
layout: rule
artifact: mcp
artifact_label: MCP
slug: info-mcp-protocol-version-dated
title: Info MCP Protocol Version Dated
severity: info
given: $.protocolVersion
message: protocolVersion should be a dated revision (YYYY-MM-DD).
description: protocolVersion should be a dated MCP revision (YYYY-MM-DD).
experience:
  - versioning
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/info-mcp-protocol-version-dated/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'info-mcp-protocol-version-dated' (Info MCP Protocol Version Dated).
  Requirement: protocolVersion should be a dated MCP revision (YYYY-MM-DD). To
  fix: Ensure the targeted value matches the regular expression
  `^\\d{4}-\\d{2}-\\d{2}$`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.protocolVersion` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid MCP. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-mcp-protocol-version-dated:
    title: Info MCP Protocol Version Dated
    reference: https://spotlight-rules.com/spec/rules/mcp/info-mcp-protocol-version-dated/
    description: protocolVersion should be a dated MCP revision (YYYY-MM-DD).
    message: protocolVersion should be a dated revision (YYYY-MM-DD).
    given: $.protocolVersion
    severity: info
    then:
      function: pattern
      functionOptions:
        match: ^\d{4}-\d{2}-\d{2}$
    tags:
      - format:mcp
      - spec:document
      - experience:versioning
      - experience:consistency
    prompt: "You are editing a MCP document to satisfy the Spotlight API governance
      rule 'info-mcp-protocol-version-dated' (Info MCP Protocol Version Dated).
      Requirement: protocolVersion should be a dated MCP revision (YYYY-MM-DD). To
      fix: Ensure the targeted value matches the regular expression
      `^\\d{4}-\\d{2}-\\d{2}$`; rewrite any value that does not. This rule is
      evaluated at the JSONPath `$.protocolVersion` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid MCP. Return only the
      complete corrected document, with no commentary."
---
