import { describe, expect, test } from "vitest";
import { add } from "../index";

describe("Basic test", () =>
  test("should be true", () => {
    expect(add(1, 2)).toBe(3);
  }));
