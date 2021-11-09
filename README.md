# Env-var Boolean (elean)
![Tests](https://github.com/simplyhexagonal/elean/workflows/tests/badge.svg)
[![Try elean on RunKit](https://badge.runkitcdn.com/@simplyhexagonal/elean.svg)](https://npm.runkit.com/@simplyhexagonal/elean)

Convenience function to parse environment variables to boolean (perfect companion for [dotenv](https://www.npmjs.com/package/dotenv)).

```ts
require('dotenv').config();

import elean from '@simplyhexagonal/elean';

const { MY_ENV_VAR } = process.env;

elean(MY_ENV_VAR); // returns either true or false
```

## Tested evaluations

```ts
elean('') // false
elean(0) // false
elean('0') // false
elean(null) // false
elean('null') // false
elean('NULL') // false
elean(false) // false
elean('false') // false
elean('FALSE') // false
elean(undefined) // false
elean('undefined') // false

// ---

elean(1) // true
elean('1') // true
elean('xyz') // true
elean(true) // true
elean('true') // true
elean('TRUE') // true
```

## Open source notice

This project is open to updates by its users, [I](https://github.com/jeanlescure) ensure that PRs are relevant to the community.
In other words, if you find a bug or want a new feature, please help us by becoming one of the
[contributors](#contributors-) ✌️ ! See the [contributing section](#contributing)

## Like this module? ❤

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) ☕
- Supporting Simply Hexagonal on [Open Collective](https://opencollective.com/simplyhexagonal) 🏆
- Starring this repo on [Github](https://github.com/simplyhexagonal/elean) 🌟

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the docs and tests and add your name to the `package.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeanlescure.cr"><img src="https://avatars2.githubusercontent.com/u/3330339?v=4" width="100px;" alt=""/><br /><sub><b>Jean Lescure</b></sub></a><br /><a href="#maintenance-jeanlescure" title="Maintenance">🚧</a> <a href="https://github.com/simplyhexagonal/elean/commits?author=jeanlescure" title="Code">💻</a> <a href="#userTesting-jeanlescure" title="User Testing">📓</a> <a href="https://github.com/simplyhexagonal/elean/commits?author=jeanlescure" title="Tests">⚠️</a> <a href="#example-jeanlescure" title="Examples">💡</a> <a href="https://github.com/simplyhexagonal/elean/commits?author=jeanlescure" title="Documentation">📖</a></td>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
## License

Copyright (c) 2021-Present [Package Contributors](https://github.com/simplyhexagonal/elean/#contributors-).<br/>
Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
