---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: contact-include-full-name
title: Contact Include Full Name
severity: error
given: $.apis.*.contact.*
message: Contact Could Have FN
description: The contact object in an APIs.json file includes a full name (FN)
  property, which specifies the formatted text corresponding to the contact name
  in the vCard for an API. This provides a quick and clear way to assign a
  person, group, or other point of contact to an API for addressing questions
  and providing support.
experience:
  - documentation
  - discoverability
spec:
  - apis
source: []
builtin: false
---
