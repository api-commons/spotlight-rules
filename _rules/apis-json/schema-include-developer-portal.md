---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-developer-portal
title: Schema Include Developer Portal
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Developer Portal
description: This property ensures there a developer portal associated with an
  API and that you can find a landing page for the API, documentation, SDKs, and
  other resources.
experience:
  - discoverability
  - usability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-developer-portal/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-developer-portal' (Schema Include Developer
  Portal). Requirement: This property ensures there a developer portal
  associated with an API and that you can find a landing page for the API,
  documentation, SDKs, and other resources. To fix: Ensure `type` does NOT match
  the regular expression
  `\\b(api-developer-portal|developer-portal|portal|Portal|Portals|DeveloperPor\
  tal)\\b`; rename or rewrite any value that does. This rule is evaluated at the
  JSONPath `$.apis.*.properties.* | $.common.*` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-developer-portal:
    title: Schema Include Developer Portal
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-developer-portal/
    description: This property ensures there a developer portal associated with an
      API and that you can find a landing page for the API, documentation, SDKs,
      and other resources.
    message: Has Developer Portal
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-developer-portal|developer-portal|portal|Portal|Portals|DeveloperPortal)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:discoverability
      - experience:usability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-developer-portal' (Schema Include Developer
      Portal). Requirement: This property ensures there a developer portal
      associated with an API and that you can find a landing page for the API,
      documentation, SDKs, and other resources. To fix: Ensure `type` does NOT
      match the regular expression
      `\\b(api-developer-portal|developer-portal|portal|Portal|Portals|DeveloperP\
      ortal)\\b`; rename or rewrite any value that does. This rule is evaluated at
      the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid APIs.json. Return only
      the complete corrected document, with no commentary."
---
