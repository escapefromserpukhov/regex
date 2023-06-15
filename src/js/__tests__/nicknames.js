import Validator from '../basic';

test('Объект должен пропускать логин', () => {
  const login = new Validator('Masha');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Ma-s-ha');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Ma_s-hA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Ma55hA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Ma555-hA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Ma555-555hA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('Masha11');

  expect(login.validateUsername()).toBe(false);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('_Masha11');

  expect(login.validateUsername()).toBe(false);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('Masha_');

  expect(login.validateUsername()).toBe(false);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('Ma_s-hA$');

  expect(login.validateUsername()).toBe(false);
});
