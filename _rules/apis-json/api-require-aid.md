---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-require-aid
title: API Require Aid
severity: info
given: $.apis.*
message: APIs MUST have an aid property.
description: Every API should have a unique identifier, known as an AID (API
  Identifier). The APIs.json file, contract, or collection contains its own AID,
  which the API uses as part of its reference. Additionally, the API applies a
  slugified version of its name, resulting in a unique, human-readable
  identifier for the API.
experience:
  - discoverability
  - governance
spec:
  - apis
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-require-aid/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-require-aid' (API Require Aid). Requirement: Every API
  should have a unique identifier, known as an AID (API Identifier). The
  APIs.json file, contract, or collection contains its own AID, which the API
  uses as part of its reference. Additionally, the API applies a slugified
  version of its name, resulting in a unique, human-readable identifier for the
  API. To fix: Ensure `aid` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath `$.apis.*` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-require-aid:
    title: API Require Aid
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-require-aid/
    description: Every API should have a unique identifier, known as an AID (API
      Identifier). The APIs.json file, contract, or collection contains its own
      AID, which the API uses as part of its reference. Additionally, the API
      applies a slugified version of its name, resulting in a unique,
      human-readable identifier for the API.
    message: APIs MUST have an aid property.
    severity: info
    given: $.apis.*
    then:
      field: aid
      function: truthy
    tags:
      - format:apis-json
      - spec:apis
      - experience:discoverability
      - experience:governance
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-require-aid' (API Require Aid). Requirement: Every API
      should have a unique identifier, known as an AID (API Identifier). The
      APIs.json file, contract, or collection contains its own AID, which the API
      uses as part of its reference. Additionally, the API applies a slugified
      version of its name, resulting in a unique, human-readable identifier for
      the API. To fix: Ensure `aid` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `$.apis.*` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
