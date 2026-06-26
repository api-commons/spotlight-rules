---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-description-max-length
title: Parameter Description Max Length
severity: info
given: $.components.parameters.*
message: Parameters Description MUST Be Less Than 500 Characters
description: Limiting the length of parameters description forces us to be more
  concise in how we describe each parameter, while keeping our documentation and
  other ways descriptions show up in discovery and portals more consistent.
experience:
  - documentation
  - consistency
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-description-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-description-max-length' (Parameter Description Max
  Length). Requirement: Limiting the length of parameters description forces us
  to be more concise in how we describe each parameter, while keeping our
  documentation and other ways descriptions show up in discovery and portals
  more consistent. To fix: Ensure the length of `summary` is at most 500. This
  rule is evaluated at the JSONPath `$.components.parameters.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
