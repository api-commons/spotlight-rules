---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-info-description
title: Arazzo Info Description
severity: info
given: $
message: Info "description" should be present and non-empty string.
description: Info "description" should be present and non-empty string.
experience:
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-info-description/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-info-description' (Arazzo Info Description).
  Requirement: Info \"description\" should be present and non-empty string. To
  fix: Ensure `info.description` is present and non-empty at each matching
  location. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid Arazzo. Return only the complete corrected document, with no
  commentary."
builtin: true
---
