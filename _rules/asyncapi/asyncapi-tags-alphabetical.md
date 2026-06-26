---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-tags-alphabetical
title: Asyncapi Tags Alphabetical
severity: info
given: $
message: AsyncAPI object must have alphabetical "tags".
description: AsyncAPI object must have alphabetical "tags".
experience:
  - consistency
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-tags-alphabetical/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-tags-alphabetical' (Asyncapi Tags Alphabetical).
  Requirement: AsyncAPI object must have alphabetical \"tags\". To fix: Sort the
  entries by `name` into ascending alphabetical order. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
