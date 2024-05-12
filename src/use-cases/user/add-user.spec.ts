import { MockProxy, mock } from "jest-mock-extended";
import { AddUserUseCase } from "./add-user";
import { AddUser, AddUserRepository } from "./add-user-protocols";

describe("AddUserUseCase", () => {
  let addUserUseCase: AddUser;
  let addUserRepository: MockProxy<AddUserRepository>;

  const date = new Date();

  beforeEach(() => {
    addUserRepository = mock();

    addUserRepository.add.mockResolvedValue({
      id: "any_id",
      name: "any_name",
      password: "any_password",
      createdAt: date,
      username: "any_username",
    });

    addUserUseCase = new AddUserUseCase(addUserRepository);
  });

  it("should add a user", async () => {
    const user = {
      name: "any_name",
      username: "any_username",
      password: "any_password",
    };

    const result = await addUserUseCase.add(user);

    expect(result).toEqual({
      id: "any_id",
      name: "any_name",
      password: "any_password",
      createdAt: date,
      username: "any_username",
    });
  });
});
