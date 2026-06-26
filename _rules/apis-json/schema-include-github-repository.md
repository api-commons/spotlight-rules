---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-github-repository
title: Schema Include Github Repository
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a GitHub Repository
description: This property ensures that an API possess a reference to a
  dedicated GitHub repository that is used to manage the Open, but also possible
  server and client code.
experience:
  - discoverability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-github-repository/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-github-repository' (Schema Include Github
  Repository). Requirement: This property ensures that an API possess a
  reference to a dedicated GitHub repository that is used to manage the Open,
  but also possible server and client code. To fix: Ensure `type` does NOT match
  the regular expression `\\b(github-repository|GitHubRepository)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
