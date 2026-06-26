---
layout: rule
artifact: json-ld
artifact_label: JSON-LD
slug: document-json-ld-id-iri
title: Document JSON LD ID IRI
severity: info
given: $['@id']
message: "@id should be an IRI."
description: "@id should be an IRI (https://, urn:, did:) or a blank-node identifier."
experience:
  - consistency
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-ld/document-json-ld-id-iri/
prompt: "You are editing a JSON-LD document to satisfy the Spotlight API
  governance rule 'document-json-ld-id-iri' (Document JSON LD ID IRI).
  Requirement: @id should be an IRI (https://, urn:, did:) or a blank-node
  identifier. To fix: Ensure the targeted value matches the regular expression
  `^https?://|^urn:|^did:|^_:`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.@id` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON-LD. Return only the complete
  corrected document, with no commentary."
builtin: false
---
