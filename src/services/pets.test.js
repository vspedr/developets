import moxios from "moxios";
import fetchPets from "./pets";

describe("Pets Service", () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const petsResponse = [
    {
      id: "aaaaaa-bbbb-ccccc-ddddd-eeeeeeeee",
      name: "KitKat",
      owner: "Hershey",
      type: "cat",
      description: "A pretty kitty",
      img: null
    },
    {
      id: "11111-2222-3333-44444-555555555",
      name: "Reeses",
      owner: "H. B. Reese",
      type: "dog",
      description: "A very good boy",
      img: null
    }
  ];
  const config = {};

  it("fetchPets returns data from the pets endpoint ", async () => {
    const petsUrl = `${process.env.REACT_APP_API_URL}/pets`;
    moxios.stubRequest(petsUrl, {
      status: 200,
      response: petsResponse
    });

    const pets = await fetchPets(config);

    expect(pets.data).toBe(petsResponse);
  });
});
