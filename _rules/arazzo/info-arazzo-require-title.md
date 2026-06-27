---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: info-arazzo-require-title
title: Info Arazzo Require Title
severity: info
given: $.info
message: Arazzo info should have a title.
description: The Arazzo description should declare an info.title.
experience:
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/info-arazzo-require-title/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'info-arazzo-require-title' (Info Arazzo Require Title).
  Requirement: The Arazzo description should declare an info.title. To fix:
  Ensure `title` is present and non-empty at each matching location. This rule
  is evaluated at the JSONPath `$.info` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Arazzo. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-arazzo-require-title:
    title: Info Arazzo Require Title
    reference: https://spotlight-rules.com/spec/rules/arazzo/info-arazzo-require-title/
    description: The Arazzo description should declare an info.title.
    message: Arazzo info should have a title.
    given: $.info
    severity: info
    then:
      field: title
      function: truthy
    tags:
      - format:arazzo
      - spec:info
      - experience:documentation
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'info-arazzo-require-title' (Info Arazzo Require Title).
      Requirement: The Arazzo description should declare an info.title. To fix:
      Ensure `title` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `$.info` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid Arazzo. Return only the
      complete corrected document, with no commentary."
---
