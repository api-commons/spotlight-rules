---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-parameter-description
title: OAS3 Parameter Description
severity: info
given: "#PathItem.parameters[?(@ && @.in)] | #OperationObject.parameters[?(@ &&
  @.in)] | $.components.parameters[?(@ && @.in)]"
message: Parameter objects must have "description".
description: Parameter objects must have "description".
experience:
  - documentation
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-parameter-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-parameter-description' (OAS3 Parameter Description).
  Requirement: Parameter objects must have \"description\". To fix: Ensure
  `description` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `#PathItem.parameters[?(@ && @.in)] |
  #OperationObject.parameters[?(@ && @.in)] | $.components.parameters[?(@ &&
  @.in)]` — inspect every location it matches and correct only what violates the
  rule. Make the smallest change that satisfies the rule, leave all unrelated
  content, key order, comments, and formatting unchanged, and keep the document
  valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
---
