---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-apis-json-url-https
title: Document APIs JSON URL HTTPS
severity: info
given: $.url
message: APIs.json url should use https.
description: The APIs.json url should be an https URL.
experience:
  - security
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-apis-json-url-https/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-apis-json-url-https' (Document APIs JSON URL HTTPS).
  Requirement: The APIs.json url should be an https URL. To fix: Ensure the
  targeted value matches the regular expression `^https://`; rewrite any value
  that does not. This rule is evaluated at the JSONPath `$.url` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
---
