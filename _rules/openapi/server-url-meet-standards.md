---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-meet-standards
title: Server URL Meet Standards
severity: warn
given: $.servers
message: "{{error}}"
description: "API URLs should meet the Trimble API Standards. It applies a
  custom validation to the targeted value (evaluated at `$.servers`). Severity:
  warn."
experience:
  - consistency
  - governance
spec:
  - servers
source:
  - trimble
builtin: false
---
