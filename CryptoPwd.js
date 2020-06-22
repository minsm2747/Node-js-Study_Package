// 모듈 추출
var crypto = require('crypto');

// 변수 선언
var key = '아무도 알지 못하는 나만의 비밀 Key';
var input = 'PASSWORE';

// 암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// 암호화 해제
var decipher = crypto.createDecipher('ase192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipherdOutput = decipher.final('utf8');