---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-defaultcontenttype
title: Document Require Defaultcontenttype
severity: info
given: $
message: Missing `defaultContentType`.
description: asyncapi document should declare a `defaultContentType` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-defaultcontenttype/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-defaultcontenttype' (Document Require
  Defaultcontenttype). Requirement: asyncapi document should declare a
  `defaultContentType` property. To fix: Ensure `defaultContentType` is present
  and non-empty at each matching location. Guidance: Missing
  `defaultContentType`. Make the smallest change that satisfies the rule, leave
  all unrelated content, key order, comments, and formatting unchanged, and keep
  the document valid AsyncAPI. Return only the complete corrected document, with
  no commentary."
builtin: false
ruleyaml: >
  document-require-defaultcontenttype:
    title: Document Require Defaultcontenttype
    reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-defaultcontenttype/
    description: asyncapi document should declare a `defaultContentType` property.
    message: Missing `defaultContentType`.
    given: $
    severity: info
    then:
      field: defaultContentType
      function: truthy
    tags:
      - format:asyncapi
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'document-require-defaultcontenttype' (Document Require
      Defaultcontenttype). Requirement: asyncapi document should declare a
      `defaultContentType` property. To fix: Ensure `defaultContentType` is
      present and non-empty at each matching location. Guidance: Missing
      `defaultContentType`. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
