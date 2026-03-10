#!/bin/bash

# ============================================
# Resume Project Setup Script
# Author: Robert Kimutai
# Description: Automated setup for resume project
# ============================================

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="professional-resume"
REQUIRED_COMMANDS=("quarto")
OPTIONAL_COMMANDS=("git" "node" "npm")

# Functions
print_header() {
    echo -e "${BLUE}============================================${NC}"
    echo -e "${BLUE}    Professional Resume Setup Script${NC}"
    echo -e "${BLUE}============================================${NC}"
    echo
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

check_command() {
    if command -v $1 &> /dev/null; then
        print_success "$1 is installed ($(command -v $1))"
        return 0
    else
        print_error "$1 is not installed"
        return 1
    fi
}

create_project_structure() {
    print_info "Creating project structure..."
    
    # Create directories
    mkdir -p assets/{css,js,images}
    mkdir -p output
    mkdir -p backups
    
    print_success "Directory structure created"
}

install_quarto() {
    print_info "Installing Quarto..."
    
    # Detect OS
    OS="unknown"
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        OS="linux"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        OS="mac"
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        OS="windows"
    fi
    
    case $OS in
        linux)
            print_info "Detected Linux. Installing Quarto..."
            wget https://github.com/quarto-dev/quarto-cli/releases/download/v1.4.550/quarto-1.4.550-linux-amd64.deb
            sudo dpkg -i quarto-*.deb
            rm quarto-*.deb
            ;;
        mac)
            print_info "Detected macOS. Installing Quarto via Homebrew..."
            if command -v brew &> /dev/null; then
                brew install quarto
            else
                print_error "Homebrew not found. Please install Homebrew first."
                echo "Visit: https://brew.sh"
                exit 1
            fi
            ;;
        windows)
            print_info "Detected Windows."
            echo "Please download Quarto from: https://quarto.org/docs/get-started/"
            ;;
        *)
            print_warning "Unknown OS. Please install Quarto manually."
            echo "Visit: https://quarto.org/docs/get-started/"
            ;;
    esac
}

install_tinytex() {
    print_info "Installing TinyTeX for PDF support..."
    if command -v quarto &> /dev/null; then
        quarto install tinytex
        print_success "TinyTeX installed"
    else
        print_error "Quarto not found. Please install Quarto first."
    fi
}

setup_git() {
    if command -v git &> /dev/null; then
        print_info "Initializing Git repository..."
        git init
        
        # Create .gitignore
        cat > .gitignore << 'EOF'
# Quarto
/.quarto/
_site/
*.html
*.pdf
resume_files/

# Backups
backups/
*.backup
*.bak

# OS Files
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo

# Node
node_modules/
package-lock.json

# Output
output/
dist/
*.min.css
*.min.js

# Logs
*.log
*.aux
*.out
*.toc
EOF
        
        print_success "Git repository initialized with .gitignore"
    else
        print_warning "Git not installed. Skipping repository initialization."
    fi
}

create_sample_config() {
    print_info "Creating configuration file..."
    
    cat > resume.config.yml << 'EOF'
# Resume Configuration
author:
  name: "Robert Kimutai"
  title: "Researcher • Data Scientist • Systems Developer"
  email: "robert.kimutai.ds@gmail.com"
  phone: "+254 723 493 122"
  location: "Nairobi, Kenya"
  linkedin: "https://www.linkedin.com/in/robert-kimutai-921608330/"
  github: "https://github.com/RobertKimutai-DS"
  website: "#"

# Build settings
output:
  html: true
  pdf: true
  
# Theme settings
theme:
  primary_color: "#667eea"
  secondary_color: "#764ba2"
  font_family: "Inter, sans-serif"
EOF
    
    print_success "Configuration file created"
}

create_build_script() {
    print_info "Creating build script..."
    
    cat > build.sh << 'EOF'
#!/bin/bash

# Build script for resume
echo "Building resume..."

# Check if quarto is installed
if ! command -v quarto &> /dev/null; then
    echo "Error: Quarto is not installed"
    exit 1
fi

# Build HTML
echo "Building HTML version..."
quarto render resume.qmd --to html

# Build PDF
echo "Building PDF version..."
quarto render resume.qmd --to pdf

echo "Build complete!"
echo "HTML: resume.html"
echo "PDF: resume.pdf"
EOF
    
    chmod +x build.sh
    print_success "Build script created (build.sh)"
}

create_preview_script() {
    print_info "Creating preview script..."
    
    cat > preview.sh << 'EOF'
#!/bin/bash

# Preview script for resume
echo "Starting preview server..."
echo "Visit: http://localhost:4000"
echo "Press Ctrl+C to stop"

quarto preview resume.qmd
EOF
    
    chmod +x preview.sh
    print_success "Preview script created (preview.sh)"
}

main() {
    print_header
    
    # Check current directory
    print_info "Setting up in: $(pwd)"
    echo
    
    # Check for existing files
    if [ -f "resume.qmd" ] || [ -f "resume-styles.css" ]; then
        print_warning "Resume files already exist in this directory!"
        read -p "Do you want to continue and potentially overwrite files? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_info "Setup cancelled"
            exit 0
        fi
    fi
    
    # Check requirements
    print_info "Checking requirements..."
    
    for cmd in "${REQUIRED_COMMANDS[@]}"; do
        if ! check_command "$cmd"; then
            print_warning "$cmd is required but not installed"
            read -p "Would you like to install $cmd? (y/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                case $cmd in
                    quarto)
                        install_quarto
                        ;;
                esac
            else
                print_error "Cannot continue without $cmd"
                exit 1
            fi
        fi
    done
    
    # Check optional commands
    echo
    print_info "Checking optional dependencies..."
    for cmd in "${OPTIONAL_COMMANDS[@]}"; do
        check_command "$cmd" || print_warning "$cmd is optional but recommended"
    done
    
    echo
    
    # Create project structure
    create_project_structure
    
    # Setup Git
    read -p "Initialize Git repository? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        setup_git
    fi
    
    # Install TinyTeX
    read -p "Install TinyTeX for PDF support? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        install_tinytex
    fi
    
    # Create configuration files
    create_sample_config
    create_build_script
    create_preview_script
    
    echo
    print_success "Setup complete!"
    echo
    print_info "Next steps:"
    echo "  1. Copy your resume content files:"
    echo "     - resume.qmd"
    echo "     - resume-styles.css"
    echo "     - resume-scripts.js"
    echo "  2. Run ./preview.sh to start editing"
    echo "  3. Run ./build.sh to generate HTML and PDF"
    echo
    print_info "Quick commands:"
    echo "  Preview:  ./preview.sh"
    echo "  Build:    ./build.sh"
    echo "  HTML:     quarto render resume.qmd --to html"
    echo "  PDF:      quarto render resume.qmd --to pdf"
    echo
    
    # Offer to open documentation
    read -p "Would you like to open Quarto documentation? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if command -v xdg-open &> /dev/null; then
            xdg-open "https://quarto.org/docs/get-started/"
        elif command -v open &> /dev/null; then
            open "https://quarto.org/docs/get-started/"
        else
            print_info "Visit: https://quarto.org/docs/get-started/"
        fi
    fi
}

# Run main function
main "$@"