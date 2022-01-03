# This file setups the required tools and is executed during container build
PWD=$(pwd)

GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}Installing GitHub CLI${NC}"
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null
apt update
apt install gh

echo -e "${GREEN}Installing NPM plugins${NC}"
npm install

echo -e "${GREEN}Done initializing${NC}"
