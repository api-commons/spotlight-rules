---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-url-https
title: API Property URL HTTPS
severity: info
given: $.apis[*].properties[*].url
message: API property url should use https.
description: API property URLs (documentation, OpenAPI, etc.) should be https.
experience:
  - security
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-url-https/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-url-https' (API Property URL HTTPS).
  Requirement: API property URLs (documentation, OpenAPI, etc.) should be https.
  To fix: Ensure the targeted value matches the regular expression `^https://`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.apis[*].properties[*].url` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid APIs.json. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  api-property-url-https:
    title: API Property URL HTTPS
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-url-https/
    description: API property URLs (documentation, OpenAPI, etc.) should be https.
    message: API property url should use https.
    given: $.apis[*].properties[*].url
    severity: info
    then:
      function: pattern
      functionOptions:
        match: ^https://
    tags:
      - format:apis-json
      - spec:schemas
      - experience:security
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-url-https' (API Property URL HTTPS).
      Requirement: API property URLs (documentation, OpenAPI, etc.) should be
      https. To fix: Ensure the targeted value matches the regular expression
      `^https://`; rewrite any value that does not. This rule is evaluated at the
      JSONPath `$.apis[*].properties[*].url` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid APIs.json. Return only the
      complete corrected document, with no commentary."
---
