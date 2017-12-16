'use strict'

const chai =  require('chai');
const expect = chai.expect;
const Person = require('../../models/person');

describe('Person', function () {
  it('should have a full name', function () {
    const person = new Person({firstName:'Jon', lastName:'Ablondie'})
    expect(person.fullName().to.equal('Jon Ablondie'))
  })
})
