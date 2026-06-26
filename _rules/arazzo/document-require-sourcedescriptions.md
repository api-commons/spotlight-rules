---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: document-require-sourcedescriptions
title: Document Require Sourcedescriptions
severity: info
given: $
message: Missing `sourceDescriptions`.
description: arazzo document should declare a `sourceDescriptions` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-sourcedescriptions/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'document-require-sourcedescriptions' (Document Require
  Sourcedescriptions). Requirement: arazzo document should declare a
  `sourceDescriptions` property. To fix: Ensure `sourceDescriptions` is present
  and non-empty at each matching location. Guidance: Missing
  `sourceDescriptions`. Make the smallest change that satisfies the rule, leave
  all unrelated content, key order, comments, and formatting unchanged, and keep
  the document valid Arazzo. Return only the complete corrected document, with
  no commentary."
builtin: false
---
