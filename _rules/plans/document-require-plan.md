---
layout: rule
artifact: plans
artifact_label: Plans
slug: document-require-plan
title: Document Require Plan
severity: info
given: $
message: plans should be present
description: The `plans` property should be present.
experience:
  - data-modeling
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/plans/document-require-plan/
prompt: "You are editing a Plans document to satisfy the Spotlight API
  governance rule 'document-require-plan' (Document Require Plan). Requirement:
  The `plans` property should be present. To fix: Ensure `plans` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Plans. Return only the complete
  corrected document, with no commentary."
builtin: false
---
