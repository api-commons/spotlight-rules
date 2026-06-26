---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-java-sdk
title: API Property Require Java SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Java SDK
description: This property ensures that there is a Java SDK available for an
  API, making it easier for Java developers to integrate an API into their
  applications.
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-java-sdk/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-java-sdk' (API Property Require Java
  SDK). Requirement: This property ensures that there is a Java SDK available
  for an API, making it easier for Java developers to integrate an API into
  their applications. To fix: Ensure `type` does NOT match the regular
  expression `\\b(api-sdk-java)\\b`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
