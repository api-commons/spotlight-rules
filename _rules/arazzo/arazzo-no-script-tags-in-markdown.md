---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-no-script-tags-in-markdown
title: Arazzo No Script Tags In Markdown
severity: info
given: $..[description,title]
message: Markdown descriptions must not have "<script>" tags.
description: Markdown descriptions must not have "<script>" tags.
experience:
  - security
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-no-script-tags-in-markdown/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-no-script-tags-in-markdown' (Arazzo No Script Tags In
  Markdown). Requirement: Markdown descriptions must not have \"<script>\" tags.
  To fix: Ensure the targeted value does NOT match the regular expression
  `<script`; rename or rewrite any value that does. This rule is evaluated at
  the JSONPath `$..[description,title]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Arazzo. Return only the complete
  corrected document, with no commentary."
builtin: true
ruleyaml: >
  arazzo-no-script-tags-in-markdown:
    title: Arazzo No Script Tags In Markdown
    reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-no-script-tags-in-markdown/
    description: Markdown descriptions must not have "<script>" tags.
    message: Markdown descriptions must not have "<script>" tags.
    severity: info
    given: $..[description,title]
    then:
      function: pattern
      functionOptions:
        notMatch: <script
    tags:
      - format:arazzo
      - spec:document
      - experience:security
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'arazzo-no-script-tags-in-markdown' (Arazzo No Script Tags
      In Markdown). Requirement: Markdown descriptions must not have \"<script>\"
      tags. To fix: Ensure the targeted value does NOT match the regular
      expression `<script`; rename or rewrite any value that does. This rule is
      evaluated at the JSONPath `$..[description,title]` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid Arazzo. Return only
      the complete corrected document, with no commentary."
---
