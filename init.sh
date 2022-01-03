# This file setups the required tools and is executed during container build
PWD=$(pwd)

GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}Installing NPM plugins${NC}"
npm install

echo -e "${GREEN}Done initializing${NC}"
