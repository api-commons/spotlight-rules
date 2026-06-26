---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-mock-server
title: Schema Include Mock Server
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Mock Server
description: This property ensures that an API has a reference to a mock servers
  for individual APIs or as part of common properties, providing mocked
  deployments of an API that can be used for making test API calls.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-mock-server/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-mock-server' (Schema Include Mock Server).
  Requirement: This property ensures that an API has a reference to a mock
  servers for individual APIs or as part of common properties, providing mocked
  deployments of an API that can be used for making test API calls. To fix:
  Ensure `type` does NOT match the regular expression
  `\\b(mocks|Mocks|MockServers)\\b`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
