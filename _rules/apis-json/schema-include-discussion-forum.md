---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-discussion-forum
title: Schema Include Discussion Forum
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Discussion Forum
description: This property ensures that there is a link to a discussion forum,
  providing a way for consumers and producers to engage and support either other
  throughout the lifecycle.
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-discussion-forum/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-discussion-forum' (Schema Include Discussion
  Forum). Requirement: This property ensures that there is a link to a
  discussion forum, providing a way for consumers and producers to engage and
  support either other throughout the lifecycle. To fix: Ensure `type` does NOT
  match the regular expression `\\b(Forums|Forums|Discussions)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
