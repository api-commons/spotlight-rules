---
layout: rule
artifact: mcp
artifact_label: MCP
slug: capability-require-resources
title: Capability Require Resources
severity: info
given: $.capabilities
message: resources should be present
description: The `resources` property of each capability should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - capabilities
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/mcp/capability-require-resources/
prompt: "You are editing a MCP document to satisfy the Spotlight API governance
  rule 'capability-require-resources' (Capability Require Resources).
  Requirement: The `resources` property of each capability should be present. To
  fix: Ensure `resources` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath `$.capabilities` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid MCP. Return
  only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  capability-require-resources:
    title: Capability Require Resources
    reference: https://spotlight-rules.com/spec/rules/mcp/capability-require-resources/
    description: The `resources` property of each capability should be present.
    message: resources should be present
    severity: info
    given: $.capabilities
    then:
      field: resources
      function: truthy
    tags:
      - format:mcp
      - spec:capabilities
      - experience:data-modeling
      - experience:discoverability
    prompt: "You are editing a MCP document to satisfy the Spotlight API governance
      rule 'capability-require-resources' (Capability Require Resources).
      Requirement: The `resources` property of each capability should be present.
      To fix: Ensure `resources` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `$.capabilities` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid MCP.
      Return only the complete corrected document, with no commentary."
---
