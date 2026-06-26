---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-governance-policies
title: Schema Include Governance Policies
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Governance Policies
description: This property ensures there is a governance policies reference as
  part of an API contract, usually a common property pointing to a centralized
  set of policies that get applied.
experience:
  - governance
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-governance-policies/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-governance-policies' (Schema Include
  Governance Policies). Requirement: This property ensures there is a governance
  policies reference as part of an API contract, usually a common property
  pointing to a centralized set of policies that get applied. To fix: Ensure
  `type` does NOT match the regular expression `\\b(api-policies|Policies)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
