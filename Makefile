build/build.js: index.js lib/*.js
	@component build --dev
	@echo build

components: component.json
	@component install --dev
	@echo install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
