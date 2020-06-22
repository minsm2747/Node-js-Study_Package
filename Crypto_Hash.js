// 모듈 추출
var crypto = require('crypto');

// Hash 생성
var chasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// 결과 출력
console.log('crypto_hash', output);