---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-names-title-case
title: Tag Names Title Case
severity: info
given: $.tags.*.name
message: Tag Names MUST Have First Letter in Each Word Capitalized
description: The first letter of each word in a tag being applied to APIs needs
  to be capitalized, keeping the tags being applied across APIs the same look
  and feel for organizing and publishing to documentation.
experience:
  - naming
  - consistency
spec:
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/tag-names-title-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'tag-names-title-case' (Tag Names Title Case). Requirement:
  The first letter of each word in a tag being applied to APIs needs to be
  capitalized, keeping the tags being applied across APIs the same look and feel
  for organizing and publishing to documentation. To fix: Ensure the targeted
  value matches the regular expression `[A-Z]\\w*`; rewrite any value that does
  not. This rule is evaluated at the JSONPath `$.tags.*.name` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  tag-names-title-case:
    title: Tag Names Title Case
    reference: https://spotlight-rules.com/spec/rules/openapi/tag-names-title-case/
    description: The first letter of each word in a tag being applied to APIs needs
      to be capitalized, keeping the tags being applied across APIs the same look
      and feel for organizing and publishing to documentation.
    message: Tag Names MUST Have First Letter in Each Word Capitalized
    severity: info
    given: $.tags.*.name
    then:
      function: pattern
      functionOptions:
        match: "[A-Z]\\w*"
    tags:
      - format:openapi
      - spec:tags
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'tag-names-title-case' (Tag Names Title Case). Requirement:
      The first letter of each word in a tag being applied to APIs needs to be
      capitalized, keeping the tags being applied across APIs the same look and
      feel for organizing and publishing to documentation. To fix: Ensure the
      targeted value matches the regular expression `[A-Z]\\w*`; rewrite any value
      that does not. This rule is evaluated at the JSONPath `$.tags.*.name` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
