import "reflect-metadata";
import { HelloWorldController } from "../../src/controllers";

describe("Hello World Spec", () => {
  let controller: HelloWorldController;

  beforeEach(() => {
    controller = new HelloWorldController();
  });

  it("should return Hello World", () => {
    const result = controller.index();

    expect(result).toBe("Hello World");
  });
});