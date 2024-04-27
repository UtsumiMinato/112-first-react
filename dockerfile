FROM node:21-alpine

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製專案文件
COPY . .

# 開放 3000 端口
EXPOSE 3000

# 定義容器啟動後執行的命令
CMD ["npm", "run", "dev"]
