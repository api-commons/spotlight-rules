---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: document-require-property
title: Document Require Property
severity: info
given: $
message: properties should be present
description: The `properties` property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/document-require-property/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'document-require-property' (Document Require Property).
  Requirement: The `properties` property should be present. To fix: Ensure
  `properties` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid JSON
  Structure. Return only the complete corrected document, with no commentary."
builtin: false
---
