---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-names-length-limit
title: Schema Property Names Length Limit
severity: info
given: $.components.schemas.*.properties
message: Schema Properties Name Length
description: Schema property names have a length restriction applied, keeping
  names consistent, and avoiding being too long.
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-names-length-limit/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-names-length-limit' (Schema Property Names
  Length Limit). Requirement: Schema property names have a length restriction
  applied, keeping names consistent, and avoiding being too long. To fix: Ensure
  the length of `@key` is at most 25. This rule is evaluated at the JSONPath
  `$.components.schemas.*.properties` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
