# - ---------------------------------------------------------------------------- -
# -                               Coffin Makefile                                -
# -                                                                              -
# -              All the compilation sources can be easily removed               -
# -               and compiled files can be edited as normal ones                -
# - ---------------------------------------------------------------------------- -

# - ----------------------------------- Misc ----------------------------------- -

ALIGN = "35"
SCSS_STYLE = "expanded" # compressed, expanded

# - ------------------------------- HTML Target -------------------------------- -
# HTML_LIB := $(wildcard src/_lib/*.kdl)
# HTML_MD := $(wildcard src/_md/*.md)

# HTML_SOURCE := $(wildcard src/*.kdl)
# HTML_SOURCE += $(wildcard src/**/*.kdl)

# HTML_SOURCE := $(filter-out $(HTML_LIB),$(HTML_SOURCE))

# TARGET_HTML := $(patsubst src/%.kdl,public/%.html,$(HTML_SOURCE))

# public/%.html: src/%.kdl $(HTML_LIB) $(HTML_MD)
# 	- [ ! -d $(dir $@) ] && mkdir -pv $(dir $@)
# 	printf "%-$(ALIGN)s > %s\n" "$<" "$@"
# 	kdl2html $< | prettier --parser="html" --tab-width=4 --embedded-language-formatting="off" > $@

# - -------------------------------- CSS Target -------------------------------- -
# CSS_LIB := $(wildcard src/scss/_lib/*.scss)

# CSS_SOURCE := $(wildcard src/scss/*.scss)
# CSS_SOURCE += $(wildcard src/scss/**/*.scss)

# CSS_SOURCE := $(filter-out $(CSS_LIB),$(CSS_SOURCE))

# TARGET_CSS := $(patsubst src/scss/%.scss,public/css/%.css,$(CSS_SOURCE))

# public/css/%.css: src/scss/%.scss $(CSS_LIB)
# 	- [ ! -d $(dir $@) ] && mkdir -pv $(dir $@)
# 	printf "%-$(ALIGN)s > %s\n" "$<" "$@"
# 	sass -s $(SCSS_STYLE) --no-source-map $< $@

# - ------------------------------ Main commands ------------------------------- -
TARGETS := $(TARGET_HTML)    \
		   $(TARGET_CSS)

all: $(TARGETS)

clean:
	rm $(TARGET_HTML)
	rm $(TARGET_CSS)

.DEFAULT_GOAL := all
.MAIN: all

.SILENT:

