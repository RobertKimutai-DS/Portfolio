# Makefile for Resume Building
# Author: Robert Kimutai
# Usage: make [target]

# Variables
QUARTO = quarto
SOURCE = resume.qmd
HTML_OUTPUT = resume.html
PDF_OUTPUT = resume.pdf
STYLES = resume-styles.css
SCRIPTS = resume-scripts.js
SCSS = custom.scss

# Directories
BUILD_DIR = _build
DIST_DIR = dist

# Colors for terminal output
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[1;33m
NC = \033[0m # No Color

# Default target
.DEFAULT_GOAL := help

# Phony targets (not files)
.PHONY: help all html pdf both clean install check preview deploy minify watch setup

## help: Show this help message
help:
	@echo "$(GREEN)Resume Build System$(NC)"
	@echo "==================="
	@echo ""
	@echo "$(YELLOW)Available targets:$(NC)"
	@grep -E '^## ' Makefile | sed 's/## /  /' | column -t -s ':'
	@echo ""
	@echo "$(YELLOW)Usage:$(NC)"
	@echo "  make html     # Build HTML version"
	@echo "  make pdf      # Build PDF version"
	@echo "  make both     # Build both formats"
	@echo "  make preview  # Live preview with auto-reload"

## all: Build everything (HTML and PDF)
all: both

## html: Build HTML version only
html:
	@echo "$(GREEN)Building HTML resume...$(NC)"
	@$(QUARTO) render $(SOURCE) --to html
	@echo "$(GREEN)✓ HTML build complete: $(HTML_OUTPUT)$(NC)"

## pdf: Build PDF version only
pdf:
	@echo "$(GREEN)Building PDF resume...$(NC)"
	@$(QUARTO) render $(SOURCE) --to pdf
	@echo "$(GREEN)✓ PDF build complete: $(PDF_OUTPUT)$(NC)"

## both: Build both HTML and PDF versions
both:
	@echo "$(GREEN)Building HTML and PDF resumes...$(NC)"
	@$(QUARTO) render $(SOURCE) --to html,pdf
	@echo "$(GREEN)✓ Both formats built successfully$(NC)"

## clean: Remove all generated files
clean:
	@echo "$(YELLOW)Cleaning generated files...$(NC)"
	@rm -f $(HTML_OUTPUT) $(PDF_OUTPUT)
	@rm -f resume_files/*
	@rm -rf $(BUILD_DIR) $(DIST_DIR)
	@rm -f *.log *.aux *.out *.toc
	@echo "$(GREEN)✓ Clean complete$(NC)"

## install: Install required dependencies
install:
	@echo "$(GREEN)Installing dependencies...$(NC)"
	@command -v quarto >/dev/null 2>&1 || { \
		echo "$(RED)Quarto not found. Installing...$(NC)"; \
		echo "Visit: https://quarto.org/docs/get-started/"; \
		exit 1; \
	}
	@echo "$(YELLOW)Installing TinyTeX for PDF support...$(NC)"
	@quarto install tinytex
	@echo "$(YELLOW)Installing Node packages for minification...$(NC)"
	@npm install -g csso-cli terser
	@echo "$(GREEN)✓ Installation complete$(NC)"

## check: Check if all requirements are installed
check:
	@echo "$(YELLOW)Checking requirements...$(NC)"
	@echo -n "Quarto: "
	@command -v quarto >/dev/null 2>&1 && echo "$(GREEN)✓ Installed$(NC)" || echo "$(RED)✗ Not found$(NC)"
	@echo -n "LaTeX: "
	@quarto check 2>/dev/null | grep -q "TinyTeX" && echo "$(GREEN)✓ Installed$(NC)" || echo "$(YELLOW)⚠ Not found (PDF generation may fail)$(NC)"
	@echo -n "Node.js: "
	@command -v node >/dev/null 2>&1 && echo "$(GREEN)✓ Installed$(NC)" || echo "$(YELLOW)⚠ Not found (minification unavailable)$(NC)"
	@echo ""
	@$(QUARTO) check

## preview: Start live preview server with auto-reload
preview:
	@echo "$(GREEN)Starting preview server...$(NC)"
	@echo "$(YELLOW)Visit: http://localhost:4000$(NC)"
	@echo "$(YELLOW)Press Ctrl+C to stop$(NC)"
	@$(QUARTO) preview $(SOURCE)

## deploy: Build and prepare for deployment
deploy: both minify
	@echo "$(GREEN)Preparing for deployment...$(NC)"
	@mkdir -p $(DIST_DIR)
	@cp $(HTML_OUTPUT) $(DIST_DIR)/
	@cp $(PDF_OUTPUT) $(DIST_DIR)/
	@cp *.min.css $(DIST_DIR)/ 2>/dev/null || cp $(STYLES) $(DIST_DIR)/
	@cp *.min.js $(DIST_DIR)/ 2>/dev/null || cp $(SCRIPTS) $(DIST_DIR)/
	@echo "$(GREEN)✓ Files ready in $(DIST_DIR)/ directory$(NC)"
	@echo "$(YELLOW)Deploy contents of $(DIST_DIR)/ to your web server$(NC)"

## minify: Minify CSS and JavaScript files
minify:
	@echo "$(YELLOW)Minifying assets...$(NC)"
	@if command -v csso >/dev/null 2>&1; then \
		csso $(STYLES) -o resume-styles.min.css; \
		echo "$(GREEN)✓ CSS minified$(NC)"; \
	else \
		echo "$(YELLOW)⚠ csso not found, skipping CSS minification$(NC)"; \
	fi
	@if command -v terser >/dev/null 2>&1; then \
		terser $(SCRIPTS) -o resume-scripts.min.js -c -m; \
		echo "$(GREEN)✓ JavaScript minified$(NC)"; \
	else \
		echo "$(YELLOW)⚠ terser not found, skipping JS minification$(NC)"; \
	fi

## watch: Watch for changes and auto-rebuild
watch:
	@echo "$(GREEN)Watching for changes...$(NC)"
	@echo "$(YELLOW)Press Ctrl+C to stop$(NC)"
	@while true; do \
		$(QUARTO) render $(SOURCE) --to html; \
		echo "$(GREEN)Waiting for changes...$(NC)"; \
		sleep 2; \
	done

## setup: Initial setup - create all necessary files
setup:
	@echo "$(GREEN)Setting up resume project...$(NC)"
	@mkdir -p assets/css assets/js
	@touch $(SOURCE)
	@touch $(STYLES)
	@touch $(SCRIPTS)
	@echo "$(GREEN)✓ Project structure created$(NC)"
	@echo ""
	@echo "$(YELLOW)Next steps:$(NC)"
	@echo "1. Copy content into $(SOURCE)"
	@echo "2. Copy styles into $(STYLES)"
	@echo "3. Copy scripts into $(SCRIPTS)"
	@echo "4. Run 'make preview' to start editing"

## test: Test the build process
test:
	@echo "$(YELLOW)Testing build process...$(NC)"
	@$(MAKE) clean
	@$(MAKE) check
	@$(MAKE) html
	@if [ -f $(HTML_OUTPUT) ]; then \
		echo "$(GREEN)✓ HTML test passed$(NC)"; \
	else \
		echo "$(RED)✗ HTML test failed$(NC)"; \
		exit 1; \
	fi
	@$(MAKE) pdf
	@if [ -f $(PDF_OUTPUT) ]; then \
		echo "$(GREEN)✓ PDF test passed$(NC)"; \
	else \
		echo "$(YELLOW)⚠ PDF test failed (LaTeX might not be installed)$(NC)"; \
	fi
	@echo "$(GREEN)✓ All tests complete$(NC)"

## version: Show version information
version:
	@echo "$(GREEN)Version Information:$(NC)"
	@echo -n "Quarto: "
	@$(QUARTO) --version
	@echo -n "Make: "
	@$(MAKE) --version | head -n1
	@echo -n "Node: "
	@node --version 2>/dev/null || echo "Not installed"

## backup: Create a backup of current files
backup:
	@echo "$(YELLOW)Creating backup...$(NC)"
	@mkdir -p backups
	@tar -czf backups/resume-backup-$$(date +%Y%m%d-%H%M%S).tar.gz \
		$(SOURCE) $(STYLES) $(SCRIPTS) $(SCSS) Makefile 2>/dev/null || true
	@echo "$(GREEN)✓ Backup created in backups/ directory$(NC)"

# Watch for specific file changes (advanced)
%.html: %.qmd
	@echo "$(GREEN)Detected change in $<, rebuilding...$(NC)"
	@$(QUARTO) render $< --to html

%.pdf: %.qmd
	@echo "$(GREEN)Detected change in $<, rebuilding PDF...$(NC)"
	@$(QUARTO) render $< --to pdf