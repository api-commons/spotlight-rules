---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-openapi-definition
title: Schema Include Openapi Definition
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has An OpenAPI
description: This property ensures that there is an OpenAPI present for an API,
  providing the technical contract that describes the surface area of an API.
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-openapi-definition/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-openapi-definition' (Schema Include Openapi
  Definition). Requirement: This property ensures that there is an OpenAPI
  present for an API, providing the technical contract that describes the
  surface area of an API. To fix: Ensure `type` does NOT match the regular
  expression `\\b(openapi|OpenAPI)\\b`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
