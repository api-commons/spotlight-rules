---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-gateway-reference
title: Schema Include Gateway Reference
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Staging Gateway for API
description: This property ensures that there is a reference to the gateway for
  an API, referencing where you can manage the configuration for each API.
experience:
  - governance
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-gateway-reference/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-gateway-reference' (Schema Include Gateway
  Reference). Requirement: This property ensures that there is a reference to
  the gateway for an API, referencing where you can manage the configuration for
  each API. To fix: Ensure `type` does NOT match the regular expression
  `\\b(gateway|Gateway)\\b`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-gateway-reference:
    title: Schema Include Gateway Reference
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-gateway-reference/
    description: This property ensures that there is a reference to the gateway for
      an API, referencing where you can manage the configuration for each API.
    message: Has Staging Gateway for API
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(gateway|Gateway)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-gateway-reference' (Schema Include Gateway
      Reference). Requirement: This property ensures that there is a reference to
      the gateway for an API, referencing where you can manage the configuration
      for each API. To fix: Ensure `type` does NOT match the regular expression
      `\\b(gateway|Gateway)\\b`; rename or rewrite any value that does. This rule
      is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
