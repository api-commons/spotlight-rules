---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: document-json-structure-id-uri
title: Document JSON Structure ID URI
severity: info
given: $.$id
message: $id should be an absolute URI.
description: $id should be a stable absolute URI (https:// or urn:) identifying the schema.
experience:
  - consistency
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/document-json-structure-id-uri/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'document-json-structure-id-uri' (Document JSON Structure ID
  URI). Requirement: $id should be a stable absolute URI (https:// or urn:)
  identifying the schema. To fix: Ensure the targeted value matches the regular
  expression `^https?://|^urn:`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.$id` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON Structure. Return only the
  complete corrected document, with no commentary."
builtin: false
---
