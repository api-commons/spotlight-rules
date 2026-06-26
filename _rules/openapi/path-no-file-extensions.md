---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-file-extensions
title: Path No File Extensions
severity: info
given: $.paths
message: Paths MUST NOT Contain File Extensions
description: API paths should not include file extensions like .json or .xml.
  Content negotiation should be handled through Accept headers rather than path
  suffixes.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-file-extensions/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-file-extensions' (Path No File Extensions).
  Requirement: API paths should not include file extensions like .json or .xml.
  Content negotiation should be handled through Accept headers rather than path
  suffixes. To fix: Ensure the targeted value does NOT match the regular
  expression `\\.(json|xml|html|yaml|yml|csv|pdf)$`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath `$.paths` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
