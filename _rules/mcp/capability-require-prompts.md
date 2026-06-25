---
layout: rule
artifact: mcp
artifact_label: MCP
slug: capability-require-prompts
title: Capability Require Prompts
severity: info
given: $.capabilities
message: prompts should be present
description: The `prompts` property of each capability should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - capabilities
source: []
builtin: false
---
