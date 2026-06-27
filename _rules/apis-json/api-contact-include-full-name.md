---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-contact-include-full-name
title: API Contact Include Full Name
severity: info
given: $.apis.*.contact.*
message: Contact Could Have FN
description: The contact object in an APIs.json file includes a full name (FN)
  property, which specifies the formatted text corresponding to the contact name
  in the vCard for an API. This provides a quick and clear way to assign a
  person, group, or other point of contact to an API for addressing questions
  and providing support.
experience:
  - documentation
  - discoverability
spec:
  - apis
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-contact-include-full-name/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-contact-include-full-name' (API Contact Include Full
  Name). Requirement: The contact object in an APIs.json file includes a full
  name (FN) property, which specifies the formatted text corresponding to the
  contact name in the vCard for an API. This provides a quick and clear way to
  assign a person, group, or other point of contact to an API for addressing
  questions and providing support. To fix: Ensure `FN` is present and non-empty
  at each matching location. This rule is evaluated at the JSONPath
  `$.apis.*.contact.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  api-contact-include-full-name:
    title: API Contact Include Full Name
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-contact-include-full-name/
    description: The contact object in an APIs.json file includes a full name (FN)
      property, which specifies the formatted text corresponding to the contact
      name in the vCard for an API. This provides a quick and clear way to assign
      a person, group, or other point of contact to an API for addressing
      questions and providing support.
    message: Contact Could Have FN
    severity: info
    given: $.apis.*.contact.*
    then:
      field: FN
      function: truthy
    tags:
      - format:apis-json
      - spec:apis
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-contact-include-full-name' (API Contact Include Full
      Name). Requirement: The contact object in an APIs.json file includes a full
      name (FN) property, which specifies the formatted text corresponding to the
      contact name in the vCard for an API. This provides a quick and clear way to
      assign a person, group, or other point of contact to an API for addressing
      questions and providing support. To fix: Ensure `FN` is present and
      non-empty at each matching location. This rule is evaluated at the JSONPath
      `$.apis.*.contact.*` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
