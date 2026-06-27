---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-server-variables
title: OAS3 Server Variables
severity: info
given: "$.servers[*] | #PathItem.servers[*] | #OperationObject.servers[*] |
  #LinkObject.server"
message: "{{error}}"
description: Server variables must be defined and valid and there must be no
  unused variables.
experience:
  - reliability
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-server-variables/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-server-variables' (OAS3 Server Variables). Requirement:
  Server variables must be defined and valid and there must be no unused
  variables. This rule is evaluated at the JSONPath `$.servers[*] |
  #PathItem.servers[*] | #OperationObject.servers[*] | #LinkObject.server` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  oas3-server-variables:
    title: OAS3 Server Variables
    reference: https://spotlight-rules.com/spec/rules/openapi/oas3-server-variables/
    description: Server variables must be defined and valid and there must be no
      unused variables.
    message: "{{error}}"
    severity: info
    given:
      - $.servers[*]
      - "#PathItem.servers[*]"
      - "#OperationObject.servers[*]"
      - "#LinkObject.server"
    then:
      function: serverVariables
      functionOptions:
        checkSubstitutions: true
        requireDefault: true
    tags:
      - format:openapi
      - spec:servers
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'oas3-server-variables' (OAS3 Server Variables).
      Requirement: Server variables must be defined and valid and there must be no
      unused variables. This rule is evaluated at the JSONPath `$.servers[*] |
      #PathItem.servers[*] | #OperationObject.servers[*] | #LinkObject.server` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
