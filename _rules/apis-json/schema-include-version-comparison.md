---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-version-comparison
title: Schema Include Version Comparison
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Comparison
description: This property ensures that an API has the ability to compare two
  different versions of an API and see what the difference are between them.
experience:
  - versioning
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-version-comparison/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-version-comparison' (Schema Include Version
  Comparison). Requirement: This property ensures that an API has the ability to
  compare two different versions of an API and see what the difference are
  between them. To fix: Ensure `type` does NOT match the regular expression
  `\\b(compare|Compare)\\b`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
---
