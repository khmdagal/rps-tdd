function rps(left, right) {
  //return left === "rock" ? "left" : "right";
  if (left === right) {
    return "draw";
  }
  if (
    (left === "rock" && right === "scissors") ||
    (left === "scissors" && right === "paper") ||
    (left === "paper" && right === "rock") // the code in the brackets() will be checked as one condition
  ) {
    return "left";
  } else {
    return "right";
  }
}

it("should work", () => {
  const left = 1;
  const right = 2;

  const result = left + right;

  expect(result).toBe(3);
});

it("should work", () => {
  const left = 2;
  const right = 2;

  const result = left + right;

  expect(result).toBe(4);
});

//using describe function, use for group of tests, and referred as "suite"

describe("rock, pager, scissors", () => {
  it("should say left wins for rock vs. scissors", () => {
    const left = "rock";
    const right = "scissors";

    const outcome = rps(left, right);

    expect(outcome).toBe("left");
  });

  it("should say right wins for scissors vs. rock", () => {
    const left = "scissors";
    const right = "rock";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

  //6/10
  it("should say left wins for scissors vs. paper", () => {
    const left = "scissors";
    const right = "paper";

    const result = rps(left, right);
    expect(result).toBe("left");
  });

  // 7/10
  it("should say right wins for paper vs. scissors", () => {
    const left = "paper";
    const right = "scissors";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

  //8/10
  it("should say left wins for paper vs. rock", () => {
    const left = "paper";
    const right = "rock";

    const result = rps(left, right);

    expect(result).toBe("left");
  });
});


//Draw! [9/10]


// This is another test suite?
["rock", "paper", "scissors"].forEach((both) => {
  it(`should say draw for ${both} vs ${both}`, () => {
    expect(rps(both, both)).toBe("draw");
  });
});
/*
We haven't created any new files since the last commit, 
so we can use the -a/--all flag to git commit to include changes to all files, 
instead of needing to git add anything.

*/
