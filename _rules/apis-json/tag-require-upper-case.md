---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: tag-require-upper-case
title: Tag Require Upper Case
severity: info
given: $.tags.*
message: Tags Upper Case
description: Maintaining consistent casing for tags applied to APIs.json
  contracts ensures a uniform appearance and enhances search and discovery. Each
  word in a tag should be capitalized, with the first letter of every word in a
  phrase treated the same way.
experience:
  - naming
  - consistency
  - discoverability
spec:
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/tag-require-upper-case/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'tag-require-upper-case' (Tag Require Upper Case).
  Requirement: Maintaining consistent casing for tags applied to APIs.json
  contracts ensures a uniform appearance and enhances search and discovery. Each
  word in a tag should be capitalized, with the first letter of every word in a
  phrase treated the same way. To fix: Ensure the targeted value matches the
  regular expression `[A-Z]\\w*`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.tags.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
