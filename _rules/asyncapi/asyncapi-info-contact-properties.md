---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-info-contact-properties
title: Asyncapi Info Contact Properties
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
