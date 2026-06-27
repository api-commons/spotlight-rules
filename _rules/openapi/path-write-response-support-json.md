---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-write-response-support-json
title: Path Write Response Support JSON
severity: info
given: $.paths.*
message: "{{error}}"
description: All APIs returning structured data SHOULD support JSON as the default format.
experience:
  - consistency
  - data-modeling
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-write-response-support-json/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-write-response-support-json' (Path Write Response
  Support JSON). Requirement: All APIs returning structured data SHOULD support
  JSON as the default format. This rule is evaluated at the JSONPath
  `$.paths.*.` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  path-write-response-support-json:
    title: Path Write Response Support JSON
    reference: https://spotlight-rules.com/spec/rules/openapi/path-write-response-support-json/
    description: All APIs returning structured data SHOULD support JSON as the default format.
    message: "{{error}}"
    severity: info
    given: $.paths.*
    then:
      function: trimble:check-if-application-or-json-in-put-and-post-response
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-write-response-support-json' (Path Write Response
      Support JSON). Requirement: All APIs returning structured data SHOULD
      support JSON as the default format. This rule is evaluated at the JSONPath
      `$.paths.*.` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
