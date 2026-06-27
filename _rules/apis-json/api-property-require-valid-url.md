---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-valid-url
title: API Property Require Valid URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Property URLs Are Valid
description: This property ensures that properties of an API or API contract all
  have valid URLs, checking if any of the URLs are not properly formed, or could
  be other formats.
experience:
  - consistency
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-valid-url/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-valid-url' (API Property Require Valid
  URL). Requirement: This property ensures that properties of an API or API
  contract all have valid URLs, checking if any of the URLs are not properly
  formed, or could be other formats. To fix: Ensure `url` does NOT match the
  regular expression
  `^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-\
  Z0-9@:%._\\+~#?&//=]*)$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid APIs.json.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-valid-url:
    title: API Property Require Valid URL
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-valid-url/
    description: This property ensures that properties of an API or API contract all
      have valid URLs, checking if any of the URLs are not properly formed, or
      could be other formats.
    message: Property URLs Are Valid
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: url
        function: pattern
        functionOptions:
          notMatch: ^((http|https)://)[-a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\+~#?&//=]*)$
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:consistency
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-valid-url' (API Property Require Valid
      URL). Requirement: This property ensures that properties of an API or API
      contract all have valid URLs, checking if any of the URLs are not properly
      formed, or could be other formats. To fix: Ensure `url` does NOT match the
      regular expression
      `^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-z\
      A-Z0-9@:%._\\+~#?&//=]*)$`; rename or rewrite any value that does. This rule
      is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
