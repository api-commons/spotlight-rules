---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-unused-components-schema
title: Asyncapi Unused Components Schema
severity: info
given: $.components.schemas
message: Potentially unused components schema has been detected.
description: Potentially unused components schema has been detected.
experience:
  - consistency
  - data-modeling
spec:
  - components
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-unused-components-schema/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-unused-components-schema' (Asyncapi Unused
  Components Schema). Requirement: Potentially unused components schema has been
  detected. To fix: Remove the unreferenced reusable object, or reference it
  where it is needed. This rule is evaluated at the JSONPath
  `$.components.schemas` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
