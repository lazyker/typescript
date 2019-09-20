(() =>{
  interface Person {
    firstName: string;
    lastName: string;
  }

  const exec = (person: Person) => {
    return `Hello, ${person.lastName} ${person.firstName}`;
  }

  const user = {
    firstName: 'Jonh',
    lastName: 'Wick'
  }

  console.log(exec(user));
})();