---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-use-org-not-organization
title: Schema Use Org Not Organization
severity: info
given: $..properties.*~
message: Use abbreviations instead of long form names, i.e.
description: Use abbreviations instead of long form names, i.e. organization SHOULD BE org.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-use-org-not-organization/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-use-org-not-organization' (Schema Use Org Not
  Organization). Requirement: Use abbreviations instead of long form names, i.e.
  organization SHOULD BE org. To fix: Ensure the targeted value does NOT match
  the regular expression `(^organization([A-Z]|$)|Organization([A-Z]|$))`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$..properties.*~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
