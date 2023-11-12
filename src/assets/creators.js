export const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };
  
  const newPerson = () => {
    const statusChance = Math.random();
    return {
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status:
        statusChance > 0.66
          ? "relationship"
          : statusChance > 0.33
          ? "complicated"
          : "single",
    };
  };
  export function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
      const len = lens[depth];
      return range(len).map((d) => {
        return {
          ...newPerson(),
          id: Math.random() + 1,
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        };
      });
    };
  
    return makeDataLevel();
  }