---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-tag-require-upper-case
title: API Tag Require Upper Case
severity: info
given: $.apis.*.tags.*
message: API Tags MUST Be Upper Case
description: Maintaining consistent casing for tags applied to individual APIs
  ensures a uniform appearance and enhances search and discovery. Each word in a
  tag should be capitalized, with the first letter of every word in a phrase
  treated the same way.
experience:
  - naming
  - consistency
  - discoverability
spec:
  - apis
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-tag-require-upper-case/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-tag-require-upper-case' (API Tag Require Upper Case).
  Requirement: Maintaining consistent casing for tags applied to individual APIs
  ensures a uniform appearance and enhances search and discovery. Each word in a
  tag should be capitalized, with the first letter of every word in a phrase
  treated the same way. To fix: Ensure the targeted value matches the regular
  expression `[A-Z]\\w*`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.apis.*.tags.*` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-tag-require-upper-case:
    title: API Tag Require Upper Case
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-tag-require-upper-case/
    description: Maintaining consistent casing for tags applied to individual APIs
      ensures a uniform appearance and enhances search and discovery. Each word in
      a tag should be capitalized, with the first letter of every word in a phrase
      treated the same way.
    message: API Tags MUST Be Upper Case
    severity: info
    given: $.apis.*.tags.*
    then:
      function: pattern
      functionOptions:
        match: "[A-Z]\\w*"
    tags:
      - format:apis-json
      - spec:apis
      - spec:tags
      - experience:naming
      - experience:consistency
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-tag-require-upper-case' (API Tag Require Upper Case).
      Requirement: Maintaining consistent casing for tags applied to individual
      APIs ensures a uniform appearance and enhances search and discovery. Each
      word in a tag should be capitalized, with the first letter of every word in
      a phrase treated the same way. To fix: Ensure the targeted value matches the
      regular expression `[A-Z]\\w*`; rewrite any value that does not. This rule
      is evaluated at the JSONPath `$.apis.*.tags.*` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid APIs.json. Return only
      the complete corrected document, with no commentary."
---
