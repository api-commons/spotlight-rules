---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-latest-version
title: Asyncapi Latest Version
severity: info
given: $.asyncapi
message: The latest version is not used. You should update to the "3.1.0" version.
description: Checking if the AsyncAPI document is using the latest version.
experience:
  - versioning
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-latest-version/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-latest-version' (Asyncapi Latest Version).
  Requirement: Checking if the AsyncAPI document is using the latest version. To
  fix: Adjust the targeted value so it conforms to the schema this rule
  requires. This rule is evaluated at the JSONPath `$.asyncapi` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid AsyncAPI.
  Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-latest-version:
    title: Asyncapi Latest Version
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-latest-version/
    description: Checking if the AsyncAPI document is using the latest version.
    message: The latest version is not used. You should update to the "3.1.0" version.
    severity: info
    given: $.asyncapi
    then:
      function: schema
      functionOptions:
        schema:
          const: 3.1.0
    tags:
      - format:asyncapi
      - spec:document
      - experience:versioning
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-latest-version' (Asyncapi Latest Version).
      Requirement: Checking if the AsyncAPI document is using the latest version.
      To fix: Adjust the targeted value so it conforms to the schema this rule
      requires. This rule is evaluated at the JSONPath `$.asyncapi` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
