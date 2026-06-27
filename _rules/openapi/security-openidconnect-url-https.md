---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-openidconnect-url-https
title: Security OpenID-Connect URL HTTPS
severity: info
given: $.components.securitySchemes[?(@ && @.type ==
  'openIdConnect')].openIdConnectUrl
message: openIdConnectUrl should use https.
description: The OpenID Connect discovery URL (openIdConnectUrl) should use
  https so token/identity configuration is not retrieved over an insecure
  channel.
experience:
  - security
spec:
  - components
topic: []
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/security-openidconnect-url-https/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-openidconnect-url-https' (Security OpenID-Connect
  URL HTTPS). Requirement: The OpenID Connect discovery URL (openIdConnectUrl)
  should use https so token/identity configuration is not retrieved over an
  insecure channel. To fix: Ensure the targeted value matches the regular
  expression `^https://`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.components.securitySchemes[?(@ && @.type ==
  'openIdConnect')].openIdConnectUrl` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  security-openidconnect-url-https:
    title: Security OpenID-Connect URL HTTPS
    reference: https://spotlight-rules.com/spec/rules/openapi/security-openidconnect-url-https/
    description: The OpenID Connect discovery URL (openIdConnectUrl) should use
      https so token/identity configuration is not retrieved over an insecure
      channel.
    message: openIdConnectUrl should use https.
    given: $.components.securitySchemes[?(@ && @.type ==
      'openIdConnect')].openIdConnectUrl
    severity: info
    then:
      function: pattern
      functionOptions:
        match: ^https://
    tags:
      - format:openapi
      - spec:components
      - experience:security
      - owasp:api8
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'security-openidconnect-url-https' (Security OpenID-Connect
      URL HTTPS). Requirement: The OpenID Connect discovery URL (openIdConnectUrl)
      should use https so token/identity configuration is not retrieved over an
      insecure channel. To fix: Ensure the targeted value matches the regular
      expression `^https://`; rewrite any value that does not. This rule is
      evaluated at the JSONPath `$.components.securitySchemes[?(@ && @.type ==
      'openIdConnect')].openIdConnectUrl` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
