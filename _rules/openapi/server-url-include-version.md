---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-include-version
title: Server URL Include Version
severity: warn
given: $.servers
message: "{{error}}"
description: "API URLs versions should meet the Trimble API Standards. It
  applies a custom validation to the targeted value (evaluated at `$.servers`).
  Severity: warn."
experience:
  - versioning
  - consistency
spec:
  - servers
source:
  - trimble
builtin: false
---
