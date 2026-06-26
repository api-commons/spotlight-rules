---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-vocabulary
title: API Property Require Vocabulary
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Vocabulary
description: This property ensures that there is a centralized vocabulary in use
  for guiding the creation and usage of tags, path segments, and other metadata
  associated with an APIs.
experience:
  - consistency
  - naming
  - governance
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-vocabulary/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-vocabulary' (API Property Require
  Vocabulary). Requirement: This property ensures that there is a centralized
  vocabulary in use for guiding the creation and usage of tags, path segments,
  and other metadata associated with an APIs. To fix: Ensure `type` does NOT
  match the regular expression
  `\\b(vocabulary|vocabularies|Vocabulary|Vocabularies)\\b`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
