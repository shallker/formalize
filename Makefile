build/build.js: components index.js lib/*.js
	@component build
	@echo build

components: component.json
	@rm -rf components
	@mkdir components
	@component install --dev
	@echo install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
