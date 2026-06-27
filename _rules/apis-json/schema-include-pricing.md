---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-pricing
title: Schema Include Pricing
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Pricing
description: This property provides a link to a pricing page that applies to an
  API, providing a breakdown of the costs associated with using an API.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-pricing/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-pricing' (Schema Include Pricing).
  Requirement: This property provides a link to a pricing page that applies to
  an API, providing a breakdown of the costs associated with using an API. To
  fix: Ensure `type` does NOT match the regular expression `\\b(Pricing)\\b`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-pricing:
    title: Schema Include Pricing
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-pricing/
    description: This property provides a link to a pricing page that applies to an
      API, providing a breakdown of the costs associated with using an API.
    message: Has Pricing
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(Pricing)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-pricing' (Schema Include Pricing).
      Requirement: This property provides a link to a pricing page that applies to
      an API, providing a breakdown of the costs associated with using an API. To
      fix: Ensure `type` does NOT match the regular expression `\\b(Pricing)\\b`;
      rename or rewrite any value that does. This rule is evaluated at the
      JSONPath `$.apis.*.properties.* | $.common.*` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid APIs.json. Return only
      the complete corrected document, with no commentary."
---
