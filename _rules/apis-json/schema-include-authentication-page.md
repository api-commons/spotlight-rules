---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-authentication-page
title: Schema Include Authentication Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Authentication
description: This property ensures that there is a human readable authentication
  page available that will provide what type of authentication is used and how
  it can be applied, as well as any services or tooling that API consumers can
  use to troubleshoot authentication with APIs.
experience:
  - security
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-authentication-page/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-authentication-page' (Schema Include
  Authentication Page). Requirement: This property ensures that there is a human
  readable authentication page available that will provide what type of
  authentication is used and how it can be applied, as well as any services or
  tooling that API consumers can use to troubleshoot authentication with APIs.
  To fix: Ensure `type` does NOT match the regular expression
  `\\b(Authentication)\\b`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-authentication-page:
    title: Schema Include Authentication Page
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-authentication-page/
    description: This property ensures that there is a human readable authentication
      page available that will provide what type of authentication is used and how
      it can be applied, as well as any services or tooling that API consumers can
      use to troubleshoot authentication with APIs.
    message: Has Authentication
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(Authentication)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:security
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-authentication-page' (Schema Include
      Authentication Page). Requirement: This property ensures that there is a
      human readable authentication page available that will provide what type of
      authentication is used and how it can be applied, as well as any services or
      tooling that API consumers can use to troubleshoot authentication with APIs.
      To fix: Ensure `type` does NOT match the regular expression
      `\\b(Authentication)\\b`; rename or rewrite any value that does. This rule
      is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
