function isResourceModule(imported) {
  const name = imported.moduleName;

  return name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.svg');
}

function isReactModule(imported) {
  return imported.moduleName === 'react';
}

function isInternalModule(imported) {
  return imported.moduleName.startsWith('./');
}

function isExternalModule(imported) {
  return imported.moduleName.startsWith('../');
}

function style(api, file) {
  const {
    alias,
    and,
    not,
    dotSegmentCount,
    hasNoMember,
    isAbsoluteModule,
    isNodeModule,
    isInstalledModule,
    isRelativeModule,
    moduleName,
    naturally,
    unicode,
  } = api;

  return [
    // 1. Modules with possible side-effects

    // import "foo"
    { match: and(hasNoMember, isAbsoluteModule) },
    { separator: true },

    // import "./foo"
    { match: and(hasNoMember, isRelativeModule) },
    { separator: true },

    // 2. React is special due to requirement for JSX

    // import React from "react";
    {
      match: isReactModule,
      sortNamedMembers: alias(unicode),
    },
    { separator: true },

    // 3. Third party modules

    // import … from "fs";
    {
      match: isNodeModule,
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    { separator: true },

    // import moment from 'monent';
    {
      match: isInstalledModule(file),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    { separator: true },

    // 4. Project modules

    // import … from "../foo";
    {
      match: and(isExternalModule, not(isResourceModule)),
      sort: [dotSegmentCount, moduleName(naturally)],
      sortNamedMembers: alias(unicode),
    },
    { separator: true },

    // import … from "./foo";
    {
      match: and(isInternalModule, not(isResourceModule)),
      sort: [dotSegmentCount, moduleName(naturally)],
      sortNamedMembers: alias(unicode),
    },
    { separator: true },

    // 5. Resources

    // import icon from "./icon.png";
    {
      match: isResourceModule,
      sort: [dotSegmentCount, moduleName(naturally)],
      sortNamedMembers: alias(unicode),
    },
  ];
}

module.exports = style;
