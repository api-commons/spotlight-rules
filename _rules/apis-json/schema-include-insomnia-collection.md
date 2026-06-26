---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-insomnia-collection
title: Schema Include Insomnia Collection
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Insomnia Collection
description: This property defines an Insomnia collection available for each
  API, providing executable artifacts that can be used in the Insomnia client
  for making calls, and executing automation workflows.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-insomnia-collection/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-insomnia-collection' (Schema Include Insomnia
  Collection). Requirement: This property defines an Insomnia collection
  available for each API, providing executable artifacts that can be used in the
  Insomnia client for making calls, and executing automation workflows. To fix:
  Ensure `type` does NOT match the regular expression `\\b(RunInInsomnia)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
