---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-node-sdk
title: API Property Require Node SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Node SDK
description: This property ensures that there is a Node SDK available for an
  API, making it easier for Node developers to integrate an API into their
  applications.
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-node-sdk/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-node-sdk' (API Property Require Node
  SDK). Requirement: This property ensures that there is a Node SDK available
  for an API, making it easier for Node developers to integrate an API into
  their applications. To fix: Ensure `type` does NOT match the regular
  expression `\\b(api-sdk-node)\\b`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-node-sdk:
    title: API Property Require Node SDK
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-node-sdk/
    description: This property ensures that there is a Node SDK available for an
      API, making it easier for Node developers to integrate an API into their
      applications.
    message: Has Node SDK
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-sdk-node)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-node-sdk' (API Property Require Node
      SDK). Requirement: This property ensures that there is a Node SDK available
      for an API, making it easier for Node developers to integrate an API into
      their applications. To fix: Ensure `type` does NOT match the regular
      expression `\\b(api-sdk-node)\\b`; rename or rewrite any value that does.
      This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
