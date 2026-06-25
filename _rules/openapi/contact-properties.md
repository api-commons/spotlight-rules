---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: contact-properties
title: Contact Properties
severity: warn
given: $.info.contact
message: ""
description: Contact object must have "name", "url" and "email".
experience:
  - documentation
  - discoverability
spec:
  - info
source: []
builtin: true
---
