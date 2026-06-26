---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-oauth-scheme-require-description
title: Security OAuth Scheme Require Description
severity: info
given: $.[securitySchemes][?(@.type=="oauth2")]
message: JWT usage should be detailed in `description` {{error}}.
description: 'Json Web Tokens RFC7519 is a compact, URL-safe means of
  representing claims to be transferred between two parties. JWT can be enclosed
  in encrypted or signed tokens like JWS and JWE. The [JOSE IANA
  registry](https://www.iana.org/assignments/jose/jose.xhtml) provides
  algorithms information. RFC8725 describes common pitfalls in the JWx
  specifications and in their implementations, such as: - the ability to ignore
  algorithms, eg. `{"alg": "none"}`; - using insecure algorithms like
  `RSASSA-PKCS1-v1_5` eg. `{"alg": "RS256"}`. An API using JWT should explicit
  in the `description` that the implementation conforms to RFC8725. ```
  components: securitySchemes: JWTBearer: type: http scheme: bearer
  bearerFormat: JWT description: |- A bearer token in the format of a JWS and
  conformato to the specifications included in RFC8725. ```.'
experience:
  - security
  - documentation
spec:
  - security
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-oauth-scheme-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-oauth-scheme-require-description' (Security OAuth
  Scheme Require Description). Requirement: Json Web Tokens RFC7519 is a
  compact, URL-safe means of representing claims to be transferred between two
  parties. JWT can be enclosed in encrypted or signed tokens like JWS and JWE.
  The [JOSE IANA registry](https://www.iana.org/assignments/jose/jose.xhtml)
  provides algorithms information. RFC8725 describes common pitfalls in the JWx
  specifications and in their implementations, such as: - the ability to ignore
  algorithms, eg. `{\"alg\": \"none\"}`; - using insecure algorithms like
  `RSASSA-PKCS1-v1_5` eg. `{\"alg\": \"RS256\"}`. An API using JWT should
  explicit in the `description` that the implementation conforms to RFC8725. ```
  components: securitySchemes: JWTBearer: type: http scheme: bearer
  bearerFormat: JWT description: |- A bearer token in the format of a JWS and
  conformato to the specifications included in RFC8725. ```. To fix: Ensure
  `description` is present and non-empty at each matching location. Also: Ensure
  `description` matches the regular expression `.*RFC8725.*`; rewrite any value
  that does not. Guidance: JWT usage should be detailed in `description`. This
  rule is evaluated at the JSONPath `$.[securitySchemes][?(@.type==\"oauth2\")]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
