---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-go-sdk
title: API Property Require Go SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Go SDK
description: This property ensures that there is a Go SDK available for an API,
  making it easier for Go developers to integrate an API into their
  applications.
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-go-sdk/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-go-sdk' (API Property Require Go SDK).
  Requirement: This property ensures that there is a Go SDK available for an
  API, making it easier for Go developers to integrate an API into their
  applications. To fix: Ensure `type` does NOT match the regular expression
  `\\b(api-sdk-go)\\b`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-go-sdk:
    title: API Property Require Go SDK
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-go-sdk/
    description: This property ensures that there is a Go SDK available for an API,
      making it easier for Go developers to integrate an API into their
      applications.
    message: Has Go SDK
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-sdk-go)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-go-sdk' (API Property Require Go SDK).
      Requirement: This property ensures that there is a Go SDK available for an
      API, making it easier for Go developers to integrate an API into their
      applications. To fix: Ensure `type` does NOT match the regular expression
      `\\b(api-sdk-go)\\b`; rename or rewrite any value that does. This rule is
      evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
