---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: contact-include-email
title: Contact Include Email
severity: error
given: $.apis.*.contact.*
message: API contact COULD have email.
description: The contact object in an APIs.json file allows for referencing the
  email address of a person or group. This property provides a convenient way
  for users to seek support for an API, using email as the default method to
  reach the team managing the API in production.
experience:
  - documentation
  - discoverability
spec:
  - apis
source: []
builtin: false
---
