---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-external-docs
title: Document Require External Docs
severity: info
given: $
message: External Docs MUST Be Defined
description: Defining external documentation provides a link to detailed API
  guides, tutorials, and reference material beyond the OpenAPI spec. Analysis
  shows 57.1% of APIs include external docs.
experience:
  - documentation
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-external-docs/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-external-docs' (Document Require External
  Docs). Requirement: Defining external documentation provides a link to
  detailed API guides, tutorials, and reference material beyond the OpenAPI
  spec. Analysis shows 57.1% of APIs include external docs. To fix: Ensure
  `externalDocs` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-external-docs:
    title: Document Require External Docs
    reference: https://spotlight-rules.com/spec/rules/openapi/document-require-external-docs/
    description: Defining external documentation provides a link to detailed API
      guides, tutorials, and reference material beyond the OpenAPI spec. Analysis
      shows 57.1% of APIs include external docs.
    message: External Docs MUST Be Defined
    severity: info
    given: $
    then:
      field: externalDocs
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'document-require-external-docs' (Document Require External
      Docs). Requirement: Defining external documentation provides a link to
      detailed API guides, tutorials, and reference material beyond the OpenAPI
      spec. Analysis shows 57.1% of APIs include external docs. To fix: Ensure
      `externalDocs` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
