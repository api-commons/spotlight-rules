---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-require-name
title: Tag Require Name
severity: info
given: $.tags[*]
message: Tags MUST Have a Name
description: Tags used as part of an OpenAPI should have names, providing a
  simple key word or phrase that represents the tag being applied to APIs.
experience:
  - discoverability
  - naming
spec:
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/tag-require-name/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'tag-require-name' (Tag Require Name). Requirement: Tags used
  as part of an OpenAPI should have names, providing a simple key word or phrase
  that represents the tag being applied to APIs. To fix: Ensure `name` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.tags[*]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  tag-require-name:
    title: Tag Require Name
    reference: https://spotlight-rules.com/spec/rules/openapi/tag-require-name/
    description: Tags used as part of an OpenAPI should have names, providing a
      simple key word or phrase that represents the tag being applied to APIs.
    message: Tags MUST Have a Name
    severity: info
    given: $.tags[*]
    then:
      field: name
      function: truthy
    tags:
      - format:openapi
      - spec:tags
      - experience:discoverability
      - experience:naming
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'tag-require-name' (Tag Require Name). Requirement: Tags
      used as part of an OpenAPI should have names, providing a simple key word or
      phrase that represents the tag being applied to APIs. To fix: Ensure `name`
      is present and non-empty at each matching location. This rule is evaluated
      at the JSONPath `$.tags[*]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
