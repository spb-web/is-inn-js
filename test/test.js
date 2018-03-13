const assert = require('assert')
const isInn = require('./../isInn.js')

// Заведомо ложных значения
const notRelevantInn = [
  {
    text: 'булевое значение \'false\'',
    value: false
  },
  {
    text: 'булевое значение \'true\'',
    value: true
  },
  {
    text: 'пустого массива',
    value: [ ]
  },
  {
    text: 'не пустого массива',
    value: [ 11, 22, 33 ]
  },
  {
    text: 'объекта',
    value: { }
  },
  {
    text: 'null',
    value: null
  },
  {
    text: 'пустой строки',
    value: ''
  },
  {
    text: 'нуля',
    value: 0
  },
  {
    text: 'передача строки содержащие символы отличные от цифр (10 символов)',
    value: '1234_5679'
  },
  {
    text: 'передача строки содержащие символы отличные от цифр (12 символов)',
    value: '1234a567912'
  }
]

const validInn = [
  '4200000291',
  '4205000827',
  '4205001725',
  '4205002736',
  '4205009361',
  '4205030444',
  '4205036090',
  '4205046123',
  '4205049011',
  '4205060689',
  '4205080325',
  '4205109214',
  '4207003319',
  '4207008719',
  '420900166500',
  '423001325829',
  '420700009348',
  '420700218140',
  '420700245585',
  '420800036137',
  '420900218123',
  '421300034422',
  '424750253733'
]

const invalidInn = [
  '1234567890',
  '0987654321',
  '1234554321',
  '1115002730',
  '1115009301',
  '1110005080',
  '1111000769',
  '1112426831',
  '1112427095',
  '1112427151',
  '1111111111'
]

function makeTest(result=false, testData) {
  it(`При передаче ${
    typeof testData === 'object' ? testData.text : testData
  } возвращает ${ result ? 'true' : 'false' }`, () => {
    assert.equal(result, isInn(
      typeof testData === 'object' ? testData.value : testData
    ))
  })
}

describe('isInn', function( ){
	describe('Отправка заведомо ложных значений', () => {
		notRelevantInn.forEach(makeTest.bind(null, false))
	})

	describe('Отправка валидных ИНН', ( ) => {
		validInn.forEach(makeTest.bind(null, true))
  })

	describe('Отправка НЕ валидных ИНН', ( ) => {
		invalidInn.forEach(makeTest.bind(null, false))
	})
})
