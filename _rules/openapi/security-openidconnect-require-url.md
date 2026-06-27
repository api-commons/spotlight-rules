---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-openidconnect-require-url
title: Security OpenID-Connect Require URL
severity: info
given: $.components.securitySchemes[?(@ && @.type == 'openIdConnect')]
message: openIdConnect scheme should declare an openIdConnectUrl.
description: OpenID Connect security schemes should declare an openIdConnectUrl
  pointing at the discovery document so clients can configure themselves.
experience:
  - security
spec:
  - components
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-openidconnect-require-url/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-openidconnect-require-url' (Security OpenID-Connect
  Require URL). Requirement: OpenID Connect security schemes should declare an
  openIdConnectUrl pointing at the discovery document so clients can configure
  themselves. To fix: Ensure `openIdConnectUrl` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.components.securitySchemes[?(@ && @.type == 'openIdConnect')]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  security-openidconnect-require-url:
    title: Security OpenID-Connect Require URL
    reference: https://spotlight-rules.com/spec/rules/openapi/security-openidconnect-require-url/
    description: OpenID Connect security schemes should declare an openIdConnectUrl
      pointing at the discovery document so clients can configure themselves.
    message: openIdConnect scheme should declare an openIdConnectUrl.
    given: $.components.securitySchemes[?(@ && @.type == 'openIdConnect')]
    severity: info
    then:
      field: openIdConnectUrl
      function: truthy
    tags:
      - format:openapi
      - spec:components
      - experience:security
      - owasp:api2
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'security-openidconnect-require-url' (Security
      OpenID-Connect Require URL). Requirement: OpenID Connect security schemes
      should declare an openIdConnectUrl pointing at the discovery document so
      clients can configure themselves. To fix: Ensure `openIdConnectUrl` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.components.securitySchemes[?(@ && @.type ==
      'openIdConnect')]` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
