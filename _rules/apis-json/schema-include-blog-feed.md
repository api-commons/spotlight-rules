---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-blog-feed
title: Schema Include Blog Feed
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Blog Feed
description: This property ensures that blogs in support of APIs have an Atom or
  RSS feed of posts, allowing for the syndication of updates and information
  around individual APIs and the operations around them.
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-blog-feed/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-blog-feed' (Schema Include Blog Feed).
  Requirement: This property ensures that blogs in support of APIs have an Atom
  or RSS feed of posts, allowing for the syndication of updates and information
  around individual APIs and the operations around them. To fix: Ensure `type`
  does NOT match the regular expression `\\b(blog-feed|BlogFeeds)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-blog-feed:
    title: Schema Include Blog Feed
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-blog-feed/
    description: This property ensures that blogs in support of APIs have an Atom or
      RSS feed of posts, allowing for the syndication of updates and information
      around individual APIs and the operations around them.
    message: Has a Blog Feed
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(blog-feed|BlogFeeds)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-blog-feed' (Schema Include Blog Feed).
      Requirement: This property ensures that blogs in support of APIs have an
      Atom or RSS feed of posts, allowing for the syndication of updates and
      information around individual APIs and the operations around them. To fix:
      Ensure `type` does NOT match the regular expression
      `\\b(blog-feed|BlogFeeds)\\b`; rename or rewrite any value that does. This
      rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
