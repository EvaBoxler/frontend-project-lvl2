install:
		npm ci

link:
		npm link

publish:
		npm publish --dry-run

lint:
		npx eslint .

test:
		npm test

coverageCommand:
		npm test -- --coverage --coverageProvider=v8
