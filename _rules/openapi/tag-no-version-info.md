---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-no-version-info
title: Tag No Version Info
severity: info
given: $.tags[*].name | $.paths[*][*].tags[*]
message: Tag names cannot have version information {{value}}. Consider
  versioning your API.
description: Tag names cannot have version information {{value}}. Consider
  versioning your API.
experience:
  - naming
  - versioning
spec:
  - paths
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/tag-no-version-info/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'tag-no-version-info' (Tag No Version Info). Requirement: Tag
  names cannot have version information {{value}}. Consider versioning your API.
  To fix: Ensure the targeted value does NOT match the regular expression
  `/(V|v)\\s?[0-9]+/g`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.tags[*].name | $.paths[*][*].tags[*]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
