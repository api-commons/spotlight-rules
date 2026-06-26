---
layout: rule
artifact: finops
artifact_label: FinOps
slug: document-finops-currency-iso4217
title: Document FinOps Currency Iso4217
severity: info
given: $.currency
message: currency should be an ISO 4217 code.
description: currency should be a 3-letter ISO 4217 code (e.g. USD).
experience:
  - consistency
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/document-finops-currency-iso4217/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'document-finops-currency-iso4217' (Document FinOps Currency
  Iso4217). Requirement: currency should be a 3-letter ISO 4217 code (e.g. USD).
  To fix: Ensure the targeted value matches the regular expression `^[A-Z]{3}$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.currency` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid FinOps. Return only the complete corrected document, with no
  commentary."
builtin: false
---
