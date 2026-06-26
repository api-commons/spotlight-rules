---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-examples
title: Schema Include Examples
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog
description: This property ensures that an API has a reference to a examples for
  individual APIs or as part of common properties, providing examples and
  synthentic data that can be used for APIs.
experience:
  - documentation
  - usability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-examples/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-examples' (Schema Include Examples).
  Requirement: This property ensures that an API has a reference to a examples
  for individual APIs or as part of common properties, providing examples and
  synthentic data that can be used for APIs. To fix: Ensure `type` does NOT
  match the regular expression `\\b(examples|Examples)\\b`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
