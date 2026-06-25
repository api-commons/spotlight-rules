---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-include-contact
title: API Include Contact
severity: warn
given: $.apis.*
message: API COULD have a contact.
description: The contact object in an APIs.json file allows for associating a
  vCard that represents an individual or organizational entity. It includes
  common contact information such as a name, email, or other references,
  offering a standardized method for providing support for an API.
experience:
  - discoverability
  - documentation
spec:
  - apis
source: []
builtin: false
---
