---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-python-sdk
title: API Property Require Python SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Python SDK
description: This property ensures that there is a Python SDK available for an
  API, making it easier for Python developers to integrate an API into their
  applications.
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-python-sdk/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-python-sdk' (API Property Require Python
  SDK). Requirement: This property ensures that there is a Python SDK available
  for an API, making it easier for Python developers to integrate an API into
  their applications. To fix: Ensure `type` does NOT match the regular
  expression `\\b(api-sdk-python)\\b`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-python-sdk:
    title: API Property Require Python SDK
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-python-sdk/
    description: This property ensures that there is a Python SDK available for an
      API, making it easier for Python developers to integrate an API into their
      applications.
    message: Has Python SDK
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-sdk-python)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-python-sdk' (API Property Require
      Python SDK). Requirement: This property ensures that there is a Python SDK
      available for an API, making it easier for Python developers to integrate an
      API into their applications. To fix: Ensure `type` does NOT match the
      regular expression `\\b(api-sdk-python)\\b`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
      $.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
