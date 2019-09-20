(() => {
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  const p1: Point = {
    x: 10,
    y: 20,
  };

  console.log(p1);
  // p1.x = 20; // TS2540 Error
})();