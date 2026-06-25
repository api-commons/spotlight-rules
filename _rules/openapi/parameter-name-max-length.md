---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-name-max-length
title: Parameter Name Max Length
severity: warn
given: $.components.parameters[?(@.in=='path')].name
message: Parameters Name Length MUST Be Less Than 25 Characters
description: "Providing short and concise names for your parameters helps make
  it easier for API consumers to understand how they are able to configure their
  API requests. It constrains the length of the `summary` field and at most 25
  (evaluated at `$.components.parameters[?(@.in=='path')].name`). Severity:
  warn."
experience:
  - naming
  - consistency
spec:
  - parameters
  - components
source:
  - api-evangelist
builtin: false
---
