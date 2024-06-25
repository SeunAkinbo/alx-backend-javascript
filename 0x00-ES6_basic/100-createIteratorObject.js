#!/usr/bin/node

export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (index < employees.length) {
        const value = employees[index];
        index += 1;
        return { done: false, value };
      }
      return { done: true };
    },
  };
}
