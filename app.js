#!/usr/bin/env node
async function start() {
  // 如果需要手动修改anonymous_token，需要注释generateConfig调用
  require('./server').serveNcmApi({
    host: '0.0.0.0',
    checkVersion: true,
  })
}
start()
