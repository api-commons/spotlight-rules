---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-blog
title: Schema Include Blog
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog
description: This property ensures that an API has a reference to a blog where
  anyone can find updates and other stories that will help keep API consumers
  and other stakeholders up to speed on what is happening with an API, and the
  larger operations.
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-blog/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-blog' (Schema Include Blog). Requirement: This
  property ensures that an API has a reference to a blog where anyone can find
  updates and other stories that will help keep API consumers and other
  stakeholders up to speed on what is happening with an API, and the larger
  operations. To fix: Ensure `type` does NOT match the regular expression
  `\\b(blog|Blogs)\\b`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
---
