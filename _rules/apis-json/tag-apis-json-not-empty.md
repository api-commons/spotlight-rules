---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: tag-apis-json-not-empty
title: Tag APIs JSON Not Empty
severity: info
given: $.tags
message: tags should not be empty.
description: If tags are declared they should not be empty — tags drive
  discovery in the catalog.
experience:
  - discoverability
spec:
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/tag-apis-json-not-empty/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'tag-apis-json-not-empty' (Tag APIs JSON Not Empty).
  Requirement: If tags are declared they should not be empty — tags drive
  discovery in the catalog. To fix: Adjust the targeted value so it conforms to
  the schema this rule requires. This rule is evaluated at the JSONPath `$.tags`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
